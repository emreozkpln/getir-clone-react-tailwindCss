import React from 'react'
import { useState,useEffect } from 'react'
import cardData from '../api/cards.json'

export default function Cards() {

  const [cards, setcards] = useState([])

  useEffect(() => {
    setcards(cardData)
  }, [])
  

  return (
    <div className='container mx-auto max-w-6xl grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 lg:gap-y-4 md:grid-cols-1 md:gap-y-4 gap-x-4 py-7 sm:gap-y-4 sm:shadow-lg sm:grid-cols-1'>
      {cards.length && cards.map(card => (
        <div className='bg-white rounded-lg flex flex-col shadow-lg items-center justify-center text-center p-8'>
          <img className='mb-6' src={card.image}></img>
          <h6 className='text-indigo-600 text-lg'>{card.title}</h6>
          <div className='mt-2 text-lg text-gray-400'>{card.description}</div>
        </div>
      ))}
    </div>
  )
}
