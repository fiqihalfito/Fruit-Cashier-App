"use client"

import Image from "next/image";
import Link from "next/link";
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
                className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:scale-105 transition-all"
                onClick={handleModal}
            >
                <Image
                    src={`/images/fruits/${fruit.img}`}
                    width={300}
                    height={300}
                    alt="fruit"
                    className="rounded-md"
                    priority />
                {/* <p>Name : {fruit.name}</p> */}

            </div>
            {isModalOpen && createPortal(
                <Modal fruit={fruit} handleModal={handleModal} currCount={currCount} />,
                document.body)}
        </>



    )
}