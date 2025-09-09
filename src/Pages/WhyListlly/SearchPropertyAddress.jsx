import React from 'react'

export default function SearchPropertyAddress() {
  return (
    <section className="py-10 bg-[#fffafa]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-[#EB4E3D]">$215 Million</h3>
        <p className="text-xs text-gray-500 mt-1 uppercase">COMMISSIONS SAVED SO FAR</p>

        <p className="text-blue-600 mt-4 font-bold">Home sellers have saved $3,000 to $40,000* on the sale of their home with Listlly</p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex items-center bg-[#F5F7FB] border border-[#E5E7EB] rounded-lg px-4 py-3 w-full max-w-2xl">
            <svg className="w-5 h-5 text-[#8A8A8A] mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8" stroke="#8A8A8A" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round"/></svg>
            <input className="flex-1 bg-transparent outline-none text-left text-sm dark: text-black" placeholder="Enter your property address" />
            <button className="ml-4 px-6 py-2 rounded-md bg-gradient-to-r from-[#0054F6] to-[#1A6DFF] text-white font-medium">Get Started</button>
          </div>
        </div>

        <div className="text-sm text-gray-500 mt-3">
          <small>Schedule a free <span className=" text-red-500 underline">consultation call</span>  or contact a specialist at <b>(844) 448-0110</b></small>
        </div>
      </div>
    </section>
  )
}
