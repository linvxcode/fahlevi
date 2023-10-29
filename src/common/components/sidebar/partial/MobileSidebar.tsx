import React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../layouts/use-dimension";
import { MobileToggle } from "../layouts/MobileToogle";
import { MobileNavigation } from "../layouts/MobileNavigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`, 
    zIndex: 99,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)", 
    zIndex: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    },
  }
};

const MobileSidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className={`${isOpen ? 'fixed z-[99]' : "absolute"} block  top-0 right-0 bottom-0 w-full`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={`absolute top-0 right-0 bottom-0 w-full bg-[#c5c5c5]`} variants={sidebar} /> 
      <MobileNavigation closeNavigation={() => toggleOpen()} className={isOpen ? `z-[99]` : `z-[0]`} isOpen={isOpen} />
      <MobileToggle toggle={() => toggleOpen()} className="" />
    </motion.nav>
  );
};

export default MobileSidebar;
