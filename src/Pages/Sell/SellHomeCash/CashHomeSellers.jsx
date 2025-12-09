import React from "react";
import { FiEye } from "react-icons/fi";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { PropertyCard } from "../../Home/FeaturedProperty";

function CashHomeSellers() {
  const items = [
    {
      id: 1,
      image: "/property.jpg",
      address: "123 Oak Street, Irvine, CA 92602",
      price: "$1M",
      location: "37 Indian Memorial Dr, Yarmouth, MA 02664",
      beds: 4,
      baths: 3,
      sqft: "2,200",
      views: "2.7K",
    },
    {
      id: 2,
      image: "/property.jpg",
      address: "123 Oak Street, Irvine, CA 92602",
      price: "$1M",
      location: "37 Indian Memorial Dr, Yarmouth, MA 02664",
      beds: 4,
      baths: 3,
      sqft: "2,200",
      views: "2.7K",
    },
    {
      id: 3,
      image: "/property.jpg",
      address: "123 Oak Street, Irvine, CA 92602",
      price: "$1M",
      location: "37 Indian Memorial Dr, Yarmouth, MA 02664",
      beds: 4,
      baths: 3,
      sqft: "2,200",
      views: "2.7K",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-left">
        <h2 className="text-3xl font-bold text-gray-800">
          Cash Home Sellers <span className="text-[#d45329]">Listlly</span>
        </h2>
      </div>

      <div className="relative mt-6">
        {/* Cards row using shared PropertyCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <PropertyCard
              key={item.id}
              title={item.address}
              price={item.price}
              beds={item.beds}
              baths={item.baths}
              area={`${item.sqft} sq ft`}
              images={[item.image]}
            />
          ))}
        </div>

        {/* Nav arrows under cards */}
        <div className="flex justify-center mt-6 space-x-3">
          <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
            <HiOutlineChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
            <HiOutlineChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CashHomeSellers;
