import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from '../../containers/home/Home'
import Cart from '../../containers/cart/Cart';
import Favourite from '../../containers/favourite/Favourite';
import ProductDetails from '../productDetails/ProductDetails';
import { useContext } from 'react';
import CartContext from '../cartContext/CartContext';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemCountContext from '../itemCountContext/ItemCountContext';
import Products from '../../containers/products/Producst';


const NavBar = () => {

    const heartIcon = 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png';
    const filledHeartIcon = 'https://cdn-icons-png.flaticon.com/512/1077/1077086.png';
    const cartIcon = 'https://cdn-icons-png.flaticon.com/512/1170/1170678.png';
    const filledCartIcon = 'https://cdn-icons-png.flaticon.com/512/1170/1170627.png';

    const [cart,setCart] = useContext(CartContext)
    const [itemTotal, setItemTotal] = useState(cart.length);

    // This is used to handle change icon when it is hovered
    const heartButtonOnMouseOver = (e) => {
        e.currentTarget.src=filledHeartIcon;
    } 
    const heartButtonOnMouseOut = (e) => {
        e.currentTarget.src=heartIcon;
    }
    const cartButtonOnMouseOver = (e) => {
        e.currentTarget.src = filledCartIcon;
    }
    const cartButtonOnMouseOut = (e) => {
        e.currentTarget.src = cartIcon;
    }
    
     
    return (
        <ItemCountContext.Provider value= {[itemTotal,setItemTotal]}>
        <BrowserRouter>
            <header className='flex box-border justify-between items-center p-5 bg-white w-full border-b'>
                <div>
                    <Link to='/'><img className='w-28 md:w-40' src='../../../logo.png'></img></Link>
                </div>

                <div className='flex box-border gap-4 items-center'>
                    <Link to='/products' className="group text-black">
                        Products
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                    </Link>
                    
                    <Link className='' to='/favourite'><img className='w-5 md:w-7' src={heartIcon} onMouseOver={heartButtonOnMouseOver} onMouseOut={heartButtonOnMouseOut}/></Link>
                    <Link  to='/cart' className='relative inline-flex'>
                        <button className='inline-flex'>
                            <img className='w-5 md:w-7' src={cartIcon} onMouseOver={cartButtonOnMouseOver} onMouseOut={cartButtonOnMouseOut}/>
                        </button>
                        {itemTotal > 0 && <div className='absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 text-center -mt-1 -mr-2 text-xs'>{itemTotal}</div>}  
                    </Link>
                </div>
            </header>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/favourite' element={<Favourite/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/products/:id' element={<ProductDetails/>}></Route>
            </Routes>
        </BrowserRouter>
        </ItemCountContext.Provider>
    )
}

export default NavBar;