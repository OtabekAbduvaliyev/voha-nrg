import React from 'react'
import lockImg from '../assets/image 24.png';
import backsideLift from '../assets/image 27.png';
import frontsideLift from '../assets/image 28.png';
import screenImg from '../assets/image 25.png';
import bedImg from '../assets/Group 69.png';
import childrenImg from '../assets/Rectangle 52.png';
import monthImg1 from '../assets/Rectangle 53.png';
import monthImg2 from '../assets/Rectangle 54.png';
import monthImg3 from '../assets/Rectangle 55.png';
import monthImg4 from '../assets/Rectangle 56.png';
const Technologies = () => {
    return (
        <div>
            <div className="firstBlock max-w-[1180px] m-auto pt-[150px]">
                <h1 className='text-[40px] headlineFont text-custom-dark-blue text-center'>Умные технологии</h1>
                <div className="twocards flex gap-[30px] mt-[80px] flex-wrap lg:flex-nowrap px-[15px]">
                    <div className="card flex gap-[30px] items-center bg-custom-dark-blue max-w-[580px] p-[44px] flex-wrap md:flex-nowrap">
                        <div className="img">
                            <img src={lockImg} alt="" className='w-[118px] h-[212px]' />
                        </div>
                        <div className="infs">
                            <h1 className='text-[22px] headlineFont text-[white]'>Электрозамки YALE (Америка)</h1>
                            <p className='text-[white] font-Inter text-[16px]'><span className='text-custom-gold'>Электронные замки</span>  дополнительный <br /> комфорт. С ними можно  о поиске <br /> ключа  сумке. Просто выберите удобный <br /> способ. </p>
                            <ul className="list-disc list-inside mt-2 text-white">
                                <li>Доступ по коду</li>
                                <li>Смарт-карта</li>
                                <li>Механический ключ</li>
                                <li>Биометрия (отпечаток пальца)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card flex gap-[30px] items-center bg-custom-dark-blue max-w-[580px] p-[44px] flex-wrap md:flex-nowrap">
                        <div className="img">
                            <img src={screenImg} alt="" className='w-[118px] h-[124px]' />
                        </div>
                        <div className="infs">
                            <h1 className='text-[22px] headlineFont text-[white]'>Электрозамки YALE (Америка)</h1>
                            <p className='text-[white] font-Inter text-[16px]'><span className='text-custom-gold'>Электронные замки</span>  дополнительный <br /> комфорт. С ними можно  о поиске <br /> ключа  сумке. Просто выберите удобный <br /> способ. </p>
                            <ul className="list-disc list-inside mt-2 text-white">
                                <li>Доступ по коду</li>
                                <li>Смарт-карта</li>
                                <li>Механический ключ</li>
                                <li>Биометрия (отпечаток пальца)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="firstdesc max-w-[1190px] m-auto flex flex-wrap  lg:flex-nowrap mt-[160px] gap-[100px] px-[10px]">
                <div className="frdescrtbl flex flex-col lg:justify-between">
                    <h1 className='headlineFont text-[40px] font-[500] text-custom-dark-blue'>Детская комната  </h1>
                    <p className='text-[16px] font-Inter text-custom-dark-blue mt-[30px]'>Здесь каждый момент - это приключение, наполненное Вдохновением и безграничными возможностями для маленьких исследователей. Всё пространство соответствует технике безопастности.</p>
                    <img src={bedImg} alt="" className='mt-[70px] lg:mt-[60px] ' />
                </div>
                <img src={childrenImg} alt="" />
            </div>
            <div className="wrapper mt-[150px]">
                <h1 className='text-center text-[16px] font-Inter text-[#6C645B]'>Бесшумные лифты от компании OTIS серии <br /> Ambiance совместно с дизайн-студией F.A. Porsche</h1>
                <div className="lifts flex max-w-[850px] lg:justify-between m-auto pt-[100px] flex-wrap lg:flex-nowrap justify-center gap-[50px] lg:gap-[0px]">
                    <div className="front-side">
                        <img src={frontsideLift} alt="" />
                    </div>
                    <div className="backside">
                        <img src={backsideLift} alt="" />
                    </div>
                </div>
            </div>
            <div className="finalBlock max-w-[1190px] m-auto mt-[150px]">
                <h1 className='text-[40px] font-[500] headlineFont text-custom-dark-blue'>Ход строительства</h1>
                <div className="imgs flex flex-wrap justify-center gap-[20px] xs:justify-between mt-[50px] mb-[100px]">
                    <div className="img">
                        <p className='absolute mt-[356px] ml-[25px] text-[white] text-[26px] text-Inter'>Май</p>
                        <img src={monthImg1} alt="" />
                    </div>
                    <div className="img">
                        <p className='absolute mt-[356px] ml-[25px] text-[white] text-[26px] text-Inter'>Апрель</p>
                        <img src={monthImg2} alt="" />
                    </div>
                    <div className="img">
                        <p className='absolute mt-[356px] ml-[25px] text-[white] text-[26px] text-Inter'>Март</p>
                        <img src={monthImg3} alt="" />
                    </div>
                    <div className="img">
                        <p className='absolute mt-[356px] ml-[25px] text-[white] text-[26px] text-Inter'>Февраль</p>
                        <img src={monthImg4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies