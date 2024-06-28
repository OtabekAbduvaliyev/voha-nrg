
import { Carousel } from 'antd';
const SliderPrice = () => {


  return (
    <Carousel autoplay infinite={true} autoplaySpeed={2000}>
      <div>
        <div className="slider text-[Inter] m-auto max-w-[1190px] pt-[150px] rounded rounded-[20px] pb-[120px] px-[20px] lg:px-[0px] text-custom-dark-blue">

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
        </div>
      </div>
      <div>
        <div className="slider text-[Inter] m-auto max-w-[1190px] pt-[150px] rounded rounded-[20px] pb-[120px] px-[20px] lg:px-[0px] text-custom-dark-blue">

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
        </div>
      </div>
    </Carousel>

  );
}

export default SliderPrice;
