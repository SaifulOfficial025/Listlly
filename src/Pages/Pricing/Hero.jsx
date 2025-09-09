import React from 'react'


export default function Hero() {
  return (
    <>
      {/* Top warning bar */}
      <div className="bg-[#FFF8F0] w-full py-2 flex items-center px-4 md:px-0 mt-16">
        <span className="flex items-center text-[#1C1C1C] text-[16px] md:text-[17px]  mx-auto">
          <svg className="w-5 h-5 mr-2 text-[#F5B800]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#F5B800" strokeWidth="2" fill="none"/><path d="M12 8v4" stroke="#F5B800" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#F5B800"/></svg>
          Beware of hidden fees with other Flat Fee MLS services: <span className="ml-1 font-semibold text-[#1DC600]">WE DISCLOSE ALL OUR FEES UPFRONT!</span>
        </span>
      </div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-10 md:py-20 flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between">
        {/* Left */}
  <div className="flex-1 w-full">
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 bg-[#F5F7FB] text-[#0054F6] font-semibold rounded-full text-xs">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#0054F6" strokeWidth="2" fill="none"/><path d="M12 8v4" stroke="#0054F6" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#0054F6"/></svg>
              CASH FOR HOUSES
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1C1C1C] mb-3 leading-tight">
            List Your House on MLS<br />for <span className="text-[#FF6B6B]">$249 only*</span>
          </h1>
          <p className="text-[#5A5A5A] text-base sm:text-lg mb-6 sm:mb-7 max-w-xl">
            Get maximum exposure for your property with our comprehensive MLS listing service at an unbeatable price.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-4">
            <div className="flex items-center text-[17px] text-[#1DC600] font-medium">
              <svg className="w-8 h-8 mr-2 bg-green-200 p-0.5 rounded-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#1DC600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              100% online
            </div>
            <div className="flex items-center text-[17px] text-[#1DC600] font-medium">
              <svg className="w-8 h-8 mr-2 bg-green-200 p-0.5 rounded-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#1DC600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              4.6 star rated mobile app
            </div>
            <div className="flex items-center text-[17px] text-[#1DC600] font-medium">
              <svg className="w-8 h-8 mr-2 bg-green-200 p-0.5 rounded-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#1DC600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Save thousands in commissions
            </div>
            <div className="flex items-center text-[17px] text-[#1DC600] font-medium">
              <svg className="w-8 h-8 mr-2 bg-green-200 p-0.5 rounded-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#1DC600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Online showings & offers!
            </div>
            <div className="flex items-center text-[17px] text-[#1DC600] font-medium">
              <svg className="w-8 h-8 mr-2 bg-green-200 p-0.5 rounded-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#1DC600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              No cancellation fees
            </div>
            <div className="flex items-center text-[17px] text-[#1DC600] font-medium">
              <svg className="w-8 h-8 mr-2 bg-green-200 p-0.5 rounded-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#1DC600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Fast listing and free changes
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-4">
            <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4">Get Started Today</h2>
            <div className="flex items-center bg-[#F5F7FB] rounded-lg px-3 py-2 mb-4 border border-[#E5E7EB]">
              <svg className="w-5 h-5 text-[#5A5A5A] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="#5A5A5A" strokeWidth="2" fill="none"/><path d="M21 21l-4.35-4.35" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round"/></svg>
              <input type="text" placeholder="Enter your property address" className="flex-1 bg-transparent outline-none text-[#1C1C1C] text-base sm:text-lg" />
            </div>
            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#0054F6] to-[#1A6DFF] text-white font-bold text-base sm:text-lg shadow-md mb-3 transition hover:opacity-90">Get Cash Offer</button>
            <div className="flex items-center text-sm text-[#5A5A5A] mb-2">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#5A5A5A" strokeWidth="2" fill="none"/><path d="M16 3v4M8 3v4" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round"/></svg>
              Schedule a free <span className="text-[#FF6B6B] ml-1">consultation call</span>
            </div>
            <div className="text-sm text-[#5A5A5A] mb-2">
              or contact a specialist at <b>(844) 448-0110</b> <span className="ml-1">(9am to 6pm CDT, Mon-Sat)</span>
            </div>
            <a href="#" className="text-[#0054F6] text-sm font-medium underline">Contact Agent</a>
          </div>
        </div>
      </div>
    </>
  );
}


