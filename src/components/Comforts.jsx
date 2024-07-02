import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { MdApartment } from "react-icons/md";
import gardenImg from '../assets/Rectangle 20.png'
import logo1 from '../assets/Frame (1).png'
import logo2 from '../assets/Frame (2).png'
import logo3 from '../assets/Frame (3).png'
import logo4 from '../assets/Frame (4).png'
import logo5 from '../assets/Frame.png'
import InfandForm from './InfandForm';
const Comforts = () => {
    const comforts = [
        {
            logo: <MdApartment className='text-[#BCB28F] text-[36px]' />,
            title: (
                <>
                    Кирпичные <br />
                    межквартирные стены
                </>
            )
        },
        {
            logo: <img src={logo1} alt="" />,
            title: (
                <>
                    Межкомнатные <br />  стены из газоблока
                </>
            )
        },
        {
            logo: <img src={logo2} alt="" />,
            title: (
                <>
                    Фасад из натурального <br /> камня LimeStone (Турция) <br /> и алюминиевых панелей <br /> SEVALCON (Сербия)
                </>
            )
        },
        {
            logo: <img src={logo3} alt="" />,
            title: (
                <>
                    Напольные<br />
                    конвекторы
                </>
            )
        },
        {
            logo: <img src={logo4} alt="" />,
            title: (
                <>
                    Высота  <br /> потолков 3,3 м
                </>
            )
        },
        {
            logo: <img src={logo5} alt="" />,
            title: (
                <>
                    Витражные, <br /> алюминиевые  окна <br /> REYNARS (Бельгия)
                </>
            )
        },
    ]
    return (
        <>
            <div className='max-w-[1350px] xl:px-[30px]  m-auto flex flex-wrap gap-[113px] md:flex-nowrap  justify-center md:justify-between items-center py-[110px] pr-[50px]'>
                <div className="comfortsInf text-white text-[16px]"> <span className='text-[16px] font-[500] text-custom-gold'> NRG VOHA  - </span>
                    станет одним из самых ярких <br /> проектов Ташкента уже благодаря последним <br /> <span className='text-[#ACB9A1]'>тенденциям современной архитектуры</span> и <br /> соответствию самым <span className='text-[#ACB9A1]'> высоким стандартам <br /> качества.</span> <br /> <br />
                    Фасад здания - настоящий пример стиля, <br /> грации и изысканности.
                </div>
                <div className="comfortsCards grid lg:grid-cols-3 grid-cols-2  gap-[40px] mt-[50px] md:mt-[0px]">
                    {comforts.map((cardItem) => {
                        return (
                            <div className="card flex items-start gap-[22px]">
                                <div className="cardLogo">
                                    {cardItem.logo}
                                </div>
                                <div className="cardTitle ">
                                    <h3 className='text-[15px] leading-[18px] font-Inter text-white'>{cardItem.title}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <InfandForm />
            <section className='mt-[200px] relative'>
                <div className="infs text-white flex flex-col md:flex-row items-center md:items-start absolute md:mt-[100px] mt-[20px] pl-[20px] md:pl-[55px] space-y-4 md:space-y-0">
                    <h1 className='text-[20px] md:text-[40px] headlineFont font-[500]'>
                        ЖИЗНЬ В <br /> ОКРУЖЕНИИ
                    </h1>
                    <h1 className='marianna text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px]'>
                        Природы
                    </h1>
                </div>
                <div className="garddenImg w-full">
                    <img src={gardenImg} alt="Garden" className='h-[500px] w-[100%] mx-auto' />
                </div>
            </section>


        </>
    )
}

export default Comforts