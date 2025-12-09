import React from "react";
import hiddenBg from "../../../../public/hiddenfeesbg.png";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { FiDollarSign } from "react-icons/fi";

function ListllyVsTraditional() {
  const leftList = [
    "Hefty 5–6% commissions",
    "60–90 day closings",
    "Endless showings & open houses",
    "Repairs & credits eat up profit",
    "Risk of cancellation",
    "Uncertainty with buyers",
  ];

  const middleList = [
    "Top competitive cash offers",
    "Close in as little as 15–30 days",
    "No showings, no open houses, no stress",
    "No repairs or prep required",
    "Guaranteed closing, no surprises",
    "Verified, licensed buyers only",
  ];

  const rightList = [
    "Low-ball offers",
    "Inflexible timelines",
    "One-time offers only",
    '"As-is" but deep discount',
    "High risk of scams",
    "No support or guidance",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-cover bg-center">
      <div className="text-left bg-gradient-to-b from-[#3983ec] to-[#0b4596] py-8 px-16 rounded-2xl">
        <h2 className="text-3xl font-bold text-white">
          Listlly vs. Traditional <span>Cash Sales</span>
        </h2>
        <p className="mt-4 text-white max-w-5xl ">
          Traditional home sales often drag on for 60 to 90 days, with endless
          showings, open houses, and “window shoppers” who never make an offer.
          On top of that, hefty agent commissions, repair requests, buyer
          credits, and discounts can quickly eat away at your profit, leaving
          you with far less than you expected. You’re also left stressing over
          inspections, appraisals, and whether the buyer’s financing will
          actually go through. With Listlly’s Sell for Cash program, you skip
          all of that. No repairs. No showings. No open houses. No surprises.
        </p>

        <p className="mt-4 text-white max-w-5xl ">
          Just a fair, competitive cash offer and a guaranteed closing on your
          terms, whether you prefer 15 days, 30 days, or your own schedule. You
          don’t have to lift a hammer or deal with last-minute negotiations.
          It’s fast, simple, and completely hassle-free, so you can move forward
          confidently and keep every dollar you deserve.
        </p>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-4xl font-semibold text-gray-800">
          Sell Your House for <br /> Cash, the Smarter Way
        </h3>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          Listlly Cash Offers makes selling fast, easy, and stress-free, with no
          commissions, no repairs, and no surprises.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative bg-[#f6fbff] p-8 rounded-2xl">
        {/* Traditional Agents */}
        <div className=" rounded-xl shadow-sm border border-transparent overflow-hidden">
          {/* <div className="border-t-8 border-red-200 rounded-t-xl" /> */}
          <div className="p-6">
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
                <AiOutlineCloseCircle className="text-red-400 w-16 h-16" />
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-gray-800 mt-10 text-center">
              Traditional Agents
            </h4>
            <p className="text-md text-gray-400 text-center mt-1">
              The old way of selling
            </p>

            <ul className="mt-6 divide-y divide-gray-200">
              {leftList.map((it, i) => (
                <li key={i} className="flex items-center px-3 py-4">
                  <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center mr-3">
                    <AiOutlineCloseCircle className="text-red-300 w-6 h-6" />
                  </div>
                  <span className="text-sm text-red-600">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Listlly */}
        <div className="bg-[#0d5aa0] rounded-2xl relative z-10 shadow-2xl drop-shadow-xl">
          {/* <div className="border-t-8 border-blue-300 rounded-t-xl" /> */}
          <div className="p-8 ">
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-[#3c7bb7] flex items-center justify-center shadow-md">
                <img
                  src="/Listlly-logo-white.svg"
                  alt="Listlly logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-white mt-10 text-center">
              Listlly
            </h4>

            <p className="text-md text-blue-100 text-center mt-1">
              The smart solution
            </p>

            <ul className="mt-6 divide-y divide-white/20">
              {middleList.map((it, i) => (
                <li key={i} className="flex items-center px-3 py-4">
                  <AiOutlineCheckCircle className="text-white/80 w-5 h-5 mr-3" />
                  <span className="text-sm text-white font-medium">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cash Buyers */}
        <div className="rounded-xl shadow-sm border border-transparent overflow-hidden">
          {/* <div className="border-t-8 border-orange-200 rounded-t-xl" /> */}
          <div className="p-6">
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-orange-50 flex items-center justify-center">
                <FiDollarSign className="text-orange-400 w-16 h-16" />
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-gray-800 text-center mt-10">
              Cash Buyers
            </h4>
            <p className="text-md text-gray-400 text-center mt-1">
              Limited options
            </p>

            <ul className="mt-6 divide-y divide-gray-200">
              {rightList.map((it, i) => (
                <li key={i} className="flex items-center px-3 py-4">
                  <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center mr-3">
                    <AiOutlineCloseCircle className="text-orange-300 w-4 h-4" />
                  </div>
                  <span className="text-sm text-orange-700">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListllyVsTraditional;
