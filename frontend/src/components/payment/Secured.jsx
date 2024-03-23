import React from "react";
import master from "../../assets/images/master.png";
import visa from "../../assets/images/visa.png";
import payment from "../../assets/images/payment.jpg";
const Secured = () => {
  return (
    <>
      <section className="p-5 ">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto ">
          {/* Secured Payment Info Starts */}
          <div class="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  shadow-lg bg-[#143e50] ">
            <div className="relative flex flex-col  items-center justify-evenly">
              <div className="bg-white shadow rounded-lg text-[#143e50] ">
                <img src={payment} class="object-cover  w-full" alt="" />
                <div className="p-6">
                  <span className="block font-semibold text-sm">
                    16 Juillet 2016
                  </span>
                  <h3 className="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                    <a href="">Finding best places to visit in California</a>
                  </h3>
                  <div className="flex mt-4 gap-4 items-center">
                    <span className="flex gap-1 items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      35
                    </span>
                    <span className="flex gap-1 items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="text-sky-400 w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                      20
                    </span>
                    <span className="flex gap-1 items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 text-lime-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                        />
                      </svg>
                      15
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col  items-center justify-evenly">
              <img
                src={payment}
                alt=""
                className="object-cover w-full h-full block"
              />
              <div className="pb-1 absolute top-[67px] left-1">
                <h1 className=" text-black text-lg font-bold ">
                  PAYMENT METHODS:
                </h1>
              </div>

              <div className="flex space-x-3  pb-1 absolute bottom-[30%] left-2">
                <div>
                  <img src={master} alt="" className="" />
                </div>
                <div>
                  <img src={visa} alt="" className="" />
                </div>
              </div>

              <p class="absolute bottom-0 p-4 bg-white w-full text-center  border-l-8  border-emerald-500 shadow-lg">
                <span className="text-emerald-500  font-bold tracking-tight text-base  lg:text-2xl">
                  Secure Payment System
                </span>
              </p>
            </div>
          </div>
          {/* Secured Payment Info Ends */}
          {/* ########################################################################################################################### */}
          {/* Secured Payment Info Starts */}
          <div class="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
            <div className="relative flex flex-col  items-center justify-evenly">
              <img
                src={payment}
                alt=""
                className="object-cover w-full h-full block"
              />
              <div className="pb-1 absolute top-[67px] left-1">
                <h1 className=" text-black text-lg font-bold ">
                  PAYMENT METHODS:
                </h1>
              </div>

              <div className="flex space-x-3  pb-1 absolute bottom-[30%] left-2">
                <div>
                  <img src={master} alt="" className="" />
                </div>
                <div>
                  <img src={visa} alt="" className="" />
                </div>
              </div>

              <p class="absolute bottom-0 p-4 bg-white w-full text-center  border-l-8  border-emerald-500 shadow-lg">
                <span className="text-emerald-500  font-bold tracking-tight text-base  lg:text-2xl">
                  Secure Payment System
                </span>
              </p>
            </div>
            <div className="relative flex flex-col  items-center justify-evenly">
              <img
                src={payment}
                alt=""
                className="object-cover w-full h-full block"
              />
              <div className="pb-1 absolute top-[67px] left-1">
                <h1 className=" text-black text-lg font-bold ">
                  PAYMENT METHODS:
                </h1>
              </div>

              <div className="flex space-x-3  pb-1 absolute bottom-[30%] left-2">
                <div>
                  <img src={master} alt="" className="" />
                </div>
                <div>
                  <img src={visa} alt="" className="" />
                </div>
              </div>

              <p class="absolute bottom-0 p-4 bg-white w-full text-center  border-l-8  border-emerald-500 shadow-lg">
                <span className="text-emerald-500  font-bold tracking-tight text-base  lg:text-2xl">
                  Secure Payment System
                </span>
              </p>
            </div>
          </div>
          {/* Secured Payment Info Ends */}
        </div>
      </section>
    </>
  );
};

export default Secured;
