import React, { useState } from "react";
import { IoTriangleSharp } from "react-icons/io5";
import bg from "../../../../public/howmuchyoucansavebf.png";

function HowMuchYouCanKeep() {
  const [listPrice, setListPrice] = useState(1025000);
  const minPrice = 25000;
  const maxPrice = 2000000;
  const commissionRate = 0.06;
  const savings = Math.round(listPrice * commissionRate);

  const handleSliderChange = (e) => {
    setListPrice(Number(e.target.value));
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-16"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-5">
        How Much Can You Keep?
      </h2>
      <p className="text-white/80 text-center mb-12">
        Save big like thousands of sellers
      </p>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left panel */}
        <div
          className="relative rounded-2xl p-8 shadow-xl border border-white/10 flex flex-col justify-between min-h-[440px]"
          style={{
            background: "radial-gradient(circle, #0b3386 0%, #071d4d 100%)",
          }}
        >
          <h3 className="text-white text-xl font-semibold mb-1">
            Select your list price
          </h3>
          <p className="text-blue-200 text-sm mb-8">
            Drag the slider to see your potential savings
          </p>
          <div className="relative mb-8" style={{ height: 70 }}>
            <div
              className="absolute mt-10 left-0"
              style={{
                left: `${
                  ((listPrice - minPrice) / (maxPrice - minPrice)) * 100
                }%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="text-2xl font-bold text-white bg-[rgba(0,0,0,0.15)] border border-[rgba(255,255,255,0.12)] rounded-xl px-8 py-3 shadow-md mb-1 text-center min-w-[160px]">
                ${listPrice.toLocaleString()}
              </div>
              <IoTriangleSharp className="text-white rotate-180 -mt-3 ml-20" />
            </div>
          </div>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
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
          <div className="mt-8 bg-[#18344a] border border-[#2a4b7c] p-4 rounded-lg flex items-center gap-3">
            <span className="text-2xl">💰</span>
            <span className="text-blue-100 text-sm">
              *Assuming a 6% commission
            </span>
          </div>
          <style>{`
            input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width:18px; height:18px; border-radius:999px; background:#ffffff; box-shadow:0 0 0 6px rgba(255,255,255,0.12); border: 3px solid #55c3c8; margin-top: -7px; }
            input[type=range]::-webkit-slider-runnable-track { height: 12px; border-radius:999px; }
            input[type=range]::-moz-range-thumb { width:18px; height:18px; border-radius:999px; background:#ffffff; border: 3px solid #55c3c8; }
            input[type=range]::-moz-range-track { height: 12px; border-radius:999px; }
          `}</style>
        </div>
        {/* Right panel */}
        <div
          className="rounded-2xl p-8 shadow-xl border border-white/10 flex flex-col items-center justify-center min-h-[340px]"
          style={{
            backgroundImage: "url(/listlysavingbg.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-white mb-2">
              ${savings.toLocaleString()}
            </div>
            <div className="text-blue-200 mb-8 text-lg">Listlly Savings</div>
            <div className="w-full flex items-end justify-between mt-8 mb-2">
              <div className="flex flex-col items-center w-1/2">
                <div
                  className="h-32 w-16 bg-gradient-to-t from-[#60a5fa] to-[#a7f3d0] rounded-t-xl"
                  style={{
                    height: `${
                      (savings / (maxPrice * commissionRate)) * 128 + 32
                    }px`,
                  }}
                ></div>
                <div className="text-white font-semibold mt-2">
                  ${savings.toLocaleString()}
                </div>
                <div className="text-blue-200 text-xs">Listlly Savings</div>
              </div>
              <div className="flex flex-col items-center w-1/2">
                <div className="h-8 w-16 bg-gradient-to-t from-[#e5e7eb] to-[#f3f4f6] rounded-t-xl"></div>
                <div className="text-white font-semibold mt-2">$0</div>
                <div className="text-blue-200 text-xs text-center">
                  Savings With Agent Commission
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowMuchYouCanKeep;
