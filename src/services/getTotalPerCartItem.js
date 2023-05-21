import { fruits } from "@/lib/fruits"

export function getTotalPerCartItem(item) {
    const fruit = fruits.find(fruit => fruit.id == item.id)
    const total = item.count * fruit.price
    return total
}