import React from "react";
import { Camera, CheckCircle, Globe } from "lucide-react";
import stepsimg from "../../../public/steps.png";
import { FaBox } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { HiCamera } from "react-icons/hi";

const steps = [
  {
    number: "01",
    icon: FaBox,
    title: "Choose Your Package",
    description:
      "Pick the plan that fits your needs from basic to A to full pro support.",
  },
  {
    number: "02",
    icon: GoHomeFill,
    title: "Enter Property Details",
    description: "Add address, home features, and pricing in a guided form.",
  },
  {
    number: "03",
    icon: HiCamera,
    title: "Upload Your Photos",
    description:
      "Upload your own or schedule a professional shoot with our partners.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Final Review",
    description: "Review all listing info and make any last-minute edits.",
  },
  {
    number: "05",
    icon: Globe,
    title: "Go Live on the MLS",
    description:
      "Hit submit and go live within 24 hours. Your home is now visible to millions.",
  },
];

function FewSteps() {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-1">
            Sell Your Home in
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-2">
            <span className="text-[#d03c0b]">5 Easy Steps </span>
            <span className="text-black">Zero Stress</span>
          </h3>
          <p className="text-gray-600 text-sm">
            Our simple process makes it easy to get your home listed and sold.
          </p>
        </div>

        {/* Main Content - Image and Steps */}
        <div className="flex flex-col lg:flex-row gap-6 items-start ">
          {/* Left Side - Image */}
          <div className="w-full lg:w-5/12 ">
            <div className="rounded-2xl overflow-hidden ">
              <img
                src={stepsimg}
                alt="Beautiful house"
                className="hidden sm:block w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="w-full lg:w-7/12 space-y-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="flex gap-3 items-start rounded-xl p-4 -mt-3 hover:bg-[#dfe7ed] transition duration-300"
                >
                  {/* Icon Box */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#e7eff6] flex items-center justify-center mt-2">
                    <IconComponent className="w-5 h-5 text-[#0b5aa5] " />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h4 className="text-base font-semibold text-black mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FewSteps;
