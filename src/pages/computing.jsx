import Banner from "../components/banner/banner";
import ItemCard from "../components/card/card";
import img from '../components/assets/images/vecteezy_desktop-computer-setup-with-monitor-keyboard-and-mouse_51338549.png';
import { all_products } from "../components/assets/all_product";
import Footer from "../components/footer/footer";

function Computing() {
    return(
        <>
            <div>
                <div className="category-banner">
                    <Banner banner_image={img} />
                </div>

                <div className="index-sort">
                    <p>
                        <span>Showing 1-12</span> out of 84 products
                    </p>
                    
                </div> 
                    <div className="products">
                        {all_products.filter(items => items.category === 'Computing').map((items,index) => {
                            return <ItemCard key={index} id={items.id} name={items.name} image={items.image} discount={items.discount} old_price={items.old_price} /> 
                        })}
                    </div>
            </div>
            <Footer/>
        </>
    )
}

export default Computing;