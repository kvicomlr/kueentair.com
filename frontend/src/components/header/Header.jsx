import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import Nav from "./Nav";
const Header = () => {
  //Open and close state of the Navbar & sub menu itemsS
  const [open, setOpen] = useState(false);

  return (
    <header className="z-102 lg:sticky lg:top-0 bg-[#0e118a]  lg:bg-[#f5f3f0] px-7">
      {/* Main Navbar starts here */}
      <div className="w-full flex items-center justify-center  lg:flex lg:justify-between lg:items-center  min-h-20 ">
        <div className="z-100  w-full flex justify-between p-1">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="max-w-[27px] lg:max-w-[47px] "
              />
            </Link>

            <Link to="/">
              <h1 className="text-white lg:text-[#0e118a] text-sm lg:text-[2rem]  font-bold">
                Kueentair
              </h1>
            </Link>
          </div>
          <div
            className="z-100 lg:hidden text-3xl text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <BiX /> : <BiMenu />}
          </div>
        </div>

        <div className="hidden lg:flex b">
          <Nav />
        </div>
      </div>
      {/* Main Navbar ends here */}

      {/* Mobile nav starts here */}
      <ul
        className={`z-102 absolute  lg:hidden min-w-full top-20 p-5 bg-[#0e118a]   text-white 
                    duration-500 ${open ? "left-0" : "left-[-100%]"}`}
      >
        <Nav />
      </ul>

      {/* Mobile nav ends here */}
    </header>
  );
};

export default Header;
