import React from "react";
import bg from "../../../../public/listforsellbyownerherobg.png";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative w-full bg-cover bg-center min-h-[320px] sm:min-h-screen flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between px-4 sm:px-8 py-6 sm:py-10">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6">
            List Your Home
            <br />
            For <span className="text-[#d03c0b]">Sale By Owner</span>
          </h1>
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-white border border-gray-300 text-gray-700 text-xs sm:text-sm font-semibold">
              <BiSolidBadgeCheck className="mr-1 sm:mr-2 text-[#2db265] text-sm sm:text-base" />
              No Hidden Fees
            </span>
            <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-white border border-gray-300 text-gray-700 text-xs sm:text-sm font-semibold">
              <BiSolidBadgeCheck className="mr-1 sm:mr-2 text-[#2db265] text-sm sm:text-base" />
              MLS Exposure in 24 Hours
            </span>
            <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-white border border-gray-300 text-gray-700 text-xs sm:text-sm font-semibold">
              <BiSolidBadgeCheck className="mr-1 sm:mr-2 text-[#2db265] text-sm sm:text-base" />
              Licensed Experts by Your Side
            </span>
            <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-white border border-gray-300 text-gray-700 text-xs sm:text-sm font-semibold">
              <BiSolidBadgeCheck className="mr-1 sm:mr-2 text-[#2db265] text-sm sm:text-base" />
              Ever, Keep Tens of Thousands in Equity
            </span>
          </div>
          <form className="mt-4 sm:mt-8 w-full p-2 sm:p-3 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center border border-gray-100 shadow-sm px-2 sm:px-3 py-2 bg-gray-100 rounded-md gap-2 sm:gap-0">
              <span className="hidden sm:block sm:mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-600 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 21s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
                  />
                </svg>
              </span>
              <input
                type="text"
                aria-label="Enter your address"
                placeholder="Enter your address"
                className="w-full sm:flex-1 bg-transparent outline-none px-2 py-1 text-sm sm:text-base text-black placeholder-black"
              />
              {/* Mobile: suite input directly below, Desktop: inside border div */}
              <input
                type="text"
                aria-label="Suite"
                placeholder="Suite"
                className="w-full sm:hidden bg-transparent outline-none py-1 text-sm text-black placeholder-black"
              />
              <div className="hidden sm:flex items-center sm:border-l border-gray-300 sm:pl-4">
                <input
                  type="text"
                  aria-label="Suite"
                  placeholder="Suite"
                  className="sm:w-20 bg-transparent outline-none py-1 text-sm text-black placeholder-black"
                />
              </div>
              <Link to="/dashboard/selling_properties">
                <button
                  type="submit"
                  className="sm:ml-6 bg-[#0b5aa5] hover:bg-[#0954c0] text-white px-4 py-2 rounded-lg text-sm sm:text-base font-semibold shadow-md w-full sm:w-auto"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="flex-1 flex items-center justify-center mb-6 sm:mb-0">
          <img
            src="/listforsellbyownerherobg.png"
            alt="List for Sale By Owner Illustration"
            className="w-full max-w-[250px] sm:max-w-[340px] h-auto"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
