import SubHeading from '@/common/components/element/SubHeading'
import ArrowR from '@/common/components/svg/ArrowR'
import Link from 'next/link'
import React from 'react'

const Heading = () => {
  return (
    <SubHeading>
    <Link href='/projects'>
      <div className='flex gap-1 hover:gap-3 transition-all duration-300 cursor-pointer text-sm text-neutral-700 dark:text-neutral-400 hover:text-neutral-700 hover:dark:text-neutral-300 mt-1'>
        <div className='flex'>
          View All 
        </div>
        <ArrowR/>
      </div>
    </Link>
  </SubHeading>
  )
}

export default Heading
