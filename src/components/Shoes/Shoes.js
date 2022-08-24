import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import ProductDetails from '../ProductDetails/ProductDetails';
import './Shoes.css'
const Shoes = () => {
    const [shoes, setShoes] = useState([])
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setShoes(data))
    },[])
    const countShoes = (shoe) => {
        const newShoes = [...product, shoe]
        setProduct(newShoes)
    }
    const ChooseShoes = (products) => {
        let choses = Math.floor(Math.random(0)*products.length)
         setProduct([products[choses]])
    }
    const Clear = () => {
        setProduct([])
    }
    return (
        <div className='container-fluid'>
            <div class="row row-cols-1 row-cols-md-3 g-4 shoes">
                { shoes.map(shoe => <Product
                    shoe={shoe}
                    key={shoe.id}
                    countShoes ={countShoes}
                ></Product>)}
            </div>
            <div className='product-details' >
                <h2 className='text-center'>Selected Shoes</h2>
                <ProductDetails 
                    product={product}
                    choose={ChooseShoes}
                    clear = {Clear}
                ></ProductDetails>
            </div>
        </div>
    );
};

export default Shoes;