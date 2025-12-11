import React from "react";
import homeworthhero from "../../../public/whylistlyherobg.png";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative w-full bg-cover bg-center mt-12 sm:mt-16 min-h-screen flex items-start"
      style={{ backgroundImage: `url(${homeworthhero})` }}
    >
      <div className="absolute inset-0" />
      <div className="relative z-10 max-w-4xl px-8 sm:px-32 mt-32 py-12 sm:py-20 flex flex-col items-start text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          <span className="text-[#d03c0b]"> Sell Your Home</span> Yourself &
          Keep Every Dollar
        </h1>

        <p className="mt-4 text-base sm:text-lg text-white max-w-2xl">
          Listlly gives you everything a traditional agent does (and more)
          without the hefty commissions, repair requests, or pressure. Stay in
          control, save tens of thousands, and sell on your own terms.
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
            <Link to="/dashboard/selling_properties">
              <button
                type="submit"
                className="ml-6 bg-[#0b5aa5] hover:bg-[#0954c0] text-white px-4 py-2 rounded-lg text-sm sm:text-base font-semibold shadow-md"
              >
                Get Started Free
              </button>
            </Link>
          </div>
        </form>
        <p className="flex items-center mt-4 text-white/90">
          {" "}
          <FaPhoneVolume className="mr-2" /> No commitments. Just savings.
        </p>
      </div>
    </section>
  );
}

export default Hero;
