import React from 'react';
import './ProductDetails.css'
const ProductDetails = ({product,choose,clear}) => {
    return (
        <div>
            <div className='items'>
                {
                    
                    product.map(item => <Items item={item}></Items>)
                }
            </div>
            <button className='choose ' onClick={() => choose(product)}>choose 1 for me</button>
            <button className='clear' onClick={() => clear()}>Choose Again</button>
        </div>
    );
};
function Items({item}){
    return(
        <div className='item ' style={{
            padding: "12px"
            }}>
            <img src={item.img} alt="" />
            <p>{item.name}</p>
        </div>
    )
}
export default ProductDetails;