import React from "react";
import Container from "../../Layout/Container/Container";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import herobg from "../../../public/herobg.png";
import { useState } from "react";
import { Search } from "lucide-react";

function Hero() {
  const [activeTab, setActiveTab] = useState("Buy");
  const tabs = ["Buy", "Sell", "Home Worth", "Get Pre-approved"];

  return (
    <div
      className="relative bg-cover bg-center flex items-center w-full mt-16 min-h-[50rem]"
      style={{ backgroundImage: `url(${herobg})` }} // Add the background image URL later
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content section */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Side */}
          <div className="w-full lg:w-[55%] text-white">
            {/* Badge */}
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-md text-sm font-medium mb-6">
              For Sale by Owner Just Made Simple
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl leading-tight font-bold mb-6">
              Sell Your Home Yourself
              <br />
              And Keep Every Dollar
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg leading-relaxed mb-8">
              List your home, save commissions, and stay in control with
              <br />
              full professional support.
            </p>

            {/* Tabs and Search Bar Container */}
            <div className="flex items-center justify-start p-4 -ml-4 ">
              <div className="w-full max-w-2xl">
                {/* Tab Navigation */}
                <div className="bg-white rounded-t-2xl shadow-lg flex p-1.5 gap-1 mr-16 max-w-lg">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${
                        activeTab === tab
                          ? "bg-[#0b5aa5] text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Search Box - Wider than tabs */}
                <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-lg px-2 py-2 w-6xl">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by City, State or Zip"
                      className="w-full py-4 pl-5 pr-12 border-2 border-[#0b5aa5] rounded-2xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0b5aa5] transition-colors dark:bg-white"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2  bg-[#dfe7ed] hover:bg-[#094a87] text-white p-2.5 rounded-xl transition-colors">
                      <Search size={20} className="text-[#0b5aa5]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="text-[#f9c80e] text-lg">{"★".repeat(5)}</div>
              <p className="text-sm">
                <span className="font-bold">4.9</span> (11,260 reviews)
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[40%] mt-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full aspect-video bg-gray-200">
              <iframe
                className="w-full h-full block"
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
      </div>
    </div>
  );
}

export default Hero;
