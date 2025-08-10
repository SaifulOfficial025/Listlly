import React from "react";
import SideImg from "../../../public/contact.svg";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: hook up your submit logic here
  }

  return (
    <section className="w-full bg-white px-4 py-14">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <h2 className="text-center text-[28px] font-bold text-[#1C1C1C]">
          See what <span className="text-[#EB4E3D]">Listlly</span> can do for
          you
        </h2>
        <p className="text-center text-[#6B7280] text-sm max-w-[720px] mx-auto mt-2">
          Let’s start the conversation about what you can accomplish with
          Listlly industry‑leading residential real estate software and services
        </p>

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <div className="rounded-xl overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.08)]">
            <img
              src={SideImg}
              alt="Contact Listlly"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] bg-white text-[#1C1C1C] placeholder:text-[#9AA0A6] outline-none focus:ring-2 focus:ring-[#0054F6]"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] bg-white text-[#1C1C1C] placeholder:text-[#9AA0A6] outline-none focus:ring-2 focus:ring-[#0054F6]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] bg-white text-[#1C1C1C] placeholder:text-[#9AA0A6] outline-none focus:ring-2 focus:ring-[#0054F6]"
              />
              <textarea
                rows={8}
                placeholder="Description"
                className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-[#1C1C1C] placeholder:text-[#9AA0A6] outline-none focus:ring-2 focus:ring-[#0054F6] resize-y"
              />
            </div>

            <button
              type="submit"
              className="mt-4 px-8 py-3 rounded-lg text-white font-semibold shadow-[0_6px_24px_rgba(235,78,61,0.35)]"
              style={{ background: "#EB4E3D" }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
