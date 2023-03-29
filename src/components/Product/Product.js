import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,price,seller,ratings,quantity} = props.product;
    return (
        <div className='product'>
        <img src={img} alt=""/>
        <div className="product-info">
            <h6 className='product-name'>{name}</h6>
            <p>Price : ${price}</p>
            <p>Mnufacture: {seller}</p>
            <p>Ratings: {ratings}</p>
            <p>quantity {quantity}</p>
        </div>
        <button className='btn-cart'>Add to cart</button>
    </div>
    );
};

export default Product;