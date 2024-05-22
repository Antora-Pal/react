import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Pizzas from "../pages/Pizzas";
import Burger from "../pages/Burger";
import Chowmin from "../pages/Chowmin";
import Biriyani from "../pages/Biriyani";
import PizzaDetails from "../pages/PizzaDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/pizzas" element={<Pizzas />} />
      <Route path="/Burger" element={<Burger />} />
      <Route path="/Chowmin" element={<Chowmin />} />
      <Route path="/Biriyani" element={<Biriyani />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/pizzas/:id" element={<PizzaDetails />} />
    </Routes>
  );
};

export default Routers;