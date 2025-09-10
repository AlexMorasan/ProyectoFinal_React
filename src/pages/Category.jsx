import React, {useEffect, useState} from 'react'
import {getProducts} from '../firebase'
import ProductCard from '../components/ProductCard';
import './pages.css'

const ProductDetails = () => {
    const [productos, setProductos] = useState([]);
    const [categorias,setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(["Accesorios"]);
    useEffect(()=>{
        getProducts().then(data =>{
            setProductos(data);
            const categoriasUnicas = [...new Set(data.map(p => p.categoria))];
            setCategorias(categoriasUnicas);
        });
    },[]);

    const productosFiltrados =categoriaSeleccionada
        ? productos.filter(p =>p.categoria ===categoriaSeleccionada)
        : [];

    return (
        <div className='Filtro_Categoria'>
            <aside className='Categorias'>
                <h3>{`Categorias: ${categoriaSeleccionada}`}</h3>
                <div className='Lista'>
                    <ul>
                        {categorias.map(cat =>(
                            <li key={cat}>
                                <button onClick={()=>setCategoriaSeleccionada(cat)}>
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
            <main className='Categoria_Display'>
                {productosFiltrados.map(producto =>(
                    <ProductCard 
                    id={producto.id}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    ruta={producto.ruta}
                    />
                ))}
            </main>
        </div>
    );
};

export default ProductDetails;