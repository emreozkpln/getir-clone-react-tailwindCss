import React from 'react'
import { useState,useEffect } from 'react'
import categoryData from '../api/categories.json'
import Category from './ui/Category';

export default function Categories() {

  const[categories,setCategories]=useState([]);

  useEffect(() => {
    setCategories(categoryData)
  }, [])//istek burası
  
  return (
    <div className='bg-white py-4'>
      <div className='container mx-auto max-w-6xl'>
          <h3 className='text-sm font-bold'>Kategoriler</h3>
          <div className='grid grid-cols-4 2xl:grid-cols-10 xl:grid-cols-9 lg:grid-cols-8 md:grid-cols-6'>
            {categories && categories.map((category,index) =><Category key={index} category={category} />)}
          </div>
      </div>
    </div>
  )
}
