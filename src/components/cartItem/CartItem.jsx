import { useEffect } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { removeFromCart } from "../../logic/removeFromCart";
import CartContext from "../cartContext/CartContext";
import ItemCountContext from "../itemCountContext/ItemCountContext";
import { editQuantity } from "../../logic/editQuantity";
const CartItem = ({item}) => {
    const [cart,setCart] = useContext(CartContext)
    const [itemTotal, setItemTotal] = useContext(ItemCountContext);
    //const [i, setI] = useState(item)
    const onClickRemove = () => {
        removeFromCart(item,cart,setCart, setItemTotal);
    }

    const onClickIncrement = () => {
        editQuantity([cart,setCart],item,1, setItemTotal)
    }
    
    const onClickDecrement = () => {
        editQuantity([cart,setCart],item,2, setItemTotal)
    }

    const checkIfStillAvailable = () => {
        
        return item.quantity
    }

    return (
        <div className="flex border mx-3 mb-3 p-3 relative h-52 border-box rounded-md">
            <div className="bg-white w-1/2 flex items-end justify-center border-box lg:p-3">
                <img className="w-56 sm:w-60 md:w-64 lg:w-72" src={item.product.imageUrl}></img>
            </div>
            <div className="w-1/2 p-2">
                <Link className="font-bold text-xl" to={`/products/${item.product.id}`}>{item.product.brand} {item.product.model}</Link>
                <p className="font-semibold my-1">Size: {item.chosenSize}</p>
                <p className="font-light my-1">${item.product.price}</p>
                <div className="flex">
                    {/* Minus button */}
                    <button className="" onClick={onClickDecrement} title='Decrease Quantity'><img className="w-3 opacity-30 hover:opacity-100" src="https://cdn-icons-png.flaticon.com/512/56/56889.png"/></button>
                    
                    {/* Current quantity of item */}
                    <span className="mx-3 font-bold text-center">{item.quantity}</span>

                    {/* plus button */}
                    <button className="" onClick={onClickIncrement} ><img className="w-3 opacity-30 hover:opacity-100 " src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" title='Increase Quantity'/></button>
                </div>
            </div>
            {/* Remove button */}
            <button className="absolute top-3 right-5" onClick={onClickRemove} title='Remove'><img className="w-4 opacity-30 hover:opacity-100" src='https://cdn-icons-png.flaticon.com/512/2976/2976286.png'/></button>
        </div>
    );
};

export default CartItem;