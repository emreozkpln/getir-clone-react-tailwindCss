import {BsGlobe2} from "react-icons/bs"
import {AiOutlineUser} from "react-icons/ai"
import {FiUserPlus} from "react-icons/fi"

export default function Header() {
  return (
      <div className="bg-indigo-600 h-11 flex items-center justify-around">
        <div className="flex gap-6">
            <a href="#" className="text-gray-200 hover:bg-transparent hover:transition-all hover:text-yellow-300 text-lg rounded p-1">getir</a>
            <a href="#" className="text-gray-200 hover:bg-transparent hover:transition-all hover:text-yellow-300 text-lg rounded p-1">getiryemek</a>
            <a href="#" className="text-gray-200 hover:bg-transparent hover:transition-all hover:text-yellow-300 text-lg rounded p-1">getirbüyük</a>
            <a href="#" className="text-gray-200 hover:bg-transparent hover:transition-all hover:text-yellow-300 text-lg rounded p-1">getirsu</a>
            <a href="#" className="text-gray-200 hover:bg-transparent hover:transition-all hover:text-yellow-300 text-lg rounded p-1">getirçarşı</a>
        </div>
        <div className="md:flex gap-6 hidden ">
          <div className="flex gap-2 items-center text-white hover:text-opacity-80 cursor-pointer"><BsGlobe2 size={20}/>Türkçe(TR)</div>
          <div className="flex gap-2 items-center text-white hover:text-opacity-80 cursor-pointer"><AiOutlineUser size={20}/>Giriş yap</div>
          <div className="flex gap-2 items-center text-white hover:text-opacity-80 cursor-pointer"><FiUserPlus size={20}/>Kayıt ol</div>
        </div>
        
      </div>
  )
}
