import React, { useState } from 'react'
import { useNavigate, Outlet, useOutlet } from 'react-router-dom'

const cardsData = [
  {
    id: 1,
    img: '/property.jpg',
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    specs: '4 beds · 3 baths · 2,200 sq ft',
    badge: '5 Offer Submitted'
  },
  {
    id: 2,
    img: '/property.jpg',
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    specs: '4 beds · 3 baths · 2,200 sq ft',
    badge: '5 Offer Submitted'
  },
  {
    id: 3,
    img: '/property.jpg',
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    specs: '4 beds · 3 baths · 2,200 sq ft',
    badge: '5 Offer Submitted'
  },
]

function RootPage() {
  const navigate = useNavigate()
  const [activeCard, setActiveCard] = useState(0)
  const [query, setQuery] = useState('')

  const outlet = useOutlet()
  function prevCard() {
    setActiveCard(v => Math.max(0, v - 1))
  }

  function nextCard() {
    setActiveCard(v => Math.min(cardsData.length - 1, v + 1))
  }

  const visible = cardsData.filter(c => c.title.toLowerCase().includes(query.toLowerCase()))
  if (outlet) {
    return <div className="mt-6">{outlet}</div>
  }

  return (
    <div className="mt-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-black">Your Listed Property</h2>
            <p className="text-sm text-gray-500">Property details according to your Info</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search" className="border rounded px-3 py-2 w-full sm:w-48 text-sm bg-white" />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 px-2 text-gray-500">🔍</button>
            </div>
            <div>
              <button className="px-3 py-2 border rounded text-sm bg-white text-black">Sort By ▾</button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p, idx) => (
              <div key={p.id} className={`bg-white rounded-lg shadow p-4 text-black transform transition-transform duration-200 ${idx === activeCard ? 'scale-105 lg:scale-110' : 'opacity-95'}`}>
                <div className="relative">
                  <img src={p.img} alt={p.title} className="w-full h-40 sm:h-44 object-cover rounded-md" />
                  <div className="absolute top-3 left-3 bg-pink-400 text-white text-xs px-2 py-1 rounded-full font-semibold">{p.badge}</div>
                </div>

                <div className="mt-3">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-blue-600 mt-1">{p.price}</div>
                  <div className="text-xs text-gray-500 mt-2">{p.specs}</div>
                </div>

                <div className="mt-4">
                  <button onClick={() => navigate('/dashboard/submitted_offer/offer_summary')} className="w-full bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white py-2 rounded-md">View Details</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-black">
            <button onClick={prevCard} className="px-4 py-2 bg-white border rounded-md shadow"><span>&lt;</span></button>
            <div className="text-sm text-gray-600">Showing {activeCard + 1} of {cardsData.length}</div>
            <button onClick={nextCard} className="px-4 py-2 bg-white border rounded-md shadow"><span>&gt;</span></button>
          </div>
        </div>
      </div>
    )
}

export default RootPage
