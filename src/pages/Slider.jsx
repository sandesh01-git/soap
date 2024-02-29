import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';

function SliderComponent(){
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
          <img className=" m-2 bg-origin-padding:5px w-50 h-80 transition-transform duration-500 transform hover:scale-110" src='https://i.pinimg.com/236x/a1/d9/5e/a1d95ea7d68a0e2829585962d1b38c16.jpg' alt=''/>
        </div>
       
      </div >
      <div >
        <div>
          <img className='m-2 bg-origin-padding:5px w-50 h-80 transition-transform duration-500 transform hover:scale-110' src='https://i.pinimg.com/236x/15/eb/71/15eb71d4a43cc8a85d029b718cb66377.jpg' alt=''/>
        </div>
        
      </div>
      <div >
        <div>
          <img className="m-2 bg-origin-padding:5px w-50 h-80 transition-transform duration-500 transform hover:scale-110" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWrrVxaqmnMzAyF9oY_3ACR1bl5Xa8SAwzjg&usqp=CAU' alt=''/>
          <p className='text-xl'>Most used and world wide famous soap
                                      Rs.50
          </p>
        </div>
       
      </div>
      <div >
        <div>
          <img className="m-2 bg-origin-padding:5px w-50 h-80 transition-transform duration-500 transform hover:scale-110" src='https://i.pinimg.com/236x/16/af/98/16af98e6c7c51658300fbd4de89212aa.jpg' alt=''/>
        </div>
        
      </div>
      <div >
        <div>
          <img className="m-2 bg-origin-padding:5px w-50 h-80 transition-transform duration-500 transform hover:scale-110" src='https://i.pinimg.com/236x/20/f9/6f/20f96fdbad7310d571850041eb4b37c4.jpg' alt=''/>
        </div>
      
      </div>
      
    </Slider>
  )
}


export default SliderComponent