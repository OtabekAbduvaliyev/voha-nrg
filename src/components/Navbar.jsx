import React, { useEffect, useState } from 'react';
import { HiBars3 } from "react-icons/hi2";
import { GoDownload } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import navLogo from '../assets/bc089832ff449a8a09ed4ee43cbc51a1.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 20) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const handleMenu = () => {
        if (window.innerWidth < 1024) {
            setOpen(!open);
        }
    };

    return (
        <div className={`fixed top-0 left-0 z-[999] w-[100%] bg-custom-dark-blue py-[10px] transition-all duration-300 ${visible ? '' : '-translate-y-full'} ${!scroll ? 'lg:bg-transparent' : 'lg:bg-[#164147] border border-b-1 border-b-custom-gold border-l-0 border-r-0 border-t-0'} ${!open ? 'bg-none' : 'bg-custom-dark-blue'}`}>
            <nav className={`max-w-[1190px] m-auto flex flex-wrap items-center justify-between xl:px-[0px] ${open ? 'px-[0px]' : 'px-[5px]'}`}>
                <div className="navFirstBlock flex gap-[15px]">
                    <div className="navButton1">
                        <button onClick={handleMenu} className="text-[30px] w-[79px] h-[42px] inline-block rounded-[18px] bg-[#E8C992]">
                            <HiBars3 className="m-auto" />
                        </button>
                    </div>
                    <div className={`navButton2 `}>
                        <button className="text-white font-[montserrat] text-[15px] w-[153px] h-[43px] md:w-[183px] border border-[#C5C3B6] rounded-[28px] hover:bg-custom-gold transition duration-1000">
                            Выбор квартир
                        </button>
                    </div>
                    <div className="navButton3 font-montserrat hidden md:block">
                        <button className="text-[12px] w-[42px] h-[42px] border border1 border-[#C5C3B6] rounded-[50%] text-white">
                            3D тур
                        </button>
                    </div>
                    <div className="navButton4 hidden md:block">
                        <button className="w-[42px] h-[42px] border border1 border-[#C5C3B6] rounded-[50%] text-white">
                            <GoDownload className="m-auto" />
                        </button>
                    </div>
                </div>
                <div className="navSecondBlock flex justify-center">
                    <div className="navLogo w-[118px] h-[65px]">
                        <img src={navLogo} alt="Logo" />
                    </div>
                </div>
                <div className={`navThridBlock text-white font-montserrat flex items-center gap-[20px] lg:gap-[40px] ${open ? 'absolute mt-[276px] w-[100%] py-[30px] flex flex-col items-startx bg-custom-dark-blue px-[0px]' : 'hidden'} lg:flex`}>
                    <select id="options" className="bg-transparent focus:outline-none sm:text-sm p-2">
                        <option value="option1">Ru</option>
                        <option value="option2">Eng</option>
                        <option value="option3">Uzb</option>
                        <option value="option4">Kz</option>
                    </select>
                        <a target='_blank' href="https://zoom.us/">
                    <div className="callBlock flex items-center gap-[5px]">
                        <IoCallOutline className="text-[28px]" />
                        <h1 className="text-[21px]">1060</h1>
                    </div>
                        </a>
                    <div className="navButton">
                        <button className="text-white font-[montserrat] text-[15px] w-[183px] h-[43px] border border1 border-[#C5C3B6] rounded-[28px]">
                            Заказать звонок
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
