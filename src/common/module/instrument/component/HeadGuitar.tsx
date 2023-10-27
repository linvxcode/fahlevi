import GuitarH from "@/common/components/svg/GuitarH";
import GuitarH2 from "@/common/components/svg/GuitarH2";
import React from "react";
import GuitarPick from "./GuitarPick";

const HeadGuitar = () => {
  return (
    <div className="flex">
      <div className="relative">
        <GuitarH />
        <div className="absolute top-0 right-[60px]">
          <GuitarH2 />
        </div>
        <div className="absolute top-0 left-[110px] bg-white h-[210px]">
        <div className="relative top-[15px] ">
          <GuitarPick />
        </div>
        </div>
      </div>
    </div>
  );
};

export default HeadGuitar;
