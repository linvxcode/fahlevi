import React from 'react'
import ImageHeader from '../data/ImageHeader'
import BodySide from './BodySide'
import Breakline from '../../element/Breakline'
import Navigation from '../layouts/Navigation'
import StaggeredDropDown from '../layouts/DropCard'
import DarkmodeSwitch from '../../element/DarkmodeSwitch'


const HeaderSide = () => {
  
  return (
    <div className='flex w-full'>
      <div className=''>
        {/* <ImageHeader /> */}
        <StaggeredDropDown />
        {/* <BodySide/> */}
        <DarkmodeSwitch />
        <Breakline/>
        <Navigation/>
      </div>
    </div>
  )
}

export default HeaderSide
