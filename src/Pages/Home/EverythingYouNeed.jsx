import React from "react";
import everythingcard1 from "../../../public/everythingcard1.png";
import everythingcard2 from "../../../public/everythingcard2.png";
import everythingcard3 from "../../../public/everythingcard3.png";
import everythingcard4 from "../../../public/everythingcard4.png";
import everythingcard6 from "../../../public/everythingcard5.png";
import everythingcard7 from "../../../public/everythingcard6.png";

const cardImages = [
  everythingcard1,
  everythingcard2,
  everythingcard3,
  everythingcard4,
  everythingcard6,
  everythingcard7,
];

const features = [
  {
    title: "Complete Your Listing in Just Minutes",
    description:
      "Our guided listing flow walks you through every step, from entering your property details to setting your price.",
  },
  {
    title: "Professional Photography, Delivered to Your Door",
    description:
      "Easily schedule a professional photographer through Listlly to showcase your home in the best possible light. High-quality. See more",
  },
  {
    title: "The Simplest Way to Complete Seller Disclosures",
    description:
      "We've made paperwork stress-free. Our digital disclosure process is straightforward, compliant, and tailored to the Department of See more.",
  },
  {
    title: "A Dedicated Team by Your Side from Start to Finish",
    description:
      "Selling on your own doesn't mean selling alone. Our experienced listing advisers are by your side throughout the entire process See more",
  },
  {
    title: "Your Home Listed on the MLS Within 24 Hours",
    description:
      "Once your listing is submitted, it's professionally reviewed and published to the MLS within 24 hours. From there, it's See more",
  },
  {
    title: "Huge Savings and No Hidden Fees",
    description:
      "With Listlly, there are no surprises and no 5% commissions. Our flat-fee structure helps homeowners save an average of $20,000 See more",
  },
];

function EverythingYouNeed() {
  return (
    <div className="bg-white w-full px-4 sm:px-6 md:px-8 py-16">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-tight">
          Everything <span className="text-[#d03c0b]">You Need to Sell</span>
          <br />
          Like a Pro Without Paying One.
        </h2>
        <p className="text-[#5A5A5A] mt-5 max-w-[650px] mx-auto text-base md:text-lg">
          Our platform provides all the tools and support you need to
          successfully sell your home without a traditional agent.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col relative"
              style={{
                minHeight: "450px",
                backgroundImage: ` url(${cardImages[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Card content */}
              <div className="relative flex flex-col h-full p-6 pt-8">
                {/* Title at the top */}
                <h3 className="text-white text-xl md:text-2xl font-bold leading-tight mb-4 text-left">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white text-sm md:text-base leading-relaxed opacity-95 mb-6 text-left">
                  {feature.description}
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
