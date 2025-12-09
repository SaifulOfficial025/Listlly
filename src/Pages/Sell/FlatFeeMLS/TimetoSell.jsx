import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import bgImage from "../../../../public/TimetoSellBG.svg";
import rightImage from "../../../../public/righttimetosell.png";

function TimetoSell() {
  const stats = [
    { value: "$793K", label: "Average Home Value" },
    { value: "47 Days", label: "Average Time to Sell" },
    { value: "99.1%", label: "Sale-to-List Price Ratio" },
    { value: "28%", label: "Homes Sold Above Asking" },
  ];

  return (
    <div className="w-full bg-white py-10 relative">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center px-8 sm:px-16 py-8 sm:py-10 mx-auto max-w-[1500px]">
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-black dark:text-black">Is It the</span>{" "}
            <span className="text-[#d03c0b]">Right Time to Sell</span> <br />
            <span className="text-black dark:text-black">Your House?</span>
          </h2>
          <p className="text-lg mb-6 text-[#1C1C1C]">
            California’s housing market continues to stay strong, with prices
            averaging $793,200 statewide, up 4.2% year-over-year. Inventory is
            slowly increasing, giving homeowners a solid window to sell before
            competition rises.
            <br />
            Homes across major metros like Los Angeles, Orange County, and
            Ventura are still receiving multiple offers and selling in under two
            months on average.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 font-bold">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center text-md  text-[#1C1C1C]"
              >
                <BsFillPatchCheckFill className="text-green-600 w-4 h-4 mr-3 shrink-0" />
                <div className="leading-tight">
                  <span className="">{stat.value}</span>
                  <span className="ml-2">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="px-6 py-3 border border-[#4883bc] text-[#4883bc] font-bold rounded-lg shadow-md hover:scale-105 transition">
            Check Your Home Value
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="relative items-end md:items-center flex justify-center md:justify-end">
          <img
            src={rightImage}
            alt="Right Time to Sell"
            className="w-3xl rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}

export default TimetoSell;
