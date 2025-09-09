import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    q: "How can I sell my house for cash?",
    a: "",
  },
  {
    q: "Who will buy my house for cash if I sign up on Listlly?",
    a: "",
  },
  {
    q: "How does a Listlly Cash Offer work?",
    a: "",
  },
  {
    q: "Who pays the most for houses?",
    a: (
      <>
        Individual buyers typically pay the most for houses if the property
        matches their needs. With Listllyv's Cash Buyer Network, you may receive
        offers up to 70% of your home's value. However, a{" "}
        <a href="#" className="text-blue-600 underline">
          Flat Fee MLS
        </a>{" "}
        listing is your best option if you want top dollar.
      </>
    ),
  },
  {
    q: "What are the pros and cons of a cash offer on a house?",
    a: "",
  },
  {
    q: "What does it mean to sell my home for cash?",
    a: "",
  },
  {
    q: "Are cash sales faster than traditional home sales?",
    a: "",
  },
];

function FAQ() {
  const [open, setOpen] = useState(3); // fourth question open by default

  return (
    <section className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-black">
        Frequently{" "}
        <span className="text-[#ff6061]">Asked Questions</span>
      </h2>
      <div className="space-y-3">
        {faqs.map((item, idx) => (
          <div key={idx}>
            <button
              className={`w-full text-left bg-[#fafafa] rounded-md px-4 py-3 flex items-center justify-between font-medium text-base sm:text-lg focus:outline-none transition-colors ${
                open === idx
                  ? "text-[#ff6061]"
                  : "text-gray-800"
              }`}
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span>{item.q}</span>
              {open === idx ? (
                <FiChevronUp className="text-[#ff6061] w-5 h-5" />
              ) : (
                <FiChevronDown className="text-gray-400 w-5 h-5" />
              )}
            </button>
            {open === idx && item.a && (
              <div className="bg-[#faf6f6] rounded-b-md px-4 pb-3 pt-2 text-gray-700 text-sm sm:text-base">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
