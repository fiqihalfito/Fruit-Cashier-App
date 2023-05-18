import Image from 'next/image'
import { fruits } from '@/lib/fruits'
import Card from '@/components/card'
import Cart from '@/components/cart'
import { kv } from '@vercel/kv'
import { cookies } from 'next/headers'



export default async function Home() {

    const cartId = cookies().get('cartId')?.value
    const userCart = cartId ? await kv.get(cartId) : []

    return (
        <div>
            {/* container */}
            <div className='px-20 pb-20'>
                <div className='flex gap-x-20'>
                    <Cart userCart={userCart} />
                    <div className='bg-white/50 rounded-md p-4 shadow'>
                        <div className='grid grid-cols-3 gap-5'>
                            {fruits.map(fruit => (
                                <Card key={fruit.id} fruit={fruit} userCart={userCart} />
                            ))}
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
