import Buttons from "@/common/components/element/Buttons";
import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {
  const LINKRESUME =
    "https://drive.google.com/file/d/1wcY-Ork7OzxNyokLv5QGsUljkHhzSYCs/view?usp=share_link";

  return (
    <>
      <Buttons
      className="mt-5"
        href={LINKRESUME}
        title="Download Resume"
        icon={
          <AiOutlineDownload
            size={20}
            className=""
          />
        }
        icons={
          <AiOutlineDownload
            size={40}
            className="dark:text-neutral-600 text-neutral-400 dark:lg:group-hover:text-neutral-300 lg:group-hover:text-neutral-700 lg:transition-all lg:duration-300"
          />
        }
      />
    </>
  );
};

export default Resume;
