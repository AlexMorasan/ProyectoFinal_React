import React from 'react';
import './ProductCard.css';

const ProductCard = () => {
    return (
        <div className='Product-Card'>
            <img src="" alt="" />
            <p>Nombre del producto</p>
            <p>Precio</p>
            <button>Cantidad</button>
            <br />
            <button>Agregar al carrito</button>
            <br />
            <button>Ver detalles del producto</button>
        </div>
    )
}

export default ProductCard;