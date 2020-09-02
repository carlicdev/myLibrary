import React from 'react'
import ProductList from '../Products/ProductList'
import Cart from '../Cart/Cart'

const Shop = () => {
    return (
        <div className='grid grid-cols-4'>
            <div className='md:col-span-3 col-span-4'>
                <ProductList />
            </div>
            <div className='md:col-span-1 col-span-4 order-first md:order-last'>
                <Cart />
            </div>
        </div>
    )
}

export default Shop
