import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Filtering from './Filtering';

const cards = [
  {
    id: 1,
    img: '/property.jpg',
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    status: 'Active',
  },
  {
    id: 2,
    img: '/property.jpg',
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    status: 'Active',
  },
  {
    id: 3,
    img: '/property.jpg',
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    status: 'Sold',
  },
];

const offerCards = [
  {
    id: 1,
    img: '/property.jpg',
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    status: 'Offer Given',
    badge: 'bg-blue-600',
  },
  {
    id: 2,
    img: '/property.jpg',
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    status: 'Counter Offer',
    badge: 'bg-red-500',
  },
  {
    id: 3,
    img: '/property.jpg',
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    status: 'Counter Offer',
    badge: 'bg-red-500',
  },
];

function RootPage() {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(0);
  const [activeOfferCard, setActiveOfferCard] = useState(0);
  const [sliderValue, setSliderValue] = useState(1025000);

  const prevCard = () => setActiveCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  const nextCard = () => setActiveCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));

  const prevOfferCard = () => setActiveOfferCard((prev) => (prev === 0 ? offerCards.length - 1 : prev - 1));
  const nextOfferCard = () => setActiveOfferCard((prev) => (prev === offerCards.length - 1 ? 0 : prev + 1));

  const handleSliderChange = (e) => {
    setSliderValue(Number(e.target.value));
  };

  function formatPrice(val) {
    if (val >= 1000000) {
      return `$${(val / 1000000).toFixed(2)}m`;
    }
    if (val >= 1000) {
      return `$${val.toLocaleString()}`;
    }
    return `$${val}`;
  }

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto pt-10 px-4">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-red-500">Buying</span> <span className="text-black">Properties</span>
        </h1>
        <p className="text-center text-gray-500 mt-2">Find your dream home from thousands of listings across Texas.</p>
      </div>

      <Filtering className="max-w-5xl mx-auto px-4" />

      {/* Price Slider - Updated Design
      <div className="max-w-5xl mx-auto mt-8 px-4">
        <div className="p-6  rounded-lg shadow-md max-w-5xl mx-auto">
          <div className="relative mb-4 mt-20">
            <div
              className="absolute -top-10"
              style={{
                left: `${((sliderValue - 25000) / (2000000 - 25000)) * 100}%`,
                transition: 'left 0.2s',
              }}
            >
              <div className="text-2xl font-bold text-[#00589c] bg-red-50 border-2 border-[#00589c] rounded-xl px-3 py-1 shadow-md mb-1 -ml-14">
                {formatPrice(sliderValue)}
              </div>
              Triangle icon can be replaced with an SVG or a styled div
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#00589c] mx-auto -mt-2 -ml-2"></div>
            </div>
          </div>
          <input
            type="range"
            min="25000"
            max="2000000"
            value={sliderValue}
            onChange={handleSliderChange}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            style={{ accentColor: '#2563EB' }}
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>$25k</span>
            <span>$2m</span>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Adjust the slider to see your budget friendly properties
          </p>
        </div>
      </div> */}

      {/* Suggested Property grid with animated card and pagination */}
      <div className="max-w-5xl mx-auto mt-10 px-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-black"><span className="text-red-500">Suggested</span> Property</h2>
            <p className="text-sm text-gray-500">Property details according to your Info</p>
          </div>
          <button className="text-blue-600 text-sm font-medium">View All</button>
        </div>
 
        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((p, idx) => (
              <div
                key={p.id}
                onClick={() => navigate('/homeforsale/property_details')}
                className={`cursor-pointer bg-white rounded-lg shadow p-4 text-black transform transition-transform duration-200 relative ${idx === activeCard ? 'scale-105 lg:scale-110 z-10' : 'opacity-90'}`}>
                <div className="relative">
                  <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded-md" />
                  <div className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full font-semibold ${p.status === 'Active' ? 'bg-white/90 text-[#1f6fe4]' : 'bg-gray-400 text-white'}`}>{p.status}</div>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-blue-600 mt-1">{p.price}</div>
                  <div className="text-xs text-gray-500 mt-2">4 beds · 3 baths · 2,200 sq ft</div>
                </div>
                <div className="mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/homeforsale/property_details');
                    }}
                    className="w-full bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white py-2 rounded-md">
                    View Details
                  </button>
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

      {/* Counted Offers with animated card and pagination */}
      <div className="max-w-5xl mx-auto mt-10 px-4">
        <h2 className="text-lg font-semibold mb-2"><span className="text-black">Counted</span> <span className="text-black">Offers</span></h2>
        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerCards.map((p, idx) => (
              <div
                key={p.id}
                onClick={() => navigate('/dashboard/buy_properties/details')}
                className={`cursor-pointer bg-white rounded-lg shadow p-4 text-black transform transition-transform duration-200 relative ${idx === activeOfferCard ? 'scale-105 lg:scale-110 z-10' : 'opacity-90'}`}>
                <div className="relative">
                  <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded-md" />
                  <span className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full font-semibold ${p.badge} text-white`}>{p.status}</span>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-blue-600 mt-1">{p.price}</div>
                  <div className="text-xs text-gray-500 mt-2">4 beds · 3 baths · 2,200 sq ft</div>
                </div>
                <div className="mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/dashboard/buy_properties/details');
                    }}
                    className="w-full bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white py-2 rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* simple card navigation */}
          <div className="mt-6 flex items-center justify-center gap-6 text-black">
            <button onClick={prevOfferCard} className="px-4 py-2 bg-white border rounded-md shadow"><span>&lt;</span></button>
            <div className="text-sm text-gray-600">Showing {activeOfferCard + 1} of {offerCards.length}</div>
            <button onClick={nextOfferCard} className="px-4 py-2 bg-white border rounded-md shadow"><span>&gt;</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RootPage;
