import { NavLink } from 'react-router-dom';


const ProductCard = ({productData}) => {
    return (
        <div className='bg-slate-100 w-1/4 sm:w-1/2'>
            <img className='w-2/4' src={productData.imageUrl}/>
            <h2>{productData.brand} {productData.model}</h2>
            <p>${productData.price}</p>

            <NavLink to={`product/${productData.id}`}>Details</NavLink>
        </div>
    );
};

export default ProductCard;