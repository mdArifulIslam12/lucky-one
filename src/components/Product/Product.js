import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import './Product.css'
const Product = ({shoe ,countShoes}) => {
    const {img,name,price} = shoe
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} alt="" className="card-img-top img" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: ${price}</p>
                    <button className='btn' onClick={() => countShoes(shoe)}>Add to cart <BsFillCartPlusFill className='icon'></BsFillCartPlusFill></button>
                </div>
            </div>
      </div>
    );
};

export default Product;