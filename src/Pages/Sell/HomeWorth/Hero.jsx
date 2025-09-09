import React from 'react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import homeworthhero from "../../../../public/homeworthhero.svg"

function Hero() {
  return (
    <section className="relative w-full bg-cover bg-center mt-12 sm:mt-16" style={{backgroundImage: `url(${homeworthhero})`}}>
      <div className="absolute inset-0" />
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 py-12 sm:py-20 flex flex-col items-start text-left mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-left">
          What Is My <span className="text-[#ff6061]">Home Worth?</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 max-w-2xl text-left">
          Discover the current market value of your home with a comprehensive analysis of local real estate trends, comparable property sales, and other key factors that influence its worth.
        </p>
        <button className="flex items-center bg-gradient-to-r from-[#2B6CB0] to-[#1B4FA0] text-white text-sm sm:text-lg font-semibold px-4 sm:px-8 py-2 sm:py-3 rounded-md shadow-lg hover:opacity-90 transition">
          Start Listing
          <HiOutlineArrowUpRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
