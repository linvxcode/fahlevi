'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled';


interface InfinityProps {
    children: ReactNode;
    isReverse?: boolean;
}

const InfinityLoop = ({children ,isReverse = false,}: InfinityProps) => {
    const reverse = '-0%' || '0%'
    const isreverse = '-100%' || '100%'
  return (
    <motion.div
    initial={{translateX: reverse}}
      animate={{translateX: isreverse, transition: {type: 'spring', duration: 5, repeat: Infinity, repeatType: 'reverse'}}}
    >
       {children}
    </motion.div>
  )
}

export default InfinityLoop

const StyledSlider = styled.div<{ isReverse: boolean }>`
  animation-direction: ${({ isReverse }) => (isReverse ? 'reverse' : 'normal')};
`;
