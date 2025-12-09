import React from "react";
import homeworthhero from "../../../public/whylistlysection2.png";
import { BsPatchCheckFill } from "react-icons/bs";

function Section2() {
  return (
    <section
      className="relative w-full bg-cover bg-center   min-h-screen flex items-start"
      style={{ backgroundImage: `url(${homeworthhero})` }}
    >
      <div className="absolute inset-0" />
      <div className="relative z-10 w-full flex justify-end px-20">
        <div className="max-w-2xl w-full px-6 sm:px-10 mt-32 py-10 sm:py-14 flex flex-col  rounded-2xl ">
          <span className="uppercase text-xs tracking-widest text-white/70 font-semibold mb-2">
            List on the MLS for a flat fee
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold  leading-tight text-white mb-2">
            List Your Home on the MLS for a{" "}
            <span className="text-[#d03c0b]">Flat Fee, </span>{" "}
            <span className="text-[#d03c0b]">Save Thousands</span> in Commission
          </h1>
          <p className="mt-2 text-base sm:text-lg text-white/90 max-w-xl">
            Get your property on Zillow, Realtor.com, Redfin, Trulia, and
            hundreds of nationwide platforms with the same exposure traditional
            agents get, for a fraction of the cost.
          </p>
          <ul className="mt-6 space-y-2 w-full">
            <li className="flex items-center  text-white text-base">
              <BsPatchCheckFill className="mr-2 text-[#2db265]" />
              Nationwide MLS Exposure
            </li>
            <li className="flex items-center  text-white text-base">
              <BsPatchCheckFill className="mr-2 text-[#2db265]" />
              No Hidden Fees
            </li>
            <li className="flex items-center  text-white text-base">
              <BsPatchCheckFill className="mr-2 text-[#2db265]" />
              Fast Listing & Free Changes
            </li>
            <li className="flex items-center  text-white text-base">
              <BsPatchCheckFill className="mr-2 text-[#2db265]" />
              Full Professional Support
            </li>
          </ul>
          <button className="mt-8 bg-[#0b5aa5] hover:bg-[#0954c0] text-white px-6 py-3 rounded-lg text-base font-semibold shadow-md w-fit">
            See Flat-Fee Plans
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section2;
