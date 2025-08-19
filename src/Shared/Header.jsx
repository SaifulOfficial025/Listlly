import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Logo from "../../public/Listlly-logo.svg"; // Adjust the path as necessary
import { Link } from "react-router-dom";

function Header() {
  const [buyOpen, setBuyOpen] = useState(false);
  const buyRef = useRef(null);

  // Close on click outside or Esc
  useEffect(() => {
    function onClick(e) {
      if (buyRef.current && !buyRef.current.contains(e.target)) setBuyOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setBuyOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="w-full shadow-sm bg-white drop-shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Listlly logo" className="w-10 h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-md font-medium text-[#1C1C1C]">
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

          {/* Sell (static for now) */}
          <div className="flex items-center cursor-pointer">
            Sell
            <ChevronDown className="w-4 h-4 ml-1 text-[#5A5A5A]" />
          </div>

          <div className="cursor-pointer">Pricing</div>
          <div className="cursor-pointer">Why Listlly</div>

          {/* Resources (static for now) */}
          <div className="flex items-center cursor-pointer">
            Resources
            <ChevronDown className="w-4 h-4 ml-1 text-[#5A5A5A]" />
          </div>
        </nav>

        {/* Mobile Navigation (hamburger) */}
        <nav className="md:hidden flex items-center">
          <button
            className="text-[#0054F6] text-2xl p-2 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setBuyOpen((v) => !v)}
          >
            <span className="material-icons">menu</span>
          </button>
          {buyOpen && (
            <div className="absolute top-16 left-0 w-full bg-white border-t border-[#E5E7EB] shadow-lg z-50 flex flex-col">
              <Link to="/buy/homes_for_sale" className="px-6 py-4 border-b border-[#E5E7EB] text-[#1C1C1C] font-medium">Buy</Link>
              <Link to="#" className="px-6 py-4 border-b border-[#E5E7EB] text-[#1C1C1C] font-medium">Sell</Link>
              <Link to="#" className="px-6 py-4 border-b border-[#E5E7EB] text-[#1C1C1C] font-medium">Pricing</Link>
              <Link to="#" className="px-6 py-4 border-b border-[#E5E7EB] text-[#1C1C1C] font-medium">Why Listlly</Link>
              <Link to="#" className="px-6 py-4 text-[#1C1C1C] font-medium">Resources</Link>
            </div>
          )}
        </nav>

        {/* Register Button */}
        <button
          className="hidden md:inline-block text-white text-[13px] font-medium px-4 py-2 rounded shadow-sm"
          style={{
            background: "linear-gradient(90deg, #0054F6 0%, #0D47C1 100%)",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Header;
