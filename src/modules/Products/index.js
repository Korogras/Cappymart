import React from 'react'
import ProductCard from '../../components/ProductCard'
import { useState, useEffect } from 'react'
import Categories from '../../components/Categories'

const Products = () => {
  const [products, setProducts] = useState([])
  //useEffect function to fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
        console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
<div>
  <Categories/>
  {
    products.length > 0 ?
<ProductCard products ={products}/>
:
<div>Loading...</div>
}
</div>
  )
}
export default Products