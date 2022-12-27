import React from 'react'

export default function MobileApp() {
  return (
    <div className='container mx-auto max-w-6xl'>
      <div className='bg-purple-600 rounded-xl w-full flex justify-between items-center'>
        <div className='text-white p-10'>
          <h3 className=' font-bold text-2xl tracking-tight'>Getir'i indirin</h3>
          <div className=' font-semibold text-lg pt-3'>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim</div>
          <div className='flex gap-1 pt-6 md:h-36 md:w-36'>
            <img className='hover:scale-95 transform' src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'></img>
            <img className='hover:scale-95 transform' src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'></img>
            <img className='hover:scale-95 transform' src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'></img>
          </div>
        </div>
        <div className='hidden md:block'>
          <img src='https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png'></img>
        </div>
      </div>
    </div>
  )
}
