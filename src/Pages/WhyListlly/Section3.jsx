import React from "react";
import bg from "../../../public/whylistlysection3.png";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";

function Section3() {
  return (
    <section
      className="relative w-full bg-cover bg-center min-h-screen flex items-start "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 " />
      <div className="ml-20 relative z-10 max-w-2xl px-6 sm:px-10 mt-32 py-10 sm:py-14 flex flex-col items-start text-left rounded-2xl">
        <span className="uppercase text-xs tracking-widest text-white/70 font-semibold mb-2">
          Sell Fast for Cash
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-white mb-2">
          Need to Sell Fast? Get a Verified{" "}
          <span className="text-[#d03c0b]">Cash Offer</span> Backed by Real Data
        </h1>
        <p className="mt-2 text-base sm:text-lg text-white/90 max-w-xl">
          Get your property on Zillow, Realtor.com, Redfin, Trulia, and hundreds
          of nationwide platforms with the same exposure traditional agents get
          — for a fraction of the cost.
        </p>
        <ul className="mt-6 space-y-2 w-full">
          <li className="flex items-center text-white text-base">
            <span className="inline-block w-2 h-2 rounded-full bg-[#0bdb7c] mr-3"></span>{" "}
            Fair Market Pricing — Not Algorithm Estimates
          </li>
          <li className="flex items-center text-white text-base">
            <span className="inline-block w-2 h-2 rounded-full bg-[#0bdb7c] mr-3"></span>{" "}
            No Hidden Verified Local & National Buyers
          </li>
          <li className="flex items-center text-white text-base">
            <span className="inline-block w-2 h-2 rounded-full bg-[#0bdb7c] mr-3"></span>{" "}
            Flexible Closing Dates
          </li>
          <li className="flex items-center text-white text-base">
            <span className="inline-block w-2 h-2 rounded-full bg-[#0bdb7c] mr-3"></span>{" "}
            No Repairs or Fees
          </li>
        </ul>
        <button className="mt-8 bg-[#0b5aa5] hover:bg-[#0954c0] text-white px-6 py-3 rounded-lg text-base font-semibold shadow-md w-fit self-start">
          Start Listing Free
        </button>
      </div>
    </section>
  );
}

export default Section3;
