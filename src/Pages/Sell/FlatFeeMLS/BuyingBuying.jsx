import React from 'react'

const cards = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    details: '4 beds ・ 3 baths ・ 2,200 sq ft',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80',
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    details: '4 beds ・ 3 baths ・ 2,200 sq ft',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80',
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    details: '4 beds ・ 3 baths ・ 2,200 sq ft',
  },
];

function BuyingBuying() {
  return (
    <div className="bg-[#fafbfc] w-full py-10 px-2 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#222] text-center w-full">
            Buying Before Selling? <span className="text-[#F46B6B]">Find a Home For Sale</span>
          </h2>
          <a href="#" className="text-blue-600 font-medium text-base ml-4 whitespace-nowrap hidden sm:block">View All</a>
        </div>
        <div className="flex justify-end mb-4 sm:hidden">
          <a href="#" className="text-blue-600 font-medium text-base">View All</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition hover:shadow-lg">
              <img src={card.img} alt={card.title} className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-5">
                <div className="font-semibold text-[17px] text-[#222] mb-1">{card.title}</div>
                <div className="text-[#0054F6] font-bold text-[16px] mb-1">{card.price}</div>
                <div className="text-gray-500 text-sm">{card.details}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuyingBuying
