import React from 'react'
import productData from '../api/products.json'
import { useState,useEffect } from 'react'
import Product from '../components/ui/ProductItem.js'

export default function Favorites() {

  const [products, setproducts] = useState([])

  useEffect(() => {
    setproducts(productData)
  }, [])
  

  return (
    <div className='container mx-auto max-w-6xl overflow-hidden py-7'>
      <h3 className='text-sm font-bold py-2'>Favoriler</h3>
      <div className='grid gap-1 grid-cols-3 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4'>
      {products.length && products.map((product)=><Product key={product.id} product={product}/>)}
      </div>
    </div>
  )
}
