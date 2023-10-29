"use client";
import HeaderSide from "./partial/HeaderSide";
import React, { ReactNode } from "react";
import MobileSidebar from "./partial/MobileSidebar";

type SidebarProps = {
  children: ReactNode;
};

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="flex gap-5 max-md:gap-0 lg:px-12 px-5 py-10 max-w-7xl mx-auto">
      <div className="w-[20%] max-md:hidden">
        <div className="sticky top-0 h-auto gap-5 pr-10">
          <HeaderSide />
        </div>
      </div>
      <div className="max-md:flex hidden">
        <div className="">
          <MobileSidebar/>
          {/* <HeaderSide /> */}
        </div>
      </div>
      <main className="w-[80%] relative max-md:mt-14 max-md:w-[100%] max-w-[854px]">
        <section className="max-w-[854px]">
          {children}
          </section>
      </main>
    </div>
  );
};
