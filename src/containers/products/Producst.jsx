import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/products';
import ProductCard from '../../components/productCard/ProductCard';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);

    return (
        <div className='flex 
        max-lg:flex-col 
        justify-center 
         
        max-w-screen-2xl 
        w-full
        gap-2
        p-2
        box-border 
        '>
            <div className='
            
            max-lg:bg-black/90 
            max-lg:text-white 
            max-lg:w-full 
            max-lg:mb-1 
            max-lg:p-2 
            
            lg:bg-white
            lg:outline-neutral-50
            lg:w-1/4 
            xl:w-1/5  
            rounded
            text-center'>FILTER</div>
            <ul className='grid grid-cols-2 xl:grid-cols-4 box-border lg:w-3/4 xl:w-4/5 gap-2'>
            {products.map((productData) => (
                <li className='box-border flex items-end rounded bg-white hover:outline'><ProductCard key={productData.id} productData={productData} /></li>
            ))}
            </ul>
        </div>
    )
}

export default Products;