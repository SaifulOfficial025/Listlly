import React from "react";

import Logo from "../../public/Listlly-logo-light.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent">
      <div className="">
        <div
          className="text-white px-4 sm:px-6 md:px-10 py-8 md:py-10 bg-[#2e7bf7]"
          style={{ background: "linear-gradient(180deg, #0a2859 0%, #041B3A 100%)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {/* Left: Logo + blurb */}
            <div>
              <div className="flex items-center gap-2">
                <img src={Logo} alt="Listlly logo" className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
              </div>
              <p className="mt-4 text-[16px] md:text-[13px] leading-relaxed text-white/85 max-w-[320px]">
                For Sale by Owner Just Made Simple — Sell Your
                Home Yourself And Keep Every Dollar
              </p>
              <p className="mt-4 text-[11px] md:text-[16px] text-white/70 max-w-[360px]">
                Listlly Corp. holds real estate brokerage licenses in
                California (License No. 02187353)
              </p>
            </div>

            {/* Middle: Quick Links */}
            <div>
              <h4 className="text-[16px] md:text-[18px] font-semibold mb-2 md:mb-4">Quick Links</h4>
              <ul className="space-y-2 md:space-y-3 text-[16px] md:text-[14px]">
                <li><a href="#" className="hover:underline text-white/90">Sell Your Home</a></li>
                <li><a href="#" className="hover:underline text-white/90">Buy a Home</a></li>
                <li><a href="#" className="hover:underline text-white/90">Pricing</a></li>
                <li><a href="#" className="hover:underline text-white/90">Why Listlly</a></li>
                <li><a href="#" className="hover:underline text-white/90">Contact</a></li>
                <li><a href="#" className="hover:underline text-white/90">Blog</a></li>
              </ul>
            </div>

            {/* Right: Contact Us */}
            <div>
              <h4 className="text-[16px] md:text-[18px] font-semibold mb-2 md:mb-4">Contact Us</h4>
              <ul className="space-y-2 md:space-y-3 text-[16px] md:text-[14px]">
                <li className="text-white/90">
                  Email: <a href="mailto:help@listlly.com" className="hover:underline text-white">help@listlly.com</a>
                </li>
                <li className="text-white/90">
                  Phone: <a href="tel:+16614884232" className="hover:underline text-white">(661) 488-4232</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
