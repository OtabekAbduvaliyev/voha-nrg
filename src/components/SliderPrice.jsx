
import { Carousel } from 'antd';
import { Trans, useTranslation } from 'react-i18next';
const SliderPrice = () => {
  const { t } = useTranslation()

  return (
    <div className='pt-[250px] pb-[72px] priceS'>

      <Carousel autoplay infinite={true} autoplaySpeed={3000} draggable={true} dotPosition="bottom" dots={{ className: 'custom-dots' }}>
        <div>
          <div className="sliderPrice text-[Inter] m-auto max-w-[1430px]  rounded rounded-[20px] pb-[120px]  text-custom-dark-blue">

            <div className="card bg-white rounded rounded-[40px] py-[40px] px-[56px] font-montserrat">
              <h1 className='text-[50px]  headlineFont sliderPriceHeading'>{t('usefulOffer')}</h1>
              <h3 className='text-[22px] font-semibold font-montserrat mb-2 uls'>{t('pricePersentage')}</h3>
              <h1 className='text-[28px] font-semibold sliderPriceSmallH mb-2'>{t('comboOffer')}   </h1>
              <h3 className='text-[22px] font-semibold font-montserrat uls mb-2'>•
                {t('parkingSklat')}
              </h3>
              <h2 className='text-[28px] font-semibold mb-2 sliderPriceSmallH'>{t('paymentTerms')} </h2>
              <ul className='text-[22px] uls  font-semibold mb-4'>
                <li>{t('minimalBadal')} </li>
                <li>{t('discount1')} </li>
                <li>{t('discount2')} </li>
                <li>{t('discount3')} </li>
                <li>{t('discount4')} </li>
              </ul>
              <p className='font-montserrat text-[20px] mb-4 italianprice'>{t('extraWordSlider')}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="sliderPrice text-[Inter] m-auto max-w-[1430px]  rounded rounded-[20px] pb-[120px]  text-custom-dark-blue">

            <div className="card bg-white rounded rounded-[40px] py-[40px] px-[56px] font-montserrat">
              <h1 className='text-[50px]  headlineFont sliderPriceHeading'>{t('usefulOffer')}</h1>
              <h3 className='text-[22px] font-semibold font-montserrat mb-2 uls'>{t('pricePersentage')}</h3>
              <h1 className='text-[28px] font-semibold sliderPriceSmallH mb-2'>{t('comboOffer')}   </h1>
              <h3 className='text-[22px] font-semibold font-montserrat uls mb-2'>•
                {t('parkingSklat')}
              </h3>
              <h2 className='text-[28px] font-semibold mb-2 sliderPriceSmallH'>{t('paymentTerms')} </h2>
              <ul className='text-[22px] uls  font-semibold mb-4'>
                <li>{t('minimalBadal')} </li>
                <li>{t('discount1')} </li>
                <li>{t('discount2')} </li>
                <li>{t('discount3')} </li>
                <li>{t('discount4')} </li>
              </ul>
              <p className='font-montserrat text-[20px] mb-4 italianprice'>
                <Trans i18nKey="extraWordSlider">
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </Carousel>

    </div>
  );
}

export default SliderPrice;
