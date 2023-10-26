import React from 'react'
import ImageHeader from '../data/ImageHeader'
import BodySide from './BodySide'
import Breakline from '../../element/Breakline'
import Navigation from '../layouts/Navigation'


const HeaderSide = () => {
  
  return (
    <div className='flex w-full'>
      <div className=''>
        <ImageHeader />
        <BodySide/>
        <Breakline/>
        <Navigation/>
      </div>
    </div>
  )
}

export default HeaderSide
