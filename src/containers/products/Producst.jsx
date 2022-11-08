import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/products';
import ProductCard from '../../components/productCard/ProductCard';
import style from './Products.module.scss'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);

    return (
        <main className={style.Products}>
            {products.map((productData) => (
                <ProductCard key={productData.id} productData={productData}/>
            ))}
        </main>
    )
}

export default Products;