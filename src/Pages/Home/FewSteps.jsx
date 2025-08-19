import React from 'react';
import { FaBoxOpen, FaHome, FaCamera, FaCheckCircle, FaGlobe } from 'react-icons/fa';

const steps = [
  {
    number: 1,
    icon: <FaBoxOpen className="text-[#0054F6] w-5 h-5" />,
    title: 'Choose Your Package',
    description: 'Pick the plan that fits your needs—from basic MLS to full pro support.',
  },
  {
    number: 2,
    icon: <FaHome className="text-[#0054F6] w-5 h-5" />,
    title: 'Enter Property Details',
    description: 'Add address, home features, and pricing in a guided form.',
  },
  {
    number: 3,
    icon: <FaCamera className="text-[#0054F6] w-5 h-5" />,
    title: 'Upload Your Photos',
    description: 'Upload your own or schedule a professional shoot with our partners.',
  },
  {
    number: 4,
    icon: <FaCheckCircle className="text-[#0054F6] w-5 h-5" />,
    title: 'Final Review',
    description: 'Review all listing info and make any last-minute edits.',
  },
  {
    number: 5,
    icon: <FaGlobe className="text-[#0054F6] w-5 h-5" />,
    title: 'Go Live on the MLS',
    description: 'Hit submit and go live within 24 hours. Your home is now visible to millions.',
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

  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-[#e87685] to-[#626acc] text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs mb-4">
                {step.number}
              </div>
              <div className="bg-[#EDF3FF] p-3 rounded-full mb-3">
                {step.icon}
              </div>
              <h3 className="text-sm font-semibold text-[#1C1C1C]">{step.title}</h3>
              <p className="text-xs text-[#3A3A3A] mt-1">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default FewSteps;
