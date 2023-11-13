"use client";
import Image from "@/common/components/element/Image";
import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { retriveBlog } from "@/common/libs/firebase/service";
import Link from "next/link";
import clsxm from "@/common/libs/clsxm";
import { useMobile } from "@/common/hooks/useMobile";
import Breakline from "@/common/components/element/Breakline";
import {AiOutlineArrowRight} from 'react-icons/ai';
import { motion } from "framer-motion";
interface Blog {
  id: string;
  slug: string;
  title: any;
  seotitle: any;
  img: any;
  status: any;
  stack: any;
  createdAt: any;
}

const BlogList = () => {
  const [blog, setBlog] = useState<Blog[]>([]);
  const isMobile = useMobile();

  const fetchBlog = async () => {
    try {
      const res = await retriveBlog("blog");
      if (res) {
        setBlog(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlog();
  }, [isMobile]);

  return (
    <div>
      {blog?.map((item, index) => (
        <Card isFooterBlurred className="relative group" key={index}>
          <Link href={`/blog/${item.slug}`}>
            {item.status === "feutured" ? (
              <>
                <CardHeader className="absolute flex-row flex-wrap z-10 top-0 py-5 gap-2 items-start opc-fade">
                  {item.stack.map((stack: any, index: any) => (
                    <div
                      className="bg-neutral-900/50 flex  px-1 py-1 rounded-[200px]"
                      key={index}
                    >
                      <p className="text-xs font-mono text-neutral-300 font-bold">
                        #{stack}
                      </p>
                    </div>
                  ))}
                </CardHeader>
                <div className="">
                  <Image
                    src="/img/nextfram.png"
                    width={800}
                    height={226}
                    alt="img"
                    priority
                    className="sm:rounded-xl  sm:h-[100px] lg:group-hover:blur-sm lg:group-hover:scale-105 w-full object-cover !h-[350px]"
                  />
                </div>
                <div className="absolute top-[250px] w-full"></div>
                <CardFooter className="absolute py-5  bottom-0 z-10  border-default-600 dark:border-default-100">
                  <div className="flex max-md:flex-col flex-grow gap-2 items-start md:items-center">
                    <Image
                      width={400}
                      height={400}
                      alt="Breathing app icon"
                      className="rounded-full max-md:group-hover:-translate-x-20 md:group-hover:w-20 md:group-hover:h-20 w-10 h-11 bg-black"
                      src="/img/upwork.jpeg"
                    />
                    <div className="flex relative flex-col group-hover:-translate-y-16 md:group-hover:-translate-y-20 transition-all duration-300">
                      <p className="text-lg text-neutral-100">
                        {item.seotitle}
                      </p>
                      <p className="text-tiny text-white/60">
                        {item.createdAt.toDate().toLocaleString()}
                      </p>
                      <p className="text-2xl absolute flex items-center bottom-0 ease-in text-neutral-100 translate-y-14 group-hover:translate-y-16 font-bold md:px-5 transition-all duration-300">
                        Read More
                        <span className="group-hover:translate-x-4 transition-all duration-300 delay-500">
                        <AiOutlineArrowRight size={20} />
                        </span>
                      </p>
                    </div>
                  </div>
                </CardFooter>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30 opacity-80 transition-opacity duration-300"></div>
              </>
            ) : (
              <></>
            )}
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;
