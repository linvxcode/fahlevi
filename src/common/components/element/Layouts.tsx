"use client";
import React, { ReactNode } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useMobile } from "@/common/hooks/useMobile";

type LayoutProps = {
  children: ReactNode;
};

const Layouts = ({ children }: LayoutProps) => {
  const isMobile = useMobile();

  const Translate = !isMobile
    ? {
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
    : {};
  return (
    <AnimatePresence>
      <motion.div {...Translate}>{children}</motion.div>
    </AnimatePresence>
  );
};

export default Layouts;
