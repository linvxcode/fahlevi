"use client";
import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type LayoutProps = {
  children: ReactNode;
};

const Layouts = ({ children }: LayoutProps) => {
  const Translate =  {
        initial: {
          opacity: 0,
          y: 100,
        },
        whileInView: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
      }
  return (
    <AnimatePresence>
          <motion.div {...Translate}>{children}</motion.div>
    </AnimatePresence>
  );
};

export default Layouts;
