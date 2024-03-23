import React from "react";
import { Link } from "react-router-dom";

const Ads = ({ price, title, image }) => {
  return (
    <Link to="/package">
      <div className=" bg-white p-2 gap-1  grid grid-cols-1 sm:grid-cols-1 sm:gap-3 sm:p-3 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3">
        <div className="">
          <img src={image} alt="" className="w-full  rounded-lg" />
        </div>
        <div className="">
          <h1 className="text-sm font-bold lg:text-[10px]">{title}</h1>
          <p className="text-[11px]">(Home Stay)</p>
          <p className="text-[11px]">4.6 stars(147)</p>
          <span className="mr-4 text-[11px]">Free parking</span>{" "}
          <span className="text-[11px]">Free WiFi</span>
        </div>
        <div className=" ">
          {/* <span className="text-[10px] ">Starting from</span> */}
          <span className="text-[12px] font-bold"> ${price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Ads;
