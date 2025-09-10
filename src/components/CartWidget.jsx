import React from 'react'
import { useContext } from 'react';
import {CartContext} from '../Context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget = () =>{
    const { cart } = useContext(CartContext);
    const totalProductos = cart.reduce((total, item) => total + item.cantidad, 0);
    return(
        <div className="cart-widget">
            <Link to='/checkout'>
            🛒 <span> {totalProductos} producto{totalProductos !== 1 ? 's' : ''}</span>
            </Link>
        </div>
    );
};

export default CartWidget;