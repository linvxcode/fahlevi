import Image from "@/common/components/element/Image";
import ArrowR from "@/common/components/svg/ArrowR";
import clsxm from "@/common/libs/clsxm";
import Link from "next/link";
import React from 'react'
// import { motion, MotionConfig } from "framer-motion";


const InstrumentList = () => {
  return (
    <div>
      {InsrumentMenu?.map((item, index) => (
        <div key={index} className=" group rounded-xl w-[100%] border-neutral-300 dark:border-neutral-700 border-[1px] dark:bg-neutral-800/80 bg-neutral-200/80 lg:hover:shadow-xl lg:hover:transition-all lg:hover:duration-300 "
        
        >
          <Link href={``}>
            <div className="relative  w-full">
              <Image
                src={item.img}
                width={400}
                height={100}
                alt="img"
                priority
                className={clsxm(
                  'sm:rounded-xl sm:h-[8.5rem] object-cover',
                  viewOption === 'grid' ? '!rounded-t-xl !rounded-b-none !h-48' : ''
                )}
              />
              <div className=" gap-1 absolute top-0 left-0 w-full h-full bg-black justify-center items-center opacity-0 transition-opacity duration-300 flex  text-white group-hover:opacity-80 rounded-t-xl text-sm font-medium">
                <span>Preview</span>
                <ArrowR />
              </div>
            </div>
            <modiv className="p-5 overflow-hidden" 
            >
              <p className="md:text-[17px]  font-medium text-neutral-600 dark:text-neutral-200 lg:group-hover:text-[#818cf8] dark:group-hover:text-[#818cf8] transition-all duration-300">
                {item.title}
              </p>
              <h3></h3>
            </modiv>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default InstrumentList
