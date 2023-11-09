import React from "react";

const Location = () => {
  return (
    <div className="mt-3 flex  items-center gap-2">
      <span className="relative flex justify-center items-center rounded-full h-3 w-3 bg-sky-500"></span>
      <span className="animate-ping absolute h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
      <h1 className="text-neutral-400">Available for hire</h1>
      
      <span className="relative ml-5 mr-1 flex justify-center items-center rounded-full h-2 w-2 bg-neutral-400"></span>
      <h1 className="text-neutral-400 ">Based in Aceh</h1>
    </div>
  );
};

export default Location;
