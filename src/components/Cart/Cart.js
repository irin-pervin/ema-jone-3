import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // first way 
    // const cart= props.cart;
    // second way 
    // const {cart} = props;
    console.log(cart)
    let tatal = 0;
    let totalShipping = 0;
    for(const product of cart) {
        console.log(product)
        tatal = tatal + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = tatal * 7 /100;
    const grandTotal = tatal + totalShipping + tax;




    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>selected items :{cart.length} </p>
            <p>Total price :${tatal}</p>
            <p>Total shipping :${totalShipping} </p>
            <p>Tax :${tax.toFixed(2)} </p>
            <h6>Grand Total :${grandTotal}</h6>                                                          
        </div>
    );
};

export default Cart;  