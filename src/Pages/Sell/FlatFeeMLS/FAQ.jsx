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
      question:
        "Is listing on the MLS without a Realtor in the US a good option?",
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
    <div className="w-full bg-white px-4 sm:px-6 py-8 sm:py-10 mx-auto max-w-[1200px] ">
      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 text-center">
        Flat Fee MLS <span className="text-[#EB4E3D]">FAQs</span>
      </h2>
      <span className="text-black block text-center mx-auto max-w-2xl mb-6">
        Find quick, straightforward answers to the most common questions about
        how Listlly helps homeowners save thousands and sell like a pro with
        full support from a team of licensed experts.
      </span>

      <div className="grid grid-cols-1 gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base sm:text-lg font-bold text-[#1C1C1C]">
                {faq.question}
              </h3>
              <span className="text-[#0b5aa5] text-xl font-bold sm:text-2xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-sm sm:text-base text-gray-500 mt-2">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
