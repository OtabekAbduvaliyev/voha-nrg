import "./slider.css"

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import "swiper/css/autoplay"

export const Slider = () => {

  const swiper = useSwiper();

  return (
    <div className='w-[100%] h-auto bg-[#164247] flex items-center pt-[150px]'>
      <div className="w-[100%] h-auto m-auto flex justify-between absolute z-10 select-none" id="button_wrapper">
        <button className='slider_prev relative' onClick={() => swiper.slidePrev()}>
          <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.85317 5.29737e-07C7.85317 4.14214 4.33719 7.5 -2.1596e-07 7.5C4.33719 7.5 7.85317 10.8579 7.85317 15M0.560941 7.5L19 7.5" stroke="currentColor"></path>
          </svg>
        </button>

        <h2 className="text-[#fff] lg:text-[120px] md:text-[70px] m-auto marianna text-[50px] ">Дизайн и архитектура</h2>

        <button className='slider_next relative' onClick={() => swiper.slideNext()}>
          <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.1468 5.29737e-07C11.1468 4.14214 14.6628 7.5 19 7.5C14.6628 7.5 11.1468 10.8579 11.1468 15M18.4391 7.5L0 7.5" stroke="currentColor"></path>
          </svg>
        </button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        autoplay={true}
        loop={true}
        className='w-[100%] m-auto h-auto items-center'
      >
        <SwiperSlide className='m-auto'><img className="m-auto w-[100%] h-[100%]" src="https://voha.u-nrg.uz/img/design/3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='m-auto'><img className="m-auto w-[100%] h-[100%]" src="https://voha.u-nrg.uz/img/design/2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='m-auto'><img className="m-auto w-[100%] h-[100%]" src="https://voha.u-nrg.uz/img/design/1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='m-auto'><img className="m-auto w-[100%] h-[100%]" src="https://voha.u-nrg.uz/img/design/4.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};