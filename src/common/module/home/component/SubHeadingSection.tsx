import SectionHeading from "@/common/components/element/SectionHeading";
import React from "react";
import Heading from "./Heading";

const SubHeadingSection = () => {
  return (
    <div className="flex items-center justify-between mt-5">
      <SectionHeading title="Latest Project" className="" />
      <Heading />
    </div>
  );
};

export default SubHeadingSection;
