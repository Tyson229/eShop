import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from '../home/Home';
import Products from '../../containers/products/Producst';
import Cart from '../../containers/cart/Cart';
import Favourite from '../favourite/Favourite';

const NavBar = () => {
    return (
        <BrowserRouter>
            <header>
                <div className=''>
                    <Link to='/'>Home</Link>
                </div>

                <div>
                    <Link to='/products'>Products</Link>
                    <Link to='/favourite'>Favourites</Link>
                    <Link to='/cart'>Cart</Link>
                </div>

            </header>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/favourite' element={<Favourite/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default NavBar;