import React from 'react'
import {GoLocation} from 'react-icons/go'
import {AiOutlineArrowRight} from 'react-icons/ai'
export default function Header2() {
  return (
    <div className='container mx-auto max-w-6xl  md:hidden flex bg-white justify-between h-9 items-center '>
        <div className='flex text-center items-center gap-1'><GoLocation/>Teslimat adresi belirle</div>
        <div className=''><AiOutlineArrowRight/></div>
    </div>

  )
}
