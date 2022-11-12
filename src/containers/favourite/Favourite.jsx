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
        <main className='bg-red-100 w-full'>
            <p>Your Favourites</p>
            <ul className=''>
                {favProducts.map((item) => {
                   return <li key={item.id}><FavouriteCard product={item}/></li>
                })}    
            </ul>        
        </main>
    )
}

export default Favourite;