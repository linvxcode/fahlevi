"use client";
import Image from "@/common/components/element/Image";
import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { retriveBlog } from "@/common/libs/firebase/service";
import Link from "next/link";
import clsxm from "@/common/libs/clsxm";
import { useMobile } from "@/common/hooks/useMobile";
import Breakline from "@/common/components/element/Breakline";

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
        <Card
          className="relative"
          key={index}
        >
          <Link href={`/blog/${item.slug}`}>
            {item.status === "feutured" ? (
              <>
                <CardHeader className="absolute z-10 top-0 py-5 gap-2 items-start opc-fade">
                  {item.stack.map((stack: any, index: any) => (
                    <div
                      className="bg-neutral-700 flex px-5 py-2 rounded-[200px]"
                      key={index}
                    >
                      <p className="text-xs text-neutral-300 font-bold">
                        # {stack}
                      </p>
                    </div>
                  ))}
                </CardHeader>
                <div className="">
                  <Image
                    src={item.img}
                    width={800}
                    height={226}
                    alt="img"
                    priority
                    className=
                      "sm:rounded-xl  sm:h-[100px] w-full object-cover !h-[350px]"
                  />
                </div>
                <div className="absolute top-[250px] w-full">
                <Breakline className="" />

                  {/* <p className="text-2xl font-bold text-white ">
                        {item.seotitle}
                      </p> */}
                  </div>
                <CardFooter className="absolute py-5  bottom-0 z-10  border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <Image
                      width={400}
                      height={400}
                      alt="Breathing app icon"
                      className="rounded-full w-10 h-11 bg-black"
                      src="/img/upwork.jpeg"
                    />
                    <div className="flex flex-col">
                      <p className="text-lg text-neutral-100">
                        {item.seotitle}
                      </p>
                      <p className="text-tiny text-white/60">
                        {item.createdAt.toDate().toLocaleString()}
                      </p>
                    </div>
                  </div>
                </CardFooter>
                <div className='absolute inset-0 bg-gradient-to-b from-black/20 to-black opacity-80 transition-opacity duration-300'></div>
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
