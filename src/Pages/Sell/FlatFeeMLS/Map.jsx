import React from "react";
import MapSell from "../../../../public/MapSell.svg"

function Map() {
  return (
    <div className="w-full bg-white px-4 py-10 text-center">
      <h2 className="text-[28px] font-bold text-[#1C1C1C] mb-4">
        Flat Fee <span className="text-[#EB4E3D]">MLS</span> & For Sale By Owner Packages
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Save big like thousands of sellers—
        <a href="#" className="text-blue-600 underline">click your state to get started!</a>
      </p>
      <div className="relative max-w-[800px] mx-auto">
        <img
          src={MapSell}
          alt="US Map"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Map;
