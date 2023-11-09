"use client";
import Image from "@/common/components/element/Image";
import ArrowR from "@/common/components/svg/ArrowR";
import { ProjectItems } from "@/common/constant/ProjectItems";
import clsxm from "@/common/libs/clsxm";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { useMobile } from "@/common/hooks/useMobile";

type ProjectProps = {
  view: string;
};

const BodyProj = ({ view }: ProjectProps) => {
  const isMobile = useMobile();
  const [loading, setLoading] = useState(false);

  const [viewOption, setViewOption] = useState<string>();

  useEffect(() => {
    const ifLoad = () => {
      if (isMobile === true) {
        setLoading(true);
      }
    };
    ifLoad();
    !isMobile ? setViewOption("grid") : setViewOption(view);
  }, [isMobile, view]);

  const Hover: any = !isMobile
    ? {
        whileHover: { scale: 1.03 },
      }
    : {};

  const Translate = !isMobile
    ? {
        initial: {
          opacity: 0,
          scale: 0.8,
        },
        whileInView: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.3 },
        },
        viewport: { once: true },
      }
    : {};


  return (
    <div className="grid md:grid-cols-2 grid-cols-1 flex-row flex-wrap gap-5 mt-10 max-md:justify-center">
      {loading ? (
        <>
          {ProjectItems?.map((item, index) => (
            <motion.div
              key={index}
              className=" group rounded-xl w-[100%] border-neutral-300 dark:border-neutral-700 border-[1px] dark:bg-neutral-800 bg-neutral-100 lg:hover:shadow-xl "
              {...Translate}
              {...Hover}
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
                  <h1 className="mb-2 lg:group-hover:text-[#818cf8] dark:group-hover:text-[#818cf8] lg:transition-all lg:duration-300">
                    {item.title}
                  </h1>
                  <p className="text-[15px] line-clamp-2 mb-2 leading-relaxed font-medium text-neutral-600 dark:text-neutral-400 ">
                    {item.body}
                  </p>
                  <div className="flex gap-2">
                    {item.icon}
                    {item.icon2}
                    {item.icon3}
                    {item.icon4}
                    {item.icon5}
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BodyProj;
