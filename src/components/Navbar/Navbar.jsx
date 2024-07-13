import React, { useEffect, useState } from 'react';
import { HiBars3 } from "react-icons/hi2";
import { GoDownload } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import NavModal from './NavModal';
import { RiLiveLine } from 'react-icons/ri';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [scroll, setScroll] = useState(false);
    const { t } = useTranslation()
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
        // if (window.innerWidth < 1024) {
        // }
        setOpen(true);
        console.log(open);
    };


    return (<>

        <div className={`fixed navbar top-0 left-0 z-[999] w-[100%] bg-transparet py-[20px] transition-all duration-300 ${visible ? '' : '-translate-y-full'} ${!scroll ? 'lbg-transparent' : 'bg-[#164147] border border-b-1 border-b-custom-gold border-l-0 border-r-0 border-t-0'}`}>
            {open ? <NavModal setOpen={setOpen} open={open} /> : ''}
            <nav className="nav max-w-[1430px] m-auto flex items-center justify-between ">
                <div className="navFirstBlock flex md:gap-[15px] items-center">
                    <div className="navButton1">
                        <button onClick={handleMenu} className="navButtonModal text-[30px] w-[112px] h-[54px] inline-block rounded-[48px] bg-[#E8C992]">
                            <HiBars3 className="m-auto" />
                        </button>
                    </div>
                    <button className='w-[66px] live h-[66px] border border-[#EDC893] rounded-full text-white shine-effect transition-all duration-500'>
                        <p className='text-[10px]'>Прямой</p>
                        <RiLiveLine className='m-auto' />
                        <p className='text-[10px]'>эфир</p>
                    </button>
                    <div className={`navButton2 `}>
                        <a href="#form">
                            <button className="text-white navButtonForm font-[montserrat] text-[18px] w-[200px] h-[54px] border border-[#C5C3B6] bg-[#1642474d] rounded-[28px] hover:bg-custom-gold transition duration-1000">
                                {t('selectHouse')}
                            </button>
                        </a>
                    </div>
                    <div className="navButton3 font-montserrat ">
                        <a target='_blank' href="https://earth.google.com/web/search/NRG+OYBEK+(by+NRG),+Tashkent/@41.29287917,69.2817476,433.85510856a,469.34457918d,35.00178989y,102.95218889h,60t,0r/data=CocBGl0SVwolMHgzOGFlOGI0MzUzYjFhYTZmOjB4MTQ2ZGE4NDAxNzljOGZmORnZTd8he6VEQCFnCGxzCFJRQCocTlJHIE9ZQkVLIChieSBOUkcpLCBUYXNoa2VudBgBIAEiJgokCTvL1ZwUYkVAEfB2ctkmX0VAGcfJqi3YqVFAIWXYuKZcplFAOgMKATA">
                            <button className="navButton3d text-[15px] w-[54px] h-[54px] font-montserrat border border1 border-[#C5C3B6] rounded-[50%] text-white p-[5px] hover:bg-custom-gold transition duration-1000">
                            {t('threeD')}
                            </button>
                        </a>
                    </div>
                    <div className="navButton4 ">
                        <a href="../pdf/Resume.pdf" download="Resume.pdf">
                            <button className="navButtonInstall  text-[25px] w-[54px] h-[54px] border border1 border-[#C5C3B6] rounded-[50%] text-white p-[5px] hover:bg-custom-gold transition duration-1000">
                                <GoDownload className="m-auto " />
                            </button>
                        </a>
                    </div>
                </div>
                <div className="navSecondBlock flex ">
                    <div className="navLogo ">
                        <img src={'https://voha.u-nrg.uz/img/logo.svg'} alt="Logo" className='w-[150px] h-[65px]"' />
                    </div>
                </div>
                <div className={`navThridBlock text-white font-montserrat flex items-center gap-[40px]`}>
                    <div className="navButtonSelect bg-transparent focus:outline-none font-montserrat font-[500] p-2 text-[18px]">
                        <LanguageSelector />
                    </div>
                    <a target='_blank' href="https://zoom.us/">
                        <div className="callBlock flex items-center gap-[11px] hover:text-custom-gold transition duration-1000">
                            <IoCallOutline className="text-[32px] navButtonCallIcon font-[500]" />
                            <h1 className="text-[27px] navButtonNumber font-montserrat font-[500]">1060</h1>
                        </div>
                    </a>
                    <div className="navButton">
                        <a href="#form">
                            <button className="navButtonForm hover:bg-custom-gold transition duration-1000 text-white font-[montserrat] text-[18px] w-[200px] h-[54px] border border1 border-[#C5C3B6] rounded-[28px]">
                            {t('bookHouse')}
                            </button>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </>
    );
}

export default Navbar;
