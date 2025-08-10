import React from 'react';
import {
  FaRegClock,
  FaCamera,
  FaFileAlt,
  FaUsers,
  FaClipboardList,
  FaPiggyBank,
  FaHandshake,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaClipboardList className="text-[#0054F6] w-5 h-5" />,
    title: "Complete Your Listing in Just Minutes",
    description: "Our guided listing flow walks you through every step — from entering your property details to setting your price. Just a seamless",
  },
  {
    icon: <FaRegClock className="text-[#0054F6] w-5 h-5" />,
    title: "Your Home Listed on the MLS Within 24 Hours",
    description: "Once your listing is submitted, it’s professionally reviewed and published to the MLS within 24 hours. From there, it’s",
  },
  {
    icon: <FaCamera className="text-[#0054F6] w-5 h-5" />,
    title: "Professional Photography, Delivered to Your Door",
    description: "Easily schedule a professional photographer through Listlly to showcase your home in the best possible light. High-quality",
  },
  {
    icon: <FaPiggyBank className="text-[#0054F6] w-5 h-5" />,
    title: "Huge Savings and No Hidden Fees",
    description: "With Listlly, there are no surprises and no 5% commissions. Our flat-fee structure helps homeowners save an average of $20,000",
  },
  {
    icon: <FaFileAlt className="text-[#0054F6] w-5 h-5" />,
    title: "The Simplest Way to Complete Seller Disclosures",
    description: "We’ve made paperwork stress-free. Our digital disclosure process is straightforward, compliant, and tailored to the Department of",
  },
  {
    icon: <FaHandshake className="text-[#0054F6] w-5 h-5" />,
    title: "Smart Offer Management",
    description: "Get notified instantly when buyers submit offers. Review, counter, or call for best-and-final — all within your dashboard.",
  },
  {
    icon: <FaUsers className="text-[#0054F6] w-5 h-5" />,
    title: "A Dedicated Team by Your Side from Start to Finish",
    description: "Selling on your own doesn’t mean selling alone. Our experienced listing advisors are by your side throughout the entire process",
  },
];

function EverythingYouNeed() {
  return (
    <div className="bg-white w-full px-4 ">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1C1C1C]">
          Everything <span className="text-[#EB4E3D]">You Need to Sell</span> with Confidence
        </h2>
        <p className="text-[#5A5A5A] mt-4 max-w-[600px] mx-auto text-sm">
          Our platform provides all the tools and support you need to successfully sell your home without a traditional agent.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-[#EDF3FF] p-3 rounded-full">{feature.icon}</div>
              <div>
                <h3 className="text-sm font-semibold text-[#1C1C1C]">{feature.title}</h3>
                <p className="text-sm text-[#3A3A3A] mt-1">
                  {feature.description} <span className="text-[#0054F6] cursor-pointer">See more</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EverythingYouNeed;
