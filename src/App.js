// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Detail from './Page/Detail/Detail';
import Categorys from './Components/Categorys/Categorys';
import Addcart from './Components/Cart/Addcart'; 
import { CartProvider } from './Components/CartContext/CartContext'; 
import Login from './Components/Loginpage/Login';

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/categorys" element={<Categorys />} />
        <Route path="/cart" element={<Addcart />} /> 
      </Routes>
    </CartProvider>
  );
};

export default App;
