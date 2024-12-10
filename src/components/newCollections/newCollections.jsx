import './newCollections.css'
import { new_collection } from '../assets/all_product'
import ItemCard from '../card/card';

function NewCollections() {
    return(
        <>
            <div className="new-collections">
                <h1>NEW COLLECTIONS</h1>
                <div className="collections">
                    <div className='row'>
                        {new_collection.map((items,index) => (
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


export default NewCollections;