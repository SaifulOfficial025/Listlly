import React from "react";

import icon from "../../../../public/Noobligation.png";

function NoObligation() {
  const cards = [
    {
      icon: icon,
      title: "Professional Valuation",
      desc: "Every offer is reviewed by a licensed real estate expert who understands your area, layout, and upgrades.",
    },
    {
      icon: icon,
      title: "Fair, Transparent Pricing",
      desc: "No lowball tactics just a straightforward offer you can trust.",
    },
    {
      icon: icon,
      title: "Fast & Flexible Closings",
      desc: "Move in as little as 15 days or set your own closing date.",
    },
    {
      icon: icon,
      title: "No Hidden Fees or Surprises",
      desc: "What you see is exactly what you get.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-full mx-auto ">
        <div className=" px-24 sm:px-24 py-24 bg-gradient-to-br from-[#05469a]  to-[#0a66cc] text-white overflow-hidden ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:pr-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Get Your No-Obligation
                <span className="block">Cash Offer</span>
              </h2>

              <p className="mt-6 text-white/90 max-w-xl">
                Selling your home doesn’t have to be complicated. With Listlly,
                you can receive a fair, no-obligation cash offer backed by real
                licensed professionals — not bots or algorithms.
              </p>

              <p className="mt-4 text-white/80 max-w-xl">
                No pressure. No commitments. Just a clear, honest number based
                on your home's true market value.
              </p>

              <button className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#7ebdfa] to-[#3469f7] border border-white/20 shadow-lg shadow-white/30 hover:scale-105 transform transition-all text-white font-semibold rounded-lg">
                Get Cash Offer
              </button>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                {cards.map((c, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-b from-[#58a1f6] to-[#2462d3] relative rounded-xl p-5 overflow-hidden border border-white/20"
                  >
                    <div className="w-24 flex items-left justify-center mb-3 -ml-8">
                      <img src={c.icon} alt={c.title} className="" />
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-white/80 text-md">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoObligation;
