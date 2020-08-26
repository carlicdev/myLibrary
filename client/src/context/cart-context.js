import React, { createContext, useState } from 'react';
import axios from 'axios';

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

    const getTotal = () => {
        let tempTotal = 0;
        for (let i = 0; i < cart.length; i++) {
            tempTotal = tempTotal + cart[i].price * cart[i].qty
        }
        return tempTotal;
    }

    const placeOrder = async (e, total) => {
        e.preventDefault();
        console.log(total)
        let res = await axios.post('/api/orders', {
            userId: '5f45d60bd4d71d384403caa6',
            order: cart,
            total: getTotal().toFixed(2)
        });
        console.log(res);
    }

    return (
        <CartContext.Provider value={{
            cart, 
            addToCart, 
            removeFromCart,
            addQty,
            subQty,
            placeOrder
            }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
