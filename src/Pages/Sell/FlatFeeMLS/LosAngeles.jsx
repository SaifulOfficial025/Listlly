import React, { useState } from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { PropertyCard } from "../../Home/FeaturedProperty";

function LosAngeles() {
  const allProperties = [
    {
      image:
        "https://cdn.confident-group.com/wp-content/uploads/2024/12/27103036/types-of-real-estate-overview-1024x683.jpg", // Replace with actual image URL
      address: "123 Oak Street, Irvine, CA 92602",
      savings: "$8,010",
      beds: "3",
      baths: "2",
      area: "1,200 sq ft",
    },
    {
      image:
        "https://cdn.confident-group.com/wp-content/uploads/2024/12/27103036/types-of-real-estate-overview-1024x683.jpg", // Replace with actual image URL
      address: "456 Maple Avenue, Irvine, CA 92603",
      savings: "$7,500",
      beds: "4",
      baths: "2",
      area: "1,500 sq ft",
    },
    {
      image:
        "https://cdn.confident-group.com/wp-content/uploads/2024/12/27103036/types-of-real-estate-overview-1024x683.jpg", // Replace with actual image URL
      address: "789 Pine Road, Irvine, CA 92604",
      savings: "$9,200",
      beds: "3",
      baths: "2",
      area: "1,300 sq ft",
    },
    {
      image:
        "https://cdn.confident-group.com/wp-content/uploads/2024/12/27103036/types-of-real-estate-overview-1024x683.jpg", // Replace with actual image URL
      address: "101 Elm Street, Irvine, CA 92605",
      savings: "$8,800",
      beds: "3",
      baths: "2",
      area: "1,400 sq ft",
    },
    {
      image:
        "https://cdn.confident-group.com/wp-content/uploads/2024/12/27103036/types-of-real-estate-overview-1024x683.jpg", // Replace with actual image URL
      address: "202 Cedar Lane, Irvine, CA 92606",
      savings: "$7,900",
      beds: "4",
      baths: "2",
      area: "1,600 sq ft",
    },
    {
      image:
        "https://cdn.confident-group.com/wp-content/uploads/2024/12/27103036/types-of-real-estate-overview-1024x683.jpg", // Replace with actual image URL
      address: "303 Birch Drive, Irvine, CA 92607",
      savings: "$8,300",
      beds: "3",
      baths: "2",
      area: "1,300 sq ft",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(allProperties.length / itemsPerPage);
  const currentProperties = allProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-full bg-white px-4 sm:px-6 py-8 sm:py-10 text-center max-w-7xl mx-auto">
      {/* Header Section */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] mb-4">
        Los Anglos
      </h2>

      {/* Properties Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProperties.map((property, index) => (
          <PropertyCard
            key={index}
            title={property.address}
            price={property.savings}
            beds={property.beds || "N/A"}
            baths={property.baths || "N/A"}
            area={property.area || "N/A"}
            images={[property.image]}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="p-2  font-bold rounded-full  hover:bg-gray-300 transition-colors duration-300 disabled:opacity-50 text-[#0b5aa5]"
        >
          <IoArrowBackCircleOutline className="text-[#0b5aa5] text-4xl" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="p-2  font-bold rounded-full  hover:bg-gray-300 transition-colors duration-300 ml-4 disabled:opacity-50 text-[#0b5aa5]"
        >
          <IoArrowForwardCircleOutline className="text-[#0b5aa5] text-4xl" />
        </button>
      </div>
    </div>
  );
}

export default LosAngeles;
