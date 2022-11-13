import React, { Fragment, useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {addToCart} from '../../logic/addToCart';
import { getProductByID, toggleFav } from '../../services/products';
import CartContext from '../cartContext/CartContext';
import ItemCountContext from '../itemCountContext/ItemCountContext';
import { getTotalItem } from '../../logic/getTotalItem';

const ProductDetails = () => {
    const {id} = useParams();
    
    const [error, setError] = useState('');
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    //const [error, setError] = useState('');
    const [isFav, setIsFav] = useState(false);

    const[size, setSize] = useState(null);
    const [cart,setCart] = useContext(CartContext); 
    const [itemTotal, setItemTotal] = useContext(ItemCountContext);
    const onChangeSize = (e) => {
        setSize(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //set context for cart or state
        //<addToCart product={product} size={size}/>; 
        setCart(addToCart([cart,setCart],product,size));
        setItemTotal(getTotalItem(cart));
    };

    const onClickFav = () => {
        toggleFav(id);
        setIsFav(!isFav);
    }

    useEffect(() => {
        getProductByID(id)
        .then((data) => {
            setProduct(data)
            setIsFav(data.isFav)}
        )
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, []);
    return (
        <>
            {loading && <p className='w-screen h-screen text-center my-auto'>LOADING...</p>}
            {error && <p>{error}</p>}
            <span className='bg-black text-white w-full text-center py-3 font-bold'>Free Shipping for order above $190</span>
            {product && (
                <main className='flex flex-col w-full items-center max-w-screen-xl shadow-md m-4
                '>
                    <div className='flex flex-col
                    lg:flex-row
                    w-full
                    bg-white
                    lg:items-center
                    '>
                        <div className='m-2 p-2 box-border border grid grid-rows-3 rounded bg-white  lg:w-2/3'>
                            <span className=''></span>
                            <img className='row-span-2 w-full' src={product.imageUrl}/>
                        </div>
                        <div className='px-2 my-2 lg:w-1/3 ' >
                            <p className='font-bold text-xl w-full px-2'>{product.brand} {product.model}</p>
                            <p className='text-xl p-2'>${product.price}</p>
                            <form onSubmit={onSubmit} className='flex flex-col'>
                                <ul className='flex flex-wrap box-border py-2'>
                                    {Object.entries(product.sizes).map(([key,value])=> {
                                        const id = `product-variant-${key}`;
                                        return (
                                            <li className='w-1/4 sm:w-1/6 p-1 ' key={key}>
                                                <input name={product.id} id={id} type="radio" value={key} onChange={onChangeSize}  
                                                        className='peer hidden'></input>
                                                <label htmlFor={id} className='border border-black block text-center h-10 py-2 bg-white peer-checked:bg-black peer-checked:text-neutral-100 peer-checked:font-bold'>{key}</label>
                                            </li>
                                        )
                                    })}
                                    
                                </ul>
                                
                                <div className='my-2 flex'>
                                <button disabled={!size} type='submit' className='w-10/12 font-bold bg-black active:bg-black/80 text-white disabled:bg-gray-300
                                py-2'>ADD TO CART</button>
                                <button type="button"  className='w-2/12 flex justify-center' onClick={onClickFav}><img className='w-10 ' src={isFav ? 'https://cdn-icons-png.flaticon.com/512/2077/2077502.png' : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"}/></button>
                                </div>
                                
                            </form> 
                        </div>
                    </div>
                    <div className='p-2 mx-2 mb-2 rounded'>
                        <div className=' text-justify mb-5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore similique, labore a molestias asperiores architecto mollitia suscipit quae temporibus dicta! Doloribus minima odit adipisci vitae pariatur rem est id fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perferendis asperiores vero possimus aut obcaecati totam quasi impedit doloribus similique nulla dignissimos ipsa itaque quaerat assumenda vitae vel in aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla at optio sit, odio maiores culpa, ipsam et explicabo reprehenderit ex repellat tempore illum voluptates dignissimos expedita eveniet aut voluptate.</div>
                        <ul className=''>
                            <li>- Free Shipping for order over $190</li>
                            <li>- Free returns </li>
                            <li>- Contact us for more assistance</li>
                        </ul>
                    </div>
                </main>
            )}
        </>
    )
}

export default ProductDetails;