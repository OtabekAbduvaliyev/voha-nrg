import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { MdApartment } from "react-icons/md";
import gardenImg from '../assets/Rectangle 20.png'
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
            logo: <MdApartment className='text-[#BCB28F] text-[36px]' />,
            title: (
                <>
                    Межкомнатные <br />  стены из газоблока
                </>
            )
        },
        {
            logo: <MdApartment className='text-[#BCB28F] text-[36px]' />,
            title: (
                <>
                    Фасад из натурального <br /> камня LimeStone (Турция) <br /> и алюминиевых панелей <br /> SEVALCON (Сербия)
                </>
            )
        },
        {
            logo: <MdApartment className='text-[#BCB28F] text-[36px]' />,
            title: (
                <>
                    Напольные<br />
                    конвекторы
                </>
            )
        },
        {
            logo: <MdApartment className='text-[#BCB28F] text-[36px]' />,
            title: (
                <>
                    Высота  <br /> потолков 3,3 м
                </>
            )
        },
        {
            logo: <MdApartment className='text-[#BCB28F] text-[36px]' />,
            title: (
                <>
                    Витражные, алюминиевые <br /> окна REYNARS (Бельгия)
                </>
            )
        },
    ]
    return (
        <>
        <div className='max-w-[1190px] m-auto flex flex-wrap md:flex-nowrap  justify-center md:justify-between items-center py-[110px]'>
            <div className="comfortsInf text-white text-[16px]"> <span className='text-[16px] font-[500] text-custom-gold'> NRG VOHA  - </span>
                станет одним из самых ярких <br /> проектов Ташкента уже благодаря последним <br /> <span className='text-[#ACB9A1]'>тенденциям современной архитектуры</span> и <br /> соответствию самым <span className='text-[#ACB9A1]'> высоким стандартам <br /> качества.</span> <br /> <br />
                Фасад здания - настоящий пример стиля, <br /> грации и изысканности.
            </div>
            <div className="comfortsCards grid lg:grid-cols-3 grid-cols-2  gap-[40px] mt-[50px] md:mt-[0px]">
                {comforts.map((cardItem) => {
                    return (
                        <div className="card flex items-center ">
                            <div className="cardLogo">
                                {cardItem.logo}
                            </div>
                            <div className="cardTitle ">
                                <h3 className='text-[15px] font-Inter text-white'>{cardItem.title}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="fromPart text-center mt-[100px] max-w-[850px] m-auto px-[20px]">
            <h1 className='text-[40px] headlineFont text-[#E6CE9E] font-[500]'>Записаться на просмотр</h1>
            <form className='flex justify-center md:justify-between mt-[50px] flex-wrap md:flex-wrap gap-[20px] md:gap-[0px]'>
                <input type="text" placeholder='Ваше имя' className='outline-none bg-transparent border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-gray-500 w-[265px]'/>
                <input type="text" placeholder='Телефон' className='outline-none bg-transparent border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-gray-500 w-[265px]'/>
                <button className='text-[16px] font-Inter flex items-center gap-[20px] text-[white] font-[400]' >Отправить <span className='w-[53px] h-[53px] border border-custom-gold rounded rounded-[50%] inline-block'><IoIosArrowRoundForward className='m-auto mt-[35%] text-white'/></span></button>

            </form>
            <div className="radio text-start font-Inter text-[16px] mt-[30px] ">
                <p className='text-white text-center md:text-start'>Я согласен на обработку <span className='text-custom-gold'> персональных данных</span></p>
            </div>
        </div>
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
        <img src={gardenImg} alt="Garden" className='h-[500px] w-[100%] mx-auto'/>
    </div>
</section>


        </>
    )
}

export default Comforts