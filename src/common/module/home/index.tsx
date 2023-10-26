import ProjectPrevew from "./component/ProjectPrevew";
import TextBody from "./component/TextBody";
import Layouts from "@/common/components/element/Layouts";
import Breakline from "@/common/components/element/Breakline";
import SubHeadingSection from "./component/SubHeadingSection";

export const Homepage = () => {
  return (
    <div className="">
      <Layouts>
        <h1 className="text-3xl font-medium text-neutral-800 dark:text-neutral-300">Hi, I&rsquo;m Fahlevi</h1>
        <TextBody />
        <Breakline/>
        <SubHeadingSection/>
        <ProjectPrevew />
     </Layouts>
    </div>
  );
};
