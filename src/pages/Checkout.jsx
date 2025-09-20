import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { collection, getFirestore, addDoc, Timestamp } from "firebase/firestore";
import './pages.css'


const Checkout = () => {

      const { cart, clearCart, getTotal, Totalproductos, addToCart, subtractFromCart, removeFromCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    nombre: '',
    sucursal: '',
    telefono: '',
    email: '',
  });


      const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

      const handleSubmit = async (e) => {
        e.preventDefault();

        const db = getFirestore();

        const orden = {
          cliente: formData,
          carrito: cart.map(item => ({
            id: item.id,
            nombre: item.nombre,
            cantidad: item.cantidad,
            precio: item.precio,
            subtotal: item.precio * item.cantidad
          })),
          total: getTotal(),
          fecha: Timestamp.fromDate(new Date())
        };

        try {
          const docRef = await addDoc(collection(db, "ordenes"), orden);
          alert(`¡Gracias por tu compra, ${formData.nombre}!\nTu número de orden es: ${docRef.id}`);
          clearCart();
        } catch (error) {
          console.error("Error al subir la orden:", error);
          alert("Hubo un problema al procesar tu orden. Intenta nuevamente.");
        }
      };


    return (
        <div className='Checkout-style'>
            <div>
                <h2> Elementos en tu carrito</h2>
                <div>
                    {cart.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
                  ) : (
                    <div className="cart-resumen">
                      <h3>Tu carrito contiene: {Totalproductos()} productos</h3>
                      <h3>Total a pagar: ${getTotal()}</h3>
                      {cart.map(producto => (
                        <div key={producto.id} className="cart-item">
                          <img src={`/Media/${producto.ruta}`} alt={producto.nombre} className="cart-image" />
                          <div className="cart-info">
                            <p className="cart-nombre">{producto.nombre}</p>
                            <p className="cart-cantidad">Cantidad: {producto.cantidad}</p>
                            <p className="cart-subtotal">Subtotal: ${producto.precio * producto.cantidad}</p>
                            <button onClick={()=>subtractFromCart(producto.id)}>-1</button>
                            <button onClick={()=>addToCart({ ...producto, cantidad: 1 })}>+1</button>
                            <button onClick={() => removeFromCart(producto.id)}>🗑️</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
            </div>
            <div>
                <h2>Finalizar compra</h2>
                <div className='Formulario'>
                  <form onSubmit={handleSubmit} className="checkout-form">
                  <label>Nombre completo:</label>
                  <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                  <br></br>
                  <br></br>

                  <label>Selecciona la sucursal para recoger tu pedido:</label>
                  <br />
                  <br />
              
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="sucursal"
                        value="Monte Qaf"
                        checked={formData.sucursal === "Monte Qaf"}
                        onChange={handleChange}
                        required
                      />
                      Monte Qaf
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="sucursal"
                        value="Villa Kakariko"
                        checked={formData.sucursal === "Villa Kakariko"}
                        onChange={handleChange}
                      />
                      Villa Kakariko
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="sucursal"
                        value="Pueblo Paleta"
                        checked={formData.sucursal === "Pueblo Paleta"}
                        onChange={handleChange}
                      />
                      Pueblo Paleta
                    </label>
                  </div>
                  <br />
                  <label>Teléfono:</label>
                  <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
                  <br></br>
                  <br></br>

                  <label>Correo electrónico:</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  <br></br>
                  <br></br>

                  <button type="submit">Confirmar pedido</button>
                </form>
                </div>
            </div>
        </div>
        
    )
}

export default Checkout;