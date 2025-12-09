import React from "react";
import beware1 from "../../../../public/beware1.png";
import beware2 from "../../../../public/beware2.png";
import beware3 from "../../../../public/beware3.png";
import beware4 from "../../../../public/beware4.png";

function Beware() {
  const items = [
    {
      icon: (
        <img
          src={beware1}
          alt="Lowball Offers"
          className="w-full h-full object-contain"
        />
      ),
      title: "Lowball Offers",
      desc: "Some buyers throw out offers far below market value, hoping you'll settle fast. At Listlly, your offer is backed by licensed agents using verified market data not guesswork.",
    },
    {
      icon: (
        <img
          src={beware3}
          alt="Pressure Tactics"
          className="w-full h-full object-contain"
        />
      ),
      title: "Pressure Tactics",
      desc: '"Sign now or lose it" is a red flag. We\'ll never rush you. You get time, clarity, and control to make the right move for you.',
    },
    {
      icon: (
        <img
          src={beware2}
          alt="Hidden Fees and Deal Cancellations"
          className="w-full h-full object-contain"
        />
      ),
      title: "Hidden Fees and Deal Cancellations",
      desc: "Many companies add fees or back out at the last second. Listlly operates with no surprise costs, no junk fees, and written transparency from start to finish.",
    },
    {
      icon: (
        <img
          src={beware4}
          alt="Title Fraud"
          className="w-full h-full object-contain"
        />
      ),
      title: "Title Fraud",
      desc: "Dishonest buyers may forge documents or manipulate title transfers. Listlly partners only with licensed escrow and title companies, ensuring your transaction stays 100% legitimate and protected.",
    },
  ];

  return (
    <section className="mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black ">
          Beware of <span className="text-[#d03c0b]">“Cash for Houses” </span>{" "}
          <span>Scams</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
          Unfortunately, not every cash offer is created equal. Many “we buy
          houses” companies take advantage of homeowners in stressful
          situations. At Listlly, we believe in transparency, licensed
          professionals, and verified buyers, so you can sell safely, without
          fear of getting burned.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="rounded-lg shadow-sm p-2 sm:p-4 overflow-hidden border hover:border-blue-900 "
              style={{
                backgroundImage: "url('/getacashoffercardbg.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex items-start">
                <div className="w-18 flex items-center justify-center p-2">
                  {it.icon}
                </div>
              </div>
              <h3 className="text-left text-base sm:text-lg font-semibold text-gray-800 mt-8">
                {it.title}
              </h3>
              <p className="text-left text-sm text-gray-500 mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Beware;
