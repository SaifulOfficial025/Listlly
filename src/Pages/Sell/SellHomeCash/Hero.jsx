import React from "react";
import { AiTwotoneAlert } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FiDollarSign } from "react-icons/fi";
import heroBg from "../../../../public/sellhomeforcashbg.png";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

function Hero() {
  return (
    <div
      className="relative w-full bg-cover bg-center text-white min-h-screen flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 "></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        {/* small badge */}
        <div className="inline-flex items-center bg-white/40 text-white text-md px-3 py-1 rounded-lg mb-4">
          <RiMoneyDollarCircleLine className="w-5 h-5 mr-1" /> CASH FOR HOUSES
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight mb-3 sm:mb-4">
          Sell Your House Fast for Cash
        </h1>

        <p className="text-base sm:text-lg md:text-lg text-white/90 mb-6 sm:mb-8">
          Get a competitive cash offer for your home in any condition. No
          repairs, no fees, no hassles.
        </p>

        {/* Search input */}
        <div className="mx-auto max-w-[820px] flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 bg-white rounded-2xl p-2 sm:p-3 shadow-lg">
          <div className="flex-1 bg-[#ebeff5] rounded-lg flex items-center px-3 sm:px-4 py-2 sm:py-3 mb-2 sm:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400 mr-2 sm:mr-3"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 18.75a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z"
              />
            </svg>
            <input
              type="text"
              placeholder="Enter your property address"
              className="w-full text-sm sm:text-base text-gray-900 placeholder-gray-500 bg-transparent focus:outline-none "
            />
          </div>
          <button className="bg-[#0b5aa5] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium shadow-lg hover:brightness-110 text-sm sm:text-base">
            Get Cash Offer
          </button>
        </div>

        {/* Chips: stack on mobile, grid on desktop */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:grid sm:grid-cols-3 gap-2 sm:gap-3 max-w-[900px] mx-auto">
          <div className="justify-self-center bg-white text-[#0b5aa5] px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 text-xs sm:text-sm shadow-sm">
            <BsFillPatchCheckFill className="text-green-600" />
            <span>100% online</span>
          </div>

          <div className="justify-self-center bg-white text-[#0b5aa5] px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 text-xs sm:text-sm shadow-sm">
            <BsFillPatchCheckFill className="text-green-600" />
            <span>4.9-star customer service</span>
          </div>

          <div className="justify-self-center bg-white text-[#0b5aa5] px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 text-xs sm:text-sm shadow-sm">
            <BsFillPatchCheckFill className="text-green-600" />
            <span>Choose your closing date</span>
          </div>

          {/* second row: stack on mobile, row on desktop */}
          <div className="flex flex-col sm:col-span-3 sm:flex-row justify-center gap-2 sm:gap-3 mt-1">
            <div className="bg-white text-[#0b5aa5] px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 text-xs sm:text-sm shadow-sm">
              <BsFillPatchCheckFill className="text-green-600" />
              <span>Save thousands in commissions</span>
            </div>

            <div className="bg-white text-[#0b5aa5] px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 text-xs sm:text-sm shadow-sm">
              <BsFillPatchCheckFill className="text-green-600" />
              <span>4.7-star rated mobile app</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
