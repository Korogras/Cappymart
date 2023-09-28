 import React from 'react'
 import { useState, useEffect } from "react"
 import FeatureCard from '../../components/FeatureCard/index.js'

 const Categories = () => {
  const [categories, setCategories] = useState([])
  //useEffect function to fetch all products
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories')
      const data = await response.json()
        console.log(data)
      setCategories(data)
    }
    fetchCategories()
  }, [])

if (categories.length === 0) {
  return <div>Loading...</div>
}

  return (
  <FeatureCard cards={categories}/>
  )
 }

 export default Categories