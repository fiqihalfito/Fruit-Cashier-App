import { fruits } from "@/lib/fruits"

export function getTotalCart(userCart) {
    const total = userCart.map(item => {
        const targetFruit = fruits.find(fruit => fruit.id == item.id)
        const totalperfruit = item.count * targetFruit.price
        return totalperfruit
    }).reduce((prev, totalperfruit) => {
        return prev + totalperfruit
    }, 0)

    return total
}