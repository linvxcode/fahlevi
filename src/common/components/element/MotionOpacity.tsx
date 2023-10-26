import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type motionType = {
  children: ReactNode;
  delay: number
};

const MotionOpacity = ({ children, delay }: motionType) => {
  return (
    <motion.div
      initial={{ opacity: 0 , }}
      whileInView={{ opacity: 1 , transition: {delay: delay}}}
      viewport={{ once: true }}
      // style={{position: 'relative', zIndex: -99, top: -124}}
    >
      {children}
    </motion.div>
  );
};

export default MotionOpacity;
