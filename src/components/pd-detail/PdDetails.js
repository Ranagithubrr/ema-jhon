import React from 'react';
import { useParams } from 'react-router-dom';
import fakeItems from '../../fakeData/fakeItems.json'
import './Pd-details.css'

const PdDetails = () => {
    const { productkey } = useParams()
    const product = fakeItems.find(item => item.key === productkey)
    // console.log(product)
    const { key, category, name, seller, stock, img, price, shipping } = product
    return (
        <div className="product-details">
            <img src={img} alt="product-image-here" />
            <div className="details-area">


                <h4 className="pd-name">Product name: {name}</h4>
                <h5 className="pd-seller">Seller: {seller}</h5>
                <h5 className="pd-price">Price: ${price}</h5>
                <h5 className="pd-price">Shipping: ${shipping}</h5>

                <h5 className="pd-price">Category: {category}</h5>
                <h5 className="pd-price"><small>Only: {stock} in stock</small></h5>
                <button className="buttons">Order Now</button>
                <button className="buttons">Add to cart</button>
                
            </div>
        </div>
    );
};

export default PdDetails;