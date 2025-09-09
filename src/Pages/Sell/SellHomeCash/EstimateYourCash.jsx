import React, { useState } from 'react';
import { IoTriangleSharp } from 'react-icons/io5';

function EstimateYourCash() {
  const [homeValue, setHomeValue] = useState(1025000);
  const MIN = 25000;
  const MAX = 2000000;

  // clamp (in case initial state > MAX in this workspace, keep UI safe)
  const value = Math.max(MIN, Math.min(MAX, Number(homeValue)));

  const handleChange = (e) => setHomeValue(Number(e.target.value));

  const leftPercent = ((value - MIN) / (MAX - MIN)) * 100;

  // Estimate calculations (example heuristics to match screenshot style)
  const listllyMin = Math.round(value * 0.5);
  const listllyMax = Math.round(value * 0.7);
  const mlsEstimate = Math.round(value * 1.0);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Estimate <span className="text-[#ff6061]">Your Cash Offer</span></h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Our advanced algorithms analyze local market data to provide an accurate cash offer estimate based on comparable sales and current market trends. Use this to get the highest possible price for your home.
        </p>
      </div>

      <div className="mt-6 bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h3 className="text-xl font-semibold text-gray-800">Select Your Home Value</h3>
        <p className="text-sm text-gray-500 mt-2">Adjust the slider to match your estimated home value</p>

        <div className="relative mt-6 mb-4 h-20 sm:h-24">
          <div
            className="absolute -top-8"
            style={{ left: `${leftPercent}%`, transform: 'translateX(-50%)' }}
          >
            <div className="bg-blue-50 border-2 border-[#2B6CB0] text-[#2B6CB0] font-bold rounded-xl px-4 py-2 shadow-md text-center w-36 -mt-4 mx-auto">
              ${value.toLocaleString()}
            </div>
            <div className="flex justify-center">
              <IoTriangleSharp className="text-[#2B6CB0] rotate-180 -mt-1" />
            </div>
          </div>

          <input
            type="range"
            min={MIN}
            max={MAX}
            value={value}
            onChange={handleChange}
            className="w-full h-2 appearance-none rounded-lg bg-blue-100 cursor-pointer"
            style={{ background: `linear-gradient(90deg, #0058c8 ${leftPercent.toFixed(2)}%, #e6eefc ${leftPercent.toFixed(2)}%)` }}
          />

          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>$25k</span>
            <span>$2m</span>
          </div>
        </div>

  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" rounded-lg shadow-lg">
            <div className="bg-[#fee4d7] rounded-t-lg py-3 text-center text-sm text-gray-600">With Listlly Cash Buyer Network</div>
            <div className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-800">${listllyMin.toLocaleString()} - ${listllyMax.toLocaleString()}</div>
              <p className="text-sm text-gray-500 mt-2">50%-70% of your home value</p>

              <ul className="mt-4 text-sm text-[#ff6b61] space-y-2">
                <li>Flexible Closing</li>
                <li>No upfront fee</li>
                <li>Close in as little as 7 days</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg shadow-lg">
            <div className="bg-[#ccd0fe] rounded-t-lg py-3 text-center text-sm text-gray-600">Via Listlly MLS Listing</div>
            <div className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-800">${mlsEstimate.toLocaleString()}</div>
              <p className="text-sm text-gray-500 mt-2">Up to 100% of your home value</p>

              <ul className="mt-4 text-sm text-[#2B6CB0] space-y-2">
                <li>Flexible Closing</li>
                <li>Top dollar offer for $149 upfront</li>
                <li>Full MLS exposure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EstimateYourCash;
