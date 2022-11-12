import { Link } from "react-router-dom"

const FavouriteCard = ({product}) => {
    return (
        <>
        <img src={product.imageUrl} className='mb-2 p-2 xl:p-5'/>

<div className='w-full p-2 xl:px-5'>
    <p className='font-bold'>{product.brand} </p>
    <p className=''>{product.model.toUpperCase()} </p>
    <p className='text-lg font-semibold'>${product.price}  </p>
</div>   
        </>
    )
}

export default FavouriteCard