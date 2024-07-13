import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import CountUp from 'react-countup';
import axios from 'axios';
const InfandForm = () => {
    const [check, setCheck] = useState(false)
    const [message, setMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const messageText = `Name: ${message}\nPhone Number: ${phoneNumber}`;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = '7358049875:AAHaRei9l_v6d95lI_qynvuOtGDFVr0pqLw';
        const chatId = '6106205006';

        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        try {
            await axios.post(url, {
                chat_id: chatId,
                text: messageText,

            });
            setMessage('');
            setPhoneNumber('')
            alert('your message sent succesfuly')
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
    const checking = () => {
        setCheck(!check)
    }
    return (
        <div className='max-w-[1430px] infandform m-auto pt-[100px] pb-[6rem]' id='form'>
            <div className="infWithNumbers flex justify-between flex-col gap-[50px] lg:gap-[0px] lg:flex-row">
                <div className='text-center flex flex-col'>
                    <span className='headlineFont numberInfs text-[65px] text-custom-gold'>
                        2.6 га
                    </span>
                    <span className='text-[22px] text-[white] font-montserrat textInfs'>ПЛОЩАДЬ ОБЪЕКТА</span>
                </div>
                <div className='text-center'>
                    <p className='headlineFont text-[65px] text-custom-gold numberInfs'><CountUp start={0} end={2} duration={3} /> </p>
                    <p className='text-[22px] text-[white] font-montserrat textInfs'>ОЧЕРЕДИ</p>
                </div>
                <div className='text-center'>
                    <p className='headlineFont text-[65px] text-custom-gold numberInfs'><CountUp start={0} end={200} duration={2} /></p>
                    <p className='text-[22px] text-[white] font-montserrat textInfs'>КОЛ-ВО КВАРТИР</p>
                </div>
                <div className='text-center'>
                    <p className='headlineFont text-[65px] text-custom-gold numberInfs'><CountUp start={0} end={5} duration={1} /></p>
                    <p className='text-[22px] text-[white] font-montserrat textInfs'>ЭТАЖНОСТЬ</p>
                </div>
            </div>
            <div className="formPart text-center mt-[200px] max-w-[1050px] m-auto px-[20px]">
                <h1 className='text-[50px] formHeading headlineFont text-[#E6CE9E] font-[500]'>Получить подробную консультацию</h1>
                <form className='flex flex-wrap gap-[40px] justify-center lg:gap-[0px] lg:justify-between mt-[50px]'>
                    <input type="text" placeholder='Ваше имя' required value={message} onChange={(e) => setMessage(e.target.value)} className='formInputName outline-none font-montserrat bg-transparent border-b border-gray-300 text-white font-[500] placeholder-gray-300 text-[20px] focus:outline-none focus:border-gray-500 w-[340px]' />
                    <input type="text" placeholder='Телефон' required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='formInputPhone outline-none font-montserrat bg-transparent border-b text-[20px] font-[500] border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-gray-500 w-[340px]' />
                    <button onClick={handleSubmit} className='text-[16px] font-Inter flex items-center gap-[20px] text-[white] font-[400]' >Отправить <span className='w-[53px] h-[53px] border border-custom-gold rounded rounded-[50%] inline-block'><IoIosArrowRoundForward className='m-auto mt-[35%] text-white' /></span></button>

                </form>
                <div className="radio text-start font-montserrat text-[16px] mt-[30px] flex gap-[10px] items-center">
                    <div className={`${check ? 'bg-custom-gold' : 'bg-transparet'} radiobek transition duration-1000 w-[30px] h-[30px] border border-1 border-custom-gold rounded-[50%]`} onClick={checking}></div>
                    <p className='text-white text-start text-[19px] userAgreement'>Я согласен на обработку <span className='text-custom-gold'> персональных данных</span></p>
                </div>
            </div>
        </div>
    )
}

export default InfandForm