import SectionHeading from '@/common/components/element/SectionHeading'
import React from 'react'
import Slider from '../component/Slider'
import { BiCodeAlt as SkillsIcon } from 'react-icons/bi';

const Skill = () => {
  return (
    <div className='mt-7'>
      <SectionHeading title='</> Skills' className='text-xl ' />
      <Slider/>
    </div>
  )
}

export default Skill
