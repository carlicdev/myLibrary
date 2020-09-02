import React, { useState } from 'react';

const ProductCard = (props) => {
    const [quantity, setQuantity] = useState(1);
    const { product, addToCart } = props;
    const { name, description, price, _id } = product;
    return (
        <div>
        <div className='flex flex-wrap lg:1/3 max-w-sm bg-gray-300 m-2'>
            <div className='w-1/2  inline-block'>

            <img src={require('../../images/cbdOil.jpg')}  className='w-full h-48'/>
            </div>
            <div className='w-1/2 inline-block text-center'>
            <div className='text-gray-800 text-xl  font-semibold mt-5'>
                {name}
                </div>
            <div className='text-gray-800'>
                {description}
            </div>
            <div className='grid grid-col-2 mt-3'>
                <div className='flex justify-center px-5'>
                    <div className='w-1/2'>
                        <div className='text-sm text-gray-800 col-span-1'>
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
                    </div>
                    <div className='w-1/2'>                        
                        <div className='text-sm text-gray-800 col-span-1'>
                            $
                            {price}
                        </div>
                    </div>
                </div>
                    
            </div>
            <button className='bg-green-600 text-white mb-1 mt-5 rounded px-4 py-2 focus:outline-none hover:bg-green-700'
                    onClick={(e) => addToCart(e, name, price, quantity, _id)}
                    >
                Agregar al carrito
            </button>
                    </div>
        </div>
        </div>
    )
}

export default ProductCard;