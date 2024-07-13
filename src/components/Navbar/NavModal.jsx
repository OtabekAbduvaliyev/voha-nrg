import React from 'react'
import { FaFacebook, FaTelegram } from 'react-icons/fa6';
import { GoDownload } from 'react-icons/go';
import { IoClose } from "react-icons/io5";
import { RiInstagramFill } from 'react-icons/ri';
const NavModal = ({ setOpen }) => {
    return (
        <div className='absolute navmodal bg-custom-dark-blue flex flex-col h-[100vh] w-[50%]  mt-[-20px] p-[5rem] justify-between '>
            <div className=" flex">
                <button onClick={() => setOpen(false)} className='flex closeButton  items-center text-[16px] text-custom-gold font-montserrat'>
                    <IoClose className='text-[22px]' />
                    Закрыть
                </button>
            </div>
            <div className="asOfNav flex flex-col text-[30px] headlineFont font-[500]  text-[#e8c994] gap-[20px]">
                <a href=''>О ПРОЕКТE</a>
                <a href=''>РАСПОЛОЖЕНИЕ</a>
                <a href=''>
                    ДИЗАЙН И АРХИТЕКТУРА
                </a>
                <a href=''>
                    ДВОРОВОЕ ПРОСТРАНСТВО
                </a>
                <a href=''>
                    ПЛАНИРОВОЧНЫЕ РЕШЕНИЯ
                </a>
                <a href=''>CITY HOUSE</a>
                <a href=''>
                    ХОД СТРОИТЕЛЬСТВА
                </a>
                <a href=''>
                    КОНТАКТЫ
                </a >
            </div>
            <div className="navItems flex flex-col  items-center justify-center">
                <div className="lanaguge flex gap-[20px] pb-[20px] ">

                <h1 className='text-[17px] font-montserrat text-[#e8c994]  cursor-pointer'>Ru</h1>
                <h1 className='text-[17px] font-montserrat text-[#e8c994] cursor-pointer'>Uz</h1>
                </div>
                <div className={`navButton2 pb-[20px]`} >
                    <a href="#form">
                        <button className="text-white  font-[montserrat] text-[18px] w-[175px] h-[45.89px] border border-[#e8c994] rounded-[28px] hover:bg-custom-gold transition duration-1000">
					Заказать звонок
                        </button>
                    </a>
                </div>
                <div className="buttons flex gap-[15px]">

                    <div className="navButton3 font-montserrat ">
                        <a target='_blank' href="https://earth.google.com/web/search/NRG+OYBEK+(by+NRG),+Tashkent/@41.29287917,69.2817476,433.85510856a,469.34457918d,35.00178989y,102.95218889h,60t,0r/data=CocBGl0SVwolMHgzOGFlOGI0MzUzYjFhYTZmOjB4MTQ2ZGE4NDAxNzljOGZmORnZTd8he6VEQCFnCGxzCFJRQCocTlJHIE9ZQkVLIChieSBOUkcpLCBUYXNoa2VudBgBIAEiJgokCTvL1ZwUYkVAEfB2ctkmX0VAGcfJqi3YqVFAIWXYuKZcplFAOgMKATA">
                            <button className="navButton3 text-[15px] w-[54px] h-[54px] font-montserrat border border1 border-[#C8C994] rounded-[50%] text-white p-[5px] hover:bg-custom-gold transition duration-1000">
                                3D <br /> тур
                            </button>
                        </a>
                    </div>
                    <div className="navButton4 ">
                        <a href="../pdf/Resume.pdf" download="Resume.pdf">
                            <button className="navButtonInstal  text-[25px] w-[54px] h-[54px] border border1 border-[#C8C994] rounded-[50%] text-white p-[5px] hover:bg-custom-gold transition duration-1000">
                                <GoDownload className="m-auto " />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="socialMedia flex items-center justify-between max-w-[490px] mt-[40px]">
                <div className="icons flex text-[22px]  gap-[15px]">
                    <div className='p-[14px] bg-custom-gold  rounded-[50%] s-medias'>
                        <a target='_blank' href="https://www.facebook.com/nrg.uzbekistan">
                            <FaFacebook className='text-custom-dark-blue' />
                        </a>
                    </div>
                    <div className='p-[14px] bg-custom-gold  rounded-[50%] s-medias'>
                        <a target='_blank' href="https://t.me/nrguzb">
                            <FaTelegram className='text-custom-dark-blue' />
                        </a>
                    </div>
                    <div className='p-[14px] bg-custom-gold  rounded-[50%] s-medias'>
                        <a target='_blank' href="https://www.instagram.com/nrg_uzbekistan/">
                            <RiInstagramFill className='text-custom-dark-blue' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavModal