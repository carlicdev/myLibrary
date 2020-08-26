import React from 'react'
import ProductList from '../Products/ProductList'
import Cart from '../Cart/Cart'

const Shop = () => {
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-3'>
                <ProductList />
            </div>
            <div className='col-span-1'>
                <Cart />
            </div>
        </div>
    )
}

export default Shop
