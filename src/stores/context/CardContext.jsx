import { useState } from "react";
import { createContext } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";

export const cartContext = createContext();

const CardContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [finalPrice, setFinalPrice] = useState(total);
  const [deliveryFee, setDeliveryFee] = useState(40);

  const addToCart = (item) => {
    if (user) {
      setCartItems([...cartItems, item]);
    } else {
      alert("Please login first");
    }
  };

  const removeFromCart = (item) => {
    if (user) {
      setCartItems(cartItems.filter((prod) => prod !== item));
    } else {
      alert("Please login first");
    }
  };

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const completePayment = () => {
    setOrderItems([...orderItems, ...cartItems]);
    
    setCartItems([]);
  };

  return (
    <cartContext.Provider value={{ cartItems, addToCart, removeFromCart, user, total, deliveryFee, finalPrice, setTotal, setFinalPrice, setDeliveryFee, login, logout, orderItems, completePayment }}>
      {children}
    </cartContext.Provider>
  );
};

export default CardContext;