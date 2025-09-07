import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo"> ATP Fitness Store </div>
            <ul className="nav-links">
                <li>Home</li>
                <li>Categorías</li>
                <li>Ver Carrito</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;