import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/products';
import ProductCard from '../../components/productCard/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);

    return (
        <main className='flex flex-row flex-wrap'>
            {products.map((productData) => (
                <ProductCard key={productData.id} productData={productData}/>
            ))}
        </main>
    )
}

export default Products;