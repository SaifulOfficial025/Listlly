import React from "react";
import homeworthhero from "../../../../public/homeworthherobg.png";
import { CiLocationOn } from "react-icons/ci";

function Hero() {
  return (
    <section
      className="relative w-full bg-cover bg-center mt-12 sm:mt-16 min-h-screen flex items-start"
      style={{ backgroundImage: `url(${homeworthhero})` }}
    >
      <div className="absolute inset-0" />
      <div className="relative z-10 max-w-4xl px-8 sm:px-32 mt-32 py-12 sm:py-20 flex flex-col items-start text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          What Is My <br /> <span className="text-[#fff]">Home Worth?</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-white max-w-2xl">
          Discover the current market value of your home with a comprehensive
          analysis of local real estate trends, comparable property sales, and
          other key factors that influence its worth.
        </p>

        <form className="mt-8 w-full p-3 bg-white rounded-lg shadow-lg">
          <div className="flex items-center border border-gray-200  shadow-sm px-3 py-2 bg-gray-200 rounded-md">
            <span className=" mr-3">
              <CiLocationOn className="text-blue-600 w-5 h-5" />
            </span>

            <input
              type="text"
              aria-label="Enter your address"
              placeholder="Enter your address"
              className="flex-1 bg-transparent outline-none px-2 text-sm sm:text-base text-black placeholder-black"
            />

            <div className="ml-4 flex items-center border-l border-gray-200 pl-4 px-2 py-3 rounded-md">
              {/* <div className="px-6 bg-gray-900"></div> */}
              <input
                type="text"
                aria-label="Suite"
                placeholder="Suite"
                className="w-20 bg-transparent outline-none text-sm text-black placeholder-black"
              />
            </div>

            <button
              type="submit"
              className="ml-6 bg-[#0b5aa5] hover:bg-[#0954c0] text-white px-4 py-2 rounded-lg text-sm sm:text-base font-semibold shadow-md"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Hero;
