import React from 'react'
import HeaderProj from './layout/HeaderProj'
import BodyProj from './layout/BodyProj'
import Breakline from '@/common/components/element/Breakline'
import Layouts from '@/common/components/element/Layouts'

const Project= () => { 
  return (
    <>
    <Layouts>
     <HeaderProj/>
     <Breakline/>
     <BodyProj view='grid'/>
    </Layouts>

    </>
  )
}

export default Project


