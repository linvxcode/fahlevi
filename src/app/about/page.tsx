import type { Metadata } from 'next'
import AboutPage from '@/common/module/about'
import React from 'react'

export const metadata: Metadata = {
  title: 'About - Fahlevi',
  description: 'Personal Website',
}

const index = () => {
  return (
    <>
    <AboutPage/>
    </>
  )
}

export default index
