import BlogDetail from "@/common/module/blog/component/BlogDetail";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import Head from "next/head";
import { retriveBlog } from "@/common/libs/firebase/service";
import Layouts from "@/common/components/element/Layouts";

interface BlogProps {
  params: { slug: string };
}

const BlogSlug = ({ params, }: BlogProps) => {
  const { slug } = params;
  return (
    <div>
      <Layouts >
      <BlogDetail params={{ slug }}  />
      </Layouts>
    </div>
  );
};

export default BlogSlug;

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const slug = params.slug;
  const data = await retriveBlog("blog");
  const blog = data.find((item: any) => item.slug === slug);

  return {
    title: blog?.title + ' - ' + 'Fahlevi',
    description: blog?.descintro
  };
}
