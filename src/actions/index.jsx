"use server"

import { kv } from "@vercel/kv"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { v4 as uuidv4 } from "uuid"

export async function addToCart(fruitId, count) {
    const cookieStore = cookies()
    const cartId = cookies().get('cartId')?.value
    const cartItem = { id: fruitId, count: count }

    if (!cartId) {
        // if there's no cart id then make new one then add new fruit into KV
        const newCartId = uuidv4()
        cookieStore.set('cartId', newCartId, { maxAge: process.env.ONE_WEEK })
        await kv.setex(newCartId, process.env.ONE_WEEK, [cartItem])
    } else {

        // if there's cart id in cookies then get data in KV using cart id
        // const cartId = cookieStore.get('cartId')?.value
        // get prev cart
        const prevCart = await kv.get(cartId) ?? []

        // if last cart has item then calculate fruit count only
        if (prevCart.length > 0) {

            const indexSameFruit = prevCart.findIndex(item => item.id == fruitId)

            // if there's similar fruit in cart then calculate the count
            if (indexSameFruit > -1) {

                if (count == 0) {
                    prevCart.splice(indexSameFruit, 1)
                } else {
                    prevCart[indexSameFruit] = { id: fruitId, count: count }
                }

                await kv.setex(cartId, process.env.ONE_WEEK, prevCart)
            } else {

                // if there's no similar fruit
                await kv.setex(cartId, process.env.ONE_WEEK, [...prevCart, cartItem])
            }
        } else {
            // if cart is empty then add a new fruit

            await kv.setex(cartId, process.env.ONE_WEEK, [cartItem])

        }
    }

    revalidatePath('/')
}

export async function emptyCart() {
    const cookieStore = cookies()
    const cartId = cookieStore.get('cartId')?.value

    if (!cartId) {
        return
    }

    await kv.setex(cartId, process.env.ONE_WEEK, [])
    revalidatePath('/')
}

export async function removeCookie(key) {
    const cookieStore = cookies()
    cookieStore.delete('cartId')
}
