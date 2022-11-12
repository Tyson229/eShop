import React from 'react';
import Products from '../products/Producst';
import Carousel from './carousel/Carousel';

const Home = () => {
    return (
        <main className='flex flex-col items-center'>
            <Carousel/>
            
            <Products/>
        </main>
    )
}
 export default Home;