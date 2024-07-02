import React from 'react'
import descImg1 from '../assets/Rectangle 21.png';
import descImg2 from '../assets/Rectangle 22.png';
import descImg3 from '../assets/Rectangle 23.png';
import descImg4 from '../assets/Rectangle 25.png';
import descImg5 from '../assets/Rectangle 26.png';
import descImg6 from '../assets/Rectangle 24.png';
import descImg7 from '../assets/Rectangle 27.png';
import descImg8 from '../assets/Rectangle 30.png';
import descImg9 from '../assets/Rectangle 31.png';
import descImg10 from '../assets/Rectangle 32.png';
import descImg11 from '../assets/Rectangle 33.png';
import descImg12 from '../assets/Rectangle 34.png';
import descImg13 from '../assets/Rectangle 35.png';
import descImg14 from '../assets/Rectangle 36.png';
import descImg15 from '../assets/Rectangle 37.png';
import descImg16 from '../assets/Rectangle 38.png';
import logo1 from '../assets/Frame (10).png'
import logo2 from '../assets/Frame (9).png'
import logo3 from '../assets/Frame (6).png'
import logo4 from '../assets/Frame (5).png'
import logo5 from '../assets/Frame (6).png'
import logo7 from '../assets/Frame (7).png'
import logo8 from '../assets/Frame (4).png'
import { MdApartment } from 'react-icons/md';
import { IoIosArrowRoundForward } from 'react-icons/io';
import InfandForm from './InfandForm';
import { Slider } from './Slider/Slider';
const Descriptions = () => {
  const comforts = [
    {
      logo: <img src={logo1} alt="" />,
      title: (
        <>
          Межкомнатные <br />  стены из газоблока
        </>
      )
    }, {
      logo: <img src={logo2} alt="" /> ,
      title: (
        <>
          Межкомнатные <br />  стены из газоблока
        </>
      )
    }, {
      logo: <img src={logo3} alt="" />,
      title: (
        <>
          Межкомнатные <br />  стены из газоблока
        </>
      )
    }, {
      logo: <MdApartment className='text-[#BCB28F] text-[36px]' />,
      title: (
        <>
          Межкомнатные <br />  стены из газоблока
        </>
      )
    }, {
      logo: <img src={logo4} alt="" />,
      title: (
        <>
          Межкомнатные <br />  стены из газоблока
        </>
      )
    }, {
      logo: <img src={logo5} alt="" />,
      title: (
        <>
          Межкомнатные <br />  стены из газоблока
        </>
      )
    }, {
      logo: <img src={logo7} alt="" />,
      title: (
        <>
          Межкомнатные <br />  стены из газоблока
        </>
      )
    }, {
      logo: <img src={logo8} alt="" />,
      title: (
        <>
          Межкомнатные <br />  стены из газоблока
        </>
      )
    },
  ]
  return (
    <div>
      <div className="firstdesc max-w-[1190px] m-auto flex flex-wrap  lg:flex-nowrap mt-[100px] gap-[100px] px-[10px]">
        <img src={descImg1} alt="" />
        <div className="frdescrtbl flex flex-col lg:justify-between">
          <p className='text-[16px] font-Inter text-white '>Во дворе комплекса NRG VOHA будут расти многолетние сосновые деревья, которые не только радуют глаз своей красотой, но и приносят пользу всем жильцам. <br /> <br /> Благодаря своим ароматическим свойствам они благотворно влияют на здоровье детей и взрослых. А также - создают приятный микроклимат и очищают воздух, что очень необходимо в условиях городской среды</p>
          <img src={descImg2} alt="" className='mt-[70px] lg:mt-[0px]' />
        </div>
      </div>
      <div className="headLine justify-center flex mt-[150px]">
        <h1 className='headlineFont text-[30px] md:text-[40px] text-[#DDCAA0]'>На побережье </h1>
        <p className='marianna text-[90px] md:text-[120px] text-[white] ml-[-40px] leading-[104px]'>Карасу</p>
      </div>
      <div className="secondesc flex items-center max-w-[1280px] ml-auto justify-between px-[10px] lg:px-[0px] flex-wrap md:flex-nowrap mt-[70px] 2xl:m-auto 2xl:pt-[100px]">
        <div className="indesc text-[white] text-[16px] font-Inter mr-[100px]">
          <p>Протекающий в Ташкенте и Ташкентской области, канал <br /> является левым отводом канала Бозсу и занимает особое <br /> место в NRG VOHA. <br /> <br /> Расположившись между домами жилого комплекса, он <br /> становится центром притяжения, душой проекта и одним <br /> из самых важных его преимуществ.</p>
        </div>
        <div className="imgdesc">
          <img src={descImg3} alt="" />
        </div>
      </div>
      <div className="secondesc 2xl:m-auto 2xl:pt-[80px] flex items-center max-w-[1280px] mr-auto justify-between px-[10px] lg:px-[0px] flex-wrap md:flex-nowrap mt-[100px]">
        <div className="imgdesc">
          <img src={descImg6} alt="" />
        </div>
        <div className="indesc text-[white] text-[16px] font-Inter lg:ml-[100px]">
          <h1 className='headlineFont text-[40px] mb-[40px] font-[500]'>Пирс <br /> у собственной речки</h1>
          <p>Протекающий в Ташкенте и Ташкентской области, канал <br /> является левым отводом канала Бозсу и занимает особое <br /> место в NRG VOHA. <br /> <br /> Расположившись между домами жилого комплекса, он <br /> становится центром притяжения, душой проекта и одним <br /> из самых важных его преимуществ.</p>
        </div>
      </div>
      <div className="headLine md:text-center mt-[100px] px-[10px] md:text-center">
        <h1 className='text-[#DDCAA0] headlineFont text-[40px]'>Дворовое пространство</h1>
      </div>
      <div className="secondesc 2xl:m-auto 2xl:pt-[80px] flex items-center max-w-[1280px] ml-auto justify-between px-[10px] lg:px-[0px] flex-wrap md:flex-nowrap mt-[90px]">
        <div className="indesc text-[white] text-[16px] font-Inter mr-[100px]  flex flex-col ">
          <p>Двор в NRG VOHA это настоящая зона отдыха с <br /> завораживающими видами на природу в центре  <br /> столицы, благодаря насыщенному озеленению.  <br /> <br /> Здесь у каждого жителя в независимости от возраста <br /> появится возможность вдохновляться, набираться <br /> сил и чувствовать атмосферу загородных красот в <br /> центре столицы в своём собственном дворе.</p>
          <div className="comfortsCards grid lg:grid-cols-2 grid-cols-2  gap-[30px] pt-[50px] md:mt-[0px]">
            {comforts.map((cardItem) => {
              return (
                <div className="card flex items-center gap-[10px]">
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
        <div className="imgdesc">
          <img src={descImg4} alt="" />
        </div>
      </div>
      <div className="smallerDescs max-w-[1190px] m-auto pt-[]">
        <div className="first flex justify-between items-center gap-[10px] flex-wrap lg:flex-nowrap pt-[156px] px-[10px]">
          <img src={descImg5} alt="" />
          <div className="inf">
            <h1 className='text-[white] text-[40px] headlineFont'>Зона BBQ</h1>
            <p className='text-[16px] text-[white] font-Inter mt-[50px]'>BBQ зона удивит своей функциональностью и наличием всего <br /> необходимого для приготовления вкусных блюд на свежем <br /> воздухе и проведения любых мероприятий. <br /> <br /> Пожарить стейки, приготовить шашлыки, попить чай или <br /> просто собраться с соседями - все это становится <br /> возможным в этом поистине уютном уголке нашего <br /> дворового пространства.</p>
          </div>
        </div>
      </div>
      <div className="smallerDescs max-w-[1190px] m-auto pt-[]">
        <div className="first flex justify-between items-center gap-[10px] flex-wrap lg:flex-nowrap mt-[70px] px-[10px]">
          <div className="inf">
            <h1 className='text-[white] text-[40px] headlineFont'>  Гостевой паркинг</h1>
            <p className='text-[16px] text-[white] font-Inter mt-[50px]'>Ваши друзья и знакомые смогут спокойно оставлять <br /> автомобиль в безопасной и охраняемой зоне жилого <br /> комплекса. Больше не придется думать где припарковаться.</p>
          </div>
          <img src={descImg7} alt="" />
        </div>
      </div>
      <InfandForm />
      <Slider />
      <div className="firstdesc max-w-[1190px] m-auto flex flex-wrap  lg:flex-nowrap mt-[160px] gap-[100px] px-[10px]">
        <div className="frdescrtbl flex flex-col lg:justify-between">
          <h1 className='headlineFont text-[40px] font-[500] text-[white]'>Тренажёрный зал</h1>
          <p className='text-[16px] font-Inter text-white mt-[30px]'>Одним из преимуществ, насладиться жители NRG <br />   VOHA является свой собственный тренажерный зал. <br /> <br /> В нем будут установлены  современные спортивные <br /> тренажеры и установки, которые позволяют заниматься спортом и <br /> поддерживать физическую форму не выходя из дома. <br />   <br /> СХЕМА БЛОКИРОВКИ </p>
          <img src={descImg9} alt="" className='mt-[70px] lg:mt-[0px]' />
        </div>
        <img src={descImg8} alt="" />
      </div>
      <div className="firstdesc max-w-[1190px] m-auto flex flex-wrap  lg:flex-nowrap mt-[160px] gap-[100px] px-[10px]">
        <img src={descImg10} alt="" />
        <div className="frdescrtbl flex flex-col lg:justify-between">
          <h1 className='headlineFont text-[40px] font-[500] text-[white]'>Финская парная</h1>
          <p className='text-[16px] font-Inter text-white mt-[30px]'>Откройте для себя уникальный опыт релаксации в наших <br /> премиальных саунах, внутри фитнес-клуба. Погрузитесь в <br /> атмосферу уюта и уединения в специально оборудованных <br /> мужских и женских зонах, созданных для вашего полного <br /> комфорта.</p>
          <img src={descImg11} alt="" className='mt-[70px] lg:mt-[0px]' />
        </div>
      </div>
      <div className="firstdesc max-w-[1190px] m-auto flex flex-wrap  lg:flex-nowrap mt-[160px] gap-[100px] px-[10px]">
        <div className="frdescrtbl flex flex-col lg:justify-between">
          <h1 className='headlineFont text-[40px] font-[500] text-[white]'>Gentlemen's club</h1>
          <p className='text-[16px] font-Inter text-white mt-[30px]'>Изысканный интерьер, высококачественные материалы и <br /> внимание к деталям создают уникальное пространство для    <br /> истинных ценителей комфорта. Эта комната станет идеальным местом для встреч с друзьями и соседями. </p>
          <img src={descImg13} alt="" className='mt-[70px] lg:mt-[0px]' />
        </div>
        <img src={descImg12} alt="" />
      </div>
      <div className="firstdesc max-w-[1190px] m-auto flex flex-wrap  lg:flex-nowrap mt-[160px] gap-[100px] px-[10px]">
        <div className="frdescrtbl flex flex-col lg:justify-between">
          <h1 className='headlineFont text-[40px] font-[500] text-[white]'>Детская комната  </h1>
          <p className='text-[16px] font-Inter text-white mt-[30px]'>Здесь каждый момент - это приключение, наполненное Вдохновением и безграничными возможностями для маленьких исследователей. Всё пространство соответствует технике безопастности.</p>
          <img src={descImg15} alt="" className='mt-[70px] lg:mt-[0px] h-[]' />
        </div>
        <img src={descImg14} alt="" />
      </div>
      <div className="smallerDescs max-w-[1190px] m-auto pb-[100px]">
        <div className="first flex justify-between items-center gap-[10px] flex-wrap lg:flex-nowrap mt-[150px] px-[10px]">
          <div className="inf">
            <h1 className='text-[white] text-[40px] headlineFont'>  Там, где сбываются мечты</h1>
            <p className='text-[16px] text-[white] font-Inter mt-[50px]'>В квартирах NRG VOHA даже обычный день превращается в <br /> настоящий праздник, а жители могут получать <br /> удовольствие от преимуществ, которые делают их жизнь <br /> проще и комфортнее.  <br /> <br /> Просторные апартаменты позволяют воплотить любые <br /> дизайнерские решения. Высокие потолки, большие окна,  <br />  просторные планировки на любой вкус-все это создает <br /> ощущение свободы и заботы о жильцах.</p>
          </div>
          <img src={descImg16} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Descriptions