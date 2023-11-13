import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import clsx from "clsx";

const Path = (props: any) => (
  <motion.path
    className='dark:stroke-neutral-200 stroke-neutral-900'
    fill="transparent"
    strokeWidth="3"
    // stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MobileToggle = ({ toggle , className}: any) => (
  <Button onClick={toggle} className={clsx(`absolute z-[99] top-[18px] right-0 w-[50px] h-[50px] bg-transparent`, className)} aria-label="Mobile Nav" >
    <svg width="23" height="23" viewBox="0 0 23 23" className="stroke-white">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </Button>
);
