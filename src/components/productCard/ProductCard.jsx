import { NavLink } from 'react-router-dom';


const ProductCard = ({productData}) => {
    return (
        <NavLink to={`product/${productData.id}`}><div className='border p-5'>
            <div className='h-full w-full xl:h-72 xl:w-72 bg-slate-100'>
                <img className='' src={productData.imageUrl}/>
            </div>
            <h2>{productData.brand} {productData.model}</h2>
            <p>${productData.price}</p>
        </div> </NavLink>
    );
};

export default ProductCard;