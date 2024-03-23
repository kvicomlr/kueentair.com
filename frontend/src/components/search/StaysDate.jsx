import { useEffect, useRef, useState } from "react";

import {
  MdFamilyRestroom,
  MdArrowDropDown,
  MdLocationOn,
  MdCalendarMonth,
} from "react-icons/md";
import format from "date-fns/format";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { useNavigate } from "react-router-dom";

const StaysDate = () => {
  // Rooms & Travelers Search Logic
  const [openOptions, setOpenOptions] = useState(false);

  //Open & Close onClick
  const [openClose, setOpenClose] = useState(false);

  const [storeOptions, setStoreOptions] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });

  const handleClickOptions = (name, operation) => {
    setStoreOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i" ? storeOptions[name] + 1 : storeOptions[name] - 1,
      };
    });
  };

  // get the target element to toggle
  const refOneOptions = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscapeOptions, true);
    document.addEventListener("click", hideOnClickOutsideOptions, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscapeOptions = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpenOptions(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutsideOptions = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOneOptions.current && !refOneOptions.current.contains(e.target)) {
      setOpenOptions(false);
    }
  };

  //CALENDER MAIN LOGIC

  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  //Handle search destination input field
  const [destination, setDestination] = useState("Going to?");

  //useNavigate() hooks from react-router-dom, enable navigation to hotels page
  const navigate = useNavigate();

  //Search Button Logic
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, range, storeOptions } });
  };

  return (
    <>
      <h1 className=" text-black font-bold text-center text-[12px] lg:text-2xl bg-white  p-1">
        What's your next destination?
      </h1>

      {/* Main div Starts */}
      <div className="mx-auto flex justify-between  flex-wrap gap-[1px] z-100 bg-white bg-opacity-50">
        {/* ############### Rooms & Travelers*/}

        <div className=" bg-[#0e118a]   opacity-90 text-[12px]  text-white relative flex items-center justify-evenly border border-solid border-[#8d9db6] rounded-[5px]  flex-[1_0_17rem] z-100 ">
          <MdFamilyRestroom className="" />
          <div
            className="flex items-center justify-between p-[3px] cursor-pointer text-[11px] tracking-wider "
            // onClick={() => setOpenOptions(!openOptions)}
            onClick={() => setOpenClose(!openClose)}
          >
            {`${storeOptions.adult} adults | ${storeOptions.children} children | ${storeOptions.room} room`}
            <MdArrowDropDown />
          </div>

          {openClose && (
            <>
              <div
                className=" text-black absolute w-full h-[127px] left-[50%] top-[107%] translate-x-[-50%] rounded-md border border-solid border-[#8d9db6] p-1 bg-white"
                ref={refOneOptions}
              >
                <div className="flex items-center p-1  justify-evenly">
                  <h1 className="text-left flex-[1] text-[15px] font-bold">
                    Adults
                  </h1>
                  <button
                    disabled={storeOptions.adult <= 1}
                    onClick={() => handleClickOptions("adult", "d")}
                    className="text-[1rem] flex items-center justify-center border border-[#8d9db6] w-[25px] h-[25px] cursor-pointer"
                  >
                    -
                  </button>
                  <h1 className="text-center flex-[1] text-[1rem] font-bold">
                    {storeOptions.adult}
                  </h1>
                  <button
                    onClick={() => handleClickOptions("adult", "i")}
                    className="text-[1rem] flex items-center justify-center border border-[#8d9db6] w-[25px] h-[25px] cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <div className="flex items-center p-1">
                  <h1 className="text-left flex-[1]  text-[15px] font-bold">
                    Children
                  </h1>
                  <button
                    disabled={storeOptions.children <= 0}
                    onClick={() => handleClickOptions("children", "d")}
                    className="text-[1rem] flex items-center justify-center border border-[#8d9db6] w-[25px] h-[25px] cursor-pointer"
                  >
                    -
                  </button>
                  <h1 className="text-center flex-[1] text-[1rem] font-bold">
                    {storeOptions.children}
                  </h1>
                  <button
                    onClick={() => handleClickOptions("children", "i")}
                    className="text-[1rem] flex items-center justify-center border border-[#8d9db6] w-[25px] h-[25px] cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center p-1">
                  <h1 className="text-left flex-[1]  text-[15px] font-bold">
                    Rooms
                  </h1>
                  <button
                    disabled={storeOptions.room <= 1}
                    onClick={() => handleClickOptions("room", "d")}
                    className="text-[1rem] flex items-center justify-center border border-[#8d9db6] w-[25px] h-[25px] cursor-pointer"
                  >
                    -
                  </button>
                  <h1 className="text-center flex-[1] text-[1rem] font-bold">
                    {storeOptions.room}
                  </h1>
                  <button
                    onClick={() => handleClickOptions("room", "i")}
                    className="text-[1rem] flex items-center justify-center border border-solid  border-[#8d9db6] w-[25px] h-[25px] cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        {/* ############### Going to?*/}
        <div className="bg-[#0e118a]  opacity-90 flex flex-[1_0_17rem]  items-center border border-solid border-[#8d9db6] rounded-[5px] p-[3px] cursor-pointer text-[11px] tracking-wider ">
          <MdLocationOn className="text-white  mr-1" />
          <input
            placeholder={destination}
            onChange={(e) => setDestination(e.target.value)}
            className=" w-full border-none outline-none p-[3px] font-bold placeholder:font-bold placeholder-[#0e118a] placeholder:text-[11px] placeholder:text-center text-[11px] text-center text-[#0e118a]"
          />
        </div>

        {/* ############### Check-in | Check-out*/}
        <div className="bg-[#0e118a]  opacity-90 relative rounded-[5px] border border-solid  flex-[1_0_17rem] p-[3px] cursor-pointer text-[11px] tracking-wider  ">
          <div
            onClick={() => setOpen(!open)}
            className=" relative cursor-pointer flex p-[3px] items-center "
          >
            <MdCalendarMonth className="text-white mr-1" />

            <input
              value={`Dates:     ${format(
                range[0].startDate,
                "MM/dd/yyyy"
              )}          to    ${format(range[0].endDate, "MM/dd/yyyy")}`}
              readOnly
              className="w-full  text-[12px]  border-none outline-none p-[7px] bg-white text-blue-800 font-bold"
            />
            <MdArrowDropDown />
          </div>
          <div>
            {open && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={1}
                direction="horizontal"
                className="absolute left-[50%] translate-x-[-50%] top-[100%] border border-solid border-[#ccc] z-100"
                minDate={new Date()}
              />
            )}
          </div>
        </div>

        {/* ############### Search Button*/}
        <div className="flex justify-center bg-[#0e118a]  border border-solid border-[#8d9db6] rounded-[5px] flex-[1_0_17rem] lg:flex-[0]">
          <button
            onClick={handleSearch}
            className="p-[3px] block w-full bg-[#0e118a]  text-white hover:bg-[#0e118a]"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default StaysDate;
