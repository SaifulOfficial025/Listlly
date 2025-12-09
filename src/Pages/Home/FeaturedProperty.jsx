import Property from "../../../public/property.jpg";
/** Reusable card with a static image */
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaDoorClosed } from "react-icons/fa";
import { LuSquareSquare } from "react-icons/lu";

// ⬆ keep imports

export function PropertyCard({
  status = "Active",
  title,
  price,
  beds,
  baths,
  area,
  images = [],
  zoom = false,
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
    <div
      className={`bg-white rounded-xl shadow-[0_6px_24px_rgba(0,0,0,0.08)] overflow-hidden transform transition-transform duration-500 ease-in-out w-full max-w-full ${
        zoom ? "hover:scale-105 hover:shadow-lg cursor-pointer" : ""
      }`}
    >
      {/* Media */}
      <div className="relative">
        <div className="pt-[56.25%]"></div>
        <div className="absolute inset-0">
          <img
            src={images[currentIndex]}
            alt={`${title} - image ${currentIndex + 1}`}
            className="w-full h-full object-cover max-h-80 md:max-h-full"
          />
        </div>

        {/* Status badge */}
        <span
          className={`absolute top-2 right-2 text-[10px] md:text-[11px] font-semibold px-2 md:px-3 py-[4px] md:py-[6px] rounded-full shadow-sm ${
            isSold ? "bg-[#fff] text-[#d03c0b]" : "bg-[#d03c0b] text-[#fff]"
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
        <h3 className="text-sm lg:text-[14px] font-semibold text-[#1C1C1C]">
          {title}
        </h3>
        <div className="mt-2 text-sm lg:text-[16px] text-[#5F6B7A]">
          <FaBed className="inline mr-1" /> {beds} beds{" "}
          <span className="mx-2">•</span>{" "}
          <FaDoorClosed className="inline mr-1" /> {baths} baths
          <span className="mx-2">•</span>
          <span>
            <LuSquareSquare className="inline mr-1" />
            <span className="font-semibold text-[#0b5aa5]">{area}</span> sq ft
          </span>
        </div>
        <div className="mt-2 text-base lg:text-lg font-bold text-[#0b5aa5]">
          {price}
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ red, rest, linkText = "View All" }) {
  return (
    <div className="relative mb-6">
      <h2 className="text-left text-[28px] font-bold text-[#1C1C1C]">
        <span className="text-[#000]">{red} </span>
        <span className="text-[#d03c0b]">{rest}</span>
      </h2>
      <a
        href="#"
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[13px] font-bold text-[#0b5aa5] underline"
      >
        {linkText} <FaArrowRight className="inline ml-1 -mt-1" />
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
  // Carousel state for featured and recent sales
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [recentIndex, setRecentIndex] = useState(0);

  // Show 3 cards at a time on large screens, 2 on medium, 1 on mobile
  // Show 3 cards at a time, middle card is larger
  const getVisibleCards = (list, index) => {
    const count = 3;
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({ ...list[(index + i) % list.length], _carouselPos: i });
    }
    return arr;
  };

  // Auto-slide effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [featured.length]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRecentIndex((prev) =>
        prev === recentSales.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [recentSales.length]);

  const handlePrev = (type) => {
    if (type === "featured") {
      setFeaturedIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
    } else {
      setRecentIndex((prev) =>
        prev === 0 ? recentSales.length - 1 : prev - 1
      );
    }
  };
  const handleNext = (type) => {
    if (type === "featured") {
      setFeaturedIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
    } else {
      setRecentIndex((prev) =>
        prev === recentSales.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="w-full bg-white px-4 py-14">
      <div className="max-w-[1200px] mx-auto">
        {/* Featured */}
        <SectionHeader red="Featured" rest="Properties" />
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleCards(featured, featuredIndex).map((p, i) => (
              <div
                key={`f-${featuredIndex}-${i}`}
                className={
                  p._carouselPos === 1
                    ? "scale-105 transition-transform duration-500"
                    : "scale-95 transition-transform duration-500"
                }
                style={{ zIndex: p._carouselPos === 1 ? 2 : 1 }}
              >
                <PropertyCard {...p} zoom={p._carouselPos === 1} />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={() => handlePrev("featured")}
              className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md border"
              aria-label="Previous featured property"
            >
              <ChevronLeft className="w-6 h-6 text-[#0054F6]" />
            </button>
            <button
              onClick={() => handleNext("featured")}
              className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md border"
              aria-label="Next featured property"
            >
              <ChevronRight className="w-6 h-6 text-[#0054F6]" />
            </button>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-16" />

        {/* Recent Sales */}
        <SectionHeader red="Recent Sales" rest="Properties" />
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleCards(recentSales, recentIndex).map((p, i) => (
              <div
                key={`r-${recentIndex}-${i}`}
                className={
                  p._carouselPos === 1
                    ? "scale-105 transition-transform duration-500"
                    : "scale-95 transition-transform duration-500"
                }
                style={{ zIndex: p._carouselPos === 1 ? 2 : 1 }}
              >
                <PropertyCard {...p} zoom={p._carouselPos === 1} />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={() => handlePrev("recent")}
              className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md border"
              aria-label="Previous recent sale"
            >
              <ChevronLeft className="w-6 h-6 text-[#0054F6]" />
            </button>
            <button
              onClick={() => handleNext("recent")}
              className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md border"
              aria-label="Next recent sale"
            >
              <ChevronRight className="w-6 h-6 text-[#0054F6]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
