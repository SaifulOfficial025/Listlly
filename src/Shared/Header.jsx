import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Logo from "../../public/Listlly-logo.svg"; // Adjust the path as necessary
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  const [showPhonePopup, setShowPhonePopup] = useState(false);
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
    <div className="w-full shadow-sm bg-white drop-shadow-lg absolute top-0 left-0 z-50 px-8">
      <div className="max-w-[1500px] mx-auto sm:px-6 md:px-8 flex items-center h-16 relative">
        {/* Logo and Navigation */}
        <div className="flex items-center">
          <Link to="/" className="mr-8">
            <img src={Logo} alt="Listlly logo" className="w-12 h-12" />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-md font-bold text-[#1C1C1C]">
            {/* Buy dropdown */}
            <div className="relative" ref={buyRef}>
              <button
                type="button"
                className={`flex items-center cursor-pointer outline-none pb-2 transition-all border-b-0 hover:border-b-[1.5px] hover:border-[#0b5aa5] ${
                  buyOpen || window.location.pathname.startsWith("/buy")
                    ? "border-b-2 border-[#0b5aa5] text-[#0b5aa5]"
                    : ""
                }`}
                aria-haspopup="menu"
                aria-expanded={buyOpen}
                onClick={() => setBuyOpen((v) => !v)}
              >
                Buy
                {buyOpen ? (
                  <ChevronDown className="w-4 h-4 ml-1 text-[#0b5aa5] rotate-180 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-1 text-[#5A5A5A] transition-transform duration-200" />
                )}
              </button>

              {buyOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-48 bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-50"
                >
                  <Link to="/buy/homes_for_sale">
                    <button
                      role="menuitem"
                      className="w-full text-left px-4 py-2 text-sm text-[#1C1C1C] transition-colors duration-200 hover:bg-[#0b5aa5] hover:text-white rounded-lg"
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
                className={`flex items-center cursor-pointer outline-none pb-2 transition-all border-b-0 hover:border-b-[1.5px] hover:border-[#0b5aa5] ${
                  sellOpen || window.location.pathname.startsWith("/sell")
                    ? "border-b-2 border-[#0b5aa5] text-[#0b5aa5]"
                    : ""
                }`}
                aria-haspopup="menu"
                aria-expanded={sellOpen}
                onClick={() => setSellOpen((v) => !v)}
              >
                Sell
                {sellOpen ? (
                  <ChevronDown className="w-4 h-4 ml-1 text-[#0b5aa5] rotate-180 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-1 text-[#5A5A5A] transition-transform duration-200" />
                )}
              </button>

              {sellOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-48 bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-50"
                >
                  <Link to="/sell/flat_fee_mls">
                    <button
                      role="menuitem"
                      className="w-full text-left px-4 py-2 text-sm text-[#1C1C1C] transition-colors duration-200 hover:bg-[#0b5aa5] hover:text-white rounded-lg"
                    >
                      Flat Fee MLS
                    </button>
                  </Link>
                  <Link to="/sell/list_for_sale_by_owner">
                    <button
                      role="menuitem"
                      className="w-full text-left px-4 py-2 text-sm text-[#1C1C1C] transition-colors duration-200 hover:bg-[#0b5aa5] hover:text-white rounded-lg"
                    >
                      List For Sale By Owner
                    </button>
                  </Link>
                  <Link to="/sell/sell_home_cash">
                    <button
                      role="menuitem"
                      className="w-full text-left px-4 py-2 text-sm text-[#1C1C1C] transition-colors duration-200 hover:bg-[#0b5aa5] hover:text-white rounded-lg"
                    >
                      Sell Your Home For Cash
                    </button>
                  </Link>
                  <Link to="/sell/home_worth">
                    <button
                      role="menuitem"
                      className="w-full text-left px-4 py-2 text-sm text-[#1C1C1C] transition-colors duration-200 hover:bg-[#0b5aa5] hover:text-white rounded-lg"
                    >
                      What’s My Home Worth?
                    </button>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/pricing" className="cursor-pointer">
              <span
                className={`pb-2 transition-all border-b-0 hover:border-b-[1.5px] hover:border-[#0b5aa5] ${
                  window.location.pathname === "/pricing"
                    ? "border-b-2 border-[#0b5aa5] text-[#0b5aa5]"
                    : ""
                }`}
              >
                Pricing
              </span>
            </Link>
            <Link to="/why_listly" className="cursor-pointer">
              <span
                className={`pb-2 transition-all border-b-0 hover:border-b-[1.5px] hover:border-[#0b5aa5] ${
                  window.location.pathname === "/why_listly"
                    ? "border-b-2 border-[#0b5aa5] text-[#0b5aa5]"
                    : ""
                }`}
              >
                Why Listlly
              </span>
            </Link>

            {/* Resources dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                type="button"
                className={`flex items-center cursor-pointer outline-none pb-2 transition-all border-b-0 hover:border-b-[1.5px] hover:border-[#0b5aa5] ${
                  resourcesOpen ||
                  window.location.pathname.startsWith("/resources")
                    ? "border-b-2 border-[#0b5aa5] text-[#0b5aa5]"
                    : ""
                }`}
                aria-haspopup="menu"
                aria-expanded={resourcesOpen}
                onClick={() => setResourcesOpen((v) => !v)}
              >
                Resources
                {resourcesOpen ? (
                  <ChevronDown className="w-4 h-4 ml-1 text-[#0b5aa5] rotate-180 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-1 text-[#5A5A5A] transition-transform duration-200" />
                )}
              </button>

              {resourcesOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-56 bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-50"
                >
                  <Link to="/resources/how_listlly_works">
                    <button
                      role="menuitem"
                      className="w-full text-left px-4 py-2 text-sm text-[#1C1C1C] transition-colors duration-200 hover:bg-[#0b5aa5] hover:text-white rounded-lg"
                    >
                      How Listlly Works
                    </button>
                  </Link>
                  <Link to="/resources/blogs">
                    <button
                      role="menuitem"
                      className="w-full text-left px-4 py-2 text-sm text-[#1C1C1C] transition-colors duration-200 hover:bg-[#0b5aa5] hover:text-white rounded-lg"
                    >
                      Blog
                    </button>
                  </Link>
                  <Link to="/resources/faq">
                    <button
                      role="menuitem"
                      className="w-full text-left px-4 py-2 text-sm text-[#1C1C1C] transition-colors duration-200 hover:bg-[#0b5aa5] hover:text-white rounded-lg"
                    >
                      FAQ
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4 absolute right-8">
          {/* Phone Button with Popup */}
          <div className="relative mt-2 -mr-4">
            <button
              type="button"
              aria-label="Show phone info"
              onClick={() => setShowPhonePopup((v) => !v)}
              className="focus:outline-none"
            >
              <FaPhoneAlt className="text-[#0b5aa5] text-4xl mr-4 p-2 border-2 border-[#0b5aa5] rounded hover:scale-110 transition-transform duration-300" />
            </button>
            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[320px] bg-white border-2 border-[#0b5aa5] rounded-lg shadow-lg z-50 flex items-center px-4 py-3 transition-all duration-300 ease-in-out ${
                showPhonePopup
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
              style={{ top: "100%" }}
            >
              <FaPhoneAlt className="text-[#0b5aa5] text-2xl mr-3" />
              <div>
                <div className="font-bold text-black text-[17px]">
                  Call us at{" "}
                  <span className="text-[#0b5aa5]">(844) 000-0000</span>
                </div>
                <div className="text-gray-700 text-[15px]">
                  (9am to 6pm CDT, Mon-Sat)
                </div>
              </div>
            </div>
          </div>

          {/* Start Listing Button */}
          <Link to="/dashboard/selling_properties">
            <button className="hidden md:inline-block bg-[#0b5aa5] text-white text-[13px] font-medium px-4 py-2 rounded shadow-sm hover:scale-110 transition-transform duration-300">
              Start Listing
            </button>
          </Link>

          {/* Register Button */}
          <Link to="/signup">
            <button className="hidden md:inline-block text-[#0b5aa5] text-md font-bold border-2 border-[#0b5aa5] px-4 py-1 rounded shadow-sm hover:scale-110 transition-transform duration-300">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
