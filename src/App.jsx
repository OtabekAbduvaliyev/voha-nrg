import React from 'react'
import Hearder from './components/Hearder'
import BgGreenComp from './components/bgGreenComp'
import Location from './components/Location'
import BgGreenCompTwo from './components/bgGreenCompTwo'
import ArchitecturalPosestion from './components/ArchitecturalPosestion'
import CityHouse from './components/CityHouse'
import Technologies from './components/Technologies'
import { Slider } from './components/Slider/Slider'
import Footer from './components/Footer'
const App = () => {
  return (
    <div >
      <Hearder />
      <BgGreenComp />
      <Location />
      <Slider />
      <BgGreenCompTwo />
      <ArchitecturalPosestion />
      <CityHouse />
      <Technologies />
      <Footer />
    </div>
  )
}

export default App