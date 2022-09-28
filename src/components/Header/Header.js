import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className='navbar'>
            <nav>
                <h1>Foodies Restaurant</h1>
            </nav>
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};

export default Header;