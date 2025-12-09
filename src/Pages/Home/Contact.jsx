import React from "react";
import contactbg from "/contactbg.png";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: hook up your submit logic here
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center px-2 sm:px-6 md:px-8 py-10 md:py-14 relative"
      style={{
        backgroundImage: `url(${contactbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 " />
      <div className="max-w-[1600px] mx-auto relative z-10 w-full">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 p-6">
          {/* Left: Text (overlay on background) */}
          <div className="flex-1 flex flex-col justify-center py-8">
            <h3 className="text-4xl md:text-6xl lg:text-[72px] xl:text-[80px] font-bold text-white leading-snug max-w-[860px] text-left">
              Homeowners Who List with Listlly Save an Average of $18,000.
            </h3>
            <p className="mt-6 text-white/95 max-w-[760px] text-left text-xl md:text-2xl">
              Our proven platform helps you list, market, and sell your home
              fast, all while keeping more of your hard‑earned equity. Best
              Service. No hidden fees. Just smart selling that works.
            </p>
          </div>

          {/* Right: Form Card */}
          <div className="flex justify-center md:justify-end">
            <form onSubmit={handleSubmit} className="w-full max-w-[820px]">
              <div className="bg-white rounded-xl p-8 md:p-10 shadow-[0_40px_80px_rgba(2,48,82,0.18)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full h-14 px-5 rounded-lg border border-[#E5E7EB] bg-white text-[#1C1C1C] placeholder:text-[#9AA0A6] outline-none focus:ring-2 focus:ring-[#0054F6] text-base"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full h-14 px-5 rounded-lg border border-[#E5E7EB] bg-white text-[#1C1C1C] placeholder:text-[#9AA0A6] outline-none focus:ring-2 focus:ring-[#0054F6] text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-14 px-5 rounded-lg border border-[#E5E7EB] bg-white text-[#1C1C1C] placeholder:text-[#9AA0A6] outline-none focus:ring-2 focus:ring-[#0054F6] text-base"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full h-14 px-5 rounded-lg border border-[#E5E7EB] bg-white text-[#1C1C1C] placeholder:text-[#9AA0A6] outline-none focus:ring-2 focus:ring-[#0054F6] text-base"
                  />
                </div>

                <textarea
                  rows={8}
                  placeholder="Message"
                  className="w-full px-5 py-4 rounded-lg border border-[#E5E7EB] bg-white text-[#1C1C1C] placeholder:text-[#9AA0A6] outline-none focus:ring-2 focus:ring-[#0054F6] resize-y mt-5 text-base"
                />

                <div className="mt-6">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-base md:text-lg font-semibold text-white"
                    style={{
                      background:
                        "linear-gradient(90deg,#0D47C1 0%, #1E88E5 100%)",
                      boxShadow: "0 18px 50px rgba(14,79,255,0.22)",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
