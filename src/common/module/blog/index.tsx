import Layouts from "@/common/components/element/Layouts";
import SingleBlog from "./component/SingleBlog";
import BlogList from "./component/BlogList";

const BlogPage = () => {
  return (
    <div>
      <Layouts>
        <SingleBlog />
        {/* <BlogList /> */}
      </Layouts>
    </div>
  );
};

export default BlogPage;
