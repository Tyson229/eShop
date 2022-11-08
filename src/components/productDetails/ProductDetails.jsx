import { data } from 'autoprefixer';
import React, { Fragment, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../../services/products';
import style from './ProductDetails.module.scss';
const ProductDetails = () => {
    const {id} = useParams();
    
    const [error, setError] = useState('');
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    //const [error, setError] = useState('');

    useEffect(() => {
        getProductByID(id)
        .then((data) => setProduct(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, []);
    return (
        <>
            {loading && <h1 className={style.Loading}>Loading</h1>}
            {error && <p>{error}</p>}
            {product && (
                <main className={style.ProductDetails}>
                    
                    <img className={style.ProductDetails_image} src={product.imageUrl}/>
                    <div className={style.ProductDetails_container} >
                        
                        <p className={style.container_brand}>{product.brand.toUpperCase()}</p>
                        <p className={style.container_model}>{product.model}</p>
                        <h2 className={style.container_price}>${product.price}</h2>
                        <div className={style.container_size}>
                            {Object.entries(product.sizes).map(([key,value])=> {
                                return (
                                    <button className={style.container_size_box} key={key}>{key}</button>
                                )
                            })}
                            
                        </div>
                        <button className={style.container_atc}>Add to Cart</button>
                        <button className={style.love}><img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"/></button>
                    </div>
                    
                </main>
            )}
        </>
    )
}

export default ProductDetails;