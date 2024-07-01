import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import CountUp from 'react-countup';
const InfandForm = () => {
  return (
    <div className='max-w-[1190px] m-auto pt-[100px] pb-[100px]' id='form'>
        <div className="infWithNumbers grid lg:grid-cols-4 justify-between  grid-cols-2 gap-[20px]">
            <div className='text-center'>
                <p className='headlineFont text-[50px] text-custom-gold'><CountUp start={0} end={2.6} duration={3} /> </p>
                <p className='text-[18px] text-[white]'>ПЛОЩАДЬ ОБЪЕКТА</p>
            </div>
            <div className='text-center'>
                <p className='headlineFont text-[50px] text-custom-gold'><CountUp start={0} end={2} duration={3}/> </p>
                <p className='text-[18px] text-[white]'>ОЧЕРЕДИ</p>
            </div>
            <div className='text-center'>
                <p className='headlineFont text-[50px] text-custom-gold'><CountUp start={0} end={200}  duration={2}/></p>
                <p className='text-[18px] text-[white]'>КОЛ-ВО КВАРТИР</p>
            </div>
            <div className='text-center'>
                <p className='headlineFont text-[50px] text-custom-gold'><CountUp start={0} end={5} duration={1}/></p>
                <p className='text-[18px] text-[white]'>ЭТАЖНОСТЬ</p>
            </div>
        </div>
        <div className="fromPart text-center mt-[200px] max-w-[850px] m-auto px-[20px]">
            <h1 className='text-[40px] headlineFont text-[#E6CE9E] font-[500]'>Получить подробную консультацию</h1>
            <form className='flex justify-center md:justify-between mt-[50px] flex-wrap md:flex-wrap gap-[20px] md:gap-[0px]'>
                <input type="text" placeholder='Ваше имя' className='outline-none bg-transparent border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-gray-500 w-[265px]'/>
                <input type="text" placeholder='Телефон' className='outline-none bg-transparent border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-gray-500 w-[265px]'/>
                <button className='text-[16px] font-Inter flex items-center gap-[20px] text-[white] font-[400]' >Отправить <span className='w-[53px] h-[53px] border border-custom-gold rounded rounded-[50%] inline-block'><IoIosArrowRoundForward className='m-auto mt-[35%] text-white'/></span></button>

            </form>
            <div className="radio text-start font-Inter text-[16px] mt-[30px] ">
                <p className='text-white text-center md:text-start'>Я согласен на обработку <span className='text-custom-gold'> персональных данных</span></p>
            </div>
        </div>
    </div>
  )
}

export default InfandForm