import React, { useState, useRef, useEffect } from "react";

const propertyTypes = [
  { label: "Single Family", icon: "🏠" },
  { label: "Townhouse", icon: "\u{1F3E2}" },
  { label: "Manufactured", icon: "\u{1F3D8}" },
  { label: "Multi-Family", icon: "\u{1F3E3}" },
  { label: "Condo/Co-op", icon: "\u{1F3E0}" },
];

export default function HomeTypeDropdown({ onApply }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([propertyTypes[0].label]);
  const [selectAll, setSelectAll] = useState(true);
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

  const handleTypeClick = (label) => {
    if (selectAll) setSelectAll(false);
    if (selected.includes(label)) {
      setSelected(selected.filter((l) => l !== label));
    } else {
      setSelected([...selected, label]);
    }
  };

  const handleSelectAll = () => {
    setSelectAll((v) => {
      if (!v) {
        setSelected(propertyTypes.map((t) => t.label));
      } else {
        setSelected([]);
      }
      return !v;
    });
  };

  const handleApply = () => {
    onApply?.(selectAll ? "All" : selected);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="h-10 px-3 rounded-md border text-sm flex items-center gap-2"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", color: "#1C1C1C" }}
      >
        Home Type
        <svg className="w-4 h-4" style={{ color: "#5A5A5A" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div
          className="absolute left-0 right-0 z-50 mt-2 mx-4 sm:mx-0 sm:left-auto sm:right-0 sm:w-[370px] rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
          style={{ background: "#fff", border: "1px solid #E5E7EB" }}
        >
          <div className="p-4 sm:p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold" style={{ color: "#1C1C1C" }}>Property</div>
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <span className="text-sm" style={{ color: '#1C1C1C' }}>Select All</span>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="accent-[#2563eb] w-5 h-5 rounded-full"
                  style={{ accentColor: '#2563eb' }}
                />
              </label>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {propertyTypes.map((t, i) => (
                <button
                  key={t.label + i}
                  className={`flex flex-col items-center justify-center px-2 py-3 rounded-lg border text-xs font-medium gap-1 ${selected.includes(t.label) || selectAll ? "bg-[#2563eb] text-white" : "bg-[#f5f8ff] text-[#2563eb] border-transparent"}`}
                  style={selected.includes(t.label) || selectAll ? { borderColor: "#2563eb" } : {}}
                  onClick={() => handleTypeClick(t.label)}
                >
                  <span style={{ fontSize: 22 }}>{t.icon}</span>
                  {t.label}
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
