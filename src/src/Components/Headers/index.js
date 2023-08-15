import React from 'react';
import './index.css';

import { Link } from 'react-router-dom';

const Header=()=> {
    return (
        <header className="header">
            <div className="header-left">
                <img src="./wave-logo-img.png" alt='imag'/>
                <h1 className="heading">My Blogs</h1>
            </div>
            <div className="header-right">
                <button className="header-button"><Link className='link' to="/">Home</Link></button>
                <button className="header-button"><Link className='link' to="/about">About</Link></button>
                <button className="header-button"><Link className='link' to="/contact">Contact</Link></button>
            </div>
        </header>
    );
}

export default Header;
