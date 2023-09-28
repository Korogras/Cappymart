import React, { useEffect } from "react";
import Hero from "../../components/Hero";
import Products from "../../components/ProductCard";
import StatCard from "../../components/StatCard";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import Categories from "../../components/Categories";
//function that renders components
const Home = () => {
  
  const [products, setProducts] = useState([])
  //useEffect function to fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=6')
      const data = await response.json()
        console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])
  
  return (
    <>
      <Hero />
      <Categories />
      <div className="flex flex-col text-center w-full">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Products</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most Popular</h1>
      </div>
      {
        products.length > 0 ?
        <ProductCard products={products} />
        :
        <div>Loading...</div>
      }
      <Products />
      
      <StatCard />
    </>
  );
};

export default Home;
