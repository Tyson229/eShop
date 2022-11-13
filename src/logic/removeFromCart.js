import { getTotalItem } from "./getTotalItem"

export const removeFromCart = (item, cart, setCart, setItemTotal) => {    
    
    setItemTotal(getTotalItem(cart)-item.quantity)
    setCart(cart.filter((e) => {
        return e.product.id != item.product.id || 
            e.chosenSize != item.chosenSize
    }))

}