import React, { useState } from "react";

function FAQ() {
  const faqs = [
    { question: "How much is my house worth?", answer: "" },
    { question: "What is the value of my home?", answer: "" },
    {
      question: "How do I find the value of my home?",
      answer:
        "Simply enter your address on Listlly and one of our licensed professionals will analyze comparable sales, active listings, and market movement to provide an accurate and detailed home value report — not just a computer estimate.",
    },
    { question: "How can I estimate the value of a mobile home?", answer: "" },
    { question: "Can I estimate the value of my old house?", answer: "" },
    { question: "Can I update my home value estimation?", answer: "" },
    { question: "How accurate is a home value estimator?", answer: "" },
    { question: "How does the Listlly home worth estimator work?", answer: "" },
    { question: "How much is a house worth by its address?", answer: "" },
    { question: "How to get an accurate value for my house?", answer: "" },
    { question: "Is the home value estimator free?", answer: "" },
    { question: "Is the home value estimator free?", answer: "" },
    {
      question: "Is renovation cost included in my home valuation?",
      answer: "",
    },
    { question: "When should I use a home value estimator?", answer: "" },
    { question: "Why use a home value estimator?", answer: "" },
  ];

  const [openIndex, setOpenIndex] = useState(2);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white px-4 sm:px-6 py-12 mx-auto max-w-5xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2 text-center">
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
              <h3 className="text-base sm:text-lg font-semibold text-black">
                {faq.question}
              </h3>
              <button
                aria-expanded={openIndex === index}
                className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-400 text-gray-600 text-lg"
              >
                {openIndex === index ? "−" : "+"}
              </button>
            </div>

            {openIndex === index && faq.answer && (
              <p className="mt-4 text-sm text-gray-500">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
