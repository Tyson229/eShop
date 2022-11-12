import { Link } from "react-router-dom"

const CartItem = ({item}) => {
    console.log(item);
    return (
        <div className="flex border bg-slate-100 m-3 p-3 relative h-40">
            <div className="bg-white w-1/4 flex items-end">
                <img className="w-full" src={item.product.imageUrl}></img>
            </div>
            <div className="w-3/4">
                <Link>{item.product.brand} {item.product.model}</Link>
                <p>{item.chosenSize}</p>
                <p>${item.product.price}</p>
                <div>
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                </div>
            </div>
            <button className="absolute top-3 right-5">X</button>
        </div>
    );
};

export default CartItem;