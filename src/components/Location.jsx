import React from 'react'
import location from '../assets/Rectangle 13.png'
import buildingView from '../assets/Rectangle 14.png'
const Location = () => {
    return (
        <>
        <div className='flex items-center gap-[180px] text-center justify-center lg:text-start lg:justify-start flex-wrap lg:flex-nowrap pb-[100px]'>
        <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.3760271762148!2d69.28099282326417!3d41.292583556050126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4353b1aa6f%3A0x146da840179c8ff9!2sNRG%20OYBEK%20(by%20NRG)!5e0!3m2!1sen!2s!4v1719560445567!5m2!1sen!2s"   className='h-[100vh] lg:w-[700px] md:w-[450px] w-[380px] 2xl:w-[100vh]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            <div className="locationInf">
                <h1 className='headlineFont text-[40px] text-custom-dark-blue font-[500]'>РАСПОЛОЖЕНИЕ</h1>
                <p className='text-[18px] text-[#494949] font-Inter'>Престижный Мирзо-Улугбекский район, <br /> ниже улица "Циолковского". <br />
                    <span className='text-custom-gold'>
                    Малоэтажная застройка, близкое <br /> расположение к транспортным развязкам, <br />
                    </span>
                    при этом отсутствие шума от большого <br /> потока транспорта, своеобразный зеленый <br /> оазис в сердце городской суеты.</p>
            </div>
        </div>
        <div className="defImg pb-[100px]">
            <img src={buildingView} alt="" className='w-[100%]'/>
        </div>
        </>
    )
}

export default Location