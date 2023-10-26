import React from 'react'
import VerifiedSvg from '../../svg/VerifiedSvg'

const BodySide = () => {
  return (
    <div className='flex  flex-col mt-5 '>
      <h1 className='text-xl font-medium flex items-center gap-2'>
        Fahlevi
        <span>
          <VerifiedSvg/>
        </span>
      </h1>
      <h2>
        @vii
      </h2>
    </div>
  )
}

export default BodySide
