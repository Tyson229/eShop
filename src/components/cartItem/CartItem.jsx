import { Link } from "react-router-dom"

const CartItem = ({item}) => {
    console.log(item);
    return (
        <div className="flex border mx-3 mb-3 p-3 relative h-52 border-box rounded-md">
            <div className="bg-white w-1/2 flex items-end justify-center border-box lg:p-3">
                <img className="w-56 sm:w-60 md:w-64 lg:w-72" src={item.product.imageUrl}></img>
            </div>
            <div className="w-1/2 p-2">
                <Link className="font-bold text-xl" to={`/products/${item.product.id}`}>{item.product.brand} {item.product.model}</Link>
                <p className="font-semibold my-1">Size: {item.chosenSize}</p>
                <p className="font-light my-1">${item.product.price}</p>
                <div className="flex">
                    <button className=""><img className="w-3" src="https://cdn-icons-png.flaticon.com/512/56/56889.png"/></button>
                    <span className="mx-3 font-bold text-center">{item.quantity}</span>
                    <button className=""><img className="w-3" src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png"/></button>
                </div>
            </div>
            <button className="absolute top-3 right-5">X</button>
        </div>
    );
};

export default CartItem;