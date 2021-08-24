import React, { useState, useEffect } from "react";

// components
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import Form from "./Form/Form";

const Header = () => {
  return (
    <header
      className="h-[45rem] md:h-[40rem] w-full bg-white relative z-50"
      id="header"
    >
      {/* Nav */}
      <Nav />
      {/* Hero */}
      <Hero />

      {/* Links */}
      <div className="h-auto w-full flex flex-col justify-center items-center space-y-5 my-10 relative -bottom-5 left-1/2 -translate-x-2/4 z-50">
        {/* Forms */}
        <div
          className={`h-40 md:h-40 w-11/12 md:w-10/12 bgTheme shadow-lg rounded-md mx-auto flex flex-row justify-center items-center overflow-hidden`}
        >
          <Form />
        </div>
      </div>
    </header>
  );
};

export default Header;
