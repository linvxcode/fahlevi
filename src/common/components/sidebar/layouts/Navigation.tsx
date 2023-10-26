import Link from "next/link";
import React from "react";
import { MenuItem } from "@/common/constant/MenuItems";
import { usePathname } from "next/navigation";

const Navigation = () => {
const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <div className="py-2 flex flex-col gap-2">
        {MenuItem?.map((item, index) => (
          <Link href={`${item?.href}`} key={index}>
            <div className={`${pathname === item.href ? ' bg-neutral-200 dark:bg-neutral-800 lg:rounded-xl lg:transition-all lg:duration-700 lg:scale-110' : ''} flex items-center group text-neutral-700 justify-start gap-3 hover:bg-neutral-200 dark:hover:bg-neutral-800 h-10 px-2 dark:text-neutral-200 hover:lg:scale-110 hover:lg:rounded-xl hover:lg:transition-all hover:lg:duration-700`}>
              <div className={`${pathname === item.href ? '-rotate-12' : ""} lg:group-hover:-rotate-12 lg:duration-300 lg:transition-all ` }>
              {item.icon}
              </div>
              {item?.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
