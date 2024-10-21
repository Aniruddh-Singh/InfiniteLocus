import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1>
                    <Link to="/">Review Platform</Link>
                </h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;