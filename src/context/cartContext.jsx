
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [notification, setNotification] = useState('');

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                // If the item already exists, increment the quantity
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                // If it doesn't exist, add it with a quantity of 1
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
        setNotification(`product has been added to your cart!`);
        setTimeout(() => setNotification(''), 1000);
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const incrementQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }: item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity, notification }}
        >
            {children}
        </CartContext.Provider>
    );
};
