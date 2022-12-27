import React from 'react'
import {AiOutlinePlus} from "react-icons/ai"
export default function ProductItem({product}) {
  return (
    <div className='flex flex-col items-center text-center gap-y-1 relative'>
        <button className='absolute top-0 right-0 border border-gray-100 w-8 h-8 flex items-center justify-center rounded bg-white'><AiOutlinePlus/></button>
        <img src={product.image}></img>
        <span className='flex text-sm gap-0.5 text-gray-500'>$<div className='text-gray-400 text-sm font-semibold'>{product.price}</div></span>
        <div className='text-purple-500 font-semibold text-sm'>{product.title}</div>
        <div className='text-gray-600 font-semibold text-sm'>{product.alt}</div>
    </div>
  )
}
