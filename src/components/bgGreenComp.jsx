import React from 'react'
import SliderPrice from './SliderPrice'
import VideoModal from './VideoInf'
import InfandForm from './InfandForm'
import SliderImages from './SliderImages'
import { Slider } from './Slider/Slider'

const BgGreenComp = () => {
  return (
    <div className='bg-[#164147]'>
        <SliderPrice />
        <VideoModal />
        <Slider />
        <InfandForm />
    </div>
  )
}

export default BgGreenComp