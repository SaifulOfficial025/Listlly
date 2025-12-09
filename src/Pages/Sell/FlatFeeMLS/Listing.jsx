import React from "react";
import flatHero from "../../../../public/flatfeeherobg.png";
import { FaCheck } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { PiSealCheckFill } from "react-icons/pi";
import AddressForm from "../../../../src/Components/AddressForm/AddressForm";

function Listing() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${flatHero})` }}
    >
      <div className="absolute inset-0" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content - large hero text */}
          <div className="lg:col-span-7 text-white mt-5">
            <div className="inline-block bg-white/10 text-sm text-white px-3 py-1 rounded-lg mb-6">
              FLAT FEE MLS
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-loose max-w-[780px]">
              List Your Home on the MLS for{" "}
              <span className="text-[#EB4E3D]">Only $199</span> Save Thousands
              in
              <br /> Commission Fees.
            </h1>

            <p className="mt-4 text-white/90 max-w-[700px] text-lg">
              Reach millions of buyers across the MLS and top real estate sites.
              Your property gets maximum exposure, you stay in control, save
              commissions with full professional support.
            </p>

            {/* Search input group (extracted) */}
            <div className="mt-8 max-w-[760px] w-full">
              <AddressForm />

              <p className="mt-3 text-base sm:text-lg text-white/80 flex items-center gap-2">
                <FaPhoneVolume /> Schedule a free consultation call or contact a
                specialist at (844) 448-0110 (9am to 6pm CDT, Mon-Sat)
              </p>
            </div>
          </div>

          {/* Right content - card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-2xl p-6 md:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
              <h3 className="text-xl font-semibold text-[#1C1C1C]">
                Why Choose <span className="text-[#EB4E3D]">Listlly</span>
              </h3>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <PiSealCheckFill className="text-[#2db265] mt-1" /> Featured
                  on MLS & Major Real Estate Sites
                </li>
                <li className="flex items-start gap-3">
                  <PiSealCheckFill className="text-[#2db265] mt-1" />{" "}
                  Transparent pricing — no hidden fees
                </li>
                <li className="flex items-start gap-3">
                  <PiSealCheckFill className="text-[#2db265] mt-1" /> Instant
                  virtual, phone, or online support
                </li>
                <li className="flex items-start gap-3">
                  <PiSealCheckFill className="text-[#2db265] mt-1" /> Simple,
                  user-friendly experience
                </li>
                <li className="flex items-start gap-3">
                  <PiSealCheckFill className="text-[#2db265] mt-1" /> Save
                  thousands in commissions
                </li>
                <li className="flex items-start gap-3">
                  <PiSealCheckFill className="text-[#2db265] mt-1" /> Online
                  showings & offers dashboard
                </li>
                <li className="flex items-start gap-3">
                  <PiSealCheckFill className="text-[#2db265] mt-1" /> No
                  cancellation fees
                </li>
                <li className="flex items-start gap-3">
                  <PiSealCheckFill className="text-[#2db265] mt-1" /> Free
                  listing edits anytime
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
