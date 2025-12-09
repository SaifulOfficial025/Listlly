import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

export default function AddressForm({
  buttonText = "Get Started",
  className = "",
  onSubmit,
}) {
  const [address, setAddress] = useState("");
  const [suite, setSuite] = useState("");

  const handleSubmit = (e) => {
    e && e.preventDefault && e.preventDefault();
    if (onSubmit) onSubmit({ address, suite });
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="bg-white rounded-2xl p-3 flex items-center gap-3 shadow-[0_10px_40px_rgba(13,71,193,0.18)]">
        <div className="relative flex-1">
          <IoLocationOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full h-14 pl-12 bg-[#ebeff5] pr-4 rounded-lg border border-white/0 outline-none text-gray-700 placeholder-gray-700"
            placeholder="Enter your address"
          />
        </div>

        <input
          value={suite}
          onChange={(e) => setSuite(e.target.value)}
          className="bg-[#ebeff5] w-32 h-14 px-3 rounded-lg border border-white/0 outline-none text-gray-700 placeholder-gray-700"
          placeholder="Suite"
        />

        <button
          type="submit"
          className="bg-[#0b5aa5] text-white rounded-lg px-6 py-3 font-semibold shadow-md"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}
