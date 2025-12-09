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

  // Mobile menu states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileBuyOpen, setMobileBuyOpen] = useState(false);
  const [mobileSellOpen, setMobileSellOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

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
    <>
      {/* Mobile Menu Overlay - At root level */}
      <div
        className={`fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Slide-in Panel - At root level */}
      <nav
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-[9999] shadow-2xl transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <img src={Logo} alt="Listlly logo" className="w-10 h-10" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl text-gray-600 hover:text-[#0b5aa5] transition-colors"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="px-6 py-4">
          {/* Buy Dropdown Mobile */}
          <div className="mb-2">
            <button
              className={`flex items-center justify-between w-full py-3 text-left font-bold transition-colors ${
                window.location.pathname.startsWith("/buy")
                  ? "text-[#0b5aa5]"
                  : "text-[#1C1C1C]"
              }`}
              onClick={() => setMobileBuyOpen(!mobileBuyOpen)}
            >
              <span>Buy</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  mobileBuyOpen ? "rotate-180 text-[#0b5aa5]" : "text-[#5A5A5A]"
                }`}
              />
            </button>
            {mobileBuyOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <Link
                  to="/buy/homes_for_sale"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    window.location.pathname === "/buy/homes_for_sale"
                      ? "bg-[#0b5aa5] text-white"
                      : "text-[#1C1C1C] hover:bg-[#0b5aa5] hover:text-white"
                  }`}
                >
                  Home For Sale
                </Link>
              </div>
            )}
          </div>

          {/* Sell Dropdown Mobile */}
          <div className="mb-2">
            <button
              className={`flex items-center justify-between w-full py-3 text-left font-bold transition-colors ${
                window.location.pathname.startsWith("/sell")
                  ? "text-[#0b5aa5]"
                  : "text-[#1C1C1C]"
              }`}
              onClick={() => setMobileSellOpen(!mobileSellOpen)}
            >
              <span>Sell</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  mobileSellOpen
                    ? "rotate-180 text-[#0b5aa5]"
                    : "text-[#5A5A5A]"
                }`}
              />
            </button>
            {mobileSellOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <Link
                  to="/sell/flat_fee_mls"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    window.location.pathname === "/sell/flat_fee_mls"
                      ? "bg-[#0b5aa5] text-white"
                      : "text-[#1C1C1C] hover:bg-[#0b5aa5] hover:text-white"
                  }`}
                >
                  Flat Fee MLS
                </Link>
                <Link
                  to="/sell/list_for_sale_by_owner"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    window.location.pathname === "/sell/list_for_sale_by_owner"
                      ? "bg-[#0b5aa5] text-white"
                      : "text-[#1C1C1C] hover:bg-[#0b5aa5] hover:text-white"
                  }`}
                >
                  List For Sale By Owner
                </Link>
                <Link
                  to="/sell/sell_home_cash"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    window.location.pathname === "/sell/sell_home_cash"
                      ? "bg-[#0b5aa5] text-white"
                      : "text-[#1C1C1C] hover:bg-[#0b5aa5] hover:text-white"
                  }`}
                >
                  Sell Your Home For Cash
                </Link>
                <Link
                  to="/sell/home_worth"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    window.location.pathname === "/sell/home_worth"
                      ? "bg-[#0b5aa5] text-white"
                      : "text-[#1C1C1C] hover:bg-[#0b5aa5] hover:text-white"
                  }`}
                >
                  What's My Home Worth?
                </Link>
              </div>
            )}
          </div>

          {/* Pricing Link Mobile */}
          <Link
            to="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-3 font-bold transition-colors ${
              window.location.pathname === "/pricing"
                ? "text-[#0b5aa5]"
                : "text-[#1C1C1C]"
            }`}
          >
            Pricing
          </Link>

          {/* Why Listlly Link Mobile */}
          <Link
            to="/why_listly"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-3 font-bold transition-colors ${
              window.location.pathname === "/why_listly"
                ? "text-[#0b5aa5]"
                : "text-[#1C1C1C]"
            }`}
          >
            Why Listlly
          </Link>

          {/* Resources Dropdown Mobile */}
          <div className="mb-2">
            <button
              className={`flex items-center justify-between w-full py-3 text-left font-bold transition-colors ${
                window.location.pathname.startsWith("/resources")
                  ? "text-[#0b5aa5]"
                  : "text-[#1C1C1C]"
              }`}
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            >
              <span>Resources</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  mobileResourcesOpen
                    ? "rotate-180 text-[#0b5aa5]"
                    : "text-[#5A5A5A]"
                }`}
              />
            </button>
            {mobileResourcesOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <Link
                  to="/resources/how_listlly_works"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    window.location.pathname === "/resources/how_listlly_works"
                      ? "bg-[#0b5aa5] text-white"
                      : "text-[#1C1C1C] hover:bg-[#0b5aa5] hover:text-white"
                  }`}
                >
                  How Listlly Works
                </Link>
                <Link
                  to="/resources/blogs"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    window.location.pathname === "/resources/blogs"
                      ? "bg-[#0b5aa5] text-white"
                      : "text-[#1C1C1C] hover:bg-[#0b5aa5] hover:text-white"
                  }`}
                >
                  Blog
                </Link>
                <Link
                  to="/resources/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    window.location.pathname === "/resources/faq"
                      ? "bg-[#0b5aa5] text-white"
                      : "text-[#1C1C1C] hover:bg-[#0b5aa5] hover:text-white"
                  }`}
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Action Buttons */}
          <div className="mt-6 space-y-3 pt-6 border-t border-gray-200">
            <Link
              to="/dashboard/selling_properties"
              onClick={() => setMobileMenuOpen(false)}
            >
              <button className="w-full bg-[#0b5aa5] text-white text-sm font-medium px-4 py-3 rounded shadow-sm hover:bg-[#094a87] transition-colors">
                Start Listing
              </button>
            </Link>
            <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full text-[#0b5aa5] text-sm font-bold border-2 border-[#0b5aa5] px-4 py-3 rounded shadow-sm hover:bg-[#0b5aa5] hover:text-white transition-colors mt-3">
                Register
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Bar */}
      <div className="w-full shadow-sm bg-white drop-shadow-lg absolute top-0 left-0 z-[100] px-4 md:px-8">
        <div className="max-w-[1500px] mx-auto sm:px-6 md:px-8 flex items-center h-16 relative">
          {/* Logo and Navigation */}
          <div className="flex items-center justify-between md:justify-start w-full md:w-auto">
            <Link to="/" className="mr-8">
              <img src={Logo} alt="Listlly logo" className="w-12 h-12" />
            </Link>

            {/* Mobile Hamburger Menu */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-6 h-0.5 bg-[#0b5aa5]"></span>
              <span className="block w-6 h-0.5 bg-[#0b5aa5]"></span>
              <span className="block w-6 h-0.5 bg-[#0b5aa5]"></span>
            </button>
          </div>

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
        <div className="hidden md:flex items-center space-x-4 absolute right-8 top-1/2 -translate-y-1/2 mr-20">
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
    </>
  );
}

export default Header;
