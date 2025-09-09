import React from 'react';
import ListingBG from "../../../../public/listingbg.svg"

function Listing() {
  return (
  <div className="bg-white min-h-screen pb-12 relative py-8 sm:py-10">
      {/* Background Image */}
      <div className="absolute inset-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${ListingBG})`, backgroundSize: '40%' }}></div>

      {/* Content */}
  <div className="relative max-w-5xl mx-auto pt-8 sm:pt-10 px-4 sm:px-6 flex flex-col sm:flex-row gap-10 sm:gap-28">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-blue-600 text-lg sm:text-xl font-semibold">FLAT FEE MLS</h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-black mt-2 mb-3">
            List Your House on MLS for
          </h2>
          <span className="text-2xl sm:text-4xl font-bold mt-6 sm:mt-20 text-red-500">$249 only*</span>

          <div className="mt-6 ">
            <button className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white w-full px-6 py-3 sm:px-24 sm:py-4 rounded font-semibold text-base flex items-center justify-center gap-2">
              Start Listing <span>↗</span>
            </button>
            <button className="border border-blue-600 text-blue-600 w-full px-6 py-3 sm:px-24 sm:py-4 rounded font-semibold text-base mt-3 sm:mt-5">
              Schedule Showing
            </button>
          </div>

          <div className="mt-4 text-base text-gray-500">
            <p>
              📞 Schedule a free <a href="#" className="text-blue-600 underline">consultation call</a>
            </p>
            <p>
              or contact a specialist at <span className="font-semibold">(844) 448-0110</span> (9am to 6pm CDT, Mon-Sat)
            </p>
          </div>
        </div>

        {/* Right Content */}
  <div className="flex-1  backdrop-blur-sm border border-gray-200 rounded-lg p-6 sm:p-8 shadow mt-6 sm:mt-0">
          <h3 className="text-xl font-semibold text-black">Why Choose <span className="text-blue-600">Listlly</span></h3>
          <ul className="mt-6 space-y-3 text-base text-gray-700">
            <li>✔️ 100% online</li>
            <li>✔️ 4.6 star rated mobile app</li>
            <li>✔️ Save thousands in commissions</li>
            <li>✔️ Online showings & offers!</li>
            <li>✔️ No cancellation fees</li>
            <li>✔️ Fast listing and free changes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Listing;
