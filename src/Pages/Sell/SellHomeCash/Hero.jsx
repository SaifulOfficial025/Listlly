import React from 'react';
import { AiTwotoneAlert } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FiDollarSign } from "react-icons/fi";

function Hero() {
  return (
    <div className="bg-white mt-16">
      {/* Alert Bar */}
      <div className="bg-[#FFF7E6] py-2 text-center text-sm text-[#FF6A00] font-medium">
       <AiTwotoneAlert className="inline-block mr-1 h-5 w-5" /> Watch Out for Scams: <span className="font-bold">4 SIGNS YOUR CASH BUYER MAY BE FAKE</span>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <div className="inline-block bg-[#E6F9E6] text-[#00A82D] font-medium text-xs px-3 py-1 rounded-full">
            CASH FOR HOUSES
          </div>
          <h1 className="text-4xl font-bold mt-4 text-black">
            CASH FOR HOUSES
          </h1>
          <h2 className="text-4xl font-bold text-black mt-2">
            Sell Your House Fast for <span className="text-[#ff6061]">Cash</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Get a competitive cash offer for your home in any condition. No repairs, no fees, no hassles.
          </p>

          {/* Input Section */}
          <div className="mt-6 flex items-center bg-white shadow-md rounded-lg">
            <div className="flex items-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 18.75a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5zM21 21l-4.35-4.35"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Enter your property address"
              className="flex-grow px-4 py-2 text-gray-600 focus:outline-none dark:bg-white text-black"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg font-medium hover:bg-blue-700 ml-5">
              Get Cash Offer
            </button>
          </div>

          {/* Features Section */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-black">
            <div className="flex items-center space-x-2">
              <IoTimeOutline className='w-10 h-10 text-green-600 p-2 bg-green-200 rounded-full' />
              <span>Sell Your House Fast</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaHome  className='w-10 h-10 text-green-600 p-2 bg-green-200 rounded-full' />
              <span>Sell as-is, no repairs needed</span>
            </div>
            <div className="flex items-center space-x-2">
              <SlCalender className='w-10 h-10 text-green-600 p-2 bg-green-200 rounded-full' />
              <span>Choose your closing date</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiDollarSign  className='w-10 h-10 text-green-600 p-2 bg-green-200 rounded-full' />
              <span>Get a fair offer</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <div className="rounded-3xl p-5 bg-gradient-to-r from-[#FADBCF] via-[#E8EEF6] to-[#B4D8FF]">
              <div className="bg-white rounded-2xl px-6 py-6 w-80 h-44 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <FaHome className="text-blue-500 w-6 h-6" />
                  <span className="bg-[#E6F9E6] text-[#00A82D] text-sm font-medium px-3 py-1 rounded-full">Sold</span>
                </div>

                <div className="flex justify-between items-end">
                  <p className="text-[#00A82D] font-bold text-2xl">$425,000</p>
                  <p className="text-[#00A82D] font-bold">$Cash</p>
                </div>
              </div>
            </div>

            {/* Overlapping circular dollar badge */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#6EA8FF] via-[#A77BFF] to-[#FF8A8A] flex items-center justify-center shadow-md">
              <FiDollarSign className="text-white w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;
