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
