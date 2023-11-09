"use client";
import { PreviewProjectItems } from "@/common/constant/PreviewProjectItems";
import Link from "next/link";
import ImagePreview from "./ImagePreview";
import { motion } from "framer-motion";
import { useMobile } from "@/common/hooks/useMobile";
import React, { useEffect, useState } from "react";

const ProjectPrevew = () => {
  const [loading, setLoading] = useState(false);
  const isMobile = useMobile();

  const Slide = !isMobile
    ? {
        initial: {
          translateX: 100,
        },
        animate: {
          translateX: 0,
          transition: { type: "spring", duration: 2 },
        },
        viewport: { once: true },
      }
    : {};

  useEffect(() => {
    const ifLoad = () => {
      if (isMobile === true) {
        setLoading(true);
      }
    };
    ifLoad();
  }, [isMobile]);

  return (
    <div className="flex gap-5 mt-10 md:flex-row flex-col md:overflow-x-scroll no-scrollbar">
      {loading ? (
        <>
          {PreviewProjectItems?.map((item, index) => (
            <motion.div
              key={index}
              className=" group max-md:overflow-hidden rounded-xl border-[1px] border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800/80 bg-neutral-200/80 lg:hover:shadow-xl lg:hover:transition-all lg:hover:duration-300 "
              {...Slide}
            >
              <Link href={item.src} target="__blank">
                <ImagePreview item={item.href} />
                <div className="p-5">
                  <p className="md:text-[17px] line-clamp-3 font-medium text-neutral-600 dark:text-neutral-200 lg:group-hover:text-[#818cf8] dark:group-hover:text-[#818cf8] transition-all duration-300">
                    {item.body}
                  </p>
                  <h3></h3>
                </div>
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

export default ProjectPrevew;
