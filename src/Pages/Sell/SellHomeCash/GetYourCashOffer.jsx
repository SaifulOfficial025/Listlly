import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function GetYourCashOffer() {
  return (
    <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Get Your <span className="text-[#ff6061]">Cash Offer</span></h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Enter your property address to receive a detailed cash offer analysis</p>
      </div>

      <div className="mt-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="bg-[#F3F8FF] rounded-lg p-4 flex items-center">
            <div className="flex items-center bg-white rounded-md flex-1 px-4 py-2 shadow-sm">
              <AiOutlineSearch className="text-blue-500 w-6 h-6 mr-3" />
              <input
                type="text"
                placeholder="Enter your property address"
                className="w-full text-gray-600 focus:outline-none bg-transparent"
              />
            </div>

            <button className="ml-4 bg-gradient-to-b from-[#2B6CB0] to-[#1B4FA0] text-white px-6 py-2 rounded-md shadow-md hover:opacity-95">
              Get Cash Offer
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetYourCashOffer
