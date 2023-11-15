import BlogDetail from "@/common/module/blog/component/BlogDetail";
import { Metadata } from "next";
import React from "react";
import { retriveBlog } from "@/common/libs/firebase/service";
import Layouts from "@/common/components/element/Layouts";
import BlogFilter from "@/common/module/blog/component/BlogFilter";

interface BlogProps {
  params: { slug: string };
}

const BlogSlug = async ({ params, }: BlogProps) => {
  const { slug } = params;
  const data = await retriveBlog("blog");
  const blog = data.find((item: any) => item.slug === slug);
  const statusBlog = blog?.status;
  return ( 
    <div>
      <Layouts >
        {statusBlog === 'feutured' ? (
          <BlogDetail params={{ slug }}  />
          ): (
            <>
            <BlogFilter />
            </>
          )}
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
