import Image from "@/common/components/element/Image";
import clsxm from "@/common/libs/clsxm";
import React from "react";
import { PreviewProjectItems } from "@/common/constant/PreviewProjectItems";
import Link from "next/link";
import ArrowR from "@/common/components/svg/ArrowR";

const ProjectPrevew = () => {
  return (
    <div className="flex gap-5 mt-10 overflow-x-scroll no-scrollbar">
      {PreviewProjectItems?.map((item, index) => (
        <div
          key={index}
          className=" group rounded-xl border-[1px] border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800/80 bg-neutral-200/80 lg:hover:shadow-xl lg:hover:transition-all lg:hover:duration-300 "
        >
          <Link href={item.src} target="__blank">
            <div className="relative w-full min-w-[350px]  flex !flex-col ">
              <Image
                src={item.href}
                width={400}
                height={100}
                alt="img"
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
                className={clsxm(
                  "rounded-t-xl sm:h-[8.5rem] object-cover"
                )}
              />
              <div className=" gap-1 absolute top-0 left-0 w-full h-full bg-black justify-center items-center opacity-0 transition-opacity duration-300 flex  text-white group-hover:opacity-80 rounded-t-xl text-sm font-medium">
                <span>Preview</span>
                <ArrowR/>
              </div>

            </div>
            <div className="p-5">
              <p className="md:text-[17px] line-clamp-3 font-medium text-neutral-600 dark:text-neutral-200 lg:group-hover:text-[#818cf8] dark:group-hover:text-[#818cf8] transition-all duration-300">
                {item.body}
              </p>
              <h3></h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectPrevew;
