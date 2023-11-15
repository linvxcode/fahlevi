"use client";
import Image from "@/common/components/element/Image";
import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { retriveBlog } from "@/common/libs/firebase/service";
import Link from "next/link";
import clsxm from "@/common/libs/clsxm";
import { useMobile } from "@/common/hooks/useMobile";
import Breakline from "@/common/components/element/Breakline";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import Loading from "../../instrument/component/Loading";
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
  const [loading, setLoading] = useState<boolean>(true);
  const [blog, setBlog] = useState<Blog[]>([]);
  const isMobile = useMobile();

  const fetchBlog = async () => {
    try {
      const res = await retriveBlog("blog");
      if (res) {
        setLoading(false);
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
      {loading ? (
        <>
          <Loading className="!h-[250px]" />
        </>
      ) : (
        <>
          {blog?.map((item, index) => (
            <Card isFooterBlurred className="relative group w-[50%]" key={index}>
              <Link href={`/blog/${item.slug}`}>
                {item.status === "normal" && (
                  <>
                    <h1>{item.title}</h1>
                  </>
                )}
              </Link>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};

export default BlogList;
