import React from 'react'
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import { FiDollarSign } from 'react-icons/fi'

function ListllyVsTraditional() {
  const leftList = [
    'Hefty commissions',
    'Long closing timelines',
    'Risk of cancellation',
    'Uncertainty with offers',
    'Repairs required',
  ]

  const middleList = [
    'HIGHEST PRICE Offer',
    'FLEXIBLE closing date',
    'VERIFIED buyers',
    'ONE or MULTIPLE offers',
    'NO REPAIRS needed',
  ]

  const rightList = [
    'Low-ball offers',
    'Inflexible closing',
    'Risk of scams',
    'Single low-ball offer',
    'No repairs',
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Listlly vs. Traditional <span className="text-[#ff6061]">Cash Sales</span></h2>
        <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
          Traditional sales last for 65 to 90 days with staging, repairs, and showings. They also add up thousands in agent commissions and closing costs. Moreover, there's no guarantee that the buyer's financing will go through until the deal is closed.
        </p>

        <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
          Listlly's "sell my house for cash" approach allows you to skip all those steps. No repairs, no waiting on financing, no stress over inspections or last-minute cancellations. Just a competitive cash offer and a fast closing. You can move on your terms, hassle-free.
        </p>
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Sell Your House for Cash</h3>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Listlly Cash Offers is redefining how to sell homes for cash! You get top dollar cash offers and flexible closings.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Traditional Agents */}
        <div className="bg-white rounded-xl shadow-sm border border-transparent">
          <div className="border-t-8 border-red-200 rounded-t-xl" />
          <div className="p-6">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <AiOutlineCloseCircle className="text-red-400 w-6 h-6" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mt-4 text-center">Traditional Agents</h4>
            <p className="text-sm text-gray-400 text-center mt-1">The old way of selling</p>

            <ul className="mt-6 space-y-3">
              {leftList.map((it, i) => (
                <li key={i} className="flex items-center bg-red-50 rounded-md px-3 py-2">
                  <AiOutlineCloseCircle className="text-red-300 w-5 h-5 mr-3" />
                  <span className="text-sm text-red-600">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Listlly */}
        <div className="bg-white rounded-xl shadow-sm border border-transparent">
          <div className="border-t-8 border-blue-200 rounded-t-xl" />
          <div className="p-6">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="text-blue-500 font-bold text-xl">L</div>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mt-4 text-center">Listlly</h4>
            <p className="text-sm text-gray-400 text-center mt-1">The smart solution</p>

            <ul className="mt-6 space-y-3">
              {middleList.map((it, i) => (
                <li key={i} className="flex items-center bg-blue-50 rounded-md px-3 py-2">
                  <AiOutlineCheckCircle className="text-blue-300 w-5 h-5 mr-3" />
                  <span className="text-sm text-blue-700 font-medium">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cash Buyers */}
        <div className="bg-white rounded-xl shadow-sm border border-transparent">
          <div className="border-t-8 border-orange-200 rounded-t-xl" />
          <div className="p-6">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                <FiDollarSign className="text-orange-400 w-6 h-6" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mt-4 text-center">Cash Buyers</h4>
            <p className="text-sm text-gray-400 text-center mt-1">Limited options</p>

            <ul className="mt-6 space-y-3">
              {rightList.map((it, i) => (
                <li key={i} className="flex items-center bg-orange-50 rounded-md px-3 py-2">
                  <AiOutlineCloseCircle className="text-orange-300 w-5 h-5 mr-3" />
                  <span className="text-sm text-orange-700">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListllyVsTraditional
