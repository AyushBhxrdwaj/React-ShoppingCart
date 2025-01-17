import React, { createContext, useState } from 'react';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Cart from './components/Cart';

export const CartContext = createContext();

const App = () => {
  const [Cartitem, setCartitem] = useState([]);

  return (
    <CartContext.Provider value={{ Cartitem, setCartitem }}>
      <div className="h-full w-full bg-black">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </CartContext.Provider>
  );
};

export default App;
