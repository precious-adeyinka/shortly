import React, { useState } from "react";

// Components
import MobileNav from "./MobileNav";

const Nav = () => {
  // state variables
  const [isDrawerOpened, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer(!isDrawerOpened);
  };

  return (
    <div className="h-auto w-full md:w-11/12 md:mx-auto bg-white px-5 flex flex-row justify-center items-center p-3 md:py-5 md:px-0">
      {/* Left */}
      <div className="h-12 w-1/2 flex flex-row justify-start items-center md:space-x-16">
        <h1 className="font-bold md:font-sans text-2xl md:text-3xl bgColorDarkBlue md:-mt-3 relative logoAfter">
          Shortly
        </h1>
        {/* Hidden on mobile */}
        <div className="responsiveVisibility md:flex justify-center items-center">
          <ul className="h-auto w-full flex flex-row justify-center items-center space-x-5">
            <li className="h-auto w-full flex justify-start font-bold md:font-medium text-black  text-xs hover:bgColorThemePrimary cursor-pointer navLinkAfter">
              Features
            </li>
            <li className="h-auto w-full flex justify-start font-bold md:font-medium text-black  text-xs hover:bgColorThemePrimary cursor-pointer navLinkAfter">
              Pricing
            </li>
            <li className="h-auto w-full flex justify-start font-bold md:font-medium text-black  text-xs hover:bgColorThemePrimary cursor-pointer navLinkAfter">
              Resources
            </li>
          </ul>
        </div>
      </div>
      {/* Right */}
      <div className="h-12 w-1/2 flex flex-row justify-center md:justify-end md:pr-16 items-center">
        {/* Hamburger */}
        <div
          className="h-full w-7 flex flex-col justify-center items-end space-y-1 cursor-pointer ml-auto md:hidden"
          onClick={toggleDrawer}
        >
          <div
            className={`h-[3px] bgDarkBlue rounded-3xl mr-auto  transition duration-700 ${
              isDrawerOpened
                ? // ? "w-full transform -rotate-45 relative top-1 -left-1"
                  "w-full transform rotate-45"
                : "opacity-1 w-8/12"
            }`}
          ></div>
          <div
            className={`h-[3px] w-full bgDarkBlue rounded-3xl transition duration-700 ${
              isDrawerOpened ? "transform scale-0" : "opacity-1"
            }`}
          ></div>
          <div
            className={`h-[3px] bgDarkBlue ml-auto rounded-3xl transition duration-700 ${
              isDrawerOpened
                ? "w-full transform -rotate-45 relative -top-2"
                : "opacity-1 w-8/12"
            }`}
          ></div>
        </div>
        {/* Mobile Nav */}
        <MobileNav status={isDrawerOpened} />

        {/* Hidden on mobile */}
        <div className="responsiveVisibility md:flex justify-center items-center">
          <ul className="h-auto w-full flex flex-row justify-center items-center space-x-2">
            <li className="h-auto w-full flex justify-center items-center">
              <button
                className="h-7 w-16 bg-transparent text-gray-700 text-md font-medium flex justify-center items-center 
              rounded-md py-3 focus:outline-none"
              >
                Login
              </button>
            </li>
            <li className="h-auto w-full flex justify-center items-center">
              <button className="h-9 w-20 bgThemePrimary text-white text-xs font-bold flex justify-center items-center rounded-3xl border-0 py-3 px-0 focus:outline-none">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
