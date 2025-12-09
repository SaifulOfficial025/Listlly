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
    <div className="w-full bg-white px-4 sm:px-6 py-12 mx-auto max-w-4xl">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-2 text-center">
        Flat Fee MLS <span className="text-[#EB4E3D]">FAQs</span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Find quick, straightforward answers to the most common questions about
        how Listlly helps homeowners save thousands and sell like a pro with
        full support from a team of licensed experts.
      </p>

      <div className="w-full mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="py-5 border-t last:border-b cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="text-base sm:text-lg font-semibold text-black">
                {faq.question}
              </h3>
              <button
                aria-expanded={openIndex === index}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#0b5aa5] text-lg"
              >
                {openIndex === index ? "-" : "+"}
              </button>
            </div>

            {openIndex === index && (
              <p className="mt-4 text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
