import Image from 'next/image'
import { fruits } from '@/lib/fruits'
import Card from '@/components/card'
import Cart from '@/components/cart'
import { kv } from '@vercel/kv'
import { cookies } from 'next/headers'
import { removeCookie } from '@/actions'



export default async function Home() {

    const cartId = cookies().get('cartId')?.value
    const userCart = cartId ? (await kv.get(cartId) ?? []) : []

    return (
        <div className='px-20 py-20x font-redHatDisplay'>
            {/* container */}
            <div className='flex gap-x-20 relative -top-44'>
                <Cart userCart={userCart} />
                <div className='bg-white/30 backdrop-blur rounded-md p-4 shadow'>
                    <div className='grid grid-cols-3 gap-5'>
                        {fruits.map(fruit => (
                            <Card key={fruit.id} fruit={fruit} userCart={userCart} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
