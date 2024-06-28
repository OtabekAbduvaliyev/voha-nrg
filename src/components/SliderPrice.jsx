import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderPrice = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
  };

  return (
    <div className="slider text-[Inter] m-auto max-w-[1190px] pt-[150px] rounded rounded-[20px] pb-[120px] px-[20px] lg:px-[0px] text-custom-dark-blue">
      {/* <Slider {...settings} autoplay arrows={false}> */}
        <div className="card bg-white rounded rounded-[20px] p-[40px]">
          <h1 className='text-[38px]  mb-4 headlineFont'>Выгодные предложения</h1>
          <h3 className='text-lg font-semibold mb-2'>• При 100% оплате 15% + NRG CLUB CARD</h3>
          <h2 className='text-xl font-semibold mb-2'>Условия по рассрочке:</h2>
          <ul className='text-lg font-semibold mb-4'>
            <li>• Минимальный взнос от 25%</li>
            <li>• При 30% оплате скидка 3%</li>
            <li>• При 50% оплате скидка 6%</li>
            <li>• При 70% оплате скидка 9%</li>
            <li>• Остаток до АВВЭ</li>
          </ul>
          <p className='font-montserrat text-lg mb-4'>Подробности по телефону: 1060 (с мобильного бесплатно) и в офисах продаж NRG.</p>
        </div>
        {/* Add more slides here if needed */}
        
      {/* </Slider> */}
    </div>
  );
}

export default SliderPrice;
