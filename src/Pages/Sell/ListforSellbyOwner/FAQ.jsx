import React, { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "How Can I Sell My House for Cash?",
      answer: "",
    },
    {
      question: "How to Get an MLS Listing Without a Realtor?",
      answer: "",
    },
    {
      question: "Who Will Buy My House for Cash if I Sign Up on Listlly?",
      answer: "",
    },
    {
      question: "Who Pays the Most for Houses?",
      answer:
        "Individual buyers typically pay the most for houses if the property matches their needs. With Listlly's Cash Buyer Network, you may receive offers up to 70% of your home's value. However, a Flat Fee MLS listing is your best option if you want top dollar.",
    },
    {
      question: "What Are the Pros and Cons of a Cash Offer on a House?",
      answer: "",
    },
    {
      question: "What Does it Mean to Sell my Home for Cash?",
      answer: "",
    },
    {
      question: "Are Cash Sales Faster Than Traditional Home Sales?",
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
