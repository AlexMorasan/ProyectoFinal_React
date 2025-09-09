
import React from 'react';
import { useEffect } from 'react';
import {getProducts} from './firebase';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Checkout from './pages/Checkout'

function App() {

  useEffect(()=>{
    getProducts();
  },[])
  return (
    //<div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home greeting="Hola amor de mi vida, estas bien buena"/>} />
        <Route path="/categorías" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    //</div>
  );
}

export default App;
