import React, { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "How can I sell my house for cash?",
      answer:
        "Listlly connects you with verified cash buyers and licensed agents who evaluate your property and present fair offers. You can accept an immediate cash offer or pursue a competitive MLS listing for top-dollar results.",
    },
    {
      question: "Who buys my house when I work with Listlly?",
      answer:
        "We partner with verified local and national cash buyers who are screened for credibility and proof of funds. You'll receive genuine offers — not automated numbers from investors fishing for discounts.",
    },
    {
      question: "How does the Listlly Cash Offer process work?",
      answer:
        "Submit your property details, get a preliminary valuation, and receive a no-obligation cash offer from a vetted buyer. If you accept, we guide you through escrow and closing with licensed partners.",
    },
    {
      question: "Who pays the most for houses?",
      answer:
        "It depends on market demand and buyer strategy. Often traditional buyers on the MLS pay more for well-presented homes, while cash buyers offer speed and certainty. Listlly helps you evaluate both options.",
    },
    {
      question: "What are the pros and cons of a cash offer?",
      answer:
        "Pros: faster closings, no repairs required, and greater certainty. Cons: some cash offers may be below market — that's why Listlly vets buyers and presents competitive options.",
    },
    {
      question: "Are cash sales faster than traditional listings?",
      answer:
        "Yes. Cash transactions can close in as little as 15–30 days because they don't rely on mortgage financing, which speeds up the process significantly.",
    },
    {
      question: "How do I know if my cash offer is fair?",
      answer:
        "Listlly provides market context and licensed agent input so you can compare offers against local comps and expected MLS outcomes to make an informed decision.",
    },
    {
      question: "What are the benefits of selling my home for cash?",
      answer:
        "Cash sales reduce uncertainty, remove financing contingencies, and allow flexible closing dates — ideal when you need speed or certainty.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

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
            className="py-5 border-t last:border-b"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="text-base sm:text-lg font-semibold text-black">
                {faq.question}
              </h3>
              <button
                aria-expanded={openIndex === index}
                className="w-8 h-8 rounded-full flex items-center justify-center  text-[#0b5aa5] text-lg"
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
