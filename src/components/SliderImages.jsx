import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg from '../assets/4ed92c6c8b307612304862666403c926.jpg'
import sliderImg2 from '../assets/da7b85c2241f2379181994fcc8aca450 (1).jpg'
import sliderImg3 from '../assets/Rectangle 19.png'
import sliderImg4 from '../assets/Rectangle 18.png'
const SliderImages = () => {
  const [centerSlide, setCenterSlide] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    arrows: true,
    afterChange: current => setCenterSlide(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container max-w-4xl mx-auto my-8">
      <Slider {...settings}>
        <div className={`carousel-item bg-red-500 text-white flex items-center justify-center h-48 ${centerSlide === 0 ? 'focused' : ''}`}>
          <img src={sliderImg} alt="" />
        </div>
        <div className={`carousel-item bg-blue-500 text-white flex items-center justify-center h-48 ${centerSlide === 1 ? 'focused' : ''}`}>
        <img src={sliderImg2} alt="" />
        </div>
        <div className={`carousel-item bg-green-500 text-white flex items-center justify-center h-48 ${centerSlide === 2 ? 'focused' : ''}`}>
        <img src={sliderImg3} alt="" />
        </div>
        <div className={`carousel-item bg-green-500 text-white flex items-center justify-center h-48 ${centerSlide === 2 ? 'focused' : ''}`}>
        <img src={sliderImg} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderImages
