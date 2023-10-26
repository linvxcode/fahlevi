import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "@/common/constant/MenuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: 'block',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    display: 'none',
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};


export const MobileMenu = ({ closeNavigation, className }: any) => {
  const pathname = usePathname();
  return (
    <>
      {MenuItem?.map((item, index) => (
        <motion.li
          key={index}
          className={clsx(`mb-[20px] flex items-center`, className)}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={`${item?.href}`} onClick={closeNavigation}>
            <div
              className={`${
                pathname === item.href
                  ? " bg-neutral-200 dark:bg-neutral-800 rounded-xl transition-all dark:text-neutral-200 duration-700 scale-110"
                  : ""
              } flex items-center group hover:text-white text-neutral-700 justify-start gap-3 hover:bg-neutral-200 dark:hover:bg-neutral-800 h-10 px-2  hover:scale-110 hover:rounded-xl hover:transition-all hover:duration-700`}
            >
              <div
                className={`${
                  pathname === item.href ? "-rotate-12" : ""
                } group-hover:-rotate-12 duration-300 transition-all `}
              >
                {item.icon}
              </div>
              {item?.title}
            </div>
          </Link>
        </motion.li>
      ))}
    </>
  );
};
