import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrdersList = () => {
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        const getOrders = async () => {
            const res = await axios.get('/api/orders');
            setOrders(res.data.orders)
        }
        getOrders();
    }, [])

    const tempOrders = [{
        order: [
            {
                name: "Pomada CBD",
                price: 19.99,
                qty: 2
            },
            {
                name: "CBD oil",
                price: 19.99,
                qty: 4
            }
        ],
        status: "pending",
        timestamp: "2020-08-26T12:54:29.139Z",
        total: 119.94,
        _id: '12345'
    }]

    console.log(orders);
    return (
        <div>
            {
                !orders && (
                    <p>Loading...</p>
                )
            }
            {
                orders && (
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
                            <button className='bg-yellow-600 shadow text-white font-semibold focus:outline-none w-full p-2 rounded'>
                                Place order
                            </button>
                        </div>
                            )
                    })
                )
            }
        </div>
    )
}

export default OrdersList;
