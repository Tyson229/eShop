import React from 'react';
import Products from '../../containers/products/Producst';
import Carousel from './carousel/Carousel';

const Home = () => {
    return (
        <main>
            {/* <Carousel/> */}
            <h1>Featured Products</h1>
            <Products/>
        </main>
    )
}
 export default Home;