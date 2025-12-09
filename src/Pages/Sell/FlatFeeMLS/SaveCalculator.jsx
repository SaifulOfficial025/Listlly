import React, { useState } from "react";
import { IoTriangleSharp } from "react-icons/io5";
import findBg from "../../../../public/findbg.png";

function SaveCalculator() {
  const [listPrice, setListPrice] = useState(1025000);

  const handleSliderChange = (event) => {
    setListPrice(event.target.value);
  };

  const minSaving = ((listPrice * 0.02) / 1000).toFixed(1);
  const maxSaving = ((listPrice * 0.055) / 1000).toFixed(1);

  return (
    <div
      className="w-full px-4 py-10 min-h-screen"
      style={{
        backgroundImage: `url(${findBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1200px] mx-auto mt-52">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center dark:text-white">
          How Much Can{" "}
          <span className="text-[#fff]">You Save With Listlly</span> ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section - dark gradient panel */}
          <div
            className="relative p-8 rounded-2xl overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at center, #0a3082 0%, #061c4c 100%)",
              boxShadow:
                "inset 0 0 60px rgba(255,255,255,0.02), 0 10px 30px rgba(3,27,57,0.4)",
            }}
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Select your list price
            </h3>
            <p className="text-sm text-blue-200 mb-6">
              Drag the slider to see your potential savings
            </p>

            <div className="relative mb-6" style={{ height: 70 }}>
              <div
                className="absolute mt-10"
                style={{
                  left: `${((listPrice - 25000) / (2000000 - 25000)) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <div className="text-xl font-bold text-white bg-[rgba(0,0,0,0.15)] border border-[rgba(255,255,255,0.12)] rounded-xl px-6 py-2 shadow-md mb-1">
                  ${listPrice.toLocaleString()}
                </div>
                <IoTriangleSharp className="text-white rotate-180 -mt-2 ml-16" />
              </div>
            </div>

            <input
              type="range"
              min="25000"
              max="2000000"
              value={listPrice}
              onChange={handleSliderChange}
              className="w-full h-3 rounded-full appearance-none cursor-pointer"
              style={{
                background:
                  "linear-gradient(90deg, #3477f4 0%, #55c3c8 50%, #23585c 100%)",
              }}
            />

            <div className="flex justify-between text-sm text-blue-200 mt-3">
              <span>$25k</span>
              <span>$2m</span>
            </div>

            <div className="mt-6 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] p-4 rounded-lg flex items-start gap-3">
              <div className="w-10 h-10 bg-[rgba(255,255,255,0.06)] rounded-full flex items-center justify-center text-white text-xl">
                💰
              </div>
              <p className="text-sm text-blue-100">
                *Assuming a 6% commission. Savings could be significantly
                greater with no buyer commission.
              </p>
            </div>

            {/* range styling for thumb */}
            <style>{`
              input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width:18px; height:18px; border-radius:999px; background:#ffffff; box-shadow:0 0 0 6px rgba(255,255,255,0.12); border: 3px solid #55c3c8; margin-top: -7px; }
              input[type=range]::-webkit-slider-runnable-track { height: 12px; border-radius:999px; }
              input[type=range]::-moz-range-thumb { width:18px; height:18px; border-radius:999px; background:#ffffff; border: 3px solid #55c3c8; }
              input[type=range]::-moz-range-track { height: 12px; border-radius:999px; }
            `}</style>
          </div>

          {/* Right Section - savings panel */}
          <div
            className="rounded-2xl p-8 flex items-center justify-center text-center overflow-hidden"
            style={{
              backgroundImage: "url('/savecalculatorresultcard.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              boxShadow:
                "inset 0 0 60px rgba(255,255,255,0.02), 0 10px 30px rgba(3,27,57,0.35)",
            }}
          >
            <div>
              <h3 className="text-lg font-medium text-blue-100 mb-4">
                Your Savings with Listlly's Gold Plan
              </h3>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                ${(listPrice * 0.02 + listPrice * 0.055).toLocaleString()}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 max-w-[360px] mx-auto">
                <div className="p-4 bg-[rgba(255,255,255,0.06)] rounded-lg">
                  <p className="text-xs text-blue-100">Min Saving</p>
                  <p className="text-lg font-bold text-white">{minSaving}%</p>
                </div>
                <div className="p-4 bg-[rgba(255,255,255,0.06)] rounded-lg">
                  <p className="text-xs text-blue-100">Max Saving</p>
                  <p className="text-lg font-bold text-white">{maxSaving}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveCalculator;
