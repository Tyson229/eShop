import { getTotalItem } from "./getTotalItem";
import { removeFromCart } from "./removeFromCart";

export const editQuantity = ([cart,setCart],item,type,setItemTotal) => {
    
    const indexOfItem = cart.findIndex((ele) => JSON.stringify(ele) === JSON.stringify(item))
    switch(type){
        case 1:{ item.quantity+=1; break;}
        case 2:{ 
            item.quantity-=1; 
            if(item.quantity==0)
                removeFromCart(item,cart,setCart,setItemTotal)
            break;}
    }
    cart[indexOfItem] = item;
    setItemTotal(getTotalItem(cart))
    console.log(cart[indexOfItem])
}