import { Link } from "react-router-dom"

const FavouriteCard = ({product}) => {
    return (
        <div className="border flex relative h-52 border-box ">
        <div className="bg-white w-1/2 flex items-center justify-center border-box p-3">
            <img src={product.imageUrl} className='w-56 sm:w-60 md:w-64 lg:w-72'/>
        </div>
        <div className='w-1/2 p-2 xl:p-5 flex flex-col justify-center'>
            <p className='font-bold'>{product.brand} </p>
            <p className=''>{product.model.toUpperCase()} </p>
            <p className='text-lg font-semibold'>${product.price}  </p>
        </div>   
        </div>
    )
}

export default FavouriteCard