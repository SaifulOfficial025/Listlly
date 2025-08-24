import React, { useState, useRef } from "react";
import Logo from "../../../public/Listlly-logo.svg";
import ShieldIcon from "../../../public/shield.svg"; // Replace with your verification icon if different
import { Link } from "react-router-dom";

function ForgetPasswordVerifyEmail() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) return; // Prevent multiple characters

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-shift to next box
    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      // Auto-shift to previous box
      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      style={{
        backgroundImage: `url('/ForgotPasswordBg.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f9f9f9",
        colorScheme: "light",
      }}
    >
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <img src={Logo} alt="Listlly Logo" className="w-24 h-auto" />
      </div>

      {/* Icon */}
      <img src={ShieldIcon} alt="Shield Icon" className="w-20 h-20 mb-4" />

      {/* Title */}
      <h1 className="text-[26px] font-semibold text-gray-900 text-center">
        Verify Your Email
      </h1>
      <p className="text-[14px] text-gray-500 mt-1 text-center mb-6">
        Enter the PIN we sent to your email address
      </p>

      {/* OTP Input Section */}
      <div className="w-full max-w-md flex justify-center gap-2 mb-6">
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 text-center rounded-md border border-gray-300 text-lg outline-none bg-blue-500 text-white font-bold shadow-sm"
          />
        ))}
      </div>

      {/* Button */}
      <div className="w-full max-w-md">
        <Link to="/new_password">
          <button
            className="w-full h-12 rounded-md text-white font-semibold shadow-md mb-4"
            style={{
              background: "linear-gradient(90deg, #0054F6 0%, #0D47C1 100%)",
              fontSize: "16px",
            }}
          >
            Done
          </button>
        </Link>
      </div>

      {/* Resend Link */}
      <p className="text-sm text-center text-gray-500">
        Didn't receive the PIN?{" "}
        <a href="#" className="text-blue-600 font-semibold hover:underline">
          Resend
        </a>
      </p>
    </div>
  );
}

export default ForgetPasswordVerifyEmail;
