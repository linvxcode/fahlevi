import React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../layouts/use-dimension";
import { MobileToggle } from "../layouts/MobileToogle";
import { MobileNavigation } from "../layouts/MobileNavigation";
import Image from "../../element/Image";
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
    clipPath: "circle(1px at calc(100% - 1px) 10px)",
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
      } block  top-0 right-0 bottom-0 w-full `}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <div className="w-full px-5 py-3 border-b-[1px] dark:border-neutral-800 border-neutral-100 z-[99] shadow-sm fixed top-0 flex items-center bg-[#F2F2F2] dark:bg-neutral-900 justify-between gap-3">
        <div className="flex gap-3 items-center basis-[96%]">
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
        <div className="">
          <DarkmodeSwitch />
        </div>
        
      <MobileToggle toggle={() => toggleOpen()} className="mt-2 " />
      </div>
      <motion.div
        className={`absolute top-[100px] max-[378px]:top-[90px] right-0 bottom-0 w-full dark:bg-neutral-900 bg-neutral-300`}
        variants={sidebar}
      />
      <MobileNavigation
        closeNavigation={() => toggleOpen()}
        className={isOpen ? `z-[99]` : `z-[0]`}
        isOpen={isOpen}
      />

    </motion.nav>
  );
};

export default MobileSidebar;
