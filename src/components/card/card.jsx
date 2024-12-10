import './card.css';
import { useNavigate } from 'react-router-dom';

function ItemCard(props) {

    const new_price = props.old_price - (props.old_price * (props.discount/100));
    const navigate = useNavigate()

    const handleDisplayItem = () => {

        navigate(`/product-details/${props.id}`)

        // const product = props
        // if (product?.id) {
        //     navigate(`/product-details/${product.id}`);
        // } else {
        //     console.error("Product ID is undefined");
        // }
    }

    return(
        <>
            <div className="item" onClick={handleDisplayItem} >
                <div className='img'>
                    <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
                </div>
                <div className='detail'>
                    <p>{props.name}</p>
                    <div className="item-price">
                        <div className="new-price">
                        {`\u20A6`} {(new_price).toLocaleString()}
                        </div>
                        <div className="old-price">
                        {`\u20A6`} {(props.old_price).toLocaleString()}
                        </div>
                    </div>
                </div>
            </div>
            {console.log(window.innerWidth)}
        </>
    )
}


export default ItemCard;