import React from "react";
import Logo from "../../../public/Listlly-logo.svg";

import MailImage from "../../../public/mailbox.svg";
import { Link } from "react-router-dom";

function ForgetPasswordEmail() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      style={{
        backgroundImage: `url('/ForgotPasswordBg.svg')`, // Direct path from public folder
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ensure the image covers the full screen
        backgroundPosition: "center", // Center the image
        backgroundColor: "#f9f9f9", // Fallback background color
        colorScheme: "light" // prevent dark mode colors
      }}
    >
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <img src={Logo} alt="Listlly Logo" className="w-24 h-auto" />
      </div>

      {/* Mail Icon */}
      <img src={MailImage} alt="Mail Icon" className="w-20 h-20 mb-4" />

      {/* Title */}
      <h1 className="text-[26px] font-semibold text-gray-900 text-center">
        Forgot Your Password
      </h1>
      <p className="text-[14px] text-gray-500 mt-1 text-center mb-6">
        Enter your mail that we provide you a reset PIN
      </p>

      {/* Input and Button */}
      <div className="w-full max-w-md">
        <label className="text-sm text-gray-700 mb-1 block">Email Address</label>
        <input
          type="email"
          placeholder=""
          className="w-full h-11 px-3 rounded-md border border-gray-300 text-sm outline-none mb-4 bg-white text-gray-900"
        />
        <Link to="/forgot_password_verify_email">
        <button
          className="w-full h-11 rounded-md text-white font-semibold shadow-md"
          style={{
            background: "linear-gradient(90deg, #0054F6 0%, #0D47C1 100%)"
          }}
        >
          Send Mail
        </button></Link>
      </div>
    </div>
  );
}

export default ForgetPasswordEmail;
