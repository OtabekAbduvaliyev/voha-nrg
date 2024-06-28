import React from 'react'
import cityHouseImg1 from '../assets/Rectangle 43.png';
import cityHouseImg2 from '../assets/Rectangle 23.png';
import { IoIosArrowRoundForward } from 'react-icons/io';

const CityHouse = () => {
    return (
        <div className='bg-custom-dark-blue'>
            <div className="firstBlock mt-[100px]">
                <img src={cityHouseImg1} alt="" />
            </div>
            <div className="secondBlock max-w-[1190px] m-auto flex justify-between mt-[100px] items-center flex-wrap lg:flex-nowrap px-[15px]">
                <div className="secondBlockHeadline">
                    <h1 className='text-[120px] marianna text-custom-gold'>City house</h1>
                    <h1 className='headlineFont text-[40px] font-[500] text-[white]  ml-[190px] mt-[-50px]'>Квартира со своим двориком</h1>
                </div>
                <div className="inf mt-[100px]">
                    <p className='text-[16px] text-[white] font-Inter'>Для любителей частной дворовой территории, в ЖК <br /> NRG VOHA будут квартиры с выходом из гостиной <br /> прямо на зеленую лужайку. <br /> <br />

                        Встречи с друзьями, посиделки в большом кругу <br /> семьи станут приятнее и разнообразнее. На <br /> территории хватит места и для собственной <br /> оранжереи и для игр детей и для многого другого.</p>
                </div>
            </div>
            <div className="thiridBlock mt-[100px] pb-[50px] lg:pb-[0px]">
                <div className="secondesc flex items-center max-w-[1280px] ml-auto justify-between px-[10px] lg:px-[0px] flex-wrap md:flex-nowrap mt-[90px]">
                    <div className="indesc text-[white] text-[16px] font-Inter mr-[100px]">
                        <h1 className='text-[40px] headlineFont'>Lounge - пространство</h1>
                        <p className='mt-[50px]'>Эти комфортные приватные террасы, находящиеся <br /> на последних этажах комплекса, могут быть <br /> преобразованы в лаунж-зоны, где можно <br />  насладиться свежим воздухом в любое время года и <br /> создать приятную атмосферу для отдыха.</p>
                    </div>
                    <div className="imgdesc">
                        <img src={cityHouseImg2} alt="" />
                    </div>
                </div>
            </div>
            <div className="fourthBlock bg-[white] pt-[10px]">
            <div className="fromPart text-center mt-[200px] max-w-[850px] m-auto px-[20px] ">
            <h1 className='text-[40px] headlineFont font-[500] text-custom-dark-blue '>Получить подробную консультацию</h1>
            <form className='flex  justify-center md:justify-between mt-[50px] flex-wrap md:flex-wrap gap-[20px] md:gap-[0px]'>
                <input type="text" placeholder='Ваше имя' className='outline-none bg-transparent border-b border-gray-300 text-custom-dark-blue  placeholder-gray-300 focus:outline-none focus:border-gray-500 w-[265px]'/>
                <input type="text" placeholder='Телефон' className='outline-none bg-transparent border-b border-gray-300 text-custom-dark-blue  placeholder-gray-300 focus:outline-none focus:border-gray-500 w-[265px]'/>
                <button className='text-[16px] font-Inter flex items-center gap-[20px] text-custom-dark-blue  font-[400]' >Отправить <span className='w-[53px] h-[53px] border border-custom-gold rounded rounded-[50%] inline-block'><IoIosArrowRoundForward className='m-auto mt-[35%] text-custom-dark-blue '/></span></button>

            </form>
            <div className="radio text-start font-Inter text-[16px] mt-[30px] ">
                <p className='text-custom-dark-blue  text-center md:text-start'>Я согласен на обработку <span className='text-custom-gold'> персональных данных</span></p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default CityHouse