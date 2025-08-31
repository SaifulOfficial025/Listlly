import React, { useState } from "react";
import PlanApplicationModal from "./PlanApplicationModal";

function SelectPlan({ onCancel, onContinue }) {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [showModal, setShowModal] = useState(false);

  const plans = [
    {
      id: "silver",
      name: "Silver",
      price: "$249+",
      description: "Best for DIY sellers",
      commission: "+0.5% at Close",
      savings: "2.5%",
      bgImage: "/silver.svg",
      features: [
        "MLS Listing: 6-Months, 24 Photos",
        "Syndication to Zillow, Trulia, Realtor, Redfin, and more",
        "Unlimited Listing Changes",
        "Unlimited Open Houses",
        "Yard Sign ($49)",
        "Listly IntelliList",
        "Listly Showings",
        "Cancel Anytime",
      ],
      subFeatures: {
        "Listly IntelliList": ["100% Online Listing", "Easy Listing Changes"],
        "Listly Showings": ["Manage Showings Online", "Setup Showing Calendar"],
      },
    },
    {
      id: "gold",
      name: "Gold",
      price: "$299+",
      description: "Best for most sellers",
      commission: "+1% at Close",
      savings: "2% to 5%",
      bgImage: "/gold.svg",
      features: [
        "Maximum Photos",
        "Licensed Broker Assistance",
        "Contract to Close Consulting",
        "Listly Offers",
        "Premium Yard Sign ($49)",
        "Seller Disclosures",
      ],
      subFeatures: {
        "Listly Offers": [
          "Review & Compare Offers",
          "Counter Offer",
          "Request Highest & Best",
        ],
      },
    },
    {
      id: "platinum",
      name: "Platinum",
      price: "$349+",
      description: "Best for first-time sellers",
      commission: "+1.25% at Close",
      savings: "1.75% to 4.75%",
      bgImage: "/platinum.svg",
      features: [
        "Virtual Full-Service with Licensed Broker",
        "Personal Concierge",
        "12-month Listing",
        "Call Forwarding Service",
        "Rush Service (Draft in 12 hours)",
        "Coming Soon",
        "Max Exposure with Additional MLS",
      ],
      subFeatures: {
        "Virtual Full-Service with Licensed Broker": [
          "Offer Negotiations",
          "Inspection Response",
          "Repair Negotiation",
          "Appraisal Review",
          "Closing Doc Review",
        ],
      },
    },
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    setShowModal(true);
  };

  const handleModalContinue = (formData) => {
    setShowModal(false);
    if (onContinue) {
      onContinue({
        selectedPlan,
        planDetails: plans.find((p) => p.id === selectedPlan),
        ...formData,
      });
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-10 text-black">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">
            <span className="text-red-400 mr-1">List</span> Your Property
          </h2>
        </div>
        <div className="text-left mb-8">
          <h2 className="text-2xl font-semibold text-[#2563eb]">Select a Plan</h2>
        </div>

        <div className="bg-white rounded-lg shadow px-8 py-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                📦
              </div>
              <div>
                <div className="text-lg font-semibold">
                  Pick a Flat Fee Plan That Fits Your Budget
                </div>
                <div className="text-sm text-gray-600">
                  You can save $4,375 to $13,750 selling on{" "}
                  <span className="text-blue-600 font-medium">Listly*</span>
                </div>
              </div>
            </div>
            <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-xs bg-pink-100">
              Step 4 of 7
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`border rounded-lg overflow-hidden bg-white shadow-sm border-t-0   ${
                  plan.id === "silver"
                    ? "border-[#c3c3c3] drop-shadow-xl bg-[#f9f9f9]"
                    : plan.id === "gold"
                    ? "border-[#e9c376] drop-shadow-xl bg-[#fff8eb]"
                    : "border-[#fc6a6b] drop-shadow-xl bg-[#fce8e6]"
                }`}
              >
                {/* Header Image - flush left/right */}
                {/* Header Image with overflow and tunable size */}
<div className="relative ">
  {/* Force image to overflow and cover full width */}
  <div className=" md:-mx-4">
    <img
      src={plan.bgImage}
      alt={`${plan.name} header`}
      className="w-full h-[100px] object-cover"
    />
  </div>

  {/* Title overlay */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none -mt-5">
  <h3 className="text-4xl font-bold text-white text-center drop-shadow-md">
    {plan.name}
  </h3>
</div>

</div>




                {/* Plan Content */}
                <div className="p-4 space-y-3">
                  <div className="text-center">
                    <p className="text-sm text-blue-600 mb-1">
                      {plan.description}
                    </p>
                    <div className="text-2xl font-bold mb-1">{plan.price}</div>
                    <p className="text-sm text-gray-600">{plan.commission}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Your est. savings {plan.savings}
                    </p>
                  </div>

                  {/* Buy Button */}
                  <button
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full py-2 rounded font-medium text-white ${
                      plan.id === "silver"
                        ? "bg-gray-500"
                        : plan.id === "gold"
                        ? "bg-yellow-600"
                        : "bg-red-500"
                    }`}
                  >
                    Buy {plan.name}
                  </button>

                  {/* Features List */}
                  <div className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="text-sm">
                        <div className="flex items-start gap-2">
                          {/* colored check-in-circle icon */}
                          {(() => {
                            const accent = plan.id === "silver" ? "text-gray-500" : plan.id === "gold" ? "text-yellow-600" : "text-red-500";
                            return (
                              <span className={`${accent} mt-0.5 flex-shrink-0`}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                  <circle cx="12" cy="12" r="10" fill="currentColor" />
                                  <path d="M9.5 12.5l1.5 1.5 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                            );
                          })()}

                          <div className="flex-1">
                            <span
                              className={
                                feature in (plan.subFeatures || {})
                                  ? "font-medium"
                                  : ""
                              }
                            >
                              {feature}
                            </span>

                            {/* Subfeatures */}
                            {plan.subFeatures && plan.subFeatures[feature] && (
                              <div className="ml-4 mt-1 space-y-1">
                                {plan.subFeatures[feature].map(
                                  (subFeature, subIndex) => (
                                    <div
                                      key={subIndex}
                                      className="text-xs text-gray-600 flex items-center gap-1"
                                    >
                                      <span>•</span>
                                      <span>{subFeature}</span>
                                    </div>
                                  )
                                )}
                              </div>
                            )}

                            {/* Conditional details */}
                            {feature.includes("(") && (
                              <span className="text-xs text-gray-500 ml-1">
                                {feature.includes("$49") && (
                                  <span className="line-through">1</span>
                                )}
                                {feature.includes("12 hours") && <span>4</span>}
                                {feature.includes("Coming Soon") && (
                                  <span>5</span>
                                )}
                                {feature.includes("Additional MLS") && (
                                  <span>6</span>
                                )}
                              </span>
                            )}
                          </div>

                          {feature.includes("Listly") && (
                            <span className="text-xs text-blue-500">▼</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs text-gray-500 space-y-2 mb-6">
            <p>
              Potential savings calculated as 1.75% of your listing price of
              $250,000. Savings can be as high as $13,750 (5.5%) if the buyer
              does not have an agent.
            </p>

            <p>
              On Silver, Gold, and Platinum plans, a minimum commission of $999
              is applicable. If your listing is in New York City, an additional
              0.25% due at closing is applicable.
            </p>

            <p>
              Properties in New York City (Manhattan, Queens, Brooklyn, Staten
              Island, and the Bronx) will be listed on OneKey MLS, REBNY RLS,
              and StreetEasy, in addition to over 100 third-party real estate
              websites including Zillow, Homes, Realtor, Redfin, Trulia and many,
              many more.
            </p>

            <div className="space-y-3 mt-2 text-xs text-gray-500">
              <p>
                1 All Houzeo yard signs are FREE with a selfie. Send us a clear
                selfie that includes you, the yard sign, and the house, and get
                the entire $49 back. Some states or MLS' require the listing
                agent's yard sign, which is available for purchase. Refunds are
                not applicable on listing agent signs.
              </p>

              <p>
                2 The broker's point of contact will help efficiently
                communicate between the broker, buyer agent, and the closing
                agent.
              </p>

              <p>
                3 If the broker receives any calls for your property, they will
                be forwarded to you
              </p>

              <p>
                4 Upon request, a draft will be assigned or the listing
                activated within 12 business hours (Included for Platinum; $99
                otherwise).
              </p>

              <p>
                5 Coming Soon: Only upon request, and where available
                (Included for Platinum; $199 otherwise).
              </p>

              <p>
                6 Additional MLS: Only upon request, and where available
                (Included for Platinum; $199 otherwise).
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => (onCancel ? onCancel() : null)}
              className="px-6 py-2 border rounded text-gray-600 bg-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <PlanApplicationModal
          plan={plans.find((p) => p.id === selectedPlan)}
          onCancel={() => setShowModal(false)}
          onContinue={handleModalContinue}
        />
      )}
    </>
  );
}

export default SelectPlan;
