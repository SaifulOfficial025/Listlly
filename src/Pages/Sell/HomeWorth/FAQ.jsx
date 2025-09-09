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
    a: "Typically, buyers who are most motivated or have the fewest contingencies (such as cash buyers or investors) may pay the most, but it depends on your local market and property condition.",
  },
  {
    q: "Are cash sales faster than traditional home sales?",
    a: "",
  },
];

function FAQ() {
  const [open, setOpen] = useState(3); // fourth question open by default

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8 text-black">
        Frequently{" "}
        <span className="text-[#ff6061]">Asked Questions</span>
      </h2>
      <div className="space-y-4">
        {faqs.map((item, idx) => (
          <div key={idx}>
            <button
              className={`w-full text-left bg-[#fafafa] rounded-md px-5 py-4 flex items-center justify-between font-medium text-lg focus:outline-none transition-colors ${
                open === idx
                  ? "text-[#ff6061]"
                  : "text-gray-800"
              }`}
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span>{item.q}</span>
              {open === idx ? (
                <FiChevronUp className="text-[#ff6061] w-6 h-6" />
              ) : (
                <FiChevronDown className="text-gray-400 w-6 h-6" />
              )}
            </button>
            {open === idx && item.a && (
              <div className="bg-[#faf6f6] rounded-b-md px-5 pb-4 pt-2 text-gray-700 text-base">
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
