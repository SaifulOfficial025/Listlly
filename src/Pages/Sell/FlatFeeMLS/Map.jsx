import React from "react";
import MapSell from "../../../../public/newaddress.png";
import { Link } from "react-router-dom";

function Map() {
  return (
    <div className="w-full bg-white px-4 sm:px-6 py-8 sm:py-10 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] mb-4">
        Flat Fee <span className="text-[#EB4E3D]">MLS & For Sale</span> By{" "}
        <br />
        Owner Packages
      </h2>
      <p className="text-sm text-gray-600 mb-6 flex justify-center items-center gap-1">
        Save big like thousands of sellers—
        <Link to="/dashboard/selling_properties">
          <p className="text-blue-600 underline">
            click your state to get started!
          </p>
        </Link>
      </p>
      <div className="relative max-w-7xl mx-auto px-4">
        <img src={MapSell} alt="US Map" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Map;
