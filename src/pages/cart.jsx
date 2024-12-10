
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import './css/cart.css'
import { TrashFill } from 'react-bootstrap-icons';

const Cart = () => {
    const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } = useContext(CartContext);

    // if (cartItems.length === 0) {
    //     return <p>Your cart is empty.</p>;
    // }

    // const formatAmount = (amount) => {
    //     return amount.toLocaleString();
    // }

    

    const totalPrice = cartItems.reduce((total, item) => {
        const quantity = Number(item.quantity);
        const new_price = item.old_price - (item.old_price * (item.discount/100))
        return total + new_price * quantity;
    }, 0);

    const totalQuantity = cartItems.reduce((total, item) => {
        const quantity = Number(item.quantity);
        return total + quantity
    },0)

    if (totalQuantity === 0) {
        return <div className='empty'>Cart is empty!!!</div>
    }

    return (
        <div className='cartitem'>
            <div className='cartitem-container-main'>
                <h2>Cart {(totalQuantity)}</h2>
                <hr />
                {cartItems.map((items,index) => { 
                    if (totalQuantity === 0) {
                        return(
                            <div>Cart is empty</div>
                        )
                    } else {
                        return(
                                <div key={index} className='cartitem-container' >
                                    <div className='cartitem-image-row'>
                                        <img src={items.image} alt=""  />
                                        <p>{items.name}</p>
                                        <span className='price-tag'>
                                            <div className='cartitem-new-price' >{`\u20A6`} {((items.old_price - (items.old_price * (items.discount/100))) * items.quantity).toLocaleString()}</div>
                                            <div className='old-price-container'>
                                                <div className='cartitem-old-price' > {`\u20A6`} {(items.old_price * items.quantity).toLocaleString() }</div>
                                                <div className='cartitem-discount'>{`-${items.discount}%`}</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className='button-row'>
                                        <button onClick={() => removeFromCart(items.id)}>
                                            <TrashFill style={{marginRight: 5}} ></TrashFill>
                                            Remove
                                        </button>
                                        <div className='crement-btn-container'>
                                            <button onClick={() => decrementQuantity(items.id)}>-</button>
                                            <span>{items.quantity}</span>
                                            <button onClick={() => incrementQuantity(items.id)}>+</button>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                        )

                    }
                })}

            </div>

            <div className='summary-container'>
                <div className='cart-summary'>CART SUMMARY</div>
                <hr />
                <div className='subtotal-container'>
                    <div className='subtotal'>Subtotal</div>
                    <div className='amount'>{`\u20A6`} {(totalPrice).toLocaleString()}</div>
                </div>
                <hr />
                <button>CHECKOUT ({`\u20A6`} {(totalPrice).toLocaleString()})</button>
            </div>




            {/* <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => decrementQuantity(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => incrementQuantity(item.id)}>+</button>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total items: {cartItems.length}</p> */}
        </div>
    );
};

export default Cart;

