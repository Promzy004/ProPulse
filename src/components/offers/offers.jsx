import './offers.css';
import img1 from '../assets/images/vecteezy_verified-shop-online-store-3d-illustration-for-ecommerce-icon_11997119.png'

function Offers() {
    return(
        <>
            <div className="offers">
                <div className="offers-left">
                    <h1>Exclusive</h1>
                    <h1>Offers For You</h1>
                    <p>ONLY ON BEST SELLERS PRODUCTS</p>
                    <button>Check Now</button>
                </div>
                <div className="offers-right">
                    <img src={img1} alt=""/>
                </div>
            </div>
        </>
    )
}

export default Offers;