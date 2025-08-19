
import Property from "../../../public/property.jpg"
/** Reusable card with a static image */
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ⬆ keep imports

export function PropertyCard({
  status = "Active",
  title,
  price,
  beds,
  baths,
  area,
  images = [],
}) {
  const isSold = status.toLowerCase() === "sold";
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
  <div className="bg-white rounded-xl shadow-[0_6px_24px_rgba(0,0,0,0.08)] overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg w-full max-w-full">
      {/* Media */}
      <div className="relative">
        <div className="pt-[56.25%]"></div>
        <div className="absolute inset-0">
          <img
            src={images[currentIndex]}
            alt={`${title} - image ${currentIndex + 1}`}
            className="w-full h-full object-cover max-h-60 md:max-h-full"
          />
        </div>

        {/* Status badge */}
        <span
          className={`absolute top-2 right-2 text-[10px] md:text-[11px] font-semibold px-2 md:px-3 py-[4px] md:py-[6px] rounded-full shadow-sm ${
            isSold ? "bg-[#FF6B6B] text-white" : "bg-[#E8F0FF] text-[#0054F6]"
          }`}
        >
          {status}
        </span>

        {/* Arrows */}
        {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
  <button
    onClick={prevImage}
    className="p-1 bg-white/70 hover:bg-white rounded-full shadow-sm"
  >
    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-[#1C1C1C]" />
  </button>
  <button
    onClick={nextImage}
    className="p-1 bg-white/70 hover:bg-white rounded-full shadow-sm"
  >
    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[#1C1C1C]" />
  </button>
</div>
  )}
      </div>

      {/* Body */}
      <div className="px-4 py-3">
        <h3 className="text-[14px] font-semibold text-[#1C1C1C]">{title}</h3>
        <div className="mt-2 text-[14px] font-semibold text-[#0054F6]">{price}</div>
        <div className="mt-2 text-[12px] text-[#5F6B7A]">
          {beds} beds <span className="mx-2">•</span> {baths} baths
          <span className="mx-2">•</span>
          <span>
            <span className="font-semibold text-[#0054F6]">{area}</span> sq ft
          </span>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ red, rest, linkText = "View All" }) {
  return (
    <div className="relative mb-6">
      <h2 className="text-center text-[28px] font-bold text-[#1C1C1C]">
        <span className="text-[#EB4E3D]">{red} </span>
        {rest}
      </h2>
      <a
        href="#"
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[13px] font-semibold text-[#0054F6] hover:underline"
      >
        {linkText}
      </a>
    </div>
  );
}

const featured = [
  {
    status: "Active",
    title: "123 Oak Street, Irvine, CA 92602",
    price: "$899,000",
    beds: 4,
    baths: 3,
    area: "2,200",
    images: [Property, Property, Property], // multiple images for carousel
  },
  {
    status: "Active",
    title: "456 Pine Avenue, Newport Beach, CA 92660",
    price: "$1,200,000",
    beds: 5,
    baths: 4,
    area: "3,100",
    images: [Property, Property, Property],
  },
  {
    status: "Active",
    title: "789 Maple Drive, Anaheim, CA 92805",
    price: "$750,000",
    beds: 3,
    baths: 2,
    area: "1,800",
    images: [Property, Property, Property],
  },
];

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







export default function FeaturedProperty() {
  return (
    <div className="w-full bg-white px-4 py-14">
      <div className="max-w-[1200px] mx-auto">
        {/* Featured */}
        <SectionHeader red="Featured" rest="Properties" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <PropertyCard key={`f-${i}`} {...p} />
          ))}
        </div>

        {/* Spacer */}
        <div className="h-16" />

        {/* Recent Sales */}
        <SectionHeader red="Recent Sales" rest="Properties" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentSales.map((p, i) => (
            <PropertyCard key={`r-${i}`} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
