import React, { useState, useEffect } from "react";
import StaysDate from "../search/StaysDate";

const SliderTwo = ({ hero }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const sLength = hero.length;

  const nextSlide = () => {
    setImgIdx(imgIdx === sLength - 1 ? 0 : imgIdx + 1);
  };

  /*  const prevSlide = () => {
    setImgIdx(imgIdx === 0 ? sLength - 1 : imgIdx - 1);
  }; */

  const autoScroll = true;
  let slideInterval;
  let IntervalTime = 4747;

  function auto() {
    slideInterval = setInterval(nextSlide, IntervalTime);
  }

  useEffect(() => {
    setImgIdx(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [imgIdx]);

  return (
    <section aria-label="Image Slider" className="relative w-full h-full ">
      <div className="w-full h-full flex overflow-hidden">
        {hero.map((e, i) => (
          <img
            src={e.url}
            alt={e.alt}
            className="object-cover w-full h-full block"
            key={i}
            aria-hidden={imgIdx !== i}
            style={{
              translate: `${-100 * imgIdx}%`,
              flexShrink: "0",
              flexGrow: "0",
              transition: "translate 712ms ease-in-out",
            }}
          />
        ))}
      </div>

      <div
        style={{ transition: "background-color 100ms ease-in-out" }}
        className=" absolute top-0  cursor-pointer w-full   hover:bg-white hover:opacity-100 z-100"
        aria-label="Choose your destination"
      >
        <StaysDate />
      </div>
    </section>
  );
};

export default SliderTwo;
