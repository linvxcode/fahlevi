"use client";
import React, { useEffect, useState } from "react";
import { retriveBlog } from "@/common/libs/firebase/service";
import Back from "@/common/components/element/Back";
import Loading from "../../instrument/component/Loading";
import Image from "@/common/components/element/Image";
import Breakline from "@/common/components/element/Breakline";
import SectionHeading from "@/common/components/element/SectionHeading";
import SubHead from "@/common/components/element/SubHead";
import { Snippet } from "@nextui-org/react";
import Code from "./Code";

interface slugProps {
  params: { slug: string };
}

const BlogDetail = ({ params }: slugProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const { slug } = params;

  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await retriveBlog("blog");
      const blog = data.find((item: any) => item.slug === slug);
      if (blog) {
        setBlog(blog);
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);
  return (
    <div>
      <Back href="/blog" className="mb-5">
        Back
      </Back>
      {loading ? (
        <>
          <Loading className="" />
        </>
      ) : (
        <>
          <Image
            src={`${blog?.img}`}
            alt={`${blog?.slug}`}
            width={400}
            height={400}
            priority
            className="object-cover w-full  h-40 mt-2 rounded-md lg:hover:scale-105 "
          />
          <Breakline />
          <SectionHeading title={`${blog.title}`} className="md:sticky  md:top-0 w-full bg-[#F2F2F2] dark:bg-neutral-900 py-5 z-[9]" />
          <SubHead className="" title={`${blog?.descintro}`} />
          <Breakline />
          <h1 className="text-2xl  dark:text-white mb-3">Setup</h1>
          <h1 className="text-xl">1. Install Framer Motion</h1>
          <div className="block">
            <Snippet symbol={false} className="mt-2">npm i framer-motion</Snippet>
            <h1 className="py-2 px-2">Or</h1>
            <Snippet symbol={false} className="">yarn add framer-motion</Snippet>
          </div>
          <h1 className="mt-20 text-xl">2. Import Framer Motion</h1>
          <div className="block">
            <Snippet symbol={false} className="mt-2 flex no-scrollbar w-full overflow-scroll">
              {blog?.import}
            </Snippet>
          </div>
          <h1 className="mt-20 text-xl">3. Add Motion</h1>
          <h1 className="py-5 px-1 text-lg leading-relaxed">
            add initial for initial first value in here we make opacity: 0 for
            first load its hide and whileInView set to opacity : 1 its going to
            animate opacity from 0 to 1 and add translateY its tranlate from
            bottom to top and use transition type spring for smooth transition and duration
            and the function of the viewport is to execute once when on the page
          </h1>
          <Code />
        </>
      )}
    </div>
  );
};

export default BlogDetail;
