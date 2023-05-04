import React, { useState } from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="h-screen md:flex md:text-white lg:text-[#4F4F4F]">
        <div className="md:w-full lg:w-1/2 flex-1">
          {/* Navbar div below */}
          <div className="text-lg flex whitespace-nowrap justify-between gap-20 ml-5 absolute top-10 z-50 text-white md:text-white lg:text-[#4F4F4F] md:top-0 md:flex md:justify-between font-oswald md:text-xl md:px-10 md:pt-10 md:ml-5 md:mr-64 tracking-tight">
            <Link to="/portfolio">
              <h1 className="cursor-pointer hover:text-cyan-950 hover:scale-105 transition-all ease-out duration-500">
                PORTFOLIO
              </h1>
            </Link>
            <Link to="/aboutme">
              <h1 className="cursor-pointer hover:text-cyan-950 hover:scale-105 transition-all ease-out duration-500">
                ABOUT ME
              </h1>
            </Link>
            <Link to="/contact">
              <h1 className="cursor-pointer hover:text-cyan-950 hover:scale-105 transition-all ease-out duration-500">
                CONTACT US
              </h1>
            </Link>
          </div>
          {/* Title div below */}
          <div className="absolute z-50 top-[450px] text-center left-28 md:text-center md:left-44 lg:text-left lg:left-28 lg:top-72">
            <h2 className="font-oswald text-white md:text-white lg:text-[#4F4F4F] font-extrabold  z-50 text-xl md:text-5xl lg:text-4xl md:font-bold lg:font-light tracking-widest pb-5">
              SHAHID KHAN
            </h2>
            <h1 className="font-figtree text-white md:text-white lg:text-[#4F4F4F] text-2xl md:text-7xl">
              PHOTOGRAPHER
            </h1>
          </div>
        </div>
        <div className="w-full md:w-full lg:w-1/2 lg:flex-1">
          {/* Hero image carousel will come here */}
          <Carousel />
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 md:flex-1  md:text-[#4F4F4F]">
        <h1 className="font-oswald text-2xl text-center -mt-32 cursor-pointer hover:text-cyan-950 hover:scale-105 transition-all ease-out duration-500">
          <a
            href="https://www.instagram.com/shahidphotography_/"
            target="_blank"
          >
            INSTAGRAM
          </a>
        </h1>
        <div className="h-20 mt-2 border-r-4 border-gray-500 mr-[380px]"></div>
      </div>
    </>
  );
};

export default Hero;
