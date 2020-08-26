import React, { useState } from 'react';

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);
    const { product, addToCart } = props;
    const { name, description, price, _id } = product;
    return (
        <div className='lg:1/3 max-w-lg bg-gray-300 m-2 p-4'>
            <div className='text-blue-800 text-xl  font-semibold'>
                {name}
            </div>
            <div className='text-gray-800'>
                {description}
            </div>
            <div className='text-sm text-gray-800'>
                {price}
            </div>
            <div className='text-sm text-gray-800'>
                {_id}
            </div>
            <div className='text-sm text-gray-800'>
                Qty:
                <select className='m-1 px-1 rounded bg-gray-100 focus:outline-none focus:shadow-outline'
                        name='quantity'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <button className='bg-green-600 text-white rounded px-4 py-2 focus:outline-none hover:bg-green-700'
                    onClick={(e) => addToCart(e, name, price, quantity, _id)}
            >
                Agregar al carrito
            </button>
        </div>
    )
}

export default Product;