import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaHome, FaFileSignature, FaUserTie, FaHandshake } from "react-icons/fa";

const steps = [
  {
    icon: <FaHome className="text-[#0054F6] w-6 h-6" />,
    title: "Request a Tour",
    desc: "Pick a time, choose in-person or virtual, and get a confirmation instantly.",
  },
  {
    icon: <FaFileSignature className="text-[#0054F6] w-6 h-6" />,
    title: "Submit an Offer",
    desc: "Use our online form to send your offer to the seller directly—fast, secure, and easy.",
  },
  {
    icon: <FaUserTie className="text-[#0054F6] w-6 h-6" />,
    title: "Get Pre-approved",
    desc: "Connect with our lending partners to get pre-approved and strengthen your offer.",
  },
  {
    icon: <FaHandshake className="text-[#0054F6] w-6 h-6" />,
    title: "Connect with Agent",
    desc: "Get expert advice from our team of experienced real estate professionals.",
  },
];

export default function Find() {
  return (
    <div className="bg-[#F5F9FF] w-full px-4 sm:px-6 md:px-8 py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-10">
        
        {/* Left section */}
        <div className="flex-1">
          <h2 className="text-xl md:text-3xl font-bold text-[#1C1C1C] leading-snug">
            <span className="text-[#EB4E3D]">Find the Right Home</span> and
            <br /> Make an Offer Easily
          </h2>
          <p className="text-[#5A5A5A] mt-4 max-w-[500px] text-xs md:text-sm">
            Our streamlined buying process makes finding and purchasing your dream home simple and stress-free.
          </p>
          <button
            className="mt-8 text-white text-xs md:text-sm font-medium px-4 md:px-5 py-2 md:py-3 rounded shadow-sm flex items-center"
            style={{
              background: "linear-gradient(90deg, #0054F6 0%, #0D47C1 100%)",
            }}
          >
            Start Listing <FaArrowUpRightFromSquare className="ml-2" />
          </button>
        </div>

        {/* Right section - steps grid */}
  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] p-4 md:p-6"
            >
              <div className="mb-2 md:mb-4">{step.icon}</div>
              <h3 className="text-[#1C1C1C] text-xs md:text-sm font-semibold">{step.title}</h3>
              <p className="text-[#5A5A5A] text-xs mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
