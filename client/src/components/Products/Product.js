import React from 'react';

const Product = ({product}) => {
    return (
        <div className='lg:1/3 max-w-lg bg-gray-300 m-2 p-4'>
            <div className='text-blue-800 text-xl  font-semibold'>
                {product.name}
            </div>
            <div className='text-gray-800'>
                {product.description}
            </div>
            <div className='text-sm text-gray-800'>
                {product.price}
            </div>
            <div className='text-sm text-gray-800'>
                {product._id}
            </div>
            <button className='bg-green-600 text-white rounded px-4 py-2 focus:outline-none hover:bg-green-700'>
                Agregar al carrito
            </button>
        </div>
    )
}

export default Product;