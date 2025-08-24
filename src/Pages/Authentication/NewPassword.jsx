import React, { useState } from "react";
import Logo from "../../../public/Listlly-logo.svg";
import ShieldIcon from "../../../public/shield.svg"; // Or your "check shield" icon
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
function NewPassword() {
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      style={{
        backgroundImage: `url('/ForgotPasswordBg.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f9f9f9",
        colorScheme: "light", // Force light styling
      }}
    >
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <img src={Logo} alt="Listlly Logo" className="w-24 h-auto" />
      </div>

      {/* Shield Icon */}
      <img src={ShieldIcon} alt="Shield Icon" className="w-20 h-20 mb-4" />

      {/* Title */}
      <h1 className="text-[26px] font-semibold text-gray-900 text-center mb-6">
        Welcome Back
      </h1>

      {/* Input fields */}
      <div className="w-full max-w-md">
        {/* New Password */}
        <div className="relative mb-4">
          <label className="text-sm text-gray-700 mb-1 block">New Password</label>
          <input
            type={showPwd ? "text" : "password"}
            className="w-full h-11 px-3 pr-10 rounded-md border border-gray-300 text-sm outline-none bg-white text-gray-900"
            placeholder=""
          />
          <button
            type="button"
            onClick={() => setShowPwd((v) => !v)}
            className="absolute right-3 top-[38px]"
            aria-label="Toggle new password visibility"
          >
            {showPwd ? <Eye size={18} color="#6B7280" /> : <EyeOff size={18} color="#6B7280" />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative mb-4">
          <label className="text-sm text-gray-700 mb-1 block">Confirm Password</label>
          <input
            type={showPwd2 ? "text" : "password"}
            className="w-full h-11 px-3 pr-10 rounded-md border border-gray-300 text-sm outline-none bg-white text-gray-900"
            placeholder=""
          />
          <button
            type="button"
            onClick={() => setShowPwd2((v) => !v)}
            className="absolute right-3 top-[38px]"
            aria-label="Toggle confirm password visibility"
          >
            {showPwd2 ? <Eye size={18} color="#6B7280" /> : <EyeOff size={18} color="#6B7280" />}
          </button>
        </div>


        {/* Submit */}
        <Link to="/signin">
        <button
          className="w-full h-11 rounded-md text-white font-semibold shadow-md"
          style={{
            background: "linear-gradient(90deg, #0054F6 0%, #0D47C1 100%)",
          }}
        >
          Confirm
        </button>
        </Link>
      </div>
    </div>
  );
}

export default NewPassword;
