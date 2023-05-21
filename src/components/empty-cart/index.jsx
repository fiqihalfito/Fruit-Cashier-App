import { Citrus } from "lucide-react";

export default function EmptyCart() {
    return (
        <div className="flex flex-col justify-center items-center gap-y-2 h-60 ">
            {/* <Inbox size={100} color="#d4d4d8" /> */}
            <Citrus size={100} className="stroke-lime-700" />
            <p className="text-lime-700">Let's eat fruit!</p>
        </div>
    )
}