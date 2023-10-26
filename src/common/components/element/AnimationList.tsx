"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimationListType = {
  children: ReactNode;
  transition: {};
};

const AnimationList = ({ children, transition }: AnimationListType) => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimationList;
