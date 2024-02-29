import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Mainslider.css';

function Mainslider(){
  const   settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
};


  return (
    
    <div className='mainslider'>
        <Slider {...settings}>
      <div>
        <div>
          <img className="w-full h-full" src='banner1.jpg' alt=''/>
        </div>
       
      </div >
      <div >
      <div>
          <img className="w-full h-full" src='banner2.jpg' alt=''/>
        </div>
      </div>
      <div >
      <div>
          <img className="w-full h-full" src='banner3.jpg' alt=''/>
        </div>
      </div>
      
    </Slider>
    </div>
  )
}


export default Mainslider