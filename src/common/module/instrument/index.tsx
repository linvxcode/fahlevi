import React from 'react'
import Layouts from '@/common/components/element/Layouts'
import SectionHeading from '@/common/components/element/SectionHeading'
import SubHead from '@/common/components/element/SubHead'
import Breakline from '@/common/components/element/Breakline'
import HeadInstruments from './component/HeadInstruments'
import { retriveData } from '@/common/libs/firebase/service'
import { GetServerSideProps } from "next";


interface HomeProps {
  isMobile: boolean;
}

const Instrument = async () => {
  const res = await retriveData('instruments');
  const data = res
  return (
    <>
    {/* <Layouts isMobile={isMobile}> */}
     <SectionHeading title='Instruments' />
     <SubHead title='I recreated this feature from the results of my previous project' className='mt-3' />
     <Breakline/>
     <HeadInstruments view='grid' data={data} />
    {/* </Layouts> */}
    </>
  )
}

export default Instrument


