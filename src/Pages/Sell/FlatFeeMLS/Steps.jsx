import React from "react";

function Steps() {
  const steps = [
    {
      id: 1,
      title: "Sign Up and Select Your MLS Listing Plan",
      description:
        "Create an account on Houzeo and select a Flat Fee MLS listing plan that best suits your needs. Whether you want a simple DIY option or a full-service package with additional support, Houzeo has a transparent pricing structure with no hidden fees.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Enter Your Property Details and Customize Your Listing",
      description:
        "Add your property details, including the number of bedrooms, bathrooms, square footage, and other features. Houzeo's AI tool will then generate a compelling property description, using adjectives like \"ranch-style,\" \"charming,\" and \"energy-efficient\" to help your home stand out.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      id: 3,
      title: "Upload Photos, Review, and List",
      description:
        "Upload high-quality photos to enhance your listing, then review your listing details and agreement. Once everything is confirmed, your property will be live on the MLS within 48 hours.",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
  ];

  return (
    <div className="w-full bg-white px-2 py-10 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] mb-6">
        Steps to{" "}
        <span className="text-[#EB4E3D]">List Your Home</span> on MLS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`p-6 rounded-lg shadow-md ${step.bgColor}`}
          >
            <div className="relative mb-4">
              <div
                className={`absolute -top-12 -left-10 w-14 h-14 rounded-full flex items-center justify-center font-bold  ${step.textColor}  ${step.bgColor} `}
              >
                {step.id} Step
              </div>
            </div>
            <h3
              className={`text-lg font-semibold ${step.textColor} mb-3`}
            >
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps;
