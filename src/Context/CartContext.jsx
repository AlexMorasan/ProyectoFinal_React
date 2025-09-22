import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    setCart(prev => {
      const existente = prev.find(p => p.id === producto.id);
      if (existente) {
        return prev.map(p =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + producto.cantidad }
            : p
        );
      } else {
        return [...prev, producto];
      }
    });
  };

  const subtractFromCart = (id) => {
  setCart(prev => {
    return prev.map(p =>
      p.id === id
        ? { ...p, cantidad: p.cantidad - 1 }
        : p
    ).filter(p => p.cantidad > 0);
  });
};

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const clearCart = () => setCart([]);

  const getTotal = () => {
  return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
};

  const Totalproductos = () =>{
    return cart.reduce((acc,item) => acc+ item.cantidad,0);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, subtractFromCart, removeFromCart, clearCart, getTotal,Totalproductos }}>
      {children}
    </CartContext.Provider>
  );
}