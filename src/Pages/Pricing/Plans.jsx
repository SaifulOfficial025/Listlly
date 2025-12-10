import React from "react";
import {
  PiCheckCircleFill,
  PiCheckCircle,
  PiStarFourFill,
} from "react-icons/pi";

function Bullet({ planId }) {
  const base = "w-5 h-5 flex-none mt-0.5";
  if (planId === "gold") {
    return <PiCheckCircleFill className={`${base} text-yellow-500`} />;
  }
  // silver and platinum use outline check
  const clr = planId === "platinum" ? "text-slate-400" : "text-gray-400";
  return <PiCheckCircle className={`${base} ${clr}`} />;
}

function FeatureItem({ feature, planId, level = 0 }) {
  const indent = level * 14;
  return (
    <div style={{ marginLeft: indent }}>
      <div className="flex items-start gap-3">
        {level === 0 ? (
          <Bullet planId={planId} />
        ) : (
          <span className="w-2 h-2 mt-2 ml-10 rounded-full bg-gray-400 flex-none" />
        )}
        <div className="text-sm text-gray-700">{feature.label}</div>
      </div>
      {feature.children && (
        <div className="mt-2 space-y-2">
          {feature.children.map((c, i) => (
            <FeatureItem
              key={i}
              feature={c}
              planId={planId}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const plans = [
  {
    id: "silver",
    name: "Silver",
    price: "$199",
    description: "Best for DIY sellers",
    commission: "+0.5% at Close",
    savings: "2.5%",
    bgImage: "/silver.svg",
    features: [
      { label: "MLS Listing: 6-Months, 24 Photos" },
      { label: "Syndication to Zillow, Trulia, Realtor, Redfin, and more" },
      { label: "Unlimited Listing Changes" },
      { label: "Unlimited Open Houses" },
      { label: "Yard Sign ($49)" },
      {
        label: "Listly IntelliList",
        children: [
          { label: "100% Online Listing" },
          { label: "Easy Listing Changes" },
        ],
      },
      {
        label: "Listly Showings",
        children: [
          { label: "Manage Showings Online" },
          { label: "Setup Showing Calendar" },
        ],
      },
      { label: "Cancel Anytime" },
    ],
  },
  {
    id: "gold",
    name: "Gold",
    price: "$249+",
    description: "Best for DIY sellers",
    commission: "+1% at Close",
    savings: "2% to 5%",
    bgImage: "/gold.svg",
    features: [
      { label: "Maximum Photos" },
      { label: "Licensed Broker Assistance" },
      { label: "Contract to Close Consulting" },
      {
        label: "Listly Offers",
        children: [
          { label: "Review & Compare Offers" },
          { label: "Counter Offer" },
          { label: "Request Highest & Best" },
        ],
      },
      { label: "Premium Yard Sign ($49)" },
      { label: "Seller Disclosures" },
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "$349+",
    description: "Best for DIY sellers",
    commission: "+1.25% at Close",
    savings: "1.75% to 4.75%",
    bgImage: "/platinum.svg",
    features: [
      {
        label: "Virtual Full-Service with Licensed Broker",
        children: [
          { label: "Offer Negotiations" },
          { label: "Inspection Response" },
          { label: "Repair Negotiation" },
          { label: "Appraisal Review" },
          { label: "Closing Doc Review" },
        ],
      },
      { label: "Personal Concierge" },
      { label: "12-month Listing" },
      { label: "Call Forwarding Service" },
      { label: "Rush Service (Draft in 12 hours)" },
      { label: "Coming Soon" },
      { label: "Max Exposure with Additional MLS" },
    ],
  },
];

export default function Plans() {
  return (
    <div className="w-full bg-white px-4 sm:px-6 py-8 sm:py-10 text-black">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-8">
          Pick a <span className="text-[#EB4E3D]">Flat Fee Plan</span> <br />{" "}
          That Fits Your Budget
        </h2>
        <h2 className="text-center text-lg sm:text-md text-[#1C1C1C] mb-8">
          Experience smart, affordable pricing tailored for growth. Select a
          flat-fee <br /> plan that balances cost efficiency with premium
          performance.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className="relative flex justify-center">
              <div className="rounded-2xl border-4 border-gray-400 overflow-hidden shadow-sm w-full max-w-[380px] min-h-[720px] bg-white">
                {/* header area uses provided background images */}
                {(() => {
                  const bg =
                    plan.id === "gold"
                      ? "/goldcard.png"
                      : plan.id === "platinum"
                      ? "/platimuncard.png"
                      : "/silvercard.png";
                  return (
                    <div
                      className={`h-[350px] flex items-center justify-center border-b border-gray-100`}
                      style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="text-center">
                        <div className="text-lg font-semibold text-[#0b5aa5] mb-2 -mt-20">
                          {plan.description}
                        </div>
                        <div className="text-5xl font-bold text-black">
                          {plan.price}
                        </div>
                        <div className="text-lg text-[#0b5aa5] mt-3">
                          {plan.commission}
                        </div>
                        <div className="flex justify-center -mt-8"></div>
                        <div className="absolute left-1/2 top-[300px] -translate-x-1/2 text-sm text-gray-600 text-center">
                          Your est. savings{" "}
                          <span className="font-bold">{plan.savings}</span>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  );
                })()}

                <div className="p-6 bg-white flex flex-col justify-between h-[calc(100%-10rem)]">
                  <div>
                    <div className="mt-6">
                      <div className="text-sm font-semibold mb-3">
                        Includes features
                      </div>
                      <div className="space-y-3 text-sm text-gray-700 max-h-[400px] overflow-auto pr-2">
                        {plan.features.map((feature, idx) => (
                          <FeatureItem
                            key={idx}
                            feature={feature}
                            planId={plan.id}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gradient-to-b from-[#f3f9fe] to-[#deeefd] border border-blue-200 rounded-2xl p-8 text-gray-700">
          <h3 className="text-lg md:text-xl font-semibold text-black mb-6">
            On Silver, Gold, and Platinum plans, <br /> a minimum commission of
            $999 is applicable.
          </h3>

          <div className="space-y-5">
            <div className="flex gap-4">
              <PiStarFourFill className="w-4 h-4 text-[#0b5aa5] flex-none mt-1" />
              <div>
                <div className="font-bold text-black">
                  Free Yard Sign Rebate
                </div>
                <div className="text-md text-gray-700 mt-1">
                  When you order your yard sign and snap a quick selfie with it
                  in front of your home, we'll give you your $49 right back —
                  our thanks for proudly showing off your listing.
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <PiStarFourFill className="w-4 h-4 text-[#0b5aa5] flex-none mt-1" />
              <div>
                <div className="font-bold text-black">
                  A Real Person Helps You
                </div>
                <div className="text-md text-gray-700 mt-1">
                  You'll have a dedicated professional by your side — a
                  transaction and selling expert who keeps communication clear
                  from listing to closing.
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <PiStarFourFill className="w-4 h-4 text-[#0b5aa5] flex-none mt-1" />
              <div>
                <div className="font-bold text-black">
                  Every Call Comes Straight to You
                </div>
                <div className="text-md text-gray-700 mt-1">
                  If someone wants to learn more about your property, calls go
                  directly to you so you stay fully in charge of showings,
                  conversations, and offers.
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <PiStarFourFill className="w-4 h-4 text-[#0b5aa5] flex-none mt-1" />
              <div>
                <div className="font-bold text-black">
                  We Get Your Listing Live Fast
                </div>
                <div className="text-md text-gray-700 mt-1">
                  As soon as you're ready, we'll post your home quickly — often
                  the same day. Platinum plan includes same-day activation when
                  available.
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <PiStarFourFill className="w-4 h-4 text-[#0b5aa5] flex-none mt-1" />
              <div>
                <div className="font-bold text-black">Coming Soon Option</div>
                <div className="text-md text-gray-700 mt-1">
                  Want to attract buyers before your home hits the market? We'll
                  list it as “Coming Soon” so you can start building buzz early.
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <PiStarFourFill className="w-4 h-4 text-[#0b5aa5] flex-none mt-1" />
              <div>
                <div className="font-bold text-black">
                  More Eyes on Your Listing
                </div>
                <div className="text-md text-gray-700 mt-1">
                  We can expand your reach by adding your home to nearby MLS
                  networks so more buyers see it — included with Platinum or
                  available as a low-cost add-on.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
