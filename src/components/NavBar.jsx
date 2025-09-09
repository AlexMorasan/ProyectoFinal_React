import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                 <Link to="/">ATP Fitness Store </Link> 
                 </div>
            <ul className="nav-links">
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/categorías">Categorías</Link></li>
                <li> <Link to="/checkout">Ver Carrito</Link></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;