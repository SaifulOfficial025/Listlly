import React, { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "How can I sell my house for cash?",
      answer: "",
    },
    {
      question: "Who buys my house when I work with Listlly?",
      answer:
        "We partner with verified local and national cash buyers who are screened for credibility and proof of funds. You’ll receive genuine offers — not automated numbers from investors fishing for discounts.",
    },
    {
      question: "How does the Listlly Cash Offer process work?",
      answer: "",
    },
    {
      question: "Who pays the most for houses?",
      answer: "",
    },
    {
      question: "What are the pros and cons of a cash offer?",
      answer: "",
    },
    {
      question: "Are cash sales faster than traditional listings?",
      answer: "",
    },
    {
      question: "How do I know if my cash offer is fair?",
      answer: "",
    },
    {
      question: "What are the benefits of selling my home for cash?",
      answer: "",
    },
  ];

  // Open the second FAQ by default (index 1)
  const [openIndex, setOpenIndex] = useState(1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white px-4 sm:px-6 py-12 mx-auto max-w-4xl">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-2 text-center">
        Frequently Asked Questions
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
            className="py-4 border-t last:border-b cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-black">
                {faq.question}
              </h3>
              <button
                aria-expanded={openIndex === index}
                className="w-8 h-8 rounded-full flex items-center justify-center border border-white text-[#0b5aa5] text-lg font-bold"
              >
                {openIndex === index ? "−" : "+"}
              </button>
            </div>

            {openIndex === index && faq.answer && (
              <p className="mt-2 text-base text-gray-500">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
