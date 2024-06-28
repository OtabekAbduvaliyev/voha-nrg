import React, { useState } from 'react';
import drawingImg1 from '../assets/image 22 (1).png';
import drawingImg2 from '../assets/e925f8669428cd3a908163bce57b53b8.png';
import drawingImg3 from '../assets/fd81c47e4af688fcab6bcdcca1b1a936.png';

const ArchitecturalPosestion = () => {
    const [focusImg, setFocusImg] = useState(drawingImg1);

    const firstOnclick = ()=>{
        setFocusImg(drawingImg1)
    }
    const secondOnclick = ()=>{
        setFocusImg(drawingImg2)
    }
    const thirdOnclick = ()=>{
        setFocusImg(drawingImg3)
    }

    return (
        <div className='max-w-[1100px] m-auto pt-[80px]'>
            <h1 className='text-center text-[40px] headlineFont text-custom-dark-blue font-[500]'>Планировочные решения</h1>
            <div className="drawings mt-[60px] ">
                <div className="focusImg m-auto flex justify-center items-center px-[15px]">
                    <img src={focusImg} alt="" className='w-[490px] h-[400px] ' />
                </div>
                <div className="selectImgs flex lg:justify-between mt-[60px] flex-wrap lg:flex-nowrap justify-center gap-[40px]">
                        <div className="frdrimg border w-[300px] p-[30px] rounded rounded-[18px] border-1 border-custom-dark-blue max-w-[343px] shadow transition duration-1000 hover:shadow-2xl" >
                            <img src={drawingImg1} alt="" onClick={firstOnclick} className='w-[100%] h-[162px]' />
                        </div>
                        <div className="frdrimg border w-[300px] p-[30px] rounded rounded-[18px] border-1 border-custom-dark-blue max-w-[343px] shadow transition duration-1000 hover:shadow-2xl">
                            <img src={drawingImg2} alt="" onClick={secondOnclick} className='w-[100%] h-[162px]' />
                        </div>
                        <div className="frdrimg border w-[300px] p-[30px] rounded rounded-[18px] border-1 border-custom-dark-blue max-w-[343px] shadow transition duration-1000 hover:shadow-2xl">
                            <img src={drawingImg3} alt="" onClick={thirdOnclick} className='w-[100%] h-[162px]' />
                        </div>
                </div>
            </div>
        </div>
    );
}

export default ArchitecturalPosestion;
