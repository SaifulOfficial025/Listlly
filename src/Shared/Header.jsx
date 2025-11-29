import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Logo from "../../public/Listlly-logo.svg"; // Adjust the path as necessary
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  const [buyOpen, setBuyOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);
  const buyRef = useRef(null);
  const sellRef = useRef(null);

  // Close on click outside or Esc
  useEffect(() => {
    function onClick(e) {
      if (buyRef.current && !buyRef.current.contains(e.target))
        setBuyOpen(false);
      if (sellRef.current && !sellRef.current.contains(e.target))
        setSellOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") {
        setBuyOpen(false);
        setSellOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef(null);

  // extend click handler for resources ref
  useEffect(() => {
    function onClick(e) {
      if (buyRef.current && !buyRef.current.contains(e.target))
        setBuyOpen(false);
      if (sellRef.current && !sellRef.current.contains(e.target))
        setSellOpen(false);
      if (resourcesRef.current && !resourcesRef.current.contains(e.target))
        setResourcesOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") {
        setBuyOpen(false);
        setSellOpen(false);
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="w-full shadow-sm bg-white drop-shadow-lg absolute top-0 left-0 z-5 px-8">
      <div className="max-w-[1500px] mx-auto sm:px-6 md:px-8 flex items-center justify-center h-16">
        {/* Logo */}
        <Link to="/" className="absolute left-8">
          <img src={Logo} alt="Listlly logo" className="w-10 h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-md font-bold text-[#1C1C1C]">
          {/* Buy dropdown */}
          <div className="relative" ref={buyRef}>
            <button
              type="button"
              className="flex items-center cursor-pointer outline-none"
              aria-haspopup="menu"
              aria-expanded={buyOpen}
              onClick={() => setBuyOpen((v) => !v)}
            >
              Buy
              <ChevronDown className="w-4 h-4 ml-1 text-[#5A5A5A]" />
            </button>

            {buyOpen && (
              <div
                role="menu"
                className="absolute left-0 mt-2 w-48 bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-50"
              >
                <Link to="/buy/homes_for_sale">
                  <button
                    role="menuitem"
                    className="w-full text-left px-4 py-2 text-sm text-[#1C1C1C] hover:bg-[#F5F7FB]"
                  >
                    Home For Sale
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Sell dropdown */}
          <div className="relative" ref={sellRef}>
            <button
              type="button"
              className="flex items-center cursor-pointer outline-none"
              aria-haspopup="menu"
              aria-expanded={sellOpen}
              onClick={() => setSellOpen((v) => !v)}
            >
              Sell
              <ChevronDown className="w-4 h-4 ml-1 text-[#5A5A5A]" />
            </button>

            {sellOpen && (
              <div
                role="menu"
                className="absolute left-0 mt-2 w-48 bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-50"
              >
                <Link to="/sell/flat_fee_mls">
                  <button
                    role="menuitem"
                    className="w-full text-left px-4 py-2 text-sm text-[#1C1C1C] hover:bg-[#F5F7FB]"
                  >
                    Flat Fee MLS
                  </button>
                </Link>
                <Link to="/sell/sell_home_cash">
                  <button
                    role="menuitem"
                    className="w-full text-left px-4 py-2 text-sm text-[#1C1C1C] hover:bg-[#F5F7FB]"
                  >
                    Sell Your Home For Cash
                  </button>
                </Link>
                <Link to="/sell/home_worth">
                  <button
                    role="menuitem"
                    className="w-full text-left px-4 py-2 text-sm text-[#1C1C1C] hover:bg-[#F5F7FB]"
                  >
                    What’s My Home Worth?
                  </button>
                </Link>
              </div>
            )}
          </div>

          <Link to="/pricing" className="cursor-pointer">
            Pricing
          </Link>
          <Link to="/why_listly" className="cursor-pointer">
            Why Listlly
          </Link>

          {/* Resources dropdown */}
          <div className="relative" ref={resourcesRef}>
            <button
              type="button"
              className="flex items-center cursor-pointer outline-none"
              aria-haspopup="menu"
              aria-expanded={resourcesOpen}
              onClick={() => setResourcesOpen((v) => !v)}
            >
              Resources
              <ChevronDown className="w-4 h-4 ml-1 text-[#5A5A5A]" />
            </button>

            {resourcesOpen && (
              <div
                role="menu"
                className="absolute left-0 mt-2 w-56 bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-50"
              >
                <Link to="/resources/how_listlly_works">
                  <button
                    role="menuitem"
                    className="w-full text-left px-4 py-2 text-sm text-[#1C1C1C] hover:bg-[#F5F7FB]"
                  >
                    How Listlly Works
                  </button>
                </Link>
                <Link to="/resources/blogs">
                  <button
                    role="menuitem"
                    className="w-full text-left px-4 py-2 text-sm text-[#1C1C1C] hover:bg-[#F5F7FB]"
                  >
                    Blog
                  </button>
                </Link>
                <Link to="/resources/faq">
                  <button
                    role="menuitem"
                    className="w-full text-left px-4 py-2 text-sm text-[#1C1C1C] hover:bg-[#F5F7FB]"
                  >
                    FAQ
                  </button>
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4 absolute right-8">
          {/* Phone Button */}
          <FaPhoneAlt className="text-[#0b5aa5] text-4xl mr-4 p-2 border-2 border-[#0b5aa5] rounded" />

          {/* Start Listing Button */}
          <Link to="/">
            <button className="hidden md:inline-block bg-[#0b5aa5] text-white text-[13px] font-medium px-4 py-2 rounded shadow-sm">
              Start Listing
            </button>
          </Link>

          {/* Register Button */}
          <Link to="/signup">
            <button className="hidden md:inline-block text-[#0b5aa5] text-md font-bold">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
