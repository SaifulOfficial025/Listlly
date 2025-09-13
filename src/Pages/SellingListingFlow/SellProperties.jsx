import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const SellProperties = ({ onCreate }) => {
  const photos = [
    'https://images.unsplash.com/photo-1505691723518-36a0b2b8a9b1?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1560185127-6e3b6f0f1a7b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1560184897-6f3f2b1f8b1a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1200&q=80',
  ]

  const [activeCard, setActiveCard] = useState(0)

  const cards = [
    { id: 1, title: '123 Oak Street, Irvine, CA 92602', price: '$899,000', status: 'Active', img: photos[0] },
    { id: 2, title: '456 Pine Avenue, Irvine, CA 92602', price: '$799,000', status: 'Active', img: photos[2] },
    { id: 3, title: '789 Maple Drive, Irvine, CA 92602', price: '$999,000', status: 'Sold', img: photos[3] },
  ]

  const prevCard = () => setActiveCard((i) => (i - 1 + cards.length) % cards.length)
  const nextCard = () => setActiveCard((i) => (i + 1) % cards.length)

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold">
            <span className="text-[#F97373] mr-2">Selling</span>
            <span className="text-[#111827]">Properties</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">Find your dream home from thousands of listings across Texas.</p>
        </div>

        <div className='text-black w-full sm:w-auto'>
          <Link to="/dashboard/selling_properties/list_property">
            <button onClick={onCreate} className="w-full sm:w-auto inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
              </svg>
              <span className="font-medium">List New Property</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Processing banner */}
       <div className='mt-10'>
            <h2 className="text-lg font-semibold text-black">Your Listed Property <span className='text-red-400'>(Processing)</span></h2>
            <p className="text-sm text-gray-500">Property details according to your Info</p>
          </div>

      <div className="mt-8 bg-[#FFF1F2] border border-[#FEE2E2] rounded-md p-4 flex text-black items-center gap-4">
        <img src={photos[1]} alt="processing" className="w-28 h-20 rounded-md object-cover" />
        <div className="flex-1">
          <div className="text-sm font-semibold">123 Main Street</div>
          <div className="text-xs text-gray-600">White Plains, New York</div>
          <div className="text-xs text-red-500 mt-1">No Plans Purchased</div>
        </div>
        <div className="flex flex-col items-end">
          <div className="bg-white rounded-md px-3 py-2 text-xs flex gap-4 items-center shadow">
            <div className="text-center">
              <div className="text-blue-600 font-semibold">3 Days</div>
              <div className="text-xs text-gray-500">Days on Listly</div>
            </div>
            <div className="text-center">
              <div className="text-red-500 font-semibold">5 Steps</div>
              <div className="text-xs text-gray-500">Task Pending</div>
            </div>
          </div>
          <a href="#" className="text-blue-600 text-sm mt-2">Complete Listing</a>
        </div>
      </div>

      {/* Your Listed Property grid */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-black">Your Listed Property</h2>
            <p className="text-sm text-gray-500">Property details according to your Info</p>
          </div>
          <a href="#" className="text-blue-600">View All</a>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((p, idx) => (
              <div
                key={p.id}
                className={`bg-white rounded-lg shadow p-4 text-black transform transition-transform duration-200 ${idx === activeCard ? 'scale-105 lg:scale-110' : 'opacity-90'}`}>
                <div className="relative">
                  <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded-md" />
                  <div className="absolute top-3 right-3 bg-white/90 text-xs px-2 py-1 rounded-full font-semibold text-[#1f6fe4]">{p.status}</div>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-blue-600 mt-1">{p.price}</div>
                  <div className="text-xs text-gray-500 mt-2">4 beds · 3 baths · 2,200 sq ft</div>
                </div>
                <div className="mt-4">
                  <button className="w-full bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white py-2 rounded-md">View Details</button>
                </div>
              </div>
            ))}
          </div>

          {/* simple card navigation */}
          <div className="mt-6 flex items-center justify-center gap-6 text-black">
            <button onClick={prevCard} className="px-4 py-2 bg-white border rounded-md shadow"><span>&lt;</span></button>
            <div className="text-sm text-gray-600">Showing {activeCard + 1} of {cards.length}</div>
            <button onClick={nextCard} className="px-4 py-2 bg-white border rounded-md shadow"><span>&gt;</span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellProperties

