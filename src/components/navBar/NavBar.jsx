import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from '../home/Home';
import Products from '../../containers/products/Producst';
import Cart from '../../containers/cart/Cart';
import Favourite from '../favourite/Favourite';
import ProductDetails from '../productDetails/ProductDetails';


const NavBar = () => {

    const heartIcon = 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png';
    const filledHeartIcon = 'https://cdn-icons-png.flaticon.com/512/1077/1077086.png';
    const cartIcon = 'https://cdn-icons-png.flaticon.com/512/1170/1170678.png';
    const filledCartIcon = 'https://cdn-icons-png.flaticon.com/512/1170/1170627.png';

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
        <BrowserRouter>
            <header className='flex box-border justify-between items-center p-5'>
                <div>
                    <Link to='/'><img className='w-28 md:w-40' src='../../../logo.png'></img></Link>
                </div>

                <div className='flex box-border gap-7 md:gap-4'>
                    <Link className='text-sm md:text-base font-bold hover:text-sky-500' to='/products'>Products</Link>
                    <Link className='text-sm md:text-base font-bold hover:text-sky-500' to='/favourite'>Favourites</Link>
                    <Link className='text-sm md:text-base font-bold hover:text-sky-500' to='/cart'>Cart</Link>
                </div>
            </header>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/favourite' element={<Favourite/>}></Route>
                <Route path='/products/:id' element={<ProductDetails/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default NavBar;