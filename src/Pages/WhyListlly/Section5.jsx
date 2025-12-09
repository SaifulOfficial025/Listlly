import React from "react";
import bg from "../../../public/whylistlysection5.png";
import { BsPatchCheckFill } from "react-icons/bs";

function Section5() {
  return (
    <section
      className="relative w-full bg-cover bg-center min-h-screen flex items-start "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 " />
      <div className="ml-20 relative z-10 max-w-2xl px-6 sm:px-10 mt-32 py-10 sm:py-14 flex flex-col items-start text-left rounded-2xl">
        <span className="uppercase text-xs tracking-widest text-white/70 font-semibold mb-2">
          Save Tens of Thousands
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white mb-2">
          Tens of Thousands Saved. <br />
          <span className="text-[#ff6061]">Every Day.</span>
        </h1>
        <p className="mt-2 text-base sm:text-lg text-white/90 max-w-xl">
          Join the growing number of homeowners who’ve sold through Listlly and
          kept their hard-earned equity.
        </p>
        <ul className="mt-6 space-y-2 w-full">
          <li className="flex items-center text-white text-base">
            <BsPatchCheckFill className="mr-2 text-[#2db265]" />
            $215M+ in Seller Savings
          </li>
          <li className="flex items-center text-white text-base">
            <BsPatchCheckFill className="mr-2 text-[#2db265]" />
            18,000+ Homes Listed
          </li>
          <li className="flex items-center text-white text-base">
            <BsPatchCheckFill className="mr-2 text-[#2db265]" />
            9,500+ Offers Received
          </li>
          <li className="flex items-center text-white text-base">
            <BsPatchCheckFill className="mr-2 text-[#2db265]" />
            2.4M+ Homes Marketed Nationwide
          </li>
        </ul>
        <button className="mt-8 bg-[#0b5aa5] hover:bg-[#0954c0] text-white px-6 py-3 rounded-lg text-base font-semibold shadow-md w-fit self-start">
          Check Your Savings
        </button>
      </div>
    </section>
  );
}

export default Section5;
