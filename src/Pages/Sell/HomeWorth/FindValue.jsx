import React from 'react'
import { FaBed, FaBath, FaRulerCombined, FaCar, FaCalendarAlt, FaHome } from 'react-icons/fa'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'
import Header from '../../../Shared/Header'
import Hero from './Hero'
import Footer from '../../../Shared/Footer'
import FAQ from './FAQ'

function FindValue() {
  return (
    <section className="">
        <Header />
        <Hero />
        <div className="max-w-6xl mx-auto mt-8 mb-8 px-2">
      {/* Property Card */}
      <div className="bg-white  rounded-xl shadow-lg overflow-hidden mb-8  ">
        <img src="/property.jpg" alt="property" className="w-full h-64 object-cover" />
        <div className="p-5">
          <div className="flex justify-between items-center mb-1">
            <div>
              <h3 className="font-semibold text-lg text-gray-900">4736 Morella Ave</h3>
              <p className="text-xs text-gray-500">Valley Village, CA 91607</p>
            </div>
            <div className="text-right text-xs text-gray-500">
              <span className="font-semibold text-black">4</span> beds · <span className="font-semibold text-black">3</span> baths · <span className="text-blue-600 font-semibold">2,589</span> sq ft
            </div>
          </div>
          <div className="flex justify-between items-center mt-2 mb-2">
            <div className="flex flex-wrap gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1"><FaCar className="inline" /> Coop/Use</span>
              <span className="flex items-center gap-1"><FaHome className="inline" /> $80/mo HOA</span>
              <span className="flex items-center gap-1"><FaCalendarAlt className="inline" /> Built in 1950</span>
            </div>
            <div className="text-right">
              <span className="block text-xs text-gray-500">Your home's estimate</span>
              <span className="text-blue-700 font-bold text-lg">$1,752,485</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
            <span className="flex items-center gap-1"><FaRulerCombined className="inline" /> $1,162/sqft</span>
            <span className="flex items-center gap-1"><FaRulerCombined className="inline" /> 9,125 sq ft lot</span>
          </div>
        </div>
      </div>
          <button className="w-full flex items-center justify-center bg-gradient-to-r from-[#2B6CB0] to-[#1B4FA0] text-white font-semibold py-2 rounded-md shadow hover:opacity-90 transition mb-2">
            Start Listing <HiOutlineArrowUpRight className="ml-2 w-5 h-5" />
          </button>
          <div className="text-center text-xs text-gray-500">• Save up to 2.5% in commission • 100% online • More Exposure, more savings</div>
      </div>

      {/* Map Section */}
      <div className="mb-8 px-10 max-w-9xl mx-auto">
        <h4 className="font-semibold text-lg mb-2 text-black">Location</h4>
        <div className="w-full rounded-lg shadow-md overflow-hidden" style={{height:'320px'}}>
          <iframe
            title="Dummy Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.510232747374!2d-79.3839346845046!3d43.65322607912109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6b6b6b6b6%3A0x6b6b6b6b6b6b6b6b!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1630000000000!5m2!1sen!2sca"
            width="100%"
            height="320"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <FAQ />
      <Footer />
    </section>
  )
}

export default FindValue
