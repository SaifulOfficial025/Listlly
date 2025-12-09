import React from "react";
import icon1 from "../../../../public/whentogetcashoffericon1.png";
import icon2 from "../../../../public/whentogetcashoffericon2.png";
import icon3 from "../../../../public/whentogetcashoffericon3.png";
import icon4 from "../../../../public/whentogetcashoffericon4.png";
import icon5 from "../../../../public/whentogetcashoffericon5.png";
import icon6 from "../../../../public/whentogetcashoffericon6.png";
import icon7 from "../../../../public/whentogetcashoffericon7.png";
import icon8 from "../../../../public/whentogetcashoffericon8.png";

function WhenGetOffer() {
  const cards = [
    {
      icon: (
        <img
          src={icon1}
          alt="Privacy & Convenience"
          className="w-full h-full object-contain"
        />
      ),
      title: "Privacy & Convenience",
      subtitle:
        "No open houses or strangers in your home, sell quietly and move on your timeline.",
    },
    {
      icon: (
        <img
          src={icon2}
          alt="No Repairs Needed"
          className="w-full h-full object-contain"
        />
      ),
      title: "No Repairs Needed",
      subtitle:
        "Skip the hassle and cost of fixing anything. We buy your home exactly as it is.",
    },
    {
      icon: (
        <img
          src={icon3}
          alt="Quick Relocation"
          className="w-full h-full object-contain"
        />
      ),
      title: "Quick Relocation",
      subtitle:
        "Moving for work or family? Close in as little as 15–30 days or when it suits you.",
    },
    {
      icon: (
        <img
          src={icon4}
          alt="Financial Relief"
          className="w-full h-full object-contain"
        />
      ),
      title: "Financial Relief",
      subtitle:
        "Behind on payments or facing foreclosure? Sell fast and protect your credit.",
    },
    {
      icon: (
        <img
          src={icon5}
          alt="Inherited Property"
          className="w-full h-full object-contain"
        />
      ),
      title: "Inherited Property",
      subtitle:
        "Don’t want the stress of maintaining or managing an inherited home? We'll handle it for you.",
    },
    {
      icon: (
        <img
          src={icon6}
          alt="Divorce or Separation"
          className="w-full h-full object-contain"
        />
      ),
      title: "Divorce or Separation",
      subtitle:
        "Simplify the process with a quick, fair, and clean sale — no long delays or conflicts.",
    },
    {
      icon: (
        <img
          src={icon7}
          alt="Rental or Vacant Home"
          className="w-full h-full object-contain"
        />
      ),
      title: "Rental or Vacant Home",
      subtitle:
        "Tired of tenants or an empty property? Turn it into cash without cleaning or repairs.",
    },
    {
      icon: (
        <img
          src={icon8}
          alt="Downsizing or Retirement"
          className="w-full h-full object-contain"
        />
      ),
      title: "Downsizing or Retirement",
      subtitle:
        "Transition smoothly into your next chapter — on your terms, without the wait.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          When to Get a <span className="text-[#d03c0b]">Cash Offer</span>
        </h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Sometimes it’s not just about selling, it’s about peace of mind.
          Listlly helps you sell your home privately, quickly, and on your
          terms. Here’s when a cash offer makes the most sense:
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, idx) => (
          <div
            key={idx}
            className="rounded-lg shadow-sm p-2 sm:p-4 overflow-hidden border hover:border-blue-900 h-56"
            style={{
              backgroundImage: "url('/getacashoffercardbg.png')",
              backgroundPosition: "center",
              backgroundSize: "",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex items-start">
              <div className=" w-16 flex items-center justify-center p-2">
                {c.icon}
              </div>
            </div>
            <h3 className="text-left text-base sm:text-lg font-semibold text-gray-800 mt-8">
              {c.title}
            </h3>
            <p className="text-left text-sm text-gray-500 mt-2">{c.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhenGetOffer;
