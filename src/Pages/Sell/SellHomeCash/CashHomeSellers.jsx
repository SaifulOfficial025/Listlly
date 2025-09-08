import React from 'react'
import { FiEye } from 'react-icons/fi'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

function CashHomeSellers() {
  const items = [
    {
      id: 1,
      image: '/property.jpg',
      address: '123 Oak Street, Irvine, CA 92602',
      price: '$1M',
      location: '37 Indian Memorial Dr, Yarmouth, MA 02664',
      beds: 4,
      baths: 3,
      sqft: '2,200',
      views: '2.7K',
    },
    {
      id: 2,
      image: '/property.jpg',
      address: '123 Oak Street, Irvine, CA 92602',
      price: '$1M',
      location: '37 Indian Memorial Dr, Yarmouth, MA 02664',
      beds: 4,
      baths: 3,
      sqft: '2,200',
      views: '2.7K',
    },
    {
      id: 3,
      image: '/property.jpg',
      address: '123 Oak Street, Irvine, CA 92602',
      price: '$1M',
      location: '37 Indian Memorial Dr, Yarmouth, MA 02664',
      beds: 4,
      baths: 3,
      sqft: '2,200',
      views: '2.7K',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Cash Home Sellers <span className="text-[#ff6061]">Listlly</span></h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Our platform connects sellers with verified cash buyers. These buyers provide competitive offers with no hidden fees or surprises. Thousands of homeowners have successfully sold their homes with Listlly.
        </p>
      </div>

      <div className="relative mt-8">
        {/* Cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative">
                <img src={item.image} alt={item.address} className="w-full h-44 object-cover" />
                <span className="absolute top-3 right-3 bg-[#00A82D] text-white text-xs font-semibold px-3 py-1 rounded-full">Sold for Cash</span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.address}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">{item.price}</div>
                  <div className="flex items-center text-sm text-gray-500 space-x-2">
                    <FiEye className="text-blue-400" />
                    <span className="text-blue-400">{item.views}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mt-2">{item.location}</p>

                <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                  <div className="space-x-3">
                    <span className="font-medium text-[#3B82F6]">{item.beds} beds</span>
                    <span className="ml-2">•</span>
                    <span className="ml-2">{item.baths} baths</span>
                    <span className="ml-2">•</span>
                    <span className="ml-2 text-[#3B82F6]">{item.sqft} sq ft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right nav arrows */}
        <div className="absolute right-0 top-0 transform translate-y-12 flex flex-col items-center space-y-3">
          <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
            <HiOutlineChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
            <HiOutlineChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CashHomeSellers
