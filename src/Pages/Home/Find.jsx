import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaFileSignature,
  FaUserTie,
  FaHandshake,
} from "react-icons/fa";
import findbg from "/findbg.png";
import findcard1 from "/findcard1.png";
import findcard2 from "/findcard2.png";
import findcard3 from "/findcard3.png";
import findcard4 from "/findcard4.png";

const steps = [
  {
    icon: <FaHome className="w-6 h-6 text-white" />,
    title: "Request a Tour",
    desc: "Pick a time, choose in-person or virtual, and get a confirmation instantly.",
  },
  {
    icon: <FaFileSignature className="w-6 h-6 text-white" />,
    title: "Submit an Offer",
    desc: "Use our online form to send your offer to the seller directly—fast, secure, and easy.",
  },
  {
    icon: <FaUserTie className="w-6 h-6 text-white" />,
    title: "Get Pre-approved",
    desc: "Connect with our lending partners to get pre-approved and strengthen your offer.",
  },
  {
    icon: <FaHandshake className="w-6 h-6 text-white" />,
    title: "Connect with Agent",
    desc: "Get expert advice from our team of experienced real estate professionals.",
  },
];

const cardImages = [findcard1, findcard2, findcard3, findcard4];

export default function Find() {
  return (
    <section
      className="w-full px-4 sm:px-6 md:px-8 py-14 md:py-20"
      style={{
        backgroundImage: `url(${findbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1200px] mx-auto text-center relative">
        <div className="absolute inset-0  rounded-md pointer-events-none" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          <span className="block text-white">Find the Right Home</span>
          <span className="block">and Make an Offer Easily</span>
        </h2>
        <p className="text-white/85 mt-4 max-w-[800px] mx-auto text-xs md:text-sm">
          Our streamlined buying process makes finding and purchasing your dream
          home simple and stress-free.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.18)] hover:scale-105 transition-transform duration-300"
              style={{
                background: "linear-gradient(180deg,#59a3f7 , #2360d2 50%)",
              }}
            >
              <img
                src={cardImages[i]}
                alt={step.title}
                className="w-25 h-25 object-cover block justify-center mx-auto rounded-md mt-12"
              />
              <div className="p-4 bg-gradient-to-t from-black/50 to-transparent">
                <h3 className="text-white text-sm md:text-base font-semibold">
                  {step.title}
                </h3>
                <p className="text-white/90 text-xs mt-1 mb-10">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div className="relative inline-flex">
            <span
              className="absolute inset-0 rounded-lg blur-xl bg-white/60 opacity-30 filter z-0"
              aria-hidden="true"
            />
            <Link to="/buy/homes_for_sale">
              <button
                className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm md:text-base font-semibold text-white border-2 border-white shadow-md shadow-white hover:scale-105 transition"
                style={{
                  background: "linear-gradient(90deg,#59a3f7 0%, #2361d3 100%)",
                }}
              >
                Start Searching
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
