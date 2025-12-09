import React from "react";
import homeworthhero from "../../../public/whylistlysection4.png";
import { BsPatchCheckFill } from "react-icons/bs";

function Section4() {
  return (
    <section
      className="relative w-full bg-cover bg-center   min-h-screen flex items-start"
      style={{ backgroundImage: `url(${homeworthhero})` }}
    >
      <div className="absolute inset-0" />
      <div className="relative z-10 w-full flex justify-end px-20">
        <div className="max-w-2xl w-full px-6 sm:px-10 mt-32 py-10 sm:py-14 flex flex-col  rounded-2xl ">
          <span className="uppercase text-xs tracking-widest text-white/70 font-semibold mb-2">
            For Sale By Owner Simplified
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white mb-2">
            List Your Home For Sale By Owner With Professional Support
          </h1>
          <p className="mt-2 text-base sm:text-lg text-white/90 max-w-xl">
            You stay in control. We handle the exposure, documentation, and
            support, from listing to closing. Whether it’s your first sale or
            fifth, you’ll have a full team behind you every step of the way.
          </p>
          <ul className="mt-6 space-y-2 w-full">
            <li className="flex items-center text-white text-base">
              <BsPatchCheckFill className="mr-2 text-[#2db265]" />
              Real Data. Real Professionals.
            </li>
            <li className="flex items-center text-white text-base">
              <BsPatchCheckFill className="mr-2 text-[#2db265]" />
              Transparent Pricing Insights
            </li>
            <li className="flex items-center text-white text-base">
              <BsPatchCheckFill className="mr-2 text-[#2db265]" />
              Comparable Sales Breakdown
            </li>
            <li className="flex items-center text-white text-base">
              <BsPatchCheckFill className="mr-2 text-[#2db265]" />
              Custom Report for Your Address
            </li>
          </ul>
          <button className="mt-8 bg-[#0b5aa5] hover:bg-[#0954c0] text-white px-6 py-3 rounded-lg text-base font-semibold shadow-md w-fit">
            List As ESBO
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section4;
