import React from "react";

// Components
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-auto w-full bg-transparent flex flex-col md:flex-row-reverse justify-center items-center overflow-x-hidden">
      {/* Left */}
      <div className="h-full w-full overflow-hidden -mr-28" id="left">
        <Image
          src="/assets/images/illustration-working.svg"
          height="700"
          width="1000"
        />
      </div>
      {/* Right */}
      <div
        className="h-full w-full flex flex-col justify-center items-center md:items-start md:ml-12 overflow-hidden"
        id="right"
      >
        <h2 className="w-11/12 mx-auto md:ml-0 text-4xl md:text-7xl font-bold md:font-sans mt-5 mb-3 text-center md:text-left bgColorDarkBlue">
          More than just shorter links
        </h2>
        <p className="w-11/12 md:w-9/12 text-center md:text-left mx-auto md:ml-0 text-sm md:text-lg text-gray-500 my-3 font-normal leading-relaxed">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="h-12 w-42 bgThemePrimary text-lg text-white font-medium mx-auto md:ml-0 my-3 rounded-3xl primaryCustomShadow px-8 cursor-pointer focus:outline-none">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
