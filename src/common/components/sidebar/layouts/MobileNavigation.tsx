import * as React from "react";
import { motion } from "framer-motion";
import { MobileMenu } from "./MobileMenu"; 
import clsx from "clsx";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const MobileNavigation = ({ closeNavigation, className }: any) => (
  <motion.ul variants={variants} className={clsx(`p-[25px]  left-0 absolute top-[100px] w-[230px]`, className)}>
      <MobileMenu closeNavigation={closeNavigation} />
  </motion.ul>
);

