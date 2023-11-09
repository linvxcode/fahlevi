"use client";
import React, { ReactNode, useState, useEffect } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useMobile } from "@/common/hooks/useMobile";

type LayoutProps = {
  children: ReactNode;
};

const Layouts = ({ children }: LayoutProps) => {
  const isMobile = useMobile();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ifLoad = () => {
      if (isMobile === true) {
        setLoading(true);
      }
    };
    ifLoad();
  }, [isMobile]);

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
      {loading ? (
        <>
          <motion.div {...Translate}>{children}</motion.div>
        </>
      ) : (
        <></>
      )}
    </AnimatePresence>
  );
};

export default Layouts;
