import React from 'react'
import { BsDot } from 'react-icons/bs'
import {BsFacebook , BsTwitter , BsInstagram} from 'react-icons/bs'
import {BsGlobe2} from "react-icons/bs"

export default function Footer() {
  return (
    <div className='bg-white'>
      <div className='container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-1 py-10 gap-x-10 gap-y-6'>
        <div className='flex flex-col gap-y-5'>
          <div className='text-indigo-500 tracking-tight text-2xl'>Getir'i indirin!</div>
          <a href='#'>
            <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'></img>
          </a>
          <a href='#'>
            <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'></img>
          </a>
          <a href='#'>
            <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'></img>
          </a>
        </div>
        <div className='flex flex-col gap-y-4'>
          <div className='text-indigo-500 tracking-tight text-2xl'>Getir'i keşfedin</div>
          <div className='text-sm'>Hakkımızda</div>
          <div className='text-sm'>Kariyer</div>
          <div className='text-sm'>Teknoloji Kariyerleri</div>
          <div className='text-sm'>İletişim</div>
          <div className='text-sm'>COVID-19 Duyuru</div>
          <div className='text-sm'>Sosyal Sorumluluk Projeleri</div>
        </div>
        <div className='flex flex-col gap-y-4'>
          <div className='text-indigo-500 tracking-tight text-2xl'>Yardıma ihtiyacınız mı var?</div>
          <div className='text-sm'>Sıkça Sorulan Sorular</div>
          <div className='text-sm'>Kişisel Verilerin Korunması</div>
          <div className='text-sm'>Gizlilik Politikası</div>
          <div className='text-sm'>Kullanım Koşulları</div>
          <div className='text-sm'>Çerez Politikası</div>
        </div>
        <div className='flex flex-col gap-y-4'>
          <div className='text-indigo-500 tracking-tight text-2xl'>İş Ortağımız Olun</div>
          <div className='text-sm'>Bayimiz Olun</div>
          <div className='text-sm'>Deponuzu Kiralayın</div>
          <div className='text-sm'>GetirYemek Restoranı Olun</div>
          <div className='text-sm'>GetirÇarşı İşletmesi Olun</div>
          <div className='text-sm'>Zincir Restoranlar</div>
        </div>
        <div className='w-[72px] h-[86px] border-2 border-gray-200 shadow-md p-2 rounded-lg flex items-center'>
          <a href='#'>
            <img src='https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png'></img>
          </a>
        </div>

      </div>
      <div className='container mx-auto max-w-6xl flex justify-between items-center border-t border-gray-200 mt-2 py-5 flex-col sm:flex-row'>
        <div className='flex items-center justify-center gap-2'>
          <div className='text-sm text-gray-500'>2022 Getir</div>
          <div><BsDot size={20} /></div>
          <div className='text-sm text-indigo-500'>Bilgi Toplumu Hizmeti</div>
        </div>
        <div className='flex gap-4'>
          <div className='mt-1'><BsFacebook size={20}/></div>
          <div className='mt-1'><BsTwitter size={20}/></div>
          <div className='mt-1'><BsInstagram size={20}/></div>
          <div className="flex gap-1 text-center items-center text-gray-500 cursor-pointer text-sm border-2 border-gray-200 rounded p-1"><BsGlobe2 size={15}/>Türkçe(TR)</div>
        </div>
      </div>
    </div>
  )
}
