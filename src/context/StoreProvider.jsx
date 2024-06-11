// src/context/StoreProvider.js

import React, { useState } from 'react';
import { Store } from './Store';

function StoreProvider({ children }) {
  const [Token, setToken] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Store.Provider value={{ Token, setToken, cartItems, addToCart }}>
      {children}
    </Store.Provider>
  );
}

export default StoreProvider;
