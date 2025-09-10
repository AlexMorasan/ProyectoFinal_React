import React, {useEffect, useState} from 'react'
import {getProducts} from '../firebase'
import ProductCard from './ProductCard'
import '../pages/pages.css'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() =>{
        getProducts().then(data => setProductos(data));
    },[]);

    return(
        <div className='pruebaflex'>
            {productos.map(producto =>(
                <ProductCard
                    id={producto.id}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    ruta={producto.ruta}
                 />
            ))}
        </div>
);
};


export default ItemListContainer;