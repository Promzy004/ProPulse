import { all_products } from "../assets/all_product"
import ItemCard from '../card/card';
import './relatedProduct.css';

const RelatedProducts = ({currentID, category}) => {

    const related_product = all_products.filter(p => p.category === category && p.id !== currentID )

    return(
        <>
            {/* <div className="relatedproducts">
                <h1>Related Products</h1>
                <div className="hr"></div>
                <div className="relatedproducts-item">
                    {related_product.map((items,index) => {
                        return <ItemCard key={index} id={items.id} name={items.name} image={items.image} discount={items.discount} old_price={items.old_price} />
                    })}
                </div>
            </div> */}

            <div className="relatedproduct">
                <h1>RELATED PRODUCTS</h1>
                <div className="relatedproduct-items">
                <div className='row'>
                    {related_product.map((items,index) => (
                    <div className='col-6 col-md-4 column'>
                        <ItemCard key={index} id={items.id} name={items.name} image={items.image} discount={items.discount} old_price={items.old_price} />
                    </div>
                
                    ))}
                </div>
                </div>
            </div>
        </>
    )
}

export default RelatedProducts;