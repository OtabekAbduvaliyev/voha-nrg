import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import { BsArrowDown } from "react-icons/bs";
import { RiLiveLine } from "react-icons/ri";
import CameraModal from './CameraModal';
const Hearder = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };
  const [isOpen,setIsOpen] = useState(false)
  const openModal = () => setIsOpen(!isOpen);
  console.log(isOpen);
  return (
    <div className='bgHeader flex flex-col justify-end'>
      <Navbar />
      <header className="max-w-[1430px] mx-auto flex justify-between items-end w-full header">
        <div className="infor flex justify-center  items-end gap-[-60px] mb-[-100px]">
          <h1 className="text-[172px] vohaTitle  text-white leading-[150px] font-sans  headerHdFont">
            NRG <br /> VOHA
          </h1>
          <h2 className="font-DancingScrip class text-[#DFC59A]  text-[155px]  marianna mb-[-40px] ml-[-60px]">
            Premium class
          </h2>
        </div>
        <div className="hidden toDwon lg:flex buttons flex items-center gap-[50px] mb-[-80px]">
          <div className="">
            <button className='todown w-[160px] h-[160px] border rounded-full inline-block border-[#EDC893]' onClick={scrollToBottom}>
              <BsArrowDown className='text-white text-[20px] m-auto' />
            </button>
          </div>
          <div className=" fixed left-[93%] top-[85%] z-[999]">
            <button onClick={openModal} className='w-[66px] h-[66px] liveorg border border-[#EDC893] rounded-full bg-[#164147] text-white shine-effect transition-all duration-500'>
              <p className='text-[10px]'>Прямой</p>
              <RiLiveLine className='m-auto' />
              <p className='text-[10px]'>эфир</p>
              <CameraModal  isOpen={isOpen} setIsOpen={setIsOpen}/>
            </button>
          </div>

        </div>
      </header>
    </div>


  )
}

export default Hearder