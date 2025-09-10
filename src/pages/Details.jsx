import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../firebase';
import { Link } from 'react-router-dom';
import './pages.css'

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const aumentar = () => setCantidad(prev => prev + 1);
  const disminuir = () => {if (cantidad > 1) setCantidad(prev => prev - 1);};

  useEffect(() => {
    getProductById(id).then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div className='MainDetailDisplay'>
      <div className='DetailPicture'>
        <img src={`/Media/${product.ruta}`} alt={product.nombre} />
      </div>
      <div className='DetailInfo'>
        <h2>{product.nombre}</h2>
        <p>Precio: ${product.precio}</p>
        <p>Descripción: {product.descripcion}</p>
        <p>Categoría: {product.categoria}</p>
        <div className='botones'>
                <button onClick={disminuir}>-</button>
                <span>{cantidad}</span>
                <button onClick={aumentar}>+</button>
        </div>
        <button>Agregar al carrito</button>
        <br />
        <Link to={`/`}>
                Regresar al Inicio
        </Link>
      </div>
    </div>
  );
}

export default Details;
