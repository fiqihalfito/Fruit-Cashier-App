
import { X } from "lucide-react"

export default function CloseModal({ handleModal }) {
    return (
        <button
            className="cursor-pointer hover:bg-slate-200 rounded-md p-1 "
            onClick={handleModal}>
            <X />
        </button>
    )
}