import Hero from "../../components/hero/Hero";
// import LatestDestinationCard from "../components/LastestDestinationCard";
import Heading from "../../components/heading/Heading";
import PackageOne from "../../components/holiday/PackageOne";
import PackageTwo from "../../components/holiday/PackageTwo";
import PackageThree from "../../components/holiday/PackageThree";
import Experience from "../../components/experience/Experience";
import { holiday } from "../../data/DataSource";
import Payment from "../../components/sps/Payment";
import Ads from "../../components/ads/Ads";
import hotel1 from "../../assets/images/ads/hotel1.png";
import hotel2 from "../../assets/images/ads/hotel2.png";

const Home = () => {
  return (
    <div className="">
      <Hero />

      <Heading title="Holiday Packages" btn="Customize trip" />
      <div className=" grid grid-cols-1 xl:grid-cols-4 p-5 gap-1">
        <div className="lg:col-span-3 grid grid-cols-1  md:grid-cols-3 rounded-lg p-3 bg-white shadow-md gap-1">
          <PackageOne place={holiday} />
          <PackageTwo place={holiday} />
          <PackageThree place={holiday} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-1 gap-1 bg-white shadow-md">
          <div>
            <Payment />
          </div>
          <div>
            <Ads price="49.99" title="Star Residence" image={hotel1} />
          </div>
          <div>
            <Ads price="8.99" title="Dubai Islamic Hostel" image={hotel2} />
          </div>
          {/* <div>
            <Ads price="8.99" title="Dubai Islamic Hostel" image={hotel2} />
          </div> */}
        </div>
      </div>
      <Heading title="My Experience" btn="Share your experience" />
      <Experience />
    </div>
  );
};

export default Home;
