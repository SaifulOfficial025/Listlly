import React, { useState } from 'react';

const videoCards = [
  {
    id: 1,
    img: '/property.jpg',
    title: 'How to Counter an Offer',
    duration: '2:00 minutes',
    reviews: '100 reviews',
    badge: 'New',
  },
  {
    id: 2,
    img: '/property.jpg',
    title: 'How to Counter an Offer',
    duration: '2:00 minutes',
    reviews: '100 reviews',
    badge: 'New',
  },
  {
    id: 3,
    img: '/property.jpg',
    title: 'How to Counter an Offer',
    duration: '2:00 minutes',
    reviews: '100 reviews',
    badge: 'New',
  },
];

function RootPage() {
  const [activeCard, setActiveCard] = useState(0);

  function prevCard() {
    setActiveCard((v) => Math.max(0, v - 1));
  }

  function nextCard() {
    setActiveCard((v) => Math.min(videoCards.length - 1, v + 1));
  }

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto pt-10 px-4">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-red-500">How To</span> <span className="text-black">Videos</span>
        </h1>
        <p className="text-center text-gray-500 mt-2">Complete your process through our guiding videos</p>
      </div>

      {/* Video grid */}
      <div className="max-w-5xl mx-auto mt-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoCards.map((v, idx) => (
            <div
              key={v.id}
              className={`cursor-pointer bg-white rounded-lg shadow p-4 text-black transform transition-transform duration-200 relative ${idx === activeCard ? 'scale-105 lg:scale-110' : 'opacity-95'}`}>
              <div className="relative">
                <img src={v.img} alt={v.title} className="w-full h-40 object-cover rounded-md" />
                <div className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full font-semibold bg-blue-600 text-white">{v.badge}</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">
                    ▶
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <div className="font-semibold text-sm">{v.title}</div>
                <div className="text-xs text-gray-500 mt-2">{v.duration} · {v.reviews}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-center gap-6 text-black">
          <button onClick={prevCard} className="px-4 py-2 bg-white border rounded-md shadow">
            <span>&lt;</span>
          </button>
          <div className="text-sm text-gray-600">Showing {activeCard + 1} of {videoCards.length}</div>
          <button onClick={nextCard} className="px-4 py-2 bg-white border rounded-md shadow">
            <span>&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RootPage;
