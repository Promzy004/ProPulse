import { all_products } from '../assets/all_product';
import './productDisplay.css';
import { useParams } from 'react-router-dom';
import Rating from '../ratings/ratings';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';


function ProductDisplay () {

    const { id } = useParams()
    const product = all_products.find((p) => String(p.id) === id);

    const { addToCart } = useContext(CartContext)

    
    if(!product){
        return <p>Product not found</p>
        }
        
        
    const new_price = product.old_price - (product.old_price * (product.discount/100));
    
    return(
        <>
            <div className="productdisplay">
                <div className="productdisplay-left">
                    <div className="productdisplay-img-list">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product-display-img">
                        <img className="productdisplay-main" src={product.image} alt="" />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="product-display-right-star">
                        <Rating rating_value={product.rating}/>
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">{`\u20A6`} {(product.old_price).toLocaleString()}</div>
                        <div className="productdisplay-right-price-new">{`\u20A6`} {(new_price).toLocaleString()}</div>
                    </div>
                    {/* <div className="productdisplay-right-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem quibusdam illo omnis pariatur optio consequuntur dignissimos expedita possimus quia.
                    </div> */}
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L </div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={() => addToCart(product)}>ADD TO CART</button>
                    <p className="productdisplay-right-category"><span>Category:</span> {product.category}</p>
                </div>
            </div>
        </>
    )
}

export default ProductDisplay;