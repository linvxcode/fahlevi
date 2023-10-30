"use client";
import React, { FC, useEffect, useState } from "react";
// import { InsrumentMenu } from '@/common/constant/InstrumentMenu'
import SectionHeading from "@/common/components/element/SectionHeading";
import Image from "@/common/components/element/Image";
import Breakline from "@/common/components/element/Breakline";
import PianoKeys from "@/common/module/instrument/component/PianoKeys";
import { retriveData } from "@/common/libs/firebase/service";
import Loading from "./Loading";
import SubHead from "@/common/components/element/SubHead";
import Back from "@/common/components/element/Back";

interface instrumentProps {
  params: { slug: string };
}

const InstrumentDetail = ({ params }: instrumentProps) => {
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
          <Loading />
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
          {instrumentData.new === "Coming Soon!" ? (
            <h1 className="text-4xl text-center mt-5">Coming Soon</h1>
          ) : (
            <>
              <SubHead
                title="i made this for have fun , i hope you guys can fun with this piano virtual"
                className="mt-3 mb-8"
              />
              <div className="flex">
              <PianoKeys />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default InstrumentDetail;
