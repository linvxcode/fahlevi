import Link from "next/link";
import { Button } from "@nextui-org/react";
import React from "react";
import DownloadSvg from "@/common/components/svg/DownloadSvg";

const Resume = () => {
  const LINKRESUME =
    "https://drive.google.com/file/d/1wcY-Ork7OzxNyokLv5QGsUljkHhzSYCs/view?usp=share_link";
  return (
    <Button
      as={Link}
      href={LINKRESUME}
      variant="bordered"
      passHref
      target="__blank"
      className="flex group gap-2 hover:gap-3 transition-all duration-300 items-center text-neutral-600 dark:text-neutral-400  mt-6  w-fit px-4 py-2.5 rounded-lg "
    >
      <div className="group-hover:-rotate-12 transition-all duration-300">
        <DownloadSvg />
      </div>
      <span>Download Resume</span>
    </Button>
  );
};

export default Resume;
