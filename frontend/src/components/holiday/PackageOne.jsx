import React, { useState, useEffect } from "react";

const PackageOne = ({ place }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const sLength = place.length;
  const nextSlide = () => {
    setImgIdx(imgIdx === sLength - 1 ? 0 : imgIdx + 1);
  };

  const prevSlide = () => {
    setImgIdx(imgIdx === 0 ? sLength - 1 : imgIdx - 1);
  };

  const autoScroll = true;
  let slideInterval;
  let IntervalTime = 6747;

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
    <section aria-label="Image Slider" className="relative ">
      <div className="w-full h-full flex overflow-hidden">
        {place.map((e, i) => (
          <>
            <img
              src={e.url}
              alt={e.alt}
              className="object-cover w-full h-full block rounded-md"
              key={e.id}
              aria-hidden={imgIdx !== i}
              style={{
                translate: `${-100 * imgIdx}%`,
                flexShrink: "0",
                flexGrow: "0",
                transition: "translate 712ms ease-in-out",
              }}
            />
            {i === imgIdx && (
              <div className="absolute bottom-0 p-4 bg-black bg-opacity-50 w-full text-center">
                <span className="text-white  font-bold tracking-tight text-base  lg:text-2xl">
                  {e.title}
                </span>
              </div>
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default PackageOne;
