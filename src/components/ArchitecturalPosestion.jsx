import React, { useState } from 'react'
import drawingImg1 from '../assets/image 22 (1).png';
import drawingImg2 from '../assets/image 21.png';
import drawingImg3 from '../assets/image 20.png';
import drawingImg4 from '../assets/image 23.png';

const ArchitecturalPosestion = () => {
    const [focusImg,setFocusImg] = useState(drawingImg1)
    const [selectImgs,setSelectImgs] = useState([
        // {
        //     id:1,
        //     img:drawingImg4,
        //     px:'px-[70px]'
        // },
        // {
        //     id:2,
        //     img:drawingImg2,
        //     px:'px-[50px]',
        // },
        // {
        //     id:3,
        //     img:drawingImg3,
        //     px:'px-[40px]'
        // }
        drawingImg2,
        drawingImg3,
        drawingImg4
    ])
    const swapImage = (index) => {
        const newSelectImgs = [...selectImgs];
        console.log(newSelectImgs);
        console.log(index);
        const temp = focusImg;
        setFocusImg(newSelectImgs[index]);
        newSelectImgs[index] = temp;
        setSelectImgs(newSelectImgs);
      };
  return (
    <div className='max-w-[1100px] m-auto pt-[80px]'>
        <h1 className='text-center text-[40px] headlineFont text-custom-dark-blue font-[500]'>Планировочные решения</h1>
        <div className="drawings mt-[60px]">
            <div className="focusImg  m-auto flex justify-center items-center max-w-[490px] px-[15px]">
                <img src={focusImg} alt="" className=' w-[100%]'/>
            </div>
            <div className="selectImgs flex lg:justify-between mt-[60px] flex-wrap lg:flex-nowrap justify-center gap-[40px]">
                {selectImgs.map((img,index)=>{
                    return(
                        <div className="frdrimg border  py-[15px] px-[60px]    rounded rounded-[18px] border-1 border-custom-dark-blue max-w-[343px]" key={img.id}>
                        <img  src={img} alt="" onClick={() => swapImage(index)} className='w-[100%] h-[162px]' />
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ArchitecturalPosestion
