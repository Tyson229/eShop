import React, { useState } from 'react';
import { useEffect } from 'react';
import { getFavProducts } from '../../services/products';
import FavouriteCard from '../../components/favouriteCard/FavouriteCard';
const Favourite = () => {
    const [favProducts, setFavProducts] = useState([]);

    useEffect(() => {
        getFavProducts().then((products) => setFavProducts(products));
    }, []);

    return (
        <main className='max-w-screen-2xl w-full m-auto flex flex-col border-box'>
            {!favProducts.length && <p className='text-center my-5 text-stone-400 w-full'>Add something!</p>}
            {favProducts.length > 0 && <p className='text-4xl m-3 '>Your Favourites</p>}
            <ul className='flex flex-wrap mx-3'>
                {favProducts.map((item) => {
                   return <li className='w-full md:w-1/4' key={item.id}><FavouriteCard product={item}/></li>
                })}    
            </ul>        
        </main>
    )
}

export default Favourite;