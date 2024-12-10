import './popular.css'
import { popular_product } from "../assets/all_product";
import ItemCard from "../card/card";

function Popular() {
    return(
        <>
          <div className="popular">
            <h1>POPULAR PRODUCTS</h1>
            <div className="popular-items">
              <div className='row'>
                {popular_product.map((items,index) => (
                  <div className='col-4 column'>
                    <ItemCard key={index} id={items.id} name={items.name} image={items.image} discount={items.discount} old_price={items.old_price} />
                  </div>
            
                ))}
              </div>
            </div>
          </div>
        </>
    )
}


export default Popular;