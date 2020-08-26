import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider  = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (e, name, price, qty, id) => {
        e.preventDefault();
        let tempCart = cart;
        const newItem = { name: name, price: price, qty: qty,  _id: id};
        tempCart = [...tempCart, newItem];
        setCart(tempCart);
    }

    const removeFromCart = (e, itemIndex) => {
        e.preventDefault();
        let tempCart = cart;
        tempCart.splice(itemIndex, 1);
        setCart([...tempCart]);
    }

    const addQty = (e, itemIndex, qty) => {
        e.preventDefault();
        let tempCart = cart;
        tempCart[itemIndex].qty = parseInt(qty,10) + 1;
        setCart([...tempCart]);
    }

    const subQty = (e, itemIndex, qty) => {
        e.preventDefault();
        if (parseInt(qty,10) > 0) {
            let tempCart = cart;
            tempCart[itemIndex].qty = parseInt(qty,10) - 1;
            setCart([...tempCart]);
        }
    }

    return (
        <CartContext.Provider value={{
            cart, 
            addToCart, 
            removeFromCart,
            addQty,
            subQty
            }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
