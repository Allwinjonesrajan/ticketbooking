import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Page/Home/Home';
import Detail from './Page/Detail/Detail';
import Categorys from './Components/Categorys/Categorys';
import Addcart from './Components/Cart/Addcart'; 
import { CartProvider } from './Components/CartContext/CartContext'; 
import Login from './Components/Loginpage/Login';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const location = useLocation();  // Get current path

  return (
    <CartProvider>
      {location.pathname !== '/' && location.pathname !== '/cart' && location.pathname !== '/categorys'  && <Navbar />}


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/categorys" element={<Categorys />} />
        <Route path="/cart" element={<Addcart />} /> 
      </Routes>
    </CartProvider>
  );
};

export default App;
