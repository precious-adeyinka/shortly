import React, { useState, useEffect } from "react";
import Link from 'next/link';

const Footer = () => {
  // state vars
  const [isOnMobileViewport, updateViewportType] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("only screen (max-width: 500px)").matches ||
      window.screen.availWidth <= 425
    ) {
      updateViewportType(true);
    } else {
      updateViewportType(false);
    }
  }, [isOnMobileViewport]);

  return (
    <footer className="h-auto w-full bgDarkBlue" id="footer">
      {/* Boost Link */}
      <div className="h-80 md:h-56 w-full flex flex-col justify-center items-center bgTheme m-0">
        <div
          className={`h-80 w-full flex flex-col justify-center items-center  ${
            isOnMobileViewport ? "bgBoostMobile" : "bgBoostDesktop"
          }`}
        >
          <h3 className="text-3xl md:text-4xl md:font-sans text-white font-bold text-center">
            Boost your links today
          </h3>
          <button className="h-14 w-50 bgThemePrimary text-2xl text-white font-medium mx-auto my-5 rounded-3xl px-8 cursor-pointer focus:outline-none shadow-2xl">
            Get Started
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="h-auto md:h-72 w-full bgDarkViolet flex flex-col md:flex-row justify-center items-center py-10 md:p-0 m-0">
        <div className="h-auto md:h-full w-full md:w-[25%] flex flex-row justify-center md:justify-start items-start md:pl-10 md:pt-16">
          <h1 className="font-bold text-4xl md:text-3xl text-white my-5 md:m-0 mb-12">
            Shortly
          </h1>
        </div>

        {/*  */}
        <div className="h-auto md:h-full w-full md:w-[75%] flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start space-y-10 md:space-y-0 md:space-x-20 md:pt-16">
          {/* Features */}
          <div className="md:h-full flex flex-col justify-center md:justify-start items-center md:items-start space-y-4 md:space-y-5">
            {/* Title */}
            <h3 className="font-bold text-white text-lg md:text-sm text-center">
              Features
            </h3>
            {/* List */}
            <ul className="h-auto w-full flex flex-col justify-center items-center space-y-3">
              <li className="h-auto w-full text-md md:text-xs font-medium text-gray-300 text-center md:text-left cursor-pointer hover:bgColorThemePrimary">
                Link Shortening
              </li>
              <li className="h-auto w-full text-md md:text-xs font-medium text-gray-300 text-center md:text-left cursor-pointer hover:bgColorThemePrimary">
                Branded Links
              </li>
              <li className="h-auto w-full text-md md:text-xs font-medium text-gray-300 text-center md:text-left cursor-pointer hover:bgColorThemePrimary">
                Analytics
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:h-full flex flex-col justify-center md:justify-start items-center md:items-start space-y-4 md:space-y-5">
            {/* Title */}
            <h3 className="font-bold text-white text-lg md:text-sm text-center">
              Resources
            </h3>
            {/* List */}
            <ul className="h-auto w-full flex flex-col justify-center items-center space-y-3">
              <li className="h-auto w-full text-md md:text-xs font-medium text-gray-300 text-center md:text-left cursor-pointer hover:bgColorThemePrimary">
                Blog
              </li>
              <li className="h-auto w-full text-md md:text-xs font-medium text-gray-300 text-center md:text-left cursor-pointer hover:bgColorThemePrimary">
                Developers
              </li>
              <li className="h-auto w-full text-md md:text-xs font-medium text-gray-300 text-center md:text-left cursor-pointer hover:bgColorThemePrimary">
                Support
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:h-full flex flex-col justify-center md:justify-start items-center md:items-start space-y-4 md:space-y-5">
            {/* Title */}
            <h3 className="font-bold text-white text-lg md:text-sm text-center">
              Company
            </h3>
            {/* List */}
            <ul className="h-auto w-full flex flex-col justify-center items-center space-y-3">
              <li className="h-auto w-full text-md md:text-xs font-medium text-gray-300 text-center md:text-left cursor-pointer hover:bgColorThemePrimary">
                About
              </li>
              <li className="h-auto w-full text-md md:text-xs font-medium text-gray-300 text-center md:text-left cursor-pointer hover:bgColorThemePrimary">
                Our Team
              </li>
              <li className="h-auto w-full text-md md:text-xs font-medium text-gray-300 text-center md:text-left cursor-pointer hover:bgColorThemePrimary">
                Careers
              </li>
              <li className="h-auto w-full text-md md:text-xs font-medium text-gray-300 text-center md:text-left cursor-pointer hover:bgColorThemePrimary">
                Contact
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:h-full flex flex-col justify-center md:justify-start items-center md:items-start md:ml-10 space-y-5">
            <div className="w-8/12 leading-normal md:w-7/12 text-sm md:text-[13px] text-white text-center md:text-left font-medium md:font-normal">
              © {new Date().getFullYear()} Shortly, made with love by&nbsp; 
              <Link href="https://www.linkedin.com/in/precious-adeyinka"><span className="bgColorThemePrimary cursor-pointer font-bold">Precious Adeyinka</span></Link>.
            </div>
            
            {/* List */}
            <ul className="h-auto w-8/12 md:w-5/12 flex flex-row justify-center items-center md:justify-end space-x-7 md:space-x-3">
              <li className="h-auto w-full font-medium text-gray-300 text-center md:text-left cursor-pointer">
                <i className="lab la-facebook-f text-3xl md:text-2xl hover:bgColorThemePrimary"></i>
              </li>
              <li className="h-auto w-full font-medium text-gray-300 text-center md:text-left cursor-pointer">
                <i className="lab la-twitter text-3xl md:text-2xl hover:bgColorThemePrimary"></i>
              </li>
              <li className="h-auto w-full font-medium text-gray-300 text-center md:text-left cursor-pointer">
                <i className="lab la-pinterest text-3xl md:text-2xl hover:bgColorThemePrimary"></i>
              </li>
              <li className="h-auto w-full font-medium text-gray-300 text-center md:text-left cursor-pointer">
                <i className="lab la-instagram text-3xl md:text-2xl hover:bgColorThemePrimary"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
