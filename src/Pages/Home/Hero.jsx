import React from "react";
import Container from "../../Layout/Container/Container";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Hero() {

  return (
    <div className="bg-white min-h-screen flex flex-col justify-betweens w-full mt-10">
      {/* Content section (now full width) */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 mt-20 px-4 lg:px-12 max-w-none">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl leading-tight font-bold text-[#1C1C1C]">
            For Sale by Owner <span className="text-[#EB4E3D]">Just Made Simple</span>
          </h1>
          <p className="text-2xl text-[#1C1C1C] font-medium mt-3">
            Sell Your Home Yourself And Keep Every Dollar
          </p>
          <p className="text-lg text-[#3A3A3A] leading-relaxed  mt-10">
            List your home, save commissions, and stay in control with full professional support.
          </p>

          {/* Rating */}
          <div className="flex items-center space-x-2 mt-10">
            <div className="text-[#FFA800] text-lg">{'★'.repeat(5)}</div>
            <p className="text-md text-[#1C1C1C]">
              <span className="font-bold">4.9</span> (11,260 reviews)
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4 pt-2 mt-10">
            <button
              className="text-white text-sm font-medium px-5 py-2 rounded shadow-sm flex items-center"
              style={{
                background: "linear-gradient(90deg, #0054F6 0%, #0D47C1 100%)",
              }}
            >
              Start Listing <span className="ml-2"><FaArrowUpRightFromSquare /></span>
            </button>
            <button className="text-sm text-[#0D47C1] font-medium border border-[#0D47C1] px-5 py-2 rounded">
              Contact
            </button>
          </div>
        </div>

        {/* Right Side: Responsive YouTube Video */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-lg w-full aspect-video bg-black">
            <iframe
              className="rounded-xl w-full h-full block"
              src="https://www.youtube-nocookie.com/embed/OfnFU99-uds?autoplay=1&mute=1&vq=hd1080"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

  {/* Search  */}
  <div className="mt-20 flex items-center justify-center gap-0 shadow-xl rounded-2xl overflow-hidden bg-white w-full max-w-7xl mx-auto">
        <input
          type="text"
          placeholder="Search by City, State or Zip..."
          className="flex-1 min-w-0 px-6 py-4 text-base rounded-none outline-none placeholder:text-[#7A7A7A] placeholder:font-medium bg-white text-[#1C1C1C] focus:ring-2 focus:ring-[#0054F6] transition-all duration-200"
        />
        <button
          className="px-8 py-4 text-base text-white font-semibold rounded-none shadow-sm transition-all duration-200 hover:scale-105 active:scale-100 bg-gradient-to-r from-[#0054F6] to-[#0D47C1]"
        >
          Search 🔍
        </button>
      </div>

      {/* Footer note */}
      <div className="text-center mt-10 text-lg text-[#1C1C1C] w-full">
        ✆ Schedule a free <span className="text-[#EB4E3D] underline cursor-pointer">consultation call</span> or contact a specialist at{' '}
        <span className="font-semibold">(844) 448-0110</span> (9am to 6pm CDT, Mon–Sat)
      </div>
    </div>
  );
}

export default Hero;
