import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import CartContext from '../../components/cartContext/CartContext';
import CartItem from '../../components/cartItem/CartItem';

const Cart = () => {

    const [cart,setCart] = useContext(CartContext);
    
    const totalPrice = () => {
        return cart.reduce((sum,item) => 
            sum + item.product.price * item.quantity 
        ,0)
    }
    
    const shippingCost =()  => {
        return totalPrice() > 190; 
    }   
    
    const onClickIncreament = () => {
        
    }

    return (
        <main className='max-w-screen-2xl w-full m-auto flex flex-col box-border'>
            {cart.length ? <p className='text-4xl m-3'>Your shopping cart</p> : <></>}
            {!cart.length ? <div className='text-center my-5 text-stone-400 w-full'>Your cart is empty</div> : <></>}
            <div className='flex flex-col box-border md:flex-row md:gap-2'>
                <ul className='w-full lg:w-2/3 flex flex-col'>
                    {cart.map((item,key) => {
                        console.log(item);
                        return <li className='' key={key}><CartItem item={item}/></li>
                    })}

                    {cart.length ? 
                    <div className='lg:hidden mx-3 mb-3 border text-lg bg-neutral-200 p-3'>
                        <p className='font-semibold'> TOTAL </p>
                        <table className='table-auto w-40'>
                            <tr>
                                <td className='font-light'>Total price: </td>
                                <td className=''> ${totalPrice()}</td>
                            </tr>
                            <tr>
                                <td className='font-light'>Shipping:</td>
                                <td className=''>{shippingCost() ? 'FREE' : 10}</td>
                            </tr>
                            <tr>
                                <td className='font-bold text-xl '>Subtotal:</td>
                                <td className='font-bold text-xl'>${shippingCost() ? totalPrice() : totalPrice()+10}</td>
                            </tr>
                        </table>
                    </div> : <></>}

                    {cart.length ? 
                    <button className='lg:hidden bg-black text-white text-2xl mx-3 p-2 active:bg-neutral-800 md:m-3'>CHECKOUT</button>: <></>}
                </ul>
                {cart.length ? <div className='max-lg:hidden w-1/3 m-3 h-fit bg-gray-100 flex flex-col p-2'>
                    <p className='font-semibold'> TOTAL </p>
                    <table className='table-auto w-full'>
                        <tr>
                            <td className='font-light'>Total price: </td>
                            <td className='text-right'> ${totalPrice()}</td>
                        </tr>
                        <tr>
                            <td className='font-light'>Shipping:</td>
                            <td className='text-right'>{shippingCost() ? 'FREE' : 10}</td>
                        </tr>
                        <tr>
                            <td className='font-bold text-xl '>Subtotal:</td>
                            <td className='font-bold text-xl text-right'>${shippingCost() ? totalPrice() : totalPrice()+10}</td>
                        </tr>
                    </table>
                    <button className='bg-black text-white p-2 active:bg-neutral-800 font-bold'>CHECKOUT</button>
                </div> : <></>}
                
            </div>
        </main>
    )
}

export default Cart;