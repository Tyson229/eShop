import { data } from 'autoprefixer';
import React, { Fragment, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID, addToFav } from '../../services/products';
const ProductDetails = () => {
    const {id} = useParams();
    
    const [error, setError] = useState('');
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    //const [error, setError] = useState('');

    const[size, setSize] = useState(null);
     
    const onChangeSize = (e) => {
        setSize(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //set context for cart or state
        console.log(size);
    };

    const onClickFav = () => {
        addToFav(id);
    }

    useEffect(() => {
        getProductByID(id)
        .then((data) => setProduct(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, []);
    return (
        <>
            {loading && <h1 className=''>Loading</h1>}
            {error && <p>{error}</p>}
            {product && (
                <main className=''>
                    
                    <img className='' src={product.imageUrl}/>
                    <div className='' >
                        
                        <p className=''>{product.brand.toUpperCase()}</p>
                        <p className=''>{product.model}</p>
                        <h2 className=''>${product.price}</h2>
                        <form onSubmit={onSubmit}>
                            <ul className=''>
                                {Object.entries(product.sizes).map(([key,value])=> {
                                    const id = `product-variant-${key}`;
                                    return (
                                        <li className='' key={key}>
                                            <input name={product.id} id={id} type="radio" value={key} onChange={onChangeSize}  className=''></input>
                                            <label htmlFor={id} className=''>{key}</label>
                                        </li>
                                    )
                                })}
                                
                            </ul>
                            <button disabled={!size} type='submit' className=''>Add to Cart</button>
                            <button  className='' onClick={onClickFav}><img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"/></button>
                        </form>
                        
                    </div>
                    
                </main>
            )}
        </>
    )
}

export default ProductDetails;