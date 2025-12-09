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
      <div className=" text-center">
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
