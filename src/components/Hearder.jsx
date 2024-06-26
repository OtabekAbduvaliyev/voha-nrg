import React from 'react'
import Navbar from './Navbar'
import { BsArrowDown } from "react-icons/bs";
import { RiLiveLine } from "react-icons/ri";
const Hearder = () => {
  return (
<div className='bgHeader bg-cover bg-center h-screen flex flex-col justify-end'>
  <Navbar />
  <header className="max-w-[1200px] mx-auto flex justify-between items-end w-full ">
    <div className="infor flex justify-center flex-col items-center justitems-center lg:flex-row justify-end px-[20px] lg:px-[0px] gap-[-60px]">
      <h1 className="text-[80px] font-montserrat font-light lg:text-[120px] text-white leading-[110px] lg:text-[100px] text-center lg:text-start">
        NRG <br className='hidden lg:block'/> VOHA
      </h1>
      <h2 className="font-DancingScript lg:text-[110px] text-[#DFC59A] lg:ml-[-30px]  text-[80px] text-center lg:text-start lg:mt-[110px]">
        Premium class
      </h2>
    </div>
    <div className="hidden lg:flex buttons flex items-center gap-[50px] lg:gap-[80px] px-[20px] lg:px-[0px]">
      <div className="">
        <button className='todown w-[104px] h-[104px] border rounded-full inline-block border-[#EDC893]'>
          <BsArrowDown className='text-white text-[20px] m-auto' />
        </button>
      </div>
      <div className="live">
        <button className='w-[45px] h-[45px] border border-[#EDC893] rounded-full bg-[#164147] text-white'>
          <p className='text-[7px]'>Прямой</p>
          <RiLiveLine className='m-auto' />
          <p className='text-[7px]'>эфир</p>
        </button>
      </div>
    </div>
  </header>
</div>


  )
}

export default Hearder