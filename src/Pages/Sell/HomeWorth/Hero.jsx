import React from 'react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import homeworthhero from "../../../../public/homeworthhero.svg"

function Hero() {
  return (
    <section className="relative w-full h-[330px] flex items-center bg-cover bg-center mt-16" style={{backgroundImage: `url(${homeworthhero})`}}>
      <div className="absolute inset-0 ml-20" />
      <div className="relative z-10 max-w-4xl px-4 flex flex-col items-start text-left ml-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-left">
          What Is My <span className="text-[#ff6061]">Home Worth?</span>
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl text-left">
          "Discover the current market value of your home with a comprehensive analysis of local real estate trends, comparable property sales, and other key factors that influence its worth."
        </p>
        <button className="flex items-center bg-gradient-to-r from-[#2B6CB0] to-[#1B4FA0] text-white text-xl font-semibold px-10 py-3 rounded-md shadow-lg hover:opacity-90 transition">
          Start Listing
          <HiOutlineArrowUpRight className="ml-2 w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
