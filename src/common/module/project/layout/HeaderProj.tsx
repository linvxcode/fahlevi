import SectionHeading from '@/common/components/element/SectionHeading'
import React from 'react'

const HeaderProj = () => {
  return (
    <div className='flex flex-col'>
      <SectionHeading title='Projects' />
      <p className='mt-3 text-neutral-400'>
        Latest Project that i have worked on 
      </p>
    </div>
  )
}

export default HeaderProj
