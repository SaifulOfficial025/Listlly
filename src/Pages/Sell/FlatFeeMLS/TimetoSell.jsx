import React from "react";
import bgImage from "../../../../public/TimetoSellBG.svg";

function TimetoSell() {
  const stats = [
    { value: "$424.6K", label: "Average Listing Price" },
    { value: "55", label: "Average Days to Sell" },
    { value: "98.5%", label: "Sale-To-List Ratio" },
    { value: "~24.6%", label: "Homes Sold Above List Price" },
  ];

  return (
    <div
      className="w-full bg-cover bg-center text-white py-10 px-4 relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
   

      {/* Content Section */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-20 py-10">
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-bold mb-4">
            Is It the Right Time to Sell Your House?
          </h2>
          <p className="text-lg mb-4">
            The U.S. housing market is growing, with home prices up 3% from last
            year, averaging around $424,647. There are more homes available now,
            with 1.63 million listings. Homes are taking about 55 days to sell,
            making it a more balanced market.
          </p>
          <a
            href="#"
            className="text-white underline text-md"
          >
            &gt;&gt; Housing Market: Check Current Price Trends & Sell Smartly
          </a>
        </div>

        {/* Right Side: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white text-center rounded-lg shadow-md"
            >
              <div className="text-blue-600 text-2xl font-bold mb-2">
                {stat.value}
              </div>
              <p className="text-[#1C1C1C] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimetoSell;
