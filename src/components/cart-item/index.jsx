import { fruits } from "@/lib/fruits"
import { getTotalPerCartItem } from "@/services/getTotalPerCartItem"

export default function CartItem({ item }) {

    const fruit = fruits.find(fruit => fruit.id == item.id)
    const total = getTotalPerCartItem(item)

    return (
        <div className="flex justify-between items-center font-medium bg-white shadow  p-4 rounded-md">
            <div>
                <h1 className="text-lime-600 leading-5 text-lg tracking-wide">{fruit.name}</h1>
                <h6 className="text-xs text-slate-400">
                    ${fruit.price} x {item.count} kg
                </h6>
            </div>
            <h3 className="text-amber-500 text-lg font-bold">
                ${total}
            </h3>
        </div>
    )
}