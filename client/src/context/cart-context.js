import React, { createContext, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { SessionContext } from './session-context';

export const CartContext = createContext();

const CartContextProvider  = (props) => {
    const [cart, setCart] = useState([]);
    const { user } = useContext(SessionContext)

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

    const placeOrder = async (e) => {
        e.preventDefault();
        if (user) {
            console.log(user)
            let res = await axios.post('/api/orders', {
                order: cart,
                total: getTotal().toFixed(2)
            });
            console.log(res);
            return <Redirect to='/orders' />
        } else {
            console.log('please login')
            return <Redirect to='/login'/>
        }
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
