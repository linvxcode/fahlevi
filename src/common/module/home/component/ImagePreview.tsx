"use client";
import Image from "@/common/components/element/Image";
import clsxm from "@/common/libs/clsxm";
import React, { useEffect, useState } from "react";
import ArrowR from "@/common/components/svg/ArrowR";
import { useMobile } from "@/common/hooks/useMobile";

const ImagePreview = ({ view, item }: any) => {
  const isMobile = useMobile();

  const [viewOption, setViewOption] = useState<string>();

  useEffect(() => {
    !isMobile ? setViewOption("grid") : setViewOption(view);
  }, [isMobile, view]);
  return (
    <div className="relative w-full min-w-[350px]  flex !flex-col ">
      <Image
        src={item}
        width={400}
        height={100}
        alt="img"
        priority
        className={clsxm(
          "sm:rounded-xl sm:h-[8.5rem] h-auto object-cover w-full",
          viewOption === "grid" ? "!rounded-t-xl !rounded-b-none !h-48" : ""
        )}
      />
      <div className=" gap-1 absolute top-0 left-0 w-full h-full bg-black justify-center items-center opacity-0 transition-opacity duration-300 flex  text-white group-hover:opacity-80 rounded-t-xl text-sm font-medium">
        <span>Preview</span>
        <ArrowR />
      </div>
    </div>
  );
};

export default ImagePreview;
