import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';


function Slider2(){
    const   settings = {
          dots: true,
          infinite: true,
          speed: 600,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          autoplay:true,
      };
  
  
    return (
      
      <Slider {...settings}>
        
        <div>
          <div>
            <img className=" m-5 bg-origin-padding:5px w-50 h-80 transition-transform duration-500 transform hover:scale-110" src='https://i.pinimg.com/236x/6e/d5/fb/6ed5fbd43f467be82f67408af17109df.jpg' alt=''/>
          </div>
         
        </div >
        <div >
          <div>
            <img className='m-5 bg-origin-padding:5px w-50 h-80 transition-transform duration-500 transform hover:scale-110' src='https://i.pinimg.com/236x/80/ff/b4/80ffb42d2c67369145845f5829d7aa95.jpg' alt=''/>
          </div>
          
        </div>
        <div >
          <div>
            <img className="m-5 bg-origin-padding:5px w-50 h-80 transition-transform duration-500 transform hover:scale-110" src='https://i.pinimg.com/236x/23/7d/63/237d6343609d6cf6f1450dee13b4de0d.jpg' alt=''/>

          </div>
         
        </div>
        <div >
          <div>
            <img className="m-5 bg-origin-padding:5px w-50 h-80 transition-transform duration-500 transform hover:scale-110" src='https://i.pinimg.com/236x/7b/75/a1/7b75a1f604424f837b9dafc46f7cb49d.jpg' alt=''/>
          </div>
          
        </div>
        <div >
          <div>
            <img className="m-5 bg-origin-padding:5px w-50 h-80 transition-transform duration-500 transform hover:scale-110" src='https://i.pinimg.com/236x/e6/92/64/e69264425a44b1cda30e3547c8eb6ae1.jpg' alt=''/>
          </div>
        
        </div>
        
      </Slider>
    )
  }
  
  

export default Slider2