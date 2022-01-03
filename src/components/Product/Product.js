import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Product = (props) => {
    const {pic,name,price,seller,category,quantity,handleAddProduct,pdid} = props
    // console.log(productid)
    return (
        
        <div className="product">
            <div className="image-area">
                <img src={pic} alt="image-here" />
            </div>
            <div className="product-detail">
                <Link to={"/shop/"+pdid}><span>{name}</span></Link>
            
            <br />
            <br />
            <span> seller: {seller}</span>
            <br />
            <span>Only {quantity} left Order Soon</span>
            <br></br>
            <span>Category: {category}</span>
            <h5>${price}</h5>
            <button className="order-btn" onClick={ () => handleAddProduct(props)}><FontAwesomeIcon icon={faShoppingCart} /> Order Now</button>
            </div>
            
            
        </div>
    );
};

export default Product;