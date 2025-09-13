import React, { useState, useRef, useEffect } from "react";

const garageOptions = ["Any", "1+", "2+", "3+", "4+", "5+"];
const selectOptions = ["Select", "Option 1", "Option 2"];

export default function FiltersPanel({ onApply }) {
  const [open, setOpen] = useState(false);
  const [garage, setGarage] = useState("Any");
  const [outdoor, setOutdoor] = useState(false);
  const [keyword, setKeyword] = useState("");
  const ref = useRef(null);

  // Dummy state for all dropdowns
  const [dropdowns, setDropdowns] = useState({});

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleApply = () => {
    onApply?.({ garage, outdoor, ...dropdowns, keyword });
    setOpen(false);
  };

  const handleDropdown = (name, value) => {
    setDropdowns((prev) => ({ ...prev, [name]: value }));
  };

  const resetAll = () => {
    setGarage("Any");
    setOutdoor(false);
    setDropdowns({});
    setKeyword("");
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="h-10 px-3 rounded-md border text-sm flex items-center gap-2"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", color: "#1C1C1C" }}
      >
        <svg className="w-4 h-4" style={{ color: "#5A5A5A" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 11v-7m0 0l-2 2m2-2l2 2" /></svg>
        Filters
      </button>
      {open && (
        <div
          className="absolute left-0 right-0 z-50 mt-2 mx-4 sm:mx-0 sm:left-auto sm:right-0 sm:w-[350px] rounded-xl shadow-[0_16px_30px_rgba(0,0,0,0.12)]"
          style={{ background: "#fff", border: "1px solid #E5E7EB" }}
        >
          <div className="p-4 sm:p-5 max-h-[90vh] overflow-y-auto flex flex-col gap-3">
            {/* Price Reduced */}
            <div>
              <div className="font-semibold mb-1" style={{ color: "#1C1C1C" }}>Price Reduced</div>
              <select className="w-full h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} value={dropdowns.priceReduced || "For Sale"} onChange={e => handleDropdown('priceReduced', e.target.value)}>
                <option>For Sale</option>
                <option>Sold</option>
              </select>
            </div>
            {/* Max Listlly */}
            <div>
              <div className="font-semibold mb-1" style={{ color: "#1C1C1C" }}>Max Listlly</div>
              <select className="w-full h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} value={dropdowns.maxListlly || "For Sale"} onChange={e => handleDropdown('maxListlly', e.target.value)}>
                <option>For Sale</option>
                <option>Sold</option>
              </select>
            </div>
            {/* Year Built & Square Feet */}
            <div className="flex gap-2">
              <div className="flex-1">
                <div className="font-semibold mb-1" style={{ color: "#1C1C1C" }}>Year Built</div>
                <div className="flex gap-2">
                  <input className="w-1/2 h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} placeholder="Min" value={dropdowns.yearBuiltMin || ""} onChange={e => handleDropdown('yearBuiltMin', e.target.value)} />
                  <input className="w-1/2 h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} placeholder="Max" value={dropdowns.yearBuiltMax || ""} onChange={e => handleDropdown('yearBuiltMax', e.target.value)} />
                </div>
              </div>
              <div className="flex-1">
                <div className="font-semibold mb-1" style={{ color: "#1C1C1C" }}>Square Feet</div>
                <div className="flex gap-2">
                  <input className="w-1/2 h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} placeholder="No Min" value={dropdowns.sqftMin || ""} onChange={e => handleDropdown('sqftMin', e.target.value)} />
                  <input className="w-1/2 h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} placeholder="No Max" value={dropdowns.sqftMax || ""} onChange={e => handleDropdown('sqftMax', e.target.value)} />
                </div>
              </div>
            </div>
            {/* Price Reduced (again) */}
            <div>
              <div className="font-semibold mb-1" style={{ color: "#1C1C1C" }}>Price Reduced</div>
              <div className="flex gap-2">
                <select className="w-1/2 h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} value={dropdowns.priceReducedMin || "No Min"} onChange={e => handleDropdown('priceReducedMin', e.target.value)}>
                  <option>No Min</option>
                  <option>10000</option>
                  <option>20000</option>
                </select>
                <select className="w-1/2 h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} value={dropdowns.priceReducedMax || "No Max"} onChange={e => handleDropdown('priceReducedMax', e.target.value)}>
                  <option>No Max</option>
                  <option>100000</option>
                  <option>200000</option>
                </select>
              </div>
            </div>
            {/* Garage Spots */}
            <div>
              <div className="font-semibold mb-1" style={{ color: "#1C1C1C" }}>Garage Spots</div>
              <div className="flex gap-2 mb-2">
                {garageOptions.map((opt) => (
                  <button
                    key={opt}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border ${garage === opt ? "bg-[#2563eb] text-white" : "bg-[#f5f8ff] text-[#2563eb] border-transparent"}`}
                    style={garage === opt ? { borderColor: "#2563eb" } : {}}
                    onClick={() => setGarage(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-2 mb-4 cursor-pointer text-sm" style={{ color: '#1C1C1C' }}>
                <input
                  type="checkbox"
                  checked={outdoor}
                  onChange={() => setOutdoor((v) => !v)}
                  className="accent-[#2563eb]"
                />
                Include Outdoor Parking
              </label>
            </div>
            {/* Must Have */}
            <div>
              <div className="font-semibold mb-1" style={{ color: "#1C1C1C" }}>Must Have</div>
              <select className="w-full h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} value={dropdowns.mustHave || "Select"} onChange={e => handleDropdown('mustHave', e.target.value)}>
                {selectOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            {/* More Home Types */}
            <div>
              <div className="font-semibold mb-1" style={{ color: "#1C1C1C" }}>More Home Types</div>
              <select className="w-full h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} value={dropdowns.moreHomeTypes || "Select"} onChange={e => handleDropdown('moreHomeTypes', e.target.value)}>
                {selectOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            {/* Tour */}
            <div>
              <div className="font-semibold mb-1" style={{ color: "#1C1C1C" }}>Tour</div>
              <select className="w-full h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} value={dropdowns.tour || "Select"} onChange={e => handleDropdown('tour', e.target.value)}>
                {selectOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            {/* Listing Type */}
            <div>
              <div className="font-semibold mb-1" style={{ color: "#1C1C1C" }}>Listing Type</div>
              <select className="w-full h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} value={dropdowns.listingType || "Select"} onChange={e => handleDropdown('listingType', e.target.value)}>
                {selectOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            {/* Architectural Style */}
            <div>
              <div className="font-semibold mb-1" style={{ color: "#1C1C1C" }}>Architectural Style</div>
              <select className="w-full h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} value={dropdowns.archStyle || "Select"} onChange={e => handleDropdown('archStyle', e.target.value)}>
                {selectOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            {/* View */}
            <div>
              <div className="font-semibold mb-1" style={{ color: "#1C1C1C" }}>View</div>
              <select className="w-full h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} value={dropdowns.view || "Select"} onChange={e => handleDropdown('view', e.target.value)}>
                {selectOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            {/* Community Details */}
            <div>
              <div className="font-semibold mb-1" style={{ color: "#1C1C1C" }}>Community Details</div>
              <select className="w-full h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} value={dropdowns.communityDetails || "Select"} onChange={e => handleDropdown('communityDetails', e.target.value)}>
                {selectOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            {/* Days On Listlly */}
            <div>
              <div className="font-semibold mb-1" style={{ color: "#1C1C1C" }}>Days On Listlly</div>
              <select className="w-full h-10 rounded-md border px-3 text-sm" style={{ borderColor: '#E5E7EB', background: '#fff' }} value={dropdowns.daysOnListlly || "Any"} onChange={e => handleDropdown('daysOnListlly', e.target.value)}>
                <option>Any</option>
                <option>1</option>
                <option>7</option>
                <option>30</option>
              </select>
            </div>
            {/* Keyword */}
            <div>
              <div className="font-semibold mb-1" style={{ color: "#1C1C1C" }}>Keyword</div>
              <div className="relative">
                <input
                  className="w-full h-10 rounded-md border px-3 text-sm pr-10"
                  style={{ borderColor: '#E5E7EB', background: '#fff' }}
                  placeholder="Search by Garage, Pool, etc"
                  value={keyword}
                  onChange={e => setKeyword(e.target.value)}
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex gap-2 mt-2">
              <button
                className="flex-1 h-10 rounded-md border text-[#eb4e3d] font-semibold border-[#eb4e3d] bg-white"
                onClick={resetAll}
              >
                Reset
              </button>
              <button
                onClick={handleApply}
                className="flex-1 h-10 rounded-md text-white font-semibold"
                style={{ background: "linear-gradient(90deg, #2563eb 0%, #1e40af 100%)" }}
              >
                Find
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
