import React, { useState } from 'react';
import fakeItems from '../../fakeData/fakeItems.json'
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './shop.css'
const Shop = () => {
    const pds = fakeItems.slice(0,10)
    const [product, productCount] = useState(pds)
    const [cart,setCart] = useState([])
    const handleAddProduct = (product) => {
        // console.log(product)
        const newCart = [...cart,product]
        setCart(newCart)
    }
    return (
        <div className="shop-area">
           <div className="product-area">
           <h3>Our Products</h3>
                {
                   // product.map(items => console.log(items.key))
                        product.map(item => <Product 
                        name={item.name} 
                        pic={item.img}
                        price={item.price} 
                        seller={item.seller} 
                        category={item.category}
                        quantity ={item.stock}
                        shipping ={item.shipping}
                        pdid ={item.key}
                        key ={item.key}
                        handleAddProduct = {handleAddProduct}>
                        </Product>)
                }
            </div>
            <div>
                <Cart pdDetails = {cart}></Cart>
            </div>

           
        </div>
    );
};

export default Shop;