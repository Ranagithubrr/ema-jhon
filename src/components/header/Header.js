import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Image here" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/manage">Manage Order</Link>
                
            </nav>
        </div>
    );
};

export default Header;