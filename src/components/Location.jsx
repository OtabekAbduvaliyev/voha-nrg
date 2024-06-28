import React from 'react'
import location from '../assets/Rectangle 13.png'
import buildingView from '../assets/Rectangle 14.png'
const Location = () => {
    return (
        <>
        <div className='flex items-center gap-[80px] text-center justify-center lg:text-start lg:justify-start flex-wrap lg:flex-nowrap pb-[100px]'>
            <div className="locationImg ">
                <img src={location} alt="" className='max-w-[834px] w-[100%]   ' />
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