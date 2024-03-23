import React from "react";
import { FaUserPlus } from "react-icons/fa";
const Heading = ({ title, btn }) => {
  return (
    <div className="grid grid-cols-2 place-items-center mx-0  lg:mx-auto lg:container my-7 w-full ">
      <h1 className="font-bold text-[10px] lg:text-2xl uppercase text-blue-800">
        {title}
      </h1>
      <div className="relative flex items-center justify-between">
        <button className="rounded-md border border-blue-800 text-[9px] lg:text-lg px-4 py-1.5 lg:py-2.5 font-semibold text-blue-800 hover:text-black shadow-md shadow-blue-500/20 hover:bg-[#F7BE38] duration-200 ">
          {btn}
        </button>
        <FaUserPlus className="absolute right-1 text-green-800 text-[9px]" />
      </div>
    </div>
  );
};

export default Heading;
