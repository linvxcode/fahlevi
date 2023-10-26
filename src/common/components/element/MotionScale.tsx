import React, {ReactNode} from 'react'
import { motion } from 'framer-motion'

type MotionScaleProps = {
    children: ReactNode;
}

const MotionScale = ({children}: MotionScaleProps) => {
  return (
    <motion.div 
    initial={{scale: 1.4}}
    whileInView={{scale: 1, transition: {type: 'spring', duration: 3}}}
    style={{position: "relative", zIndex: 9}}
    >
      {children}
    </motion.div>
  )
}

export default MotionScale
