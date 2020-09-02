import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Checkout from './Checkout/Checkout';

const OrdersList = () => {
    const [orders, setOrders] = useState(null);
    const [sortedby, setSortedby] = useState('');

    useEffect(() => {
        const getOrders = async () => {
            const res = await axios.get('/api/orders');
            setOrders(res.data.orders)
        }
        getOrders();
    }, [])

    console.log(orders ? orders.filter(order => order.status === sortedby) : null );
    return (
        <div>
            <div className='flex w-full justify-center mt-4'>
                <button className=' active bg-gray-200 font-semibold selected text-gray-800 hover:bg-green-700 hover:border-green-700 hover:text-white w-32  border border-gray-500 focus:border-green-800 focus:outline-none focus:bg-green-800 focus:text-white py-1 rounded-l'
                        onClick={() => setSortedby('')}
                >
                    All
                </button>
                <button className='bg-gray-200 font-semibold text-gray-800 hover:bg-green-700 hover:border-green-700 hover:text-white w-32  border border-gray-500 focus:border-green-800 focus:outline-none focus:bg-green-800 focus:text-white py-1'
                        onClick={() => setSortedby('pending')}
                >
                    Pending
                </button>
                <button className='bg-gray-200 font-semibold text-gray-800 hover:bg-green-700 hover:border-green-700 hover:text-white w-32  border border-gray-500 focus:border-green-800 focus:outline-none focus:bg-green-800 focus:text-white py-1 rounded-r'
                        onClick={() => setSortedby('placed')}
                >
                    Placed
                </button>
            </div>
            {
                !orders && (
                    <p>Loading...</p>
                )
            }
            {
                orders && ( 
                    
                        sortedby === '' ? (
                            orders.map(order => {
                                return (
                                <div key={order._id} className='max-w-md bg-gray-100 mx-auto text-center p-2 shadow my-4'>
                                    <p>Order status: {order.status}</p>
                                    {
                                        order.order.map(i => {
                                            return (
                                                <div key={i.name} className='grid grid-cols-2 my-1 bg-gray-300'>
                                                    <p className='col-span-1'>{i.name}</p>
                                                    <p className='col-span-1'>${i.price}</p>
                                                    <p className='col-span-1'>Qty: {i.qty}</p>
                                                    <p className='col-span-1'>Subtotal: ${i.qty * i.price}</p>
                                                </div>
                                                    )
                                        })
                                    }
                                    <p>Total: ${order.total}</p>
                                    {
                                        order.status === 'pending' ? (
        
                                            <Checkout orderId={order._id}/>
                                        ) : (
                                            null
                                        )
                                    }
                                </div>
                                    )
                            })
                        ) : (
                            orders.filter(order => order.status === sortedby).map(order => {
                                return (
                                    <div key={order._id} className='max-w-md bg-gray-100 mx-auto text-center p-2 shadow my-4'>
                                        <p>Order status: {order.status}</p>
                                        {
                                            order.order.map(i => {
                                                return (
                                                    <div key={i.name} className='grid grid-cols-2 my-1 bg-gray-300'>
                                                        <p className='col-span-1'>{i.name}</p>
                                                        <p className='col-span-1'>${i.price}</p>
                                                        <p className='col-span-1'>Qty: {i.qty}</p>
                                                        <p className='col-span-1'>Subtotal: ${i.qty * i.price}</p>
                                                    </div>
                                                        )
                                            })
                                        }
                                        <p>Total: ${order.total}</p>
                                        {
                                            order.status === 'pending' ? (
            
                                                <Checkout orderId={order._id}/>
                                            ) : (
                                                null
                                            )
                                        }
                                    </div>
                                        )
                            }
                        )
                    )
                )
            }
        </div>
    )
}

export default OrdersList;
