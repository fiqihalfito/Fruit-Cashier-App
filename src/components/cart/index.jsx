import { ShoppingBag, Trash } from "lucide-react";
import CartItem from "../cart-item";
import { emptyCart } from "@/actions";
import EmptyCart from "../empty-cart";
import Divider from "../divider";
import { fruits } from "@/lib/fruits";
import { getTotalCart } from "@/services/getTotalCart";




export default async function Cart({ userCart }) {

    const total = getTotalCart(userCart)

    return (
        <div className="rounded-lg h-min w-96 p-8 bg-white/50 shadow sticky top-8 backdrop-blur-sm ">
            {/* cart title */}
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl text-lime-700 flex items-center gap-x-1 ">
                    <ShoppingBag /> Cart
                </h1>

                {userCart.length > 0
                    &&
                    <form action={emptyCart}>
                        <button
                            type="submit"
                            className="p-2 bg-slate-100 rounded-md hover:scale-110 hover:outline outline-2 outline-red-800">
                            <Trash size={16} className="stroke-red-800" />
                        </button>
                    </form>
                }
            </div>

            <Divider />


            {userCart.length > 0
                ?
                <>
                    <div className="flex flex-col gap-y-2">
                        {userCart?.map((item, i) => (
                            <CartItem key={i} item={item} />
                        ))}
                    </div>

                    <Divider />

                    <div className="flex justify-between items-center font-medium bg-white shadow  p-4 rounded-md">
                        <h1 className="text-lime-600 leading-5 text-lg tracking-wide">Total</h1>

                        <h3 className="text-amber-500 text-3xl font-black">
                            ${total}
                        </h3>
                    </div>

                </>

                :
                <EmptyCart />
            }
        </div>
    )
}