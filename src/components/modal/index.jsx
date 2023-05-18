import Image from "next/image";
import CloseModal from "../close-modal";
import { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { addToCart } from "@/actions";

export default function Modal({ fruit, handleModal, currCount }) {

    const [count, setCount] = useState(currCount)

    async function handleSubmit() {
        // "use server"
        if (count == 0) {
            return
        }
        await addToCart(fruit.id, count)
        handleModal()
    }

    function increment() {
        setCount(prev => prev + 1)
    }

    function decrement() {
        setCount(prev => {
            if (prev == 0) {
                return prev
            } else {
                return prev - 1
            }
        })
    }

    return (
        <div className="h-screen w-screen bg-black/10 fixed top-0 left-0x flex justify-center items-center">
            <div className="bg-white rounded-md p-4">
                <div className="flex justify-between items-center mb-2">
                    <h1>{fruit.name}</h1>
                    <CloseModal handleModal={handleModal} />
                </div>
                <Image
                    src={`/images/fruits/${fruit.img}`}
                    width={300}
                    height={300}
                    className="mb-2 rounded-md" />

                <form action={handleSubmit}>
                    <div className="flex justify-between items-center mb-2">
                        <div className="space-x-2">
                            <button
                                type="button"
                                className="p-1 rounded-md bg-slate-200 hover:bg-slate-300"
                                onClick={increment}>
                                <Plus />
                            </button>
                            <button
                                type="button"
                                className="p-1 rounded-md bg-slate-200 hover:bg-slate-300"
                                onClick={decrement}>
                                <Minus />
                            </button>
                        </div>

                        <h1>
                            {count}
                        </h1>
                    </div>
                    <button
                        className="flex justify-center w-full rounded-md py-2 bg-lime-300 hover:bg-lime-400">
                        Add to cart
                    </button>
                </form>
            </div>

        </div>
    )
}