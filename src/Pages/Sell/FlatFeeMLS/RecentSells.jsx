import React from "react";
import Property from "/property.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { PropertyCard } from "../../Home/FeaturedProperty";

const recentSales = [
  {
    status: "Sold",
    title: "321 Cedar Street, Irvine, CA 92602",
    price: "$899,000",
    beds: 4,
    baths: 3,
    area: "2,200",
    images: [Property, Property, Property],
  },
  {
    status: "Sold",
    title: "654 Palm Avenue, Newport Beach, CA 92660",
    price: "$1,100,000",
    beds: 5,
    baths: 4,
    area: "3,000",
    images: [Property, Property, Property],
  },
  {
    status: "Sold",
    title: "987 Birch Drive, Anaheim, CA 92805",
    price: "$780,000",
    beds: 3,
    baths: 2,
    area: "1,900",
    images: [Property, Property, Property],
  },
];

function RecentSells() {
  return (
    <div className="w-full bg-white px-4 sm:px-6 py-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative mb-6 mt-16">
          <h2 className="text-left text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
            <span className="text-[#d03c0b]">Recent Sales</span> Properties
          </h2>
          <a
            href="#"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[13px] font-bold text-[#0b5aa5] underline"
          >
            View All <FaArrowRight className="inline ml-1 -mt-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentSales.map((p, i) => (
            <PropertyCard key={`r-${i}`} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentSells;
