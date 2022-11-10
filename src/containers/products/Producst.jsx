import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/products';
import ProductCard from '../../components/productCard/ProductCard';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);

    return (
        <div className='flex w-full h-full bg-red-500 items-center'>
            <div className='max-sm:hidden sm:w-1/4 text-center '>Filter</div>
            <ul className='flex box-border flex-wrap sm:w-3/4'>
            {products.map((productData) => (
                <li className='p-2 w-1/2 md:p-4 md:w-1/4 bg-black'><ProductCard key={productData.id} productData={productData} /></li>
            ))}
            </ul>
        </div>
    )
}

export default Products;