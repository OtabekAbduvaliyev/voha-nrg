import React from 'react'
import { FaLocationDot } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {  IoIosArrowUp } from 'react-icons/io';
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'  // Optional: smooth scrolling behavior
        });
      };
    return (
        <>
            <div
                className='w-[100%] h-[400px] max-lg:h-[100vh] flex flex-col justify-evenly'
                style={{ backgroundImage: "url('https://voha.u-nrg.uz/img/service/bg.jpg')" }}
            >
                <div className='w-[80%] h-[60px] max-lg:w-[95%] mx-auto flex justify-between items-center'>
                    <h2 className='text-[#fff] text-[38px] max-lg:text-[16px] headlineFont'>Управляющая компания</h2>
                    <img className='max-lg:w-[40px] w-[120px]' src="https://voha.u-nrg.uz/img/logo_nrg.svg" alt="" />
                </div>
                <div className='w-[80%] h-[80px] max-lg:w-[95%] max-lg:h-auto mx-auto flex justify-between max-lg:flex-col max-lg:mt-auto'>
                    <div className='w-[23%] max-lg:w-[100%] max-lg:h-[36px] max-lg:my-[5px] h-[80px] bg-[#164247] flex items-center p-[20px]'>
                        <span className='text-[#E8C994] text-[18px] max-lg:text-[12px] font-bold'>24/7</span>
                        <p className='text-[#fff] text-[16px] font-medium ml-[20px]'>Забота</p>
                    </div>
                    <div className='w-[23%] max-lg:w-[100%] max-lg:h-[36px] max-lg:my-[5px] h-[80px] bg-[#164247] flex items-center p-[20px]'>
                        <img className='max-lg:w-[15px]' src="https://voha.u-nrg.uz/img/service/1.svg" alt="" />
                        <p className='text-[#fff] text-[16px] font-medium ml-[20px]'>Собственный менеджер объекта</p>
                    </div>
                    <div className='w-[23%] max-lg:w-[100%] max-lg:h-[36px] max-lg:my-[5px] h-[80px] bg-[#164247] flex items-center p-[20px]'>
                        <img className='max-lg:w-[15px]' src="https://voha.u-nrg.uz/img/service/2.svg" alt="" />
                        <p className='text-[#fff] text-[16px] font-medium ml-[20px]'>max-lgS-уведомления</p>
                    </div>
                    <div className='w-[23%] max-lg:w-[100%] max-lg:h-[36px] max-lg:my-[5px] h-[80px] bg-[#164247] flex items-center p-[20px]'>
                        <img className='max-lg:w-[15px]' src="https://voha.u-nrg.uz/img/service/3.svg" alt="" />
                        <p className='text-[#fff] text-[16px] font-medium ml-[20px]'>Прозрачные тарифы</p>
                    </div>
                </div>
            </div>
            <div className='max-w-[1200px] ml-auto flex justify-between items-end mb-[20px] flex-wrap lg:flex-nowrap'>
                <div className="footerinf mt-[40px]">
                    <h1 className='text-[40px] text-custom-dark-blue headlineFont'>Контакты</h1>
                    <div className="locations flex flex-col gap-[23px] mt-[24px]">
                        <div className="location flex gap-[10px]">
                            <FaLocationDot className='text-[20px] text-custom-gold' />
                            <div>
                                <h1 className='headlineFont text-[16px] text-[#5E635F]'>Отдел продаж</h1>
                                <p className='text-[14px] font-montserrat font-[500] mt-[7px]'>г. Ташкент, ул. Ойбека 38а, БЦ Авалон, 1-этаж</p>
                            </div>
                        </div>
                        <div className="location flex gap-[10px]">
                            <FaLocationDot className='text-[20px] text-custom-gold' />
                            <div>
                                <h1 className='headlineFont text-[16px] text-[#5E635F]'>Отдел продаж</h1>
                                <p className='text-[14px] font-montserrat font-[500] mt-[7px]'>г. Ташкент, ул. Ойбека 38а, БЦ Авалон, 1-этаж</p>
                            </div>
                        </div>
                        <div className="location flex gap-[10px]">
                            <FaLocationDot className='text-[20px] text-custom-gold' />
                            <div>
                                <h1 className='headlineFont text-[16px] text-[#5E635F]'>Отдел продаж</h1>
                                <p className='text-[14px] font-montserrat font-[500] mt-[7px]'>г. Ташкент, ул. Ойбека 38а, БЦ Авалон, 1-этаж</p>
                            </div>
                        </div>
                        <div className="location flex gap-[10px]">

                            <FaLocationDot className='text-[20px] text-custom-gold' />
                            <div>
                                <h1 className='headlineFont text-[16px] text-[#5E635F]'>Отдел продаж</h1>
                                <p className='text-[14px] font-montserrat font-[500] mt-[7px]'>г. Ташкент, ул. Ойбека 38а, БЦ Авалон, 1-этаж</p>
                            </div>
                        </div>
                    </div>
                    <div className="phone mt-[23px]">
                        <div className="location flex gap-[10px]">

                            <FaPhoneAlt className='text-[20px] text-custom-gold' />
                            <div>
                                <h1 className='headlineFont text-[16px] text-[#5E635F]'>Телефон</h1>
                                <p className='text-[24px] font-montserrat font-[500] mt-[2px] text-[#575757]'>1060</p>
                            </div>
                        </div>
                    </div>
                    <div className="socialMedia flex items-center justify-between max-w-[490px] mt-[40px]">
                        <div className="icons flex text-[22px]  gap-[15px]">
                            <div className='p-[8px] bg-custom-dark-blue rounded-[50%]'>
                                <FaFacebook className='text-custom-gold' />
                            </div>
                            <div className='p-[8px] bg-custom-dark-blue rounded-[50%]'>
                                <FaTelegram className='text-custom-gold' />
                            </div>
                            <div className='p-[8px] bg-custom-dark-blue rounded-[50%]'>
                                <RiInstagramFill className='text-custom-gold' />
                            </div>
                        </div>
                        <div className="toTopBtn">
                        <button className='text-[16px] font-Inter flex items-center gap-[20px] text-[white] font-[400]' onClick={scrollToTop}>Отправить <span className='w-[53px] h-[53px] border border-custom-gold rounded rounded-[50%] inline-block'><IoIosArrowUp className='m-auto mt-[35%] text-custom-gold'/></span></button>

                        </div>
                    </div>
                </div>
                    <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.3760271762148!2d69.28099282326417!3d41.292583556050126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4353b1aa6f%3A0x146da840179c8ff9!2sNRG%20OYBEK%20(by%20NRG)!5e0!3m2!1sen!2s!4v1719560445567!5m2!1sen!2s"   className='h-[100vh] lg:w-[600px] md:w-[450px] w-[380px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            </div>
        </>
    )
}

export default Footer