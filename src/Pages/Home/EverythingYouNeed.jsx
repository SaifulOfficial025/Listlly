import React from 'react';

// Red check SVG icon as React component
const RedCheck = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="10" fill="#fff6f3"/>
    <path d="M19.5 10.5L12.25 17.5L9 14.5" stroke="#EB4E3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="14" cy="14" r="12" stroke="#EB4E3D" strokeWidth="2"/>
  </svg>
);

const features = [
  {
    title: "Complete Your Listing in Minutes",
    description: "Guided flow walks you step by step — from property details to pricing.",
  },
  {
    title: "Professional Photography",
    description: "Schedule a pro photographer through Listlly to make your home shine.",
  },
  {
    title: "MLS Listing in 24 Hours",
    description: "Get professionally reviewed & live on the MLS within a day.",
  },
  {
    title: "Simple Disclosures",
    description: "Our digital disclosure process is compliant & stress-free.",
  },
  {
    title: "Huge Savings",
    description: "No hidden fees. Flat-rate pricing saves homeowners an average of $20,000.",
  },
  {
    title: "Smart Offer Management",
    description: "Review, counter, or accept offers instantly inside your dashboard.",
  },
];

function EverythingYouNeed() {
  return (
    <div className="bg-white w-full px-4 sm:px-6 md:px-8 ">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C]">
          Everything <span className="text-[#EB4E3D]">You Need to Sell</span> with Confidence
        </h2>
        <p className="text-[#5A5A5A] mt-4 max-w-[600px] mx-auto text-sm md:text-base">
         Listlly gives you all the tools and support to sell your home smoothly — without paying 5% commissions.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-[0_2px_12px_rgba(44,62,80,0.07)] p-6 flex flex-col h-full min-h-[170px] border border-[#f2f2f2] hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            >
              <div className=" items-start">
                <span className="block mr-3 mt-1 mb-3"><RedCheck /></span>
                <div>
                  <h3 className="text-[18px] font-bold text-[#1C1C1C] leading-snug mb-1">{feature.title}</h3>
                  <p className="text-[15px] text-[#3A3A3A] leading-snug opacity-90">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EverythingYouNeed;
