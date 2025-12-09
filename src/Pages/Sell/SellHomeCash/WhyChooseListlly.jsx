import React from "react";
import icon1 from "../../../../public/whychoose1.png";
import icon2 from "../../../../public/whychoose2.png";
import icon3 from "../../../../public/whychoose3.png";

function WhyChooseListlly() {
  const cards = [
    {
      img: icon1,
      title: "Get the Best Price",
      subtitle:
        "Unlike traditional agents who charge hefty commissions, Listlly helps you access fair, competitive offers from verified buyers, keeping more money in your pocket.",
    },
    {
      img: icon2,
      title: 'Sell "As Is"',
      subtitle:
        "No repairs, no cleaning, no stress.\nWe buy your home exactly as it is, saving you weeks of hassle and thousands in prep costs.",
    },
    {
      img: icon3,
      title: "Choose Your Closing Date",
      subtitle:
        "You decide when to move Whether it is 15 days or 45, we will match your timeline and make the process smooth, private, and predictable.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Why Choose <span className="text-[#d03c0b]">Listlly</span>
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 max-w-2xl">
          With Listlly, you get both options. An immediate cash offer via our
          cash buyer network, and a competitive cash listing via the MLS for top
          dollar offers!
        </p>
      </div>

      <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 ml-0 md:ml-16">
        {cards.map((c, idx) => (
          <div
            key={idx}
            className="rounded-lg px-6 sm:px-14 md:px-16 p-3 sm:p-4 overflow-hidden w-full sm:w-72 flex flex-col items-center justify-center hover:border border-blue-900"
            style={{
              backgroundImage: "url('/getacashoffercardbg.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-24 sm:w-36 flex items-center justify-center p-1 sm:p-2">
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-center text-sm sm:text-lg font-semibold text-gray-800 mt-2 sm:mt-3">
              {c.title}
            </h3>
            <p className="text-center text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
              {c.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseListlly;
