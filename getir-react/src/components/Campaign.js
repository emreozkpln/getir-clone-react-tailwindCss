import React from 'react'
import Banners from '../api/banners.json'
import { useState,useEffect } from 'react'
import Slider from "react-slick";

export default function Campaign() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

    const [banners, setbanners] = useState([])

    useEffect(() => {
      setbanners(Banners)
    }, [])
    
  return (
    <div className='container mx-auto max-w-6xl py-7'>
      <h3 className='text-sm font-bold py-2'>Kampanyalar</h3>
      <Slider {...settings} className="-mx-2">
          {banners.length && banners.map((banner)=>( 
            <div key={banner.id} className='px-2'>
              <img src={banner.image}/>
            </div>
          ))}
      </Slider>
    </div>
  )
}
