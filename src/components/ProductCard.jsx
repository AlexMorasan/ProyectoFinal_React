import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({key, nombre, precio, ruta}) => {
    return (
        <div className='Product-Card'>
            <img className='Product-Card' src={`/Media/${ruta}`} alt={nombre} />
            <p>{nombre}</p>
            <p>${precio}</p>
            <button>Cantidad</button>
            <br />
            <button>Agregar al carrito</button>
            <br />
            <Link to={`/producto/${key}`}>
                Ver detalles del producto
            </Link>
        </div>
    )
}

export default ProductCard;