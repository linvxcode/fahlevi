import SectionHeading from "@/common/components/element/SectionHeading";
import React from "react";
import { TbSchool as EducationIcon } from "react-icons/tb";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <EducationIcon size={25} />
        <SectionHeading title="Education" className="text-xl " />
      </div>
      <div>
        <EducationCard/>
      </div>
    </div>
  );
};

export default Education;
