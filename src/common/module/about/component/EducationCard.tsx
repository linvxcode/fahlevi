import Image from "@/common/components/element/Image";
import React from "react";

const EducationCard = () => {
  return (
    <div className="flex w-full bg-neutral-700/30 p-5 mt-3 rounded-xl">
      <div className="flex gap-5">
        <Image
          src="/img/logo-uniki.png"
          alt="uniki"
          width={100}
          height={101}
          className="w-[80px] h-[80px]"
        />
        <div className="flex flex-col space-y-2">
          <h1 className="cap">Universitas Islam Kebangsaan Indonesia</h1>
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
