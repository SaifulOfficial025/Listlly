import React, { useState } from "react";

function LosAngeles() {
  const allProperties = [
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      address: "123 Oak Street, Irvine, CA 92602",
      savings: "$8,010",
    },
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      address: "456 Maple Avenue, Irvine, CA 92603",
      savings: "$7,500",
    },
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      address: "789 Pine Road, Irvine, CA 92604",
      savings: "$9,200",
    },
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      address: "101 Elm Street, Irvine, CA 92605",
      savings: "$8,800",
    },
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      address: "202 Cedar Lane, Irvine, CA 92606",
      savings: "$7,900",
    },
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      address: "303 Birch Drive, Irvine, CA 92607",
      savings: "$8,300",
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
    <div className="w-full bg-white px-4 py-10 text-center">
      {/* Header Section */}
      <h2 className="text-[28px] font-bold text-[#1C1C1C] mb-4">
        Los Anglos <span className="text-[#EB4E3D]">Listlly</span>
      </h2>
      <div className="flex items-center justify-center mb-6">
        <span className="text-yellow-500 text-xl">★ ★ ★ ★ ★</span>
        <span className="text-sm text-gray-500 ml-2">4.9 (11,259 reviews)</span>
      </div>

      {/* Properties Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentProperties.map((property, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={property.image}
              alt="Property"
              className="w-full h-[200px] object-cover rounded-md mb-4"
            />
            <p className="text-[#1C1C1C] font-bold mb-2">{property.address}</p>
            <p className="text-blue-600 font-bold">Saved {property.savings}</p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="p-2 bg-[#f8d6d6] font-bold rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300 disabled:opacity-50 text-red-500"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="p-2 bg-[#f8d6d6] font-bold rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300 ml-4 disabled:opacity-50 text-red-500"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default LosAngeles;
