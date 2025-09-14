import React from 'react';
import { FaBoxOpen, FaHome, FaCamera, FaCheckCircle, FaGlobe } from 'react-icons/fa';

const steps = [
  {
    number: 1,
    titleTop: 'Choose',
    titleBottom: 'Package',
    description: 'Pick the plan that fits your needs.',
  },
  {
    number: 2,
    titleTop: 'Enter',
    titleBottom: 'Details',
    description: 'Add address, features, and pricing.',
  },
  {
    number: 3,
    titleTop: 'Upload',
    titleBottom: 'Photos',
    description: 'Use your own or book a pro shoot.',
  },
  {
    number: 4,
    titleTop: 'Final Review',
    titleBottom: '',
    description: 'Check info & make final edits.',
  },
  {
    number: 5,
    titleTop: 'Go Live!',
    titleBottom: '',
    description: 'Your home is listed on the MLS within 24 hrs.',
  },
];

function FewSteps() {
  return (
    <div className="w-full bg-white mt-10">
      <div className="bg-[#FAFAFA] py-10 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1100px] mx-auto text-center">
    <h2 className="text-xl md:text-2xl font-bold text-[#1C1C1C]">
            <span className="text-[#EB4E3D]">Your Sale, Your Way</span>
            <span className="text-[#1C1C1C]">—In Just a Few Steps”</span>
        </h2>
  <p className="text-xs md:text-sm text-[#5A5A5A] mt-2">
          Our simple process makes it easy to get your home listed and sold.
        </p>

  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {steps.map((step, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(44,62,80,0.07)] border border-[#e3eaf2] flex flex-col items-center text-center px-8 py-8 min-h-[230px] hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
      >
        <div className="text-[32px] font-bold text-[#EB4E3D] leading-none mb-2">{step.number}</div>
        <h3 className="text-[22px] font-bold text-[#1C1C1C] leading-tight mb-1">
          {step.titleTop && <span className="block">{step.titleTop}</span>}
          {step.titleBottom && <span className="block">{step.titleBottom}</span>}
        </h3>
        <p className="text-[17px] text-[#3A3A3A] opacity-90 leading-snug mt-1">
          {step.description}
        </p>
      </div>
    ))}
  </div>

  {/* Red button below steps */}
  <div className="flex justify-center mt-10">
    <button
      className="bg-gradient-to-r from-[#FF2B2B] to-[#EB4E3D] text-white text-[22px] font-semibold rounded-xl px-12 py-3 shadow-md hover:scale-105 transition-transform duration-200 focus:outline-none"
    >
      Get Started Today
    </button>
  </div>
      </div>
      </div>
    </div>
  );
}

export default FewSteps;
