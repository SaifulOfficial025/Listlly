import React from "react";

function CommissionSavings() {
  const stats = [
    { icon: "🏠", value: "18,000+", label: "Home Listed" },
    { icon: "📅", value: "20,000+", label: "Showings" },
    { icon: "📄", value: "9,500+", label: "Offer Received" },
    { icon: "🏡", value: "2.4 million", label: "Home for Sale" },
  ];

  const metros = [
    { city: "Los Angeles", price: "$1,050,000", savings: "$45,200" },
    { city: "San Fernando Valley", price: "$920,000", savings: "$39,600" },
    { city: "Ventura County", price: "$930,000", savings: "$40,200" },
    { city: "Riverside County", price: "$650,000", savings: "$28,000" },
    { city: "Orange County", price: "$1,200,000", savings: "$50,000" },
    { city: "Inland Empire", price: "$700,000", savings: "$30,000" },
    { city: "San Diego", price: "$970,000", savings: "$41,800" },
    { city: "San Francisco Bay Area", price: "$1,400,000", savings: "$58,800" },
    { city: "Santa Clarita", price: "$850,000", savings: "$36,500" },
    { city: "Sacramento", price: "$600,000", savings: "$25,200" },
  ];
  return (
    <div className="w-full bg-white py-8 sm:py-10 text-center">
      {/* Metros Section */}
      <div className="max-w-[1600px] justify-center mx-auto px-4 mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C]  mb-6 text-center">
          <span className="text-[#d03c0b]">Top 10 California Metros </span>
          <span className="">
            Where Sellers <br /> Save the Most with Listlly
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4">
          {/* Left image */}
          <div className="flex justify-center">
            <img
              src="/top10metros.png"
              alt="Top 10 metros"
              className="w-full max-w-md rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right side - table layout */}
          <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full">
              <tbody>
                {metros.map((m, i) => (
                  <tr
                    key={i}
                    className={`${i % 2 === 0 ? "bg-blue-50" : "bg-white"}`}
                  >
                    <td className="px-6 py-4">
                      <a className="text-[#0b5aa5] font-bold text-left block cursor-pointer hover:underline">
                        {m.city}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-semibold text-right">
                      {m.price}
                    </td>
                    <td className="px-6 py-4 text-green-600  font-bold text-right">
                      {m.savings}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommissionSavings;
