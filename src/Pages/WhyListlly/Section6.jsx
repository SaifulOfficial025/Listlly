import React from "react";
import bg from "../../../public/whylistlysection6.png";
import { BsPatchCheckFill } from "react-icons/bs";

function Section6() {
  return (
    <section
      className="relative w-full bg-cover bg-center   min-h-screen flex items-start"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0" />
      <div className="relative z-10 w-full flex justify-end px-20">
        <div className="max-w-2xl w-full px-6 sm:px-10 mt-32 py-10 sm:py-14 flex flex-col  rounded-2xl ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-white mb-2">
            Why Homeowners <br /> Nationwide Trust{" "}
            <span className="text-[#ff6061]">Listlly</span>
          </h1>
          <p className="mt-2 text-base sm:text-lg text-white/90 max-w-xl">
            We’re redefining the way real estate works, combining professional
            expertise, nationwide reach, and transparent pricing to give you
            complete control and maximum return.
          </p>
          <ul className="mt-6 space-y-2 w-full">
            <li className="flex items-center text-white text-base">
              <BsPatchCheckFill className="mr-2 text-[#2db265]" />
              Affordable Flat-Fee Listing
            </li>
            <li className="flex items-center text-white text-base">
              <BsPatchCheckFill className="mr-2 text-[#2db265]" />
              Nationwide MLS Exposure
            </li>
            <li className="flex items-center text-white text-base">
              <BsPatchCheckFill className="mr-2 text-[#2db265]" />
              Verified Cash Buyer Network
            </li>
            <li className="flex items-center text-white text-base">
              <BsPatchCheckFill className="mr-2 text-[#2db265]" />
              Licensed Market Specialists
            </li>
            <li className="flex items-center text-white text-base">
              <BsPatchCheckFill className="mr-2 text-[#2db265]" />
              No Hidden Fees or Pressure
            </li>
            <li className="flex items-center text-white text-base">
              <BsPatchCheckFill className="mr-2 text-[#2db265]" />
              Fast & Secure Process
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Section6;
