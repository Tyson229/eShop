import React from 'react';
import Products from '../products/Producst';
import Carousel from './carousel/Carousel';
import Slide from './slide/Slide';

const Home = () => {
    return (
        <main className='flex flex-col items-center'>
            <Carousel/>
            <Slide/>
            <p className='text-3xl m-5 p-4'>All Product</p>
            <Products/>
        </main>
    )
}
 export default Home;