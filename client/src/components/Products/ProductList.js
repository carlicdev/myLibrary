import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get('/api/products/');
            setProducts(res.data.products)
        };
        getProducts()
    },[])

    console.log(products)
    return (
        <div className='flex flex-wrap w-full justify-center'>
            {
                products.map(item => {
                    return <Product key={item._id} product={item} />
                })
            }
        </div>
    )
}

export default ProductList;
