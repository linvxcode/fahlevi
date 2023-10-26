"use client";
import Image from "@/common/components/element/Image";
import ArrowR from "@/common/components/svg/ArrowR";
import clsxm from "@/common/libs/clsxm";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { InstrumentMenuProps } from "@/common/components/types/InstrumentMenu";

interface ProjectProps extends InstrumentMenuProps {
  view: string;
  data: FirebaseData[]
}

type FirebaseData = {
  id: string;
  title: string;
  slug: string;
  img: string;
  new:string;
};
const HeadInstruments = ({ view, data }: ProjectProps) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const [viewOption, setViewOption] = useState<string>();

  useEffect(() => {
    !isMobile ? setViewOption("grid") : setViewOption(view);

  }, [isMobile, view]);

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      <div className="grid grid-cols-2 flex-row flex-wrap gap-5 mt-10 max-md:justify-center">
        {data?.map((item, index) => (
          <motion.div
            key={index}
            className="relative  group rounded-xl w-[100%] border-neutral-300 dark:border-neutral-700 border-[1px] dark:bg-neutral-800/80 bg-neutral-200/80 lg:hover:shadow-xl lg:hover:transition-all lg:hover:duration-300 "
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{scale: 1.05 , transition: {duration: 0.2}}}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="absolute top-0 z-[9] w-auto text-center rounded-tr-xl rounded-bl-xl right-0 bg-green-600 text-black font-medium py-1 px-5">{item.new}</span>
            <Link href={`/instruments/${item.slug}`}>
              <div className="relative  w-full">
                <Image
                  src={item.img}
                  width={400}
                  height={100}
                  alt="img"
                  priority
                  className={clsxm(
                    "sm:rounded-xl sm:h-[8.5rem] object-cover w-full",
                    viewOption === "grid"
                      ? "!rounded-t-xl !rounded-b-none !h-48"
                      : ""
                  )}
                />
                <div className=" gap-1 absolute top-0 left-0 w-full h-full bg-black justify-center items-center opacity-0 transition-opacity duration-300 flex  text-white group-hover:opacity-80 rounded-t-xl text-sm font-medium">
                  <span>Preview</span>
                  <ArrowR />
                </div>
              </div>
              <motion.div className="p-5 overflow-hidden">
                <p className="md:text-[17px]  font-medium text-neutral-600 dark:text-neutral-200 lg:group-hover:text-[#818cf8] dark:group-hover:text-[#818cf8] transition-all duration-300">
                  {item.title}
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

export default HeadInstruments;