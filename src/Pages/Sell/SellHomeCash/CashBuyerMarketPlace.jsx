import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function CashBuyerMarketPlace() {
  const videoId = 'dQw4w9WgXcQ' // dummy youtube video id

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full h-56 sm:h-72">
          <iframe
            title="Intro Video"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&controls=1`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-semibold text-gray-800 text-center">Why Should You List on a <span className="text-[#ff6061]">Cash Buyer Marketplace?</span></h3>
          <p className="text-center text-gray-500 mt-3 max-w-3xl mx-auto">You get multiple cash offers and quick closing timelines— all from verified local and national cash home buyers.</p>

          <div className="mt-6 bg-[#F3F8FF] rounded-lg p-4 shadow-inner">
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-md p-3 shadow-md">
              <AiOutlineSearch className="text-blue-500 w-5 h-5 mr-3" />
              <input type="text" placeholder="Enter your property address" className="flex-1 focus:outline-none bg-white text-black py-2" />
              <button className="mt-3 sm:mt-0 sm:ml-4 bg-gradient-to-b from-[#2B6CB0] to-[#1B4FA0] text-white px-5 py-2 rounded-md shadow-md">Get Cash Offer</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CashBuyerMarketPlace
