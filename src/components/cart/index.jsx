import { Inbox, Trash } from "lucide-react";
import CartItem from "../cart-item";
import { emptyCart } from "@/actions";




export default async function Cart({ userCart }) {



    return (
        <div className="flex flex-col rounded-lg h-min  w-96 p-8 bg-white/50 shadow sticky top-8 backdrop-blur-sm ">
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-bold text-xl text-lime-700">Cart</h1>
                <form action={emptyCart}>
                    <button
                        type="submit"
                        className="p-2 bg-slate-100 hover:bg-slate-200 rounded-md hover:scale-105 transition-all">
                        <Trash size={16} />
                    </button>
                </form>

            </div>

            {userCart.length > 0
                ?
                <div className="flex flex-col gap-y-2">
                    {userCart?.map((item, i) => (
                        <CartItem key={i} item={item} />
                    ))}
                </div>
                :
                <div className="flex-grow flex flex-col justify-center items-center h-60">
                    {/* <Inbox size={100} color="#d4d4d8" /> */}
                    <Inbox size={100} className="stroke-lime-700" />
                    <p className="text-lime-700">Let's eat fruit!</p>
                </div>
            }



        </div>
    )
}