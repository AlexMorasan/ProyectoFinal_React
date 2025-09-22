
import React from 'react';
import { useEffect } from 'react';
import {getProducts} from './firebase';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import { CartProvider } from './Context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  useEffect(()=>{
    getProducts();
  },[])
  return (
    //<div className="App">
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home greeting="Todos los productos"/>} />
          <Route path="/categorías" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/producto/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
    </BrowserRouter>
    </CartProvider>

    //</div>
  );
}

export default App;
