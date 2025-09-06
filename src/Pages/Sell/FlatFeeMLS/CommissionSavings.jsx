import React from "react";

function CommissionSavings() {
  const stats = [
    { icon: "🏠", value: "18,000+", label: "Home Listed" },
    { icon: "📅", value: "20,000+", label: "Showings" },
    { icon: "📄", value: "9,500+", label: "Offer Received" },
    { icon: "🏡", value: "2.4 million", label: "Home for Sale" },
  ];

  const metros = Array(10).fill({ city: "Los Angeles", price: "$1,000,000", savings: "$44,571" });

  return (
    <div className="w-full bg-white  py-10 text-center ">
      {/* Stats Section */}
      <div className="bg-[#e9f3fd] py-10">
      <h2 className="text-[28px] font-bold text-[#1C1C1C] mb-4">
        Home <span className="text-[#EB4E3D]">Sellers Saved Over $215 Million</span> in Commissions!*
      </h2>
      <p className="text-md text-gray-500 mb-6">
        *Compared to a 6% traditional full-service listing.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 mb-10  py-10 px-10">
        {stats.map((stat, index) => (
          <div key={index} className="p-6  rounded-lg shadow-md bg-[#f3f4f4]">
            <div className="text-3xl font-bold text-[#1C1C1C] mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-[#1C1C1C] mb-1">{stat.value}</div>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
      </div>

      {/* Metros Section */}
      <div className="mx-14 px-4 mt-10 border-2 border-gray-200 py-10 rounded-xl">

      <h2 className="text-[28px] font-bold text-[#1C1C1C] mb-6">
        Top 10 Metros <span className="text-[#EB4E3D]">With Maximum Savings</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metros.map((metro, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-100">
            <span className="text-blue-600 underline cursor-pointer">{metro.city}</span>
            <span className="text-[#1C1C1C]">{metro.price}</span>
            <span className="text-green-600 font-bold">{metro.savings}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default CommissionSavings;
