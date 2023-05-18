import { fruits } from "@/lib/fruits"

export default function CartItem({ item }) {

    const fruit = fruits.find(fruit => fruit.id == item.id)
    const total = item.count * fruit.price

    return (
        <div className="flex justify-between items-center border rounded p-2">
            <div className="flex-1 ">
                <h1 className="text-sm text-slate-600 mb-1">{fruit.name} </h1>
                <h3 className="text-xs text-slate-400">${fruit.price} x{item.count}</h3>
            </div>
            {/* <h1 className=" flex-1 text-center text-sm text-slate-500">x{item.count}</h1> */}
            <h3 className="flex-1 text-end text-slate-500 ">${total}</h3>
        </div>
    )
}