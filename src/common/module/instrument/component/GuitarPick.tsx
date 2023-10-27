import { Button } from "@nextui-org/react";
import React from "react";

const GuitarPick = () => {
  return (
    <div className="flex flex-col ">
      <div className="h-9 relative ">
        <div className="w-[700px] h-1 pick-1 z-[99] absolute"></div>
      </div>
      <div className="h-9">
        <div className="w-[700px]  h-1 pick-1 z-[99] absolute"></div>
      </div>
      <div className="h-9">
        <div className="w-[700px]  h-1 pick-1 z-[99] absolute"></div>
      </div>
      <div className="h-9">
        <div className="w-[700px]  h-1 pick-1 z-[99] absolute"></div>
      </div>
      <div className="h-9">
        <div className="w-[700px]  h-1 pick-1 z-[99] absolute"></div>
      </div>
      <div className="h-9 ">
        <div className="w-[700px] z-[99] relative  h-1 pick-1 "></div>
      </div>
      <div className="w-[60px] h-[210px] top-[-15px] border-r  border-[#000] absolute">
        <div className="flex justify-center flex-col">
          <Button className="px-0  h-[2.24rem] min-w-unit-10  relative z-[99] bg-transparent">
            <h1 className="text-2xl text-black text-center"></h1>
          </Button>
          <Button className="px-0  h-[2.24rem] min-w-unit-10  relative z-[99] bg-transparent">
            <h1 className="text-2xl text-black text-center"></h1>
          </Button>
          <Button className="px-0  h-[2.24rem] min-w-unit-10  relative z-[99] bg-transparent">
            <h1 className="text-2xl text-black text-center"></h1>
          </Button>
          <Button className="px-0  h-[2.24rem] min-w-unit-10  relative z-[99] bg-transparent">
            <h1 className="text-2xl text-black text-center"></h1>
          </Button>
          <Button className="px-0  h-[2.24rem] min-w-unit-10  relative z-[99] bg-transparent">
            <h1 className="text-2xl text-black text-center"></h1>
          </Button>
          <Button className="px-0  h-[2.24rem] min-w-unit-10  relative z-[99] bg-transparent">
            <h1 className="text-2xl text-black text-center"></h1>
          </Button>
        </div>
      </div>
      <div className="w-[60px] left-[60px] h-[210px] top-[-15px] border-r  border-[#000] absolute"></div>
      <div className="w-[60px] left-[120px] h-[210px] top-[-15px] border-r  border-[#000] absolute"></div>
      <div className="w-[60px] left-[180px] h-[210px] top-[-15px] border-r  border-[#000] absolute"></div>
      <div className="w-[60px] left-[240px] h-[210px] top-[-15px] border-r  border-[#000] absolute"></div>
      <div className="w-[60px] left-[300px] h-[210px] top-[-15px] border-r  border-[#000] absolute"></div>
      <div className="w-[60px] left-[360px] h-[210px] top-[-15px] border-r  border-[#000] absolute"></div>
      <div className="w-[60px] left-[420px] h-[210px] top-[-15px] border-r  border-[#000] absolute"></div>
      <div className="w-[60px] left-[480px] h-[210px] top-[-15px] border-r  border-[#000] absolute"></div>
      <div className="w-[60px] left-[540px] h-[210px] top-[-15px] border-r  border-[#000] absolute"></div>
      <div className="w-[60px] left-[600px] h-[210px] top-[-15px] border-r  border-[#000] absolute"></div>
    </div>
  );
};

export default GuitarPick;
