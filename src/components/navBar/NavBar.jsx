import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from '../home/Home';
import Products from '../../containers/products/Producst';
import Cart from '../../containers/cart/Cart';
import Favourite from '../favourite/Favourite';
import ProductDetails from '../productDetails/ProductDetails';
import style from './NavBar.module.scss'

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
            <header className={style.NavBar}>
                <div>
                    <Link to='/'><img className={style.NavBar_home} src='../../../logo.png'></img></Link>
                </div>

                <div className={style.NavBar_links}>
                    <Link className={style.NavBar_links_link} to='/products'>Products</Link>
                    <Link className={style.NavBar_links_link} to='/favourite'>Favourites</Link>
                    <Link className={style.NavBar_links_link} to='/cart'>Cart</Link>
                    {/* <Link to='/favourite'><img className='w-6' src={heartIcon} onMouseOver={heartButtonOnMouseOver} onMouseOut={heartButtonOnMouseOut} /></Link>
                    <Link to='/cart'><img className='w-6' src={cartIcon} onMouseOver={cartButtonOnMouseOver} onMouseOut={cartButtonOnMouseOut}/></Link> */}
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