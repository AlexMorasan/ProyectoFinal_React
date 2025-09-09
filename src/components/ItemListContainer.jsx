import React, {useEffect, useState} from 'react'
import {getProducts} from '../firebase'
import ProductCard from './ProductCard'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() =>{
        getProducts().then(data => setProductos(data));
    },[]);

    return(
        <div>
            {productos.map(producto =>(
                <ProductCard
                    key={producto.key}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    ruta={producto.ruta}
                 />
            ))}
        </div>
);
};


export default ItemListContainer;