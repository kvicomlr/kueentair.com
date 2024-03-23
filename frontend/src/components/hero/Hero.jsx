import React from "react";
import { heroSlideImages } from "../../data/DataSource";
import SliderOne from "./SliderOne";
import SliderTwo from "./SliderTwo";

const Hero = () => {
  return (
    <div className="lg:flex ">
      <SliderOne hero={heroSlideImages} />
      <SliderTwo hero={heroSlideImages} />
    </div>
  );
};

export default Hero;
