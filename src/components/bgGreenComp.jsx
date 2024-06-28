import React from 'react'
import SliderPrice from './SliderPrice'
import VideoModal from './VideoInf'
import InfandForm from './InfandForm'
import SliderImages from './SliderImages'

const BgGreenComp = () => {
  return (
    <div className='bg-[#164147]'>
        <SliderPrice />
        <VideoModal />
        {/* <SliderImages /> */}
        <InfandForm />
    </div>
  )
}

export default BgGreenComp