import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsCalendar2Check } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function HomeWorth() {
  return (
    <section className="max-w-4xl mx-auto mt-8 mb-8 px-2">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-2">What Is My Home Worth?</h2>
        <p className="text-center text-gray-500 mb-6">Enter your address to get an instant estimate and claim benefits for your home.</p>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl flex items-center bg-[#f7faff] rounded-md shadow-sm p-2 mb-3">
            <AiOutlineSearch className="text-blue-500 w-6 h-6 ml-2 mr-3" />
            <input
              type="text"
              placeholder="Enter your property address"
              className="flex-1 bg-transparent focus:outline-none text-gray-700 text-base"
            />
            <Link to="/sell/home_worth/find_value">
            <button className="ml-4 bg-gradient-to-b from-[#2B6CB0] to-[#1B4FA0] text-white px-7 py-2 rounded-md shadow-md font-medium text-lg">Find Value</button></Link>
          </div>
          <div className="flex items-center justify-center text-xs text-gray-500 mt-2">
            <BsCalendar2Check className="mr-1 text-gray-400" />
            <span>Schedule a free <a href="#" className="text-[#ff6061] underline">consultation call</a></span>
            <span className="mx-1">or contact a specialist at <span className="font-semibold text-black">(844) 448-0110</span> (9am to 6pm CDT, Mon-Sat)</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeWorth
