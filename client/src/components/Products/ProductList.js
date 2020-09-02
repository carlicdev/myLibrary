import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { CartContext } from '../../context/cart-context';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get('/api/products/');
            setProducts(res.data.products)
        };
        getProducts()
    },[])

    return (
        <div className='flex flex-wrap w-full justify-center'>
            {
                products.map(item => {
                    return <ProductCard key={item._id} product={item} addToCart={addToCart} />
                })
            }
        </div>
    )
}

export default ProductList;
