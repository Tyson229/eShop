import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/products';
import ProductCard from '../../components/productCard/ProductCard';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);

    return (
        <div className='flex w-full h-full justify-center  p-3'>
            <div className='max-lg:hidden lg:w-1/3 xl:w-1/4  text-center'>FILTER</div>
            <ul className='grid grid-cols-2 xl:grid-cols-4 box-border lg:w-2/3 xl:w-3/4 gap-2'>
            {products.map((productData) => (
                <li className='border box-border flex items-end rounded bg-white hover:outline'><ProductCard key={productData.id} productData={productData} /></li>
            ))}
            </ul>
        </div>
    )
}

export default Products;