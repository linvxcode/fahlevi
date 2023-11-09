"use client";
import Image from "@/common/components/element/Image";
import ArrowR from "@/common/components/svg/ArrowR";
import clsxm from "@/common/libs/clsxm";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { InstrumentMenuProps } from "@/common/components/types/InstrumentMenu";
import { useMobile } from "@/common/hooks/useMobile";

interface ProjectProps extends InstrumentMenuProps {
  view: string;
  data: FirebaseData[];
}

type FirebaseData = {
  id: string;
  title: string;
  slug: string;
  img: string;
  new: string;
};
const HeadInstruments = ({ view, data }: ProjectProps) => {
  const [loading, setLoading] = useState(false);
  const isMobile = useMobile();
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

  const Hover: any = isMobile
    ? {
        whileHover: {},
      }
    : {
        whileHover: { scale: 1.03, transition: { duration: 0.2 } },
      };

  const AnimateScale = !isMobile
    ? {
        initial: {
          opacity: 0,
          scale: 0.8,
        },
        whileInView: {
          opacity: 1,
          scale: 1,
        },
        transition: {
          duration: 0.3,
        },
        viewport: { once: true },
      }
    : {};

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 flex-row flex-wrap gap-5 mt-10 max-md:justify-center">
      {loading ? (
        <>
          {data?.map((item, index) => (
            <motion.div
              key={index}
              className="relative  group rounded-xl w-[100%] border-neutral-300 dark:border-neutral-700 border-[1px] dark:bg-neutral-800 bg-neutral-100 lg:hover:shadow-xl "
              {...AnimateScale}
              {...Hover}
            >
              <span className="absolute top-0 z-[9] w-auto text-center rounded-tr-xl rounded-bl-xl right-0 bg-green-600 text-black font-medium py-1 px-5">
                {item.new}
              </span>
              <Link href={`/instruments/${item.slug}`}>
                <div className="relative  w-full">
                  <Image
                    src={item.img}
                    width={400}
                    height={626}
                    alt="img"
                    priority
                    className={clsxm(
                      "sm:rounded-xl h-auto w-full sm:h-[100px]",
                      viewOption === "grid"
                        ? "!rounded-t-xl !rounded-b-none object-cover !h-[200px]"
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
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HeadInstruments;
