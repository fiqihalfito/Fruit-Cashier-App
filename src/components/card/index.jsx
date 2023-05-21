"use client"

import Image from "next/image";
import { useState } from "react";
import Modal from "../modal";
import { createPortal } from "react-dom";

export default function Card({ fruit, userCart }) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    function handleModal() {
        setIsModalOpen(status => !status)
    }

    const currCount = userCart.find(item => item.id == fruit.id)?.count ?? 0

    return (
        <>

            <div
                className="p-4 bg-white font-redHatDisplayx rounded-lg shadow-md cursor-pointer hover:scale-105 transition-all"
                onClick={handleModal}
            >
                <Image
                    src={`/images/fruits/${fruit.img}`}
                    width={300}
                    height={300}
                    alt="fruit"
                    className="rounded-md mb-3"
                    priority />

                <div className="flex justify-between items-center font-medium">
                    <div>
                        <h1 className="text-lime-600 leading-5 text-lg tracking-wide">{fruit.name}</h1>
                        <h6 className="text-xs text-slate-400">per kilo</h6>
                    </div>
                    <h3 className="text-amber-400 text-xl">
                        ${fruit.price}
                    </h3>
                </div>

            </div>
            {isModalOpen && createPortal(
                <Modal fruit={fruit} handleModal={handleModal} currCount={currCount} />,
                document.body)}
        </>



    )
}