import { Link } from 'react-router-dom';


const ProductCard = ({productData}) => {
    return (
        <Link to={`products/${productData.id}`}>
                <img src={productData.imageUrl} className='mb-2 p-2 xl:p-5'/>

                <div className='w-full p-2 xl:px-5'>
                    <p className='font-bold'>{productData.brand} </p>
                    <p className=''>{productData.model.toUpperCase()} </p>
                    <p className='text-lg font-semibold'>${productData.price}  </p>
                </div>
        </Link>
    );
};

export default ProductCard;