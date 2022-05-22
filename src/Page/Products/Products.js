import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(() =>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl uppercase text-center font-bold mt-8 text-teal-600'>our products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-12 my-12'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;