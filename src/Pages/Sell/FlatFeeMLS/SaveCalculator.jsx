import React, { useState } from "react";
import { IoTriangleSharp } from "react-icons/io5";

function SaveCalculator() {
  const [listPrice, setListPrice] = useState(1025000);

  const handleSliderChange = (event) => {
    setListPrice(event.target.value);
  };

  const minSaving = ((listPrice * 0.02) / 1000).toFixed(1);
  const maxSaving = ((listPrice * 0.055) / 1000).toFixed(1);

  return (
    <div className=" bg-white px-4 py-10 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] mb-6">
        How Much Can{" "}
        <span className="text-[#EB4E3D]">You Save With Listlly</span> ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
        {/* Left Section */}
        <div className="p-6 bg-blue-50 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#1C1C1C] mb-3">
            Select your list price
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Adjust the slider to see your potential savings
          </p>
          <div className="relative mb-4 mt-20 ">
            <div
              className="absolute -top-10"
              style={{
                left: `${((listPrice - 25000) / (2000000 - 25000)) * 100}%`,
              }}
            >
              <div className="text-2xl font-bold text-[#00589c] bg-red-50 border-2 border-[#00589c] rounded-xl px-3 py-1 shadow-md mb-1 -ml-14">
                ${listPrice.toLocaleString()}
              </div>
              <IoTriangleSharp className="text-[#00589c] rotate-180 -mt-3 -ml-2"/> 
            </div>
          </div>
          <input
            type="range"
            min="25000"
            max="2000000"
            value={listPrice}
            onChange={handleSliderChange}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>$25k</span>
            <span>$2m</span>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            *Assuming a 6% commission. Savings could be significantly greater
            with no buyer commission.
          </p>
        </div>

        {/* Right Section */}
        <div className="p-6 bg-red-50 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#1C1C1C] mb-3">
            Your Savings with Listlly's Gold Plan
          </h3>
          <div className="text-3xl font-bold text-[#1C1C1C] mb-4">
            $
            {((listPrice * 0.02) + (listPrice * 0.055)).toLocaleString()}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Min Saving</p>
              <p className="text-lg font-bold text-[#1C1C1C]">
                {minSaving}%
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Max Saving</p>
              <p className="text-lg font-bold text-[#1C1C1C]">
                {maxSaving}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveCalculator;
