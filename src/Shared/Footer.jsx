import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../../public/logowhite.png";
import { BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent">
      <div
        className="text-white px-4 sm:px-6 md:px-10 py-10 bg-[#051e36]"
        style={{
          background: "linear-gradient(180deg,#041B3A 0%, #03132a 100%)",
        }}
      >
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12 items-start">
            {/* Left: Logo + blurb */}
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={Logo}
                  alt="Listlly logo"
                  className="w-12 h-12 md:w-14 md:h-14"
                />
                <span className="sr-only">Listlly</span>
              </div>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-white/85 max-w-[320px]">
                For Sale by Owner Just Made Simple - Sell Your Home Yourself And
                Keep Every Dollar
              </p>
              <p className="mt-4 text-xs text-white/60 max-w-[360px]">
                Listlly Corp. holds real estate brokerage licenses in California
                (License No. 02187353)
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm md:text-base font-semibold mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>
                  <a href="#" className="hover:underline">
                    Sell Your Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Buy a Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Why Listlly
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-sm md:text-base font-semibold mb-3">
                Contact Us
              </h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>
                  <CiMail className="inline-block mr-2" />
                  <a href="mailto:help@listlly.com" className="hover:underline">
                    help@listlly.com
                  </a>
                </li>
                <li>
                  <FaPhoneAlt className="inline-block mr-2" />
                  <a href="tel:+16614884232" className="hover:underline">
                    (661) 488-4232
                  </a>
                </li>
                <li className="text-white/80">
                  <FaLocationDot className="inline-block mr-2" />
                  500 Terry Francine St., San Francisco, CA 94158
                </li>
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h4 className="text-sm md:text-base font-semibold mb-3">
                Follow Us
              </h4>
              <div className="flex items-center gap-3 text-white/90">
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10"
                >
                  <BsTwitterX />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="text-xs text-white/70">
                Copyright © 2026 Listlly. All Rights Reserved.
              </div>
              <div className="flex items-center gap-4 text-xs text-white/70">
                <a href="#" className="hover:underline">
                  License
                </a>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
