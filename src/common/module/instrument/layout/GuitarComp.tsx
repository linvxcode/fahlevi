"use client";
import Back from "@/common/components/element/Back";
import Breakline from "@/common/components/element/Breakline";
import Image from "@/common/components/element/Image";
import SectionHeading from "@/common/components/element/SectionHeading";
import SubHead from "@/common/components/element/SubHead";
import { retriveData } from "@/common/libs/firebase/service";
import React, { useEffect, useState } from "react";
import Loading from "../component/Loading";
import GuitarPage from "../component/GuitarPage";

interface GuitarProps {
  params: { slug: string };
}

const GuitarComp = ({ params }: GuitarProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const { slug } = params;

  const [instrumentData, setInstrumentData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await retriveData("instruments");
      const instrument = data.find((item: any) => item.slug === slug);
      if (instrument) {
        setInstrumentData(instrument);
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);
  return (
    <div>
      <Back href="/instruments" className="mb-5">
        Back
      </Back>
      {loading ? (
        <>
          <Loading className="" />
        </>
      ) : (
        <>
          <Image
            src={`${instrumentData?.img}`}
            alt={`${instrumentData?.slug}`}
            width={400}
            height={400}
            priority
            className="object-cover w-full  h-40 mt-2 rounded-md lg:hover:scale-105 "
          />
          <Breakline />
          <SectionHeading title={`${instrumentData?.title} Virtual`} />
          <SubHead
            title="i made this for have fun , i hope you guys can fun with this guitar virtual"
            className="mt-3 mb-8"
          />
          {instrumentData?.note && (
            <>
          <Breakline />
          <SectionHeading title="Note"  />
          <SubHead
            title={`${instrumentData?.note}`}
            className="mt-3 mb-8"
          />
          <Breakline />
            </>
          )}
          <GuitarPage />
        </>
      )}
    </div>
  );
};

export default GuitarComp;
