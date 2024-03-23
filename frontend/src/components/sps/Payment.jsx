import React from "react";
import master from "../../assets/images/master.png";
import visa from "../../assets/images/visa.png";

const Payment = () => {
  return (
    <div className="flex rounded-t-md border-t border-gray-200  bg-white p-5 md:p-10 lg:p-2">
      <div className=" flex-[2]">
        <h1 className=" text-black text-[12px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-bold ">
          Secure Payment
        </h1>
      </div>

      <div className="flex-[2] flex space-x-2 ">
        <img src={visa} alt="" className="w-12" />
        <img src={master} alt="" className="w-12" />
      </div>
    </div>
  );
};

export default Payment;
