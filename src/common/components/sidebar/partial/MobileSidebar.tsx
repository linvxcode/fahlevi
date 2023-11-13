import React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../layouts/use-dimension";
import { MobileToggle } from "../layouts/MobileToogle";
import { MobileNavigation } from "../layouts/MobileNavigation";
import Image from "../../element/Image";
import Breakline from "../../element/Breakline";
import DarkmodeSwitch from "../../element/DarkmodeSwitch";
import VerifiedSvg from "../../svg/VerifiedSvg";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    zIndex: 99,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    zIndex: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileSidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className={`${
        isOpen ? "fixed z-[99]" : "absolute "
      } block  top-0 right-0 bottom-0 w-full px-5`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <div className="w-full flex items-center justify-between gap-3">
        <div className="flex gap-3 items-center ">
          <Image
            alt="img"
            src="/img/upworkE.jpg"
            width={640}
            height={663}
            priority
            className="rounded-full mt-2  border-[3px] dark:border-[#171717] border-[#fff] w-[65px] relative z-[9]"
          />
          <h1 className="text-xl mt-2 font-bold flex gap-2 items-center">
            Fahlevi
            <span>
              <VerifiedSvg />
            </span>
          </h1>
        </div>
        <div className="mt-2 pr-[50px]">
          <DarkmodeSwitch />
        </div>
      </div>
      <motion.div
        className={`absolute top-0 right-0 bottom-0 w-full dark:bg-neutral-900 bg-neutral-300`}
        variants={sidebar}
      />
      <MobileNavigation
        closeNavigation={() => toggleOpen()}
        className={isOpen ? `z-[99]` : `z-[0]`}
        isOpen={isOpen}
      />

      <MobileToggle toggle={() => toggleOpen()} className="" />
      <Breakline className="" />
    </motion.nav>
  );
};

export default MobileSidebar;
