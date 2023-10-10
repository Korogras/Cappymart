import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./modules/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product";
import Products from "./modules/Products";
import CategoryProducts from "./modules/CategoryProducts";
import Cart from "./modules/Cart";
import Signup from "./modules/Signup";
import Login from "./modules/Login";
import Dashboard from "./modules/Dashboard";
//function that renders Header and Home compnent to the App
function App() {
const [token, setToken] = useState(localStorage.getItem('userToken') ?? null);

  return (
    <div>
      
      <Header token={token} setToken={setToken}/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login token={token} setToken={setToken}/>}/>
        <Route path="/dashboard" component={<Dashboard/>} />
        <Route path="/products/:id" element={<Product token={token} setToken={setToken}/>} />
        <Route path="/products" element={<Products />} />
        <Route path='/categories/:name' element={<CategoryProducts/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
