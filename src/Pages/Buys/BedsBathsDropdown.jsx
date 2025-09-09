import React, { useState, useRef, useEffect } from "react";

const bedOptions = ["Any", "1+", "2+", "3+", "4+", "5+"];
const bathOptions = ["Any", "1+", "2+", "3+", "4+", "5+"];

export default function BedsBathsDropdown({ onApply }) {
  const [open, setOpen] = useState(false);
  const [selectedBed, setSelectedBed] = useState("Any");
  const [selectedBath, setSelectedBath] = useState("Any");
  const [exactMatch, setExactMatch] = useState(false);
  const ref = useRef(null);

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
    onApply?.({ beds: selectedBed, baths: selectedBath, exact: exactMatch });
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="h-10 px-3 rounded-md border text-sm flex items-center gap-2"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", color: "#1C1C1C" }}
      >
        Beds & Baths
        <svg className="w-4 h-4" style={{ color: "#5A5A5A" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div
          className="absolute left-0 right-0 z-50 mt-2 mx-4 sm:mx-0 sm:left-auto sm:right-0 sm:w-[340px] rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
          style={{ background: "#fff", border: "1px solid #E5E7EB" }}
        >
          <div className="p-4 sm:p-5">
            <div className="font-semibold mb-2" style={{ color: "#1C1C1C" }}>Beds</div>
            <div className="flex gap-2 mb-2">
              {bedOptions.map((opt) => (
                <button
                  key={opt}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border ${selectedBed === opt ? "bg-[#2563eb] text-white" : "bg-[#f5f8ff] text-[#2563eb] border-transparent"}`}
                  style={selectedBed === opt ? { borderColor: "#2563eb" } : {}}
                  onClick={() => setSelectedBed(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="font-semibold mb-2" style={{ color: "#1C1C1C" }}>Baths</div>
            <div className="flex gap-2 mb-6">
              {bathOptions.map((opt) => (
                <button
                  key={opt}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border ${selectedBath === opt ? "bg-[#2563eb] text-white" : "bg-[#f5f8ff] text-[#2563eb] border-transparent"}`}
                  style={selectedBath === opt ? { borderColor: "#2563eb" } : {}}
                  onClick={() => setSelectedBath(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button
              onClick={handleApply}
              className="w-full h-10 rounded-md text-white font-semibold"
              style={{ background: "linear-gradient(90deg, #2563eb 0%, #1e40af 100%)" }}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
