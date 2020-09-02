import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cart-context';
import { FiShoppingCart } from 'react-icons/fi';
import {AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { SessionContext } from '../../context/session-context';

const Cart = () => {
    const { cart, removeFromCart, addQty, subQty, placeOrder } = useContext(CartContext);
    const { user } = useContext(SessionContext);

    const getTotal = () => {
        let tempTotal = 0;
        for (let i = 0; i < cart.length; i++) {
            tempTotal = tempTotal + cart[i].price * cart[i].qty
        }
        return tempTotal;
    }

    return (
        <div>
            <div className='bg-green-800 text-white text-center p-2'>
                <FiShoppingCart size={25} className='mx-auto' />    
            </div>
            {
                cart.map(item => {
                    const itemIndex = cart.indexOf(item);
                    return(
                        <div key={item._id} className='p-1 grid grid-cols-3 border-b border-gray-300'>
                            <p className='text-blue-800 text-sm col-span-2'>{item.name}</p>
                            <p className='text-gray-800 text-sm col-span-1'> <span className='text-black'>$ </span>{item.price}</p>                       
                            <p className='text-blue-800 text-sm col-span-1'>Quantity:</p>
                            <div className='col-span-1 flex '>
                                <button  className='focus:outline-none'
                                    onClick={(e) => subQty(e, itemIndex, item.qty)}
                                >
                                    <AiOutlineMinusCircle className='text-red-500 text-xs ' />
                                </button>
                                <div className='text-xs mx-1'>{item.qty}</div>
                                <button className='focus:outline-none'
                                    onClick={(e) => addQty(e, itemIndex, item.qty)}
                                >
                                    <AiOutlinePlusCircle className='text-green-500 text-xs' />
                                </button>
                            </div>
                            <p className='text-blue-800 text-sm col-span-1'>$ {(item.price * item.qty).toFixed(2)}</p>
                            <div className='p-1 flex col-span-3'>
                                <button className='bg-red-500 px-1  text-sm text-white rounded ml-auto mr-1 focus:outline-none'
                                    onClick={(e) => removeFromCart(e, itemIndex)}
                                >
                                    Eliminar
                                </button>
                            </div>
                         </div>
                         )
                })
            }
            {
                cart.length > 0  && (
                    <div>
                        <div className='text-sm text-gray-800 text-center'>
                            Total: $<span>{getTotal().toFixed(2)}</span>
                        </div>
                    <button className='rounded w-full bg-green-800 py-1 text-center text-white focus:outline-none'
                            onClick={(e) => placeOrder(e, getTotal().toFixed(2))}
                    >
                        <Link to={user ? '/orders' : '/login'}>
                        Checkout
                        </Link>
                    </button>
                    </div>
                )
            }
            {
                !cart.length && (
                    <div className='bg-green-800 text-white text-center p-2'>
                        Cart is empty
                    </div>
                )
            }
        </div>
    )
}

export default Cart
