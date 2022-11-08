import { Link } from 'react-router-dom';
import style from './ProductCard.module.scss'

const ProductCard = ({productData}) => {
    return (
        <Link to={`products/${productData.id}`} className={style.Link}>
            <div className={style.ProductCard}>
                <div className={style.ProductCard_thumbnail}>
                    <img className='' src={productData.imageUrl}/>
                </div>
                <div className={style.ProductCard_info}>
                    <p className={[style.ProductCard_info_brand ]}>{productData.brand.toUpperCase()} </p>
                    <p className={style.ProductCard_info_model}>{productData.model} </p>
                    <p className={style.ProductCard_info_price}>${productData.price}  </p>
                </div>
                
            </div> 
        </Link>
    );
};

export default ProductCard;