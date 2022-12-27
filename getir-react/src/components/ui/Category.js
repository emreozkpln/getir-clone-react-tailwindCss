import React from 'react'

export default function Category({category:{id,title,image}}) {
  return (
      <a href='#' className='flex flex-col items-center text-center p-4 gap-y-2 hover:bg-purple-50 transition-colors group'>
        <img src={image} alt={title} className="w-12 h-12 border-2 border-gray-200 rounded"></img>
        <span className='text-sm group-hover:text-purple-600 tracking-tight whitespace-nowrap'>{title}</span>
      </a>
  )
}
