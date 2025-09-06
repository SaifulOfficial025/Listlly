import React, { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is a Multiple Listing Service (MLS)?",
      answer: "",
    },
    {
      question: "How to get an MLS listing without a Realtor?",
      answer: "",
    },
    {
      question: "Why should I choose a Flat Fee MLS service for FSBO listings?",
      answer: "",
    },
    {
      question: "Is a Flat Fee MLS listing legit?",
      answer:
        "Yes, absolutely! The National Association of REALTORS (NAR) allows sellers to list on the MLS for a flat fee. It's an affordable way to sell your home without spending a fortune on agent commissions. Just make sure to choose a trusted MLS service with credible reviews.",
    },
    {
      question: "Is listing on the MLS without a Realtor in the US a good option?",
      answer: "",
    },
    {
      question: "Which is the best Flat Fee MLS listing service in the US?",
      answer: "",
    },
    {
      question: "Is Listlly legit?",
      answer: "",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white px-4 py-10 mx-auto max-w-[1200px] ">
      <h2 className="text-[28px] font-bold text-black mb-4 text-center">
        Flat Fee MLS <span className="text-[#EB4E3D]">FAQs</span>
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-[#1C1C1C]">
                {faq.question}
              </h3>
              <span className="text-[#EB4E3D] text-xl">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-sm text-gray-500 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
