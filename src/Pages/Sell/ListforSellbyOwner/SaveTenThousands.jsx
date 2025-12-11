import React from "react";
import bg from "../../../../public/savetenthousands.png";
import { Link } from "react-router-dom";

function SaveTenThousands() {
  return (
    <section
      className="relative w-full min-h-screen sm:min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 " />
      <div className="relative z-10 w-full flex flex-col items-center justify-center -mt-32">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 mt-12">
          Save Tens of Thousands — Choose Listlly
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
          <Link to="/dashboard/selling_properties">
            <button className="bg-white text-[#1769c2] font-semibold px-6 py-3 rounded-lg shadow-md text-base flex items-center gap-2">
              Start Your Listing for Free <span className="text-lg">&gt;</span>
            </button>
          </Link>
          <Link to="">
            <button className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg shadow-md text-base flex items-center gap-2">
              Talk to our FSBO Expert
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SaveTenThousands;
