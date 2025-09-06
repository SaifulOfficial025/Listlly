import React, { useState } from 'react';

const cardsData = [
  {
    id: 1,
    img: '/property.jpg',
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    specs: '4 beds · 3 baths · 2,200 sq ft',
    badge: 'Saved Property',
  },
  {
    id: 2,
    img: '/property.jpg',
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    specs: '4 beds · 3 baths · 2,200 sq ft',
    badge: 'Saved Property',
  },
  {
    id: 3,
    img: '/property.jpg',
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    specs: '4 beds · 3 baths · 2,200 sq ft',
    badge: 'Saved Property',
  },
];

function RootPage() {
  const [activeCard, setActiveCard] = useState(0);

  function prevCard() {
    setActiveCard((v) => Math.max(0, v - 1));
  }

  function nextCard() {
    setActiveCard((v) => Math.min(cardsData.length - 1, v + 1));
  }

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto pt-10 px-4">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-red-500">Saved</span> <span className="text-black">Properties</span>
        </h1>
        <p className="text-center text-gray-500 mt-2">Find your dream home from thousands of listings across Texas.</p>
      </div>

      {/* Property grid */}
      <div className="max-w-5xl mx-auto mt-10 px-4">
        <div className="flex items-center justify-between">
          <button className="text-red-500 text-sm font-medium">Remove</button>
          <button className="text-blue-600 text-sm font-medium">View All</button>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsData.map((p, idx) => (
              <div
                key={p.id}
                className={`bg-white rounded-lg shadow p-4 text-black transform transition-transform duration-200 ${
                  idx === activeCard ? 'scale-105 lg:scale-110' : 'opacity-95'
                }`}>
                <div className="relative">
                  <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded-md" />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">{p.badge}</div>
                </div>

                <div className="mt-3">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-blue-600 mt-1">{p.price}</div>
                  <div className="text-xs text-gray-500 mt-2">{p.specs}</div>
                </div>

                <div className="mt-4">
                  <button className="w-full bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white py-2 rounded-md">View Details</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-black">
            <button onClick={prevCard} className="px-4 py-2 bg-white border rounded-md shadow">
              <span>&lt;</span>
            </button>
            <div className="text-sm text-gray-600">Showing {activeCard + 1} of {cardsData.length}</div>
            <button onClick={nextCard} className="px-4 py-2 bg-white border rounded-md shadow">
              <span>&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RootPage;
