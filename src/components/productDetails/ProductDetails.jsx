import { data } from 'autoprefixer';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../../services/products';
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
            {loading && <h1>Loading</h1>}
            {error && <p>{error}</p>}
            {product && (
                <main>
                    <h1>{product.brand} {product.model}</h1>
                    <img src={product.imageUrl}/>
                    <h2>${product.price}</h2>
                    <div>
                        {/* {(product.sizes).map(([key,value])=> {
                            return (
                                {key}
                            )
                        })} */}
                    </div>
                    <button>Add to Cart</button>
                    <button>Love</button>
                </main>
            )}
        </>
    )
}

export default ProductDetails;