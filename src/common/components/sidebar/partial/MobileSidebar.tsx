"use client";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../layouts/use-dimension";
import { MobileToggle } from "../layouts/MobileToogle";
import { MobileNavigation } from "../layouts/MobileNavigation";
import { usePathname } from "next/navigation";
import Image from "../../element/Image";
import DarkmodeSwitch from "../../element/DarkmodeSwitch";
import VerifiedSvg from "../../svg/VerifiedSvg";
import clsx from "clsx";
import { MenuItem } from "@/common/constant/MenuItems";

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
  const pathname = usePathname();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const Menu = MenuItem.find((item) => item.href === pathname);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 10);
    });
  }, []);

  return (
    <motion.nav
      className={`
      flex justify-center bottom-0 fixed z-[11] top-[-10px] right-0  w-full transition-all duration-400`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      style={{ bottom: isOpen ? 0 : "90vh" }}
    >
      <motion.div
        className={clsx(
          !scrolled || isOpen ? "rounded-none mt-0" : "rounded-full mt-5",
          " px-5 py-3 border-b-[1px] dark:border-neutral-800 border-neutral-100 z-[99] shadow-sm fixed  top-0 flex items-center bg-[#F2F2F2] dark:bg-neutral-900 justify-between gap-3 duration-300 transition-all"
        )}
        initial={{ width: "100%" }}
        animate={
          !scrolled || isOpen
            ? {
                width: "100%",
              }
            : { width: "70%" }
        }
        transition={{ type: "spring", duration: 0.4 }}
      >
        <div className="flex gap-3 items-center overflow-hidden basis-[96%]">
          <Image
            alt="img"
            src="/img/upworkE.jpg"
            width={640}
            height={663}
            priority
            className="rounded-full  border-[3px] dark:border-[#171717] border-[#fff] w-[50px] relative z-[9]"
          />
          <h1
            className={clsx(
              scrolled 
              ? "hidden" : "",
              "text-xl font-bold flex gap-2 items-center"
            )}
          >
            Fahlevi
            <span>
              <VerifiedSvg />
            </span>
          </h1>
          <h1
            className={clsx(
              scrolled ? "justify-center" : "hidden",
              "text-xl font-bold  w-full flex gap-2 items-center transition-all duration-300 "
            )}
          >
            {Menu === undefined ? 'Fahlevi' : Menu?.title}
            
            <span></span>
          </h1>
        </div>
        <div className="">
          <DarkmodeSwitch />
        </div>

        <MobileToggle toggle={() => toggleOpen()} className="mt-1" />
      </motion.div>
      <motion.div
        className={`absolute top-[86px] max-[378px]:top-[90px] right-0 bottom-0 w-full dark:bg-neutral-900 bg-neutral-300`}
        variants={sidebar}
      />
      <MobileNavigation
        closeNavigation={() => toggleOpen()}
        className={isOpen ? `z-[99]` : ` z-[0]`}
        isOpen={isOpen}
      />
    </motion.nav>
  );
};

export default MobileSidebar;
