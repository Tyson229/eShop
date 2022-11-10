import { Link } from 'react-router-dom';


const ProductCard = ({productData}) => {
    return (
        <Link to={`products/${productData.id}`} className=''>
                <div className=''>
                    <img className='' src={productData.imageUrl}/>
                </div>
                <div className='w-full'>
                    <p className=''>{productData.brand.toUpperCase()} </p>
                    <p className=''>{productData.model} </p>
                    <p className=''>${productData.price}  </p>
                </div>
        </Link>
    );
};

export default ProductCard;