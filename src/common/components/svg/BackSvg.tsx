import React from "react";
import clsxm from "@/common/libs/clsxm";

type BackSvgProps = {
  className: string;
}

const BackSvg = (props: BackSvgProps) => {
  const {className} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width='15'
      height='15'
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={clsxm("w-6 h-6 outline outline-[1px] rounded-full", className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
      />
    </svg>
  );
};

export default BackSvg;
