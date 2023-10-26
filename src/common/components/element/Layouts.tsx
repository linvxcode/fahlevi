'use client'
import React, { ReactNode } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import useIsMobile from "@/common/hooks/useIsMobile";

type LayoutProps = {
  children: ReactNode;
};

const Layouts = ({ children }: LayoutProps) => {
  // const isMobile = useMediaQuery({
  //   query: '(max-width: 767px)'
  // })
  const isMobile = useIsMobile();
  return (
    <MotionConfig reducedMotion={!isMobile ? 'always' : 'never'}>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
        {children}
      </motion.div>
    </AnimatePresence>
         </MotionConfig>
  );
};

export default Layouts;
