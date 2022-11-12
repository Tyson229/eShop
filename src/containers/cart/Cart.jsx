import React from 'react';
import { useContext } from 'react';
import CartContext from '../../components/cartContext/CartContext';
import CartItem from '../../components/cartItem/CartItem';

const Cart = () => {

    const [cart,setCart] = useContext(CartContext);
    
    return (
        <main className='w-full max-w-screen-xl m-auto flex flex-col box-border'>
            <p className='text-4xl m-3'>Your shopping cart</p>
            <div className='flex flex-col box-border md:flex-row '>
                <ul className='w-full'>
                    {cart.map((item,key) => {
                        console.log(item);
                        return <li className='' key={key}><CartItem item={item}/></li>
                    })}
                </ul>
                <button className='bg-black text-white text-2xl mx-3 p-2 active:bg-neutral-800 md:m-3'>CHECKOUT</button>
            </div>
        </main>
    )
}

export default Cart;