import { Link } from "react-router-dom";
import kueentair from "../../assets/images/kueentairbanner.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="py-10 bg-[#0e118a]  text-white   px-5 mx-0">
          <div className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="mb-5 ">
                <img
                  src={kueentair}
                  alt=""
                  className="flex items-center rounded-sm "
                />
              </div>

              <div className="mb-5">
                <h4 className="  pb-4 font-semibold text-sm tracking-widest">
                  About Us
                </h4>
                <div className="flex items-center  text-white pb-4 text-[13px] tracking-widest">
                  <Link to="/">The Team</Link>
                </div>
                <div className="flex items-center  text-white pb-4 text-[13px] tracking-widest">
                  <Link to="/">Travel Partners</Link>
                </div>

                <div className="flex items-center  text-white pb-4 text-[13px]">
                  <Link to="/">Careers</Link>
                </div>
              </div>
              <div className="mb-5">
                <h4 className="pb-4 font-semibold text-sm tracking-widest">
                  Help Desk
                </h4>
                <div className="flex items-center  text-white pb-4 text-[13px]">
                  <Link to="/">FAQ</Link>
                </div>
                <div className="text-[13px] flex items-center  text-white pb-4 tracking-widest">
                  <Link to="/">Need help? Chat with us now.</Link>
                </div>
              </div>
              <div className="mb-5">
                <h4 className=" pb-2 text-[11px] font-semibold tracking-widest">
                  GET OUR NEW DEALS & TRAVEL TIPS
                </h4>
                <p className="pb-2 text-white text-[11px] tracking-widest">
                  We promise never to spam your email. We'll only send new tips
                  and discounts.
                </p>

                <form className="flex" action="">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="text-gray-500 p-2 focus:border-[#0e118a]  w-1/2 text-[12px] "
                    placeholder="email@domain.com"
                  />

                  <button className="p-2  text-white font-semibold border border-white  hover:text-white  hover:bg-[#0e118a] duration-200 text-[12px]">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright */}
      {/* <div className="p-5 text-white bg-[#143e50] b"> */}
      <div className=" text-white  bg-[#0e118a]  ">
        <div className="  border-t-[1px] border-t-white flex items-center flex-wrap px-10">
          <div className="w-full lg:flex-[3]">
            <p className=" p-3 text-[10px] tracking-widest">
              ©2024 &nbsp; <strong> Kueentair. &nbsp; </strong> All &nbsp;
              rights &nbsp; reserved.
            </p>
          </div>

          <div className="w-full lg:flex-[3] text-[9px] py-1 grid grid-cols-3 lg:justify-start p-2  ">
            <div>
              <Link to="/terms">Terms &nbsp; of &nbsp; Service</Link>
            </div>
            <div>
              <Link to="/privacy_policy">Privacy &nbsp; Policy</Link>
            </div>
            <div>
              <Link to="/cookies_policy">Cookies &nbsp; Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
