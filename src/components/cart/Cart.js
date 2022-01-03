import React from 'react';
import './cart.css'
const Cart = (props) => {
    const pdDetails = props.pdDetails
    console.log(pdDetails)
    const total = parseFloat((pdDetails.reduce( (total, prod) => total + prod.price , 0 )).toFixed(2))
    // console.log(total)
    const shipping = parseFloat((pdDetails.reduce( (ship, prod) => ship + prod.shipping , 0 )).toFixed(2))
    const tax = parseFloat(((total / 100) * 2).toFixed(2))
    
    const grandTotal = parseFloat((total + shipping + tax).toFixed(2))
    return (
        <div className="cart-area">
            <h2 className="order-head">Order Summary</h2>
            <span>Ordered (item): {pdDetails.length}</span>
            <br />
            <span>SubTotal Price: ${total}</span>
            <br />
            <span>Shipping: ${shipping}</span>
            <br />
            <span>Tax: ${tax}</span>
            <br />
            <h4>Total: ${grandTotal}</h4>
            <button className="check-out-btn">Check Out</button>
        </div>
    );
};

export default Cart;