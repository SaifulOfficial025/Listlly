import React, { useState } from "react";
import { IoTriangleSharp, IoLocationOutline } from "react-icons/io5";
import { BsPatchCheckFill } from "react-icons/bs";

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
    <div className="w-full bg-gradient-to-b from-[#07408f] to-[#2a70d1] min-h-screen py-8">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Estimate <span className="text-[#fff]">Your Cash Offer</span>
          </h2>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto">
            Unlike other cash-offer sites that rely on algorithms and generic
            computer-generated estimates, we don’t let a machine decide your
            home’s value. <br />
          </p>
          <p className="mt-6 text-blue-100 max-w-2xl mx-auto">
            A computer doesn’t know your home’s upgrades, condition, or the care
            you’ve put into it. At Listlly, every offer is backed by a detailed,
            transparent market analysis prepared by licensed real estate
            professionals, not bots. You’ll receive a fair, accurate, and
            human-evaluated price based on real data, neighborhood trends, and
            your home’s true condition.
          </p>
        </div>

        <div className="mt-6 bg-[#4779c0] rounded-2xl shadow-md p-4 sm:p-6">
          <div
            className="py-8 px-8 rounded-2xl shadow-lg"
            style={{
              background:
                "radial-gradient(circle at center, #0a2d79 0%, #061d4d 100%)",
            }}
          >
            <h3 className="text-xl font-semibold text-white text-center">
              Select Your List Price
            </h3>
            <p className="text-sm text-white mt-2 text-center">
              Drag the slider to see your potential savings
            </p>

            <div className="relative mt-28 mb-4 h-20 sm:h-24">
              <div
                className="absolute -top-8"
                style={{
                  left: `${leftPercent}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <div className="bg-[#002167] border-2 border-[#2B6CB0] text-[#fff] text-xl font-bold rounded-xl px-4 py-2 shadow-md text-center w-52 -mt-6 mx-auto">
                  <span className="mr-1">$</span> {value.toLocaleString()}
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
                className="w-full h-3 rounded-full appearance-none cursor-pointer"
                style={{
                  background:
                    "linear-gradient(90deg, #3477f4 0%, #55c3c8 50%, #23585c 100%)",
                }}
              />

              <style>{`
                input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width:18px; height:18px; border-radius:999px; background:#ffffff; box-shadow:0 0 0 6px rgba(255,255,255,0.12); border: 3px solid #55c3c8; margin-top: -7px; }
                input[type=range]::-webkit-slider-runnable-track { height: 12px; border-radius:999px; }
                input[type=range]::-moz-range-thumb { width:18px; height:18px; border-radius:999px; background:#ffffff; border: 3px solid #55c3c8; }
                input[type=range]::-moz-range-track { height: 12px; border-radius:999px; }
              `}</style>

              <div className="flex justify-between text-lg font-bold text-white mt-2">
                <span>$25k</span>
                <span>$2m</span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="rounded-lg shadow-lg overflow-hidden"
              style={{
                background:
                  "url('/cashbuyernetworkbg.png') center / cover no-repeat",
              }}
            >
              <div className=" rounded-t-lg py-3 font-bold text-center text-sm text-white">
                With Listlly Cash Buyer Network
              </div>
              <p className="text-center mb-5">Your Offer Est.</p>
              <div className="p-6 text-center">
                <div className="text-2xl font-bold text-white">
                  ${listllyMin.toLocaleString()} - $
                  {listllyMax.toLocaleString()}
                </div>
                <p className="text-sm text-white mt-2">
                  50%-70% of your home value
                </p>

                <ul className="mt-4 text-sm text-[#fff] space-y-2">
                  <li>
                    <BsPatchCheckFill className="inline mr-2 text-green-400" />
                    Flexible Closing
                  </li>
                  <li>
                    <BsPatchCheckFill className="inline mr-2 text-green-400" />
                    No upfront fee
                  </li>
                  <li>
                    <BsPatchCheckFill className="inline mr-2 text-green-400" />
                    Close in as little as 7 days
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="rounded-lg shadow-lg"
              style={{
                background:
                  "url('/cashbuyernetworkbg.png') center / cover no-repeat",
              }}
            >
              <div className=" rounded-t-lg py-3 text-center text-sm text-white font-bold">
                Via Listlly MLS Listing
              </div>
              <p className="text-center mb-5">Your Offer Est.</p>
              <div className="p-6 text-center">
                <div className="text-2xl font-bold text-white">
                  ${mlsEstimate.toLocaleString()}
                </div>
                <p className="text-sm text-white mt-2">
                  Up to 100% of your home value
                </p>

                <ul className="mt-4 text-sm text-[#fff] space-y-2">
                  <li>
                    <BsPatchCheckFill className="inline mr-2 text-green-400" />
                    Flexible Closing
                  </li>
                  <li>
                    <BsPatchCheckFill className="inline mr-2 text-green-400" />
                    Top dollar offer for $149 upfront
                  </li>
                  <li>
                    <BsPatchCheckFill className="inline mr-2 text-green-400" />
                    Full MLS exposure
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Address input bar - matches design */}
          <div className="mt-4">
            <div className="bg-white rounded-lg px-3 sm:px-4 py-3 shadow-lg flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mx-auto">
              {/* Mobile label above input */}
              <div className="block sm:hidden text-base font-semibold text-black mb-1 pl-1">
                Get Your Cash Offer
              </div>
              {/* Desktop label left of input */}
              <div className="hidden sm:block text-lg font-semibold text-black pl-2 mr-24">
                Get Your Cash Offer
              </div>

              <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                <div className="relative flex-1">
                  <IoLocationOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="w-full h-10 sm:h-12 pl-10 pr-3 rounded-lg border border-gray-200 bg-gray-200 text-gray-700 placeholder-gray-700 outline-none text-sm sm:text-base"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Suite"
                  className="w-full sm:w-28 h-10 sm:h-12 px-3 rounded-lg border border-gray-200 bg-gray-200 text-gray-700 placeholder-gray-700 outline-none text-sm sm:text-base mt-2 sm:mt-0"
                />
              </div>

              <button className="bg-[#0b5aa5] text-white rounded-lg px-4 sm:px-5 py-2 sm:py-3 font-semibold hover:bg-[#094a87] transition text-sm sm:text-base mt-2 sm:mt-0">
                Get Cash Offer
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EstimateYourCash;
