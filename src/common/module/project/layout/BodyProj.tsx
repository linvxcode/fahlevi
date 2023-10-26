'use client'
import Image from "@/common/components/element/Image";
import ArrowR from "@/common/components/svg/ArrowR";
import { ProjectItems } from "@/common/constant/ProjectItems";
import clsxm from "@/common/libs/clsxm";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import useIsMobile from "@/common/hooks/useIsMobile";
import { useWindowSize } from "usehooks-ts";

type ProjectProps = {
  view: string;
}





const BodyProj = ({view} : ProjectProps) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })

  const [viewOption, setViewOption] = useState<string>()

  useEffect(() => {
    !isMobile ? setViewOption('grid') : setViewOption(view)
  }, [isMobile, view])

  const Anim: any = isMobile ? 
  {
    initial: {
      opacity: 0,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    transition: { duration: 0.3, delay: 0.5 },
    viewport: {once:true}

  }: {
    initial: false
  }

  return (
    <MotionConfig reducedMotion={isMobile ? 'always' : "never"}>
    <div className="grid md:grid-cols-2 grid-cols-1 flex-row flex-wrap gap-5 mt-10 max-md:justify-center">
      {ProjectItems?.map((item, index) => (
        <motion.div key={index} className=" group rounded-xl w-[100%] border-neutral-300 dark:border-neutral-700 border-[1px] dark:bg-neutral-800/80 bg-neutral-200/80 lg:hover:shadow-xl lg:hover:transition-all lg:hover:duration-300 "
        // {...Anim}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{once:true}}
        >
          <Link href={item.src} target="__blank">
            <div className="relative  w-full">
              <Image
                src={item.href}
                width={400}
                height={100}
                alt="img"
                priority
                className={clsxm(
                  'sm:rounded-xl sm:h-[8.5rem] object-cover w-full',
                  viewOption === 'grid' ? '!rounded-t-xl !rounded-b-none !h-48' : ''
                )}
              />
              <div className=" gap-1 absolute top-0 left-0 w-full h-full bg-black justify-center items-center opacity-0 transition-opacity duration-300 flex  text-white group-hover:opacity-80 rounded-t-xl text-sm font-medium">
                <span>Preview</span>
                <ArrowR />
              </div>
            </div>
            <motion.div className="p-5 overflow-hidden" 
            >
              <p className="md:text-[17px]  font-medium text-neutral-600 dark:text-neutral-200 lg:group-hover:text-[#818cf8] dark:group-hover:text-[#818cf8] transition-all duration-300">
                {item.body}
              </p>
              <h3></h3>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
    </MotionConfig>
  );
};

export default BodyProj;
