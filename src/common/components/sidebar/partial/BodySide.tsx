'use client'
import React from 'react'
import VerifiedSvg from '../../svg/VerifiedSvg'
import { FaArrowDown } from "react-icons/fa";
import { Button } from '@nextui-org/react';

const BodySide = () => {
  return (
    <div className='flex  flex-col mt-5 '>
      <h1 className='text-xl font-medium flex items-center gap-1'>
        Fahlevi
        <span>
          <VerifiedSvg/>
        </span>
      </h1>
      <h2 className='text-sm text-neutral-300 lg:hover:text-neutral-400 lg:transition-all lg:duration-300'>
        @vii_999_
      </h2>
    </div>
  )
}

export default BodySide
