import React, { useState, useEffect } from "react";

const MobileNav = ({ status }) => {
  // state variables
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(status);
  }, [status]);

  return (
    <div
      className={`${
        isOpen
          ? "h-auto opacity-1 pt-10 p-5 shadow-2xl transform scale-100"
          : "h-auto opacity-0 p-0 shadow-none transition duration-700 transform scale-90"
      } transition duration-700 w-11/12 mx-auto bgDarkViolet py-10 rounded-lg
      flex flex-row justify-center items-center absolute top-16 left-4 z-50 overflow-hidden md:hidden`}
    >
      <ul className="h-auto w-full flex flex-col justify-center items-center space-y-5">
        <li className="h-auto w-full flex justify-center font-bold text-white hover:bgColorThemePrimary">
          Features
        </li>
        <li className="h-auto w-full flex justify-center font-bold text-white hover:bgColorThemePrimary">
          Pricing
        </li>
        <li className="h-auto w-full flex justify-center font-bold text-white hover:bgColorThemePrimary">
          Resources
        </li>

        {/* Divider */}
        <div className="h-[1px] bg-gray-700 w-11/12 rounded-lg my-3"></div>

        {/* Buttons */}
        <li className="h-auto w-full flex justify-center items-center">
          <button
            className="h-12 w-32 bg-transparent text-white border border-bgColorThemePrimary text-md font-bold 
          flex justify-center items-center rounded-md py-3 px-5 focus:outline-none"
          >
            Login
          </button>
        </li>
        <li className="h-auto w-full flex justify-center items-center">
          <button
            className="h-12 w-52 bgThemePrimary text-white shadow-lg text-md font-bold 
          flex justify-center items-center rounded-3xl border-0 py-3 px-5 focus:outline-none"
          >
            Sign Up
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
