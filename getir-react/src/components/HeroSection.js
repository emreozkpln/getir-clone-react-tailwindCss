import Slider from "react-slick";
import ReactFlagsSelect from 'react-flags-select';
import { useState } from "react";
import {BsFacebook} from "react-icons/bs"
import {
  useWindowWidth

} from '@react-hook/window-size'

export default function HeroSection() {

  const windowWidth=useWindowWidth();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const phones = {
    EN: "+1",
    IT: "+2",
    GB: "+3",
    FR: "+4",
    TR: "+90",
    DE: "+5"
  }

  const [selected, setSelected] = useState('TR');
  return (
    <div className="relative h-auto md:h-[500px]">
      {windowWidth>= 747 && <Slider {...settings}>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://images5.alphacoders.com/327/thumbbig-327232.webp"></img>
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://images2.alphacoders.com/462/thumbbig-462175.webp "></img>
        </div>
      </Slider>}
      <div className="container mx-auto max-w-6xl flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full">
        <div className="hidden md:block">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"/>
          <div className="text-white text-2xl font-semibold mt-6 ml-3">Dakikalar içinde</div>
          <div className="text-white text-2xl font-semibold ml-3">kapınızda</div>
        </div>
        <div className="w-full md:w-[400px] bg-gray-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-indigo-600 text-center">Giriş yap kayıt ol</h4>
          <div className="flex gap-x-2">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              onSelect={code => setSelected(code)}
              selected={selected}
              className="flag-select" />

            <label className="flex-1 relative block">
              <input required className="h-14 border-2 border-gray-200 w-full text-sm px-4 transition-colors hover:border-indigo-500 outline-none peer focus:border-indigo-500"></input>
              <span className="absolute text-sm text-gray-400 top-0 left-0 flex items-center h-full px-4 pb-2 transition-all peer-focus:h-7  peer-focus:text-xs peer-valid:h-7  peer-valid:text-xs ">Telefon numarası</span>
            </label>
            
          </div>
          <button className="bg-yellow-400 text-indigo-500 flex items-center mt-5 w-full p-4 font-serif rounded justify-center hover:text-yellow-400 hover:bg-indigo-500">Telefon numarası ile devam et</button>
          <button className="flex text-blue-500 bg-gray-200 rounded items-center w-full gap-x-2 mt-4 p-4 hover:text-white hover:bg-blue-500"><BsFacebook size={20}/><span className="mx-auto">Facebook ile devam et</span></button>
        </div>

      </div>
    </div>

  )
}


