import Image from "@/common/components/element/Image";
import Link from "next/link";
import React from "react";

const EducationCard = () => {
  return (
    <div className="flex w-full dark:bg-neutral-800 dark:border-neutral-700 border-neutral-300 border-[1px] bg-neutral-200 p-5 mt-3 rounded-xl">
      <div className="flex max-md:flex-col gap-5">
        <Image
          src="/img/logo-uniki.png"
          alt="uniki"
          width={100}
          height={101}
          className="w-[80px] h-[80px]"
        />
        <div className="flex flex-col space-y-2">
          <Link href='https://uniki.ac.id/' target="__blank" >
          <h1 className="cap lg:hover:text-neutral-400 lg:transition-all lg:duration-300">Universitas Islam Kebangsaan Indonesia</h1>
          </Link>
          <div className="dark:text-neutral-400 text-sm space-y-2 text-neutral-600">
            <h2>
              Bachelor&rsquo;s Degree
              <span className="px-3">•</span>
              <span>Informatics Engineering (S.Kom)</span>
            </h2>
            <h2>2018 - 2022</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
