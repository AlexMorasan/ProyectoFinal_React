import React from 'react';
import './ProductDetailCard.css';
import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';
import { CartContext } from '../Context/CartContext' 

const ProductDetailCard = ({id, nombre, precio, ruta}) => {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useContext(CartContext);
  const aumentar = () => setCantidad(prev => prev + 1);
  const disminuir = () => {if (cantidad > 1) setCantidad(prev => prev - 1);};

const agregarAlCarrito = () => {
 console.log("Agregando al carrito:", { id, nombre, precio, ruta, cantidad });
addToCart({ id, nombre, precio, ruta, cantidad });
};

    return (
        <div>
            <div className='Product-DetailCard'>
            <img className='Product-DetailCard' src={`/Media/${ruta}`} alt={nombre} />
        </div>
        <div>
            <p>{nombre}</p>
            <p>${precio}</p>
            <div className='botones'>
                <button onClick={disminuir}>-</button>
                <span>{cantidad}</span>
                <button onClick={aumentar}>+</button>
            </div>
            {/* <button onClick={agregarAlCarrito}>Agregar al carrito</button> */}
            <button onClick={() => console.log("Hola")}>Ver carrito</button>
            <br />
            <Link to="/">
                Regresar al inicio
            </Link>
        </div>
        </div>

    )
}

export default ProductDetailCard;