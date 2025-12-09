import React from "react";

function Steps() {
  const steps = [
    {
      id: 1,
      title: "Sign Up and Select Your MLS Listing Plan",
      description:
        "Create an account on Listlly and select a Flat Fee MLS plan that fits your needs. Pick a DIY option or a full-service package with transparent pricing and no hidden fees.",
    },
    {
      id: 2,
      title: "Provide Details and Customize Your Listing",
      description:
        "Enter property details, upload photos, and customize the description. Our system helps craft an engaging listing that highlights your home's best features.",
    },
    {
      id: 3,
      title: "Upload Photos, Review, and List",
      description:
        "Upload high-quality photos, review the listing details, and publish to MLS. Once confirmed, your property typically goes live within 48 hours.",
    },
  ];

  return (
    <div className="w-full bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] mb-6 text-center">
          Steps to <span className="text-[#EB4E3D]">List Your Home</span> on MLS
        </h2> */}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 items-start">
          {/* Left: screenshot/image */}
          <div className="md:col-span-1 flex justify-center">
            <img
              src="/stepstolist.jpg"
              alt="Steps to list"
              className="w-full max-w-[520px]  object-cover"
            />
          </div>

          {/* Right: timeline / cards */}
          <div className="md:col-span-1">
            <div className="space-y-10">
              {steps.map((step, idx) => (
                <div key={step.id} className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="bg-[#F3F9FE] p-6 rounded-xl shadow-sm">
                      <h3 className="text-2xl font-semibold text-[#1C1C1C]">
                        {step.title}
                      </h3>
                      <p className="text-xl text-gray-600 mt-2">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
