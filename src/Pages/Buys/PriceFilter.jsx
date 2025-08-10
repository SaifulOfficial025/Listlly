import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown, DollarSign } from "lucide-react";

export default function PriceFilter({ onApply, initialMin = 200000, initialMax = 1000000 }) {
  const [open, setOpen] = useState(false);
  
  // Predefined price ranges
  const PRICE_RANGES = [
    { label: "Under $200K", min: 0, max: 200000 },
    { label: "$200K - $500K", min: 200000, max: 500000 },
    { label: "$500K - $800K", min: 500000, max: 800000 },
    { label: "$800K - $1.2M", min: 800000, max: 1200000 },
    { label: "$1.2M - $1.8M", min: 1200000, max: 1800000 },
    { label: "Over $1.8M", min: 1800000, max: 2000000 },
  ];
  
  // State for selected range
  const [selectedRange, setSelectedRange] = useState(null);
  const [customMin, setCustomMin] = useState(initialMin.toLocaleString());
  const [customMax, setCustomMax] = useState(initialMax.toLocaleString());
  const [isCustom, setIsCustom] = useState(false);
  
  const ref = useRef(null);

  // Close on click outside / Esc
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

  // Format number for display
  const formatNumber = useCallback((num) => {
    if (num === 0) return "0";
    return num.toLocaleString();
  }, []);

  // Parse input string to number
  const parseInput = useCallback((input) => {
    const cleaned = input.replace(/[^\d]/g, "");
    return cleaned ? Number(cleaned) : 0;
  }, []);

  // Handle range selection
  const handleRangeSelect = (range) => {
    setSelectedRange(range);
    setIsCustom(false);
    setCustomMin(formatNumber(range.min));
    setCustomMax(formatNumber(range.max));
  };

  // Handle custom toggle
  const handleCustomToggle = () => {
    setIsCustom(true);
    setSelectedRange(null);
  };

  // Handle input changes
  const handleMinChange = (value) => {
    setCustomMin(value);
    setIsCustom(true);
    setSelectedRange(null);
  };

  const handleMaxChange = (value) => {
    setCustomMax(value);
    setIsCustom(true);
    setSelectedRange(null);
  };

  // Handle input blur
  const handleInputBlur = (type, value) => {
    const numValue = parseInput(value);
    const formatted = formatNumber(numValue);
    if (type === 'min') {
      setCustomMin(formatted);
    } else {
      setCustomMax(formatted);
    }
  };

  const apply = () => {
    let minVal, maxVal;
    
    if (selectedRange) {
      minVal = selectedRange.min;
      maxVal = selectedRange.max;
    } else {
      minVal = parseInput(customMin);
      maxVal = parseInput(customMax);
    }
    
    // Ensure min is less than max
    if (minVal >= maxVal) {
      maxVal = minVal + 50000;
      setCustomMax(formatNumber(maxVal));
    }
    
    onApply?.(minVal, maxVal);
    setOpen(false);
  };

  const reset = () => {
    setSelectedRange(null);
    setIsCustom(false);
    setCustomMin(formatNumber(initialMin));
    setCustomMax(formatNumber(initialMax));
  };

  const getCurrentRange = () => {
    if (selectedRange) {
      return `${selectedRange.label}`;
    }
    if (isCustom || customMin !== formatNumber(initialMin) || customMax !== formatNumber(initialMax)) {
      return `$${customMin} - $${customMax}`;
    }
    return 'Price Filter';
  };

  return (
    <div className="relative" ref={ref}>
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="h-10 px-4 rounded-lg border text-sm flex items-center gap-2 hover:bg-gray-50 transition-all duration-200 shadow-sm"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", color: "#1C1C1C" }}
      >
        <DollarSign className="w-4 h-4" style={{ color: "#6B7280" }} />
        <span className="font-medium">{getCurrentRange()}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
          style={{ color: "#6B7280" }} 
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-2 w-[350px] rounded-xl shadow-xl border backdrop-blur-sm"
             style={{ 
               background: "rgba(255, 255, 255, 0.95)", 
               borderColor: "#E5E7EB",
               boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
             }}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold flex items-center gap-2" style={{ color: "#1C1C1C" }}>
                <DollarSign className="w-5 h-5 text-blue-600" />
                Price Range
              </h3>
              <button
                onClick={reset}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
              >
                Clear
              </button>
            </div>

            {/* Quick Select Ranges */}
            <div className="space-y-2 mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Select</h4>
              <div className="grid grid-cols-2 gap-2">
                {PRICE_RANGES.map((range, index) => (
                  <button
                    key={index}
                    onClick={() => handleRangeSelect(range)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
                      selectedRange === range
                        ? 'bg-blue-50 border-blue-200 text-blue-700'
                        : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Range */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-700">Custom Range</h4>
                <button
                  onClick={handleCustomToggle}
                  className={`text-xs px-2 py-1 rounded-md transition-colors ${
                    isCustom 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {isCustom ? 'Active' : 'Enable'}
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium mb-2 text-gray-600">
                    Minimum Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input
                      value={customMin}
                      onChange={(e) => handleMinChange(e.target.value)}
                      onBlur={(e) => handleInputBlur('min', e.target.value)}
                      onFocus={handleCustomToggle}
                      placeholder="0"
                      className={`h-11 w-full pl-7 pr-3 rounded-lg text-sm outline-none transition-all duration-200 ${
                        isCustom 
                          ? 'border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100'
                          : 'border-gray-200 focus:border-gray-300'
                      }`}
                      style={{
                        border: "1px solid",
                        background: "#FFFFFF",
                        color: "#1C1C1C",
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium mb-2 text-gray-600">
                    Maximum Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input
                      value={customMax}
                      onChange={(e) => handleMaxChange(e.target.value)}
                      onBlur={(e) => handleInputBlur('max', e.target.value)}
                      onFocus={handleCustomToggle}
                      placeholder="No limit"
                      className={`h-11 w-full pl-7 pr-3 rounded-lg text-sm outline-none transition-all duration-200 ${
                        isCustom 
                          ? 'border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100'
                          : 'border-gray-200 focus:border-gray-300'
                      }`}
                      style={{
                        border: "1px solid",
                        background: "#FFFFFF",
                        color: "#1C1C1C",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 h-11 rounded-lg text-gray-700 font-medium border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={apply}
                className="flex-1 h-11 rounded-lg text-white font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
                style={{ 
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                }}
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}