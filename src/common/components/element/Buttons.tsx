import { Button } from "@nextui-org/react";
import clsx from "clsx";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonsProps {
    className: string;
    icon: ReactNode;
    icons: ReactNode;
    href: string;
    title: string;
}

const Buttons = ({className= '', icons,icon, href, title}: ButtonsProps) => {
  return (
    <Button
      size="lg"
      color="default"
      className={clsx("lg:hover:bg-neutral-600 relative group lg:transition-all lg:duration-300", className)}
      as={Link}
      href={href && href}
      target="__blank"
    >
      <h1 className=" z-[9] flex items-center gap-2 dark:lg:group-hover:text-black lg:group-hover:text-white lg:transition-all lg:duration-300 relative">
        <span>
        {icon && <>{icon}</>}
        </span>
        {title}
      </h1>
      <div className="absolute top-0 right-[-12px] group-hover:z-[5] group-hover:rotate-12">
      {icons && <>{icons}</>}
      </div>
      <div className="absolute inset-0 lg:translate-y-[100%] dark:lg:bg-[#fff] lg:bg-neutral-800 lg:transition-transform lg:duration-300 lg:group-hover:translate-y-[0%]"></div>
    </Button>
  );
};

export default Buttons;
