import React, { useState, useRef } from "react";
import BuyerAgentModal from "./BuyerAgentModal";
import { X, CheckCircle, Upload } from "lucide-react";
import { IoLocationOutline } from "react-icons/io5";
import YesIcon from "../../../public/YesIcon.svg"
import NoIcon from "../../../public/NoIcon.svg"
import AllCash from "../../../public/AllCash.svg"
import Mortgage from "../../../public/Mortgage.svg"


function MakeAnOfferModal({
  closeMakeOfferModal,
  image,
}) {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [showBuyerAgentModal, setShowBuyerAgentModal] = useState(false);
  const [seenProperty, setSeenProperty] = useState("");
  const [financeMethod, setFinanceMethod] = useState("");
  const [exclusiveAgreement, setExclusiveAgreement] = useState("");
  const [hasPreApproval, setHasPreApproval] = useState("");
  
  // Form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dreeLicense: "",
    enterPrice: "",
    expireDate: ""
  });
  
  // OTP state
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef([]);
  const fileInputRef = useRef(null);
  const [preApprovalFile, setPreApprovalFile] = useState(null);

  const handleFileChange = (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) setPreApprovalFile(f);
  };

  const removeFile = () => {
    setPreApprovalFile(null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const finalizeUpload = () => {
    if (!preApprovalFile) {
      // if no file, open picker
      fileInputRef.current?.click();
      return;
    }

    // simulate upload (replace with real API call if available)
    console.log("Uploading pre-approval file:", preApprovalFile);
    // fake delay to simulate upload
    setTimeout(() => {
      alert("Pre-approval uploaded successfully.");
      handleClose();
    }, 400);
  };

  const handleOtpChange = (e, idx) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    if (val.length > 1) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < otp.length - 1) otpRefs.current[idx + 1]?.focus();
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      const next = [...otp];
      if (next[idx]) {
        next[idx] = "";
        setOtp(next);
      } else if (idx > 0) {
        otpRefs.current[idx - 1]?.focus();
        const prev = [...otp];
        prev[idx - 1] = "";
        setOtp(prev);
      }
    }
  };

  const resetModal = () => {
    setStep(1);
    setRole("");
    setSeenProperty("");
    setFinanceMethod("");
    setExclusiveAgreement("");
    setHasPreApproval("");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      dreeLicense: "",
      enterPrice: "",
      expireDate: ""
    });
    setOtp(["", "", "", "", "", ""]);
  };

  const handleClose = () => {
    resetModal();
    closeMakeOfferModal();
  };

  const PropertyHeader = () => (
    <div className="flex items-center gap-4 p-4 border-b bg-[#edf4ff]  mt-7">
      <img src={image} alt="property" className="w-28 h-20 object-cover rounded-lg shadow-sm" />
      <div className="flex-1">
        <div className="text-base font-semibold text-[#0D1C39]">123 Oak Street, Irvine, CA 92602</div>
        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
          <IoLocationOutline size={14} />
          <span>Rancho Santa Fe, CA 92067</span>
        </div>
        <div className="text-base font-bold text-[#0054F6] mt-2">$899,000</div>
        <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
          <span className="text-[#0054F6] font-medium">4</span>
          <span className="text-gray-400">beds</span>
          <span className="text-gray-300">•</span>
          <span className="text-[#0054F6] font-medium">3</span>
          <span className="text-gray-400">baths</span>
          <span className="text-gray-300">•</span>
          <span className="text-[#0054F6] font-medium">2,200</span>
          <span className="text-gray-400">sq ft</span>
        </div>
      </div>
    </div>
  );

  // Step 1: Choose Your Role
  if (step === 1) {
    if (showBuyerAgentModal) {
      return <BuyerAgentModal open={showBuyerAgentModal} onClose={() => setShowBuyerAgentModal(false)} initialStep={1} />;
    }
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-black" style={{ colorScheme: "light" }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={handleClose}></div>
        <div className="relative w-full max-w-md mx-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-6">Choose Your Role</h3>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
                <button
                  onClick={() => {
                    setRole("buyer");
                    setStep(2);
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-medium"
                >
                  A Buyer
                </button>
                <button
                  onClick={() => {
                    setRole("agent");
                    setShowBuyerAgentModal(true);
                  }}
                  className="w-full border border-gray-300 py-3 rounded-md font-medium "
                >
                  A Buyer's Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Have you seen this property in person?
  if (step === 2) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-black" style={{ colorScheme: "light" }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={handleClose}></div>
        <div className="relative w-full max-w-lg mx-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <PropertyHeader />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-6">Have you seen this property in person?</h3>
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setSeenProperty("yes")}
                  className={`flex-1 p-4 rounded-lg border-2 text-center ${
                    seenProperty === "yes" ? "border-blue-600 bg-blue-50" : "border-gray-200"
                  }`}
                >
                  <div className="mb-2 flex justify-center">
                    <img src={YesIcon} alt="Yes" className="w-12 h-12 sm:w-14 sm:h-14" />
                  </div>
                </button>
                <button
                  onClick={() => setSeenProperty("no")}
                  className={`flex-1 p-4 rounded-lg border-2 text-center ${
                    seenProperty === "no" ? "border-red-600 bg-red-50" : "border-gray-200"
                  }`}
                >
                  <div className="mb-2 flex justify-center">
                    <img src={NoIcon} alt="No" className="w-12 h-12 sm:w-14 sm:h-14" />
                  </div>
                </button>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-gray-300 py-2 rounded-md"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    if (seenProperty === "yes") {
                      setStep(3);
                    } else if (seenProperty === "no") {
                      setStep(10); // Showing request
                    }
                  }}
                  disabled={!seenProperty}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-md disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: How will you finance this purchase?
  if (step === 3) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-black" style={{ colorScheme: "light" }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={handleClose}></div>
        <div className="relative w-full max-w-lg mx-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <PropertyHeader />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-6">How will you finance this purchase?</h3>
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setFinanceMethod("cash")}
                  className={`flex-1 p-4 rounded-lg border-2 text-center ${
                    financeMethod === "cash" ? "border-blue-600 bg-blue-50" : "border-gray-200"
                  }`}
                >
                  <div className="mb-2 flex justify-center">
                    <img src={AllCash} alt="All Cash" className="w-12 h-12 sm:w-14 sm:h-14" />
                  </div>
                </button>
                <button
                  onClick={() => setFinanceMethod("mortgage")}
                  className={`flex-1 p-4 rounded-lg border-2 text-center ${
                    financeMethod === "mortgage" ? "border-red-600 bg-red-50" : "border-gray-200"
                  }`}
                >
                  <div className="mb-2 flex justify-center">
                    <img src={Mortgage} alt="Mortgage" className="w-12 h-12 sm:w-14 sm:h-14" />
                  </div>
                </button>
              </div>
              <button
                onClick={() => {
                  if (financeMethod === "cash") {
                    setStep(4);
                  } else if (financeMethod === "mortgage") {
                    setStep(8); // Pre-approval question
                  }
                }}
                disabled={!financeMethod}
                className="w-full bg-blue-600 text-white py-2 rounded-md disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 4: Exclusive Agency Agreement?
  if (step === 4) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-black" style={{ colorScheme: "light" }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={handleClose}></div>
        <div className="relative w-full max-w-lg mx-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <PropertyHeader />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-6">Have you signed an Exclusive Agency Agreement with an agent?</h3>
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setExclusiveAgreement("yes")}
                  className={`flex-1 p-4 rounded-lg border-2 text-center ${
                    exclusiveAgreement === "yes" ? "border-blue-600 bg-blue-50" : "border-gray-200"
                  }`}
                >
                  <div className="mb-2 flex justify-center">
                    <img src={YesIcon} alt="Yes" className="w-12 h-12 sm:w-14 sm:h-14" />
                  </div>
                </button>
                <button
                  onClick={() => setExclusiveAgreement("no")}
                  className={`flex-1 p-4 rounded-lg border-2 text-center ${
                    exclusiveAgreement === "no" ? "border-red-600 bg-red-50" : "border-gray-200"
                  }`}
                >
                  <div className="mb-2 flex justify-center">
                    <img src={NoIcon} alt="No" className="w-12 h-12 sm:w-14 sm:h-14" />
                  </div>
                </button>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 border border-gray-300 py-2 rounded-md"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    if (exclusiveAgreement === "yes") {
                      setStep(5); // Agent form
                    } else if (exclusiveAgreement === "no") {
                      setStep(6); // Contact form
                    }
                  }}
                  disabled={!exclusiveAgreement}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-md disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 5: Agent Contact & Quote Form
  if (step === 5) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-black" style={{ colorScheme: "light" }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={handleClose}></div>
        <div className="relative w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <PropertyHeader />
            <div className="p-6">
              <div className="text-sm text-gray-600 mb-4">
                By selecting Yes, you confirm that you have a signed Exclusive Agency Agreement and that your agent is required to submit the offer on your behalf.
              </div>
              <h3 className="text-lg font-semibold mb-4">Agent Contact & Quote Form</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.dreeLicense}
                    onChange={(e) => setFormData({...formData, dreeLicense: e.target.value})}
                    className="w-full border rounded-md px-3 py-2"
                    placeholder="Enter DRE License"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Enter Price</label>
                  <input
                    type="text"
                    value={formData.enterPrice}
                    onChange={(e) => setFormData({...formData, enterPrice: e.target.value})}
                    className="w-full border rounded-md px-3 py-2"
                    placeholder="Enter price"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Expire Date</label>
                  <input
                    type="date"
                    value={formData.expireDate}
                    onChange={(e) => setFormData({...formData, expireDate: e.target.value})}
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
              </div>
              <button
                onClick={() => setStep(7)}
                className="w-full bg-blue-600 text-white py-3 rounded-md mt-6"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 6: Contact & Quote Form (No Agent)
  if (step === 6) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-black" style={{ colorScheme: "light" }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={handleClose}></div>
        <div className="relative w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <PropertyHeader />
            <div className="p-6">
              <div className="text-sm text-gray-600 mb-4">
                By selecting Yes, you confirm that you have a signed Exclusive Agency Agreement and that your agent is required to submit the offer on your behalf.
              </div>
              <h3 className="text-lg font-semibold mb-4">Contact & Quote Form</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full border rounded-md px-3 py-2"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border rounded-md px-3 py-2"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full border rounded-md px-3 py-2"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Enter Price</label>
                  <input
                    type="text"
                    value={formData.enterPrice}
                    onChange={(e) => setFormData({...formData, enterPrice: e.target.value})}
                    className="w-full border rounded-md px-3 py-2"
                    placeholder="Enter price"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Expire Date</label>
                  <input
                    type="date"
                    value={formData.expireDate}
                    onChange={(e) => setFormData({...formData, expireDate: e.target.value})}
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
              </div>
              <button
                onClick={() => setStep(7)}
                className="w-full bg-blue-600 text-white py-3 rounded-md mt-6"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 7: Verify Contact Information
  if (step === 7) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-black" style={{ colorScheme: "light" }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={handleClose}></div>
        <div className="relative w-full max-w-md mx-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Verify Your Contact Information</h3>
              <p className="text-sm text-gray-500 mb-4">
                Enter 6-digit code sent to (019) 800-1235
              </p>
              <div className="flex justify-center gap-2 mb-4">
                {otp.map((v, idx) => (
                  <input
                    key={idx}
                    ref={(el) => (otpRefs.current[idx] = el)}
                    value={v}
                    onChange={(e) => handleOtpChange(e, idx)}
                    onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                    className="w-10 h-10 text-center rounded-md border"
                    maxLength={1}
                  />
                ))}
              </div>
              <div className="text-sm text-blue-600 mb-4">
                <button onClick={() => setOtp(["", "", "", "", "", ""])}>
                  🔄 Resend Code
                </button>
              </div>
              <button
                onClick={() => setStep(99)}
                className="w-full bg-blue-600 text-white py-3 rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 8: Pre-approval question
  if (step === 8) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-black" style={{ colorScheme: "light" }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={handleClose}></div>
        <div className="relative w-full max-w-lg mx-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <PropertyHeader />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-6">Do You Have a Pre-Approval?</h3>
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setHasPreApproval("yes")}
                  className={`flex-1 p-4 rounded-lg border-2 text-center ${
                    hasPreApproval === "yes" ? "border-blue-600 bg-blue-50" : "border-gray-200"
                  }`}
                >
                  <div className="mb-2 flex justify-center">
                    <img src={YesIcon} alt="Yes" className="w-12 h-12 sm:w-14 sm:h-14" />
                  </div>
                </button>
                <button
                  onClick={() => setHasPreApproval("no")}
                  className={`flex-1 p-4 rounded-lg border-2 text-center ${
                    hasPreApproval === "no" ? "border-red-600 bg-red-50" : "border-gray-200"
                  }`}
                >
                  <div className="mb-2 flex justify-center">
                    <img src={NoIcon} alt="No" className="w-12 h-12 sm:w-14 sm:h-14" />
                  </div>
                </button>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 border border-gray-300 py-2 rounded-md"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    if (hasPreApproval === "yes") {
                      setStep(91); // Upload pre-approval
                    } else if (hasPreApproval === "no") {
                      setStep(92); // Get pre-approval
                    }
                  }}
                  disabled={!hasPreApproval}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-md disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 10: Showing Request (when haven't seen property)
  if (step === 10) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-black" style={{ colorScheme: "light" }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={handleClose}></div>
        <div className="relative w-full max-w-xl mx-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="py-3 font-bold ml-4 text-lg">
              <span>Listlly's 1-Minute Showing Request</span>
            </div>
            <img src={image} alt="hero" className="w-full h-40 object-cover" />
            <div className="px-5 py-4">
              <div className="justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-sm">
                    <div className="font-medium mb-3">123 Oak Street, Irvine, CA 92602</div>
                    <div className="flex justify-start items-center gap-1">
                      <IoLocationOutline />
                      <div className="text-xs text-gray-500">Rancho Santa Fe, CA 92067</div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[#0054F6] font-bold mt-2">$899,000</div>
                <div className="text-sm text-gray-500">
                  <span className="text-[#0054F6] font-medium">4</span> beds <span className="mx-2">•</span>
                  <span className="text-[#0054F6] font-medium">3</span> baths <span className="mx-2">•</span>
                  <span className="text-[#0054F6] font-medium">2,200</span> sq ft
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-sm font-medium mb-2">Select Date</div>
                <div className="flex gap-2 overflow-x-auto">
                  {["Mon 11", "Tue 12", "Wed 13", "Thu 14", "Fri 15"].map((d) => (
                    <button
                      key={d}
                      className="min-w-[84px] px-3 py-2 rounded-lg border border-gray-200"
                    >
                      <div className="font-medium">{d.split(" ")[0]}</div>
                      <div className="text-xs text-gray-500">{d.split(" ")[1]} August</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-medium mb-2">Select Time</div>
                <div className="flex gap-2 overflow-x-auto">
                  {["9:00AM", "10:00AM", "11:00AM", "12:00PM"].map((t) => (
                    <button
                      key={t}
                      className="px-3 py-2 rounded-lg border border-gray-200"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm text-gray-700 block mb-2">Enter Phone Number</label>
                <input
                  className="w-full border rounded-md px-3 py-3 bg-white text-black"
                  placeholder="Enter phone number"
                />
              </div>

              <button
                onClick={() => setStep(11)}
                className="w-full bg-blue-600 text-white py-3 rounded-md"
              >
                Schedule Showing
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 11: Verify for showing
  if (step === 11) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-black" style={{ colorScheme: "light" }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={handleClose}></div>
        <div className="relative w-full max-w-md mx-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Verify Your Contact Information</h3>
              <p className="text-sm text-gray-500 mb-4">
                Enter 6-digit code sent to (019) 800-1235 📱
              </p>
              <div className="flex justify-center gap-2 mb-4">
                {otp.map((v, idx) => (
                  <input
                    key={idx}
                    ref={(el) => (otpRefs.current[idx] = el)}
                    value={v}
                    onChange={(e) => handleOtpChange(e, idx)}
                    onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                    className="w-10 h-10 text-center rounded-md border"
                    maxLength={1}
                  />
                ))}
              </div>
              <div className="text-sm text-blue-600 mb-4">
                <button onClick={() => setOtp(["", "", "", "", "", ""])}>
                  🔄 Resend Code
                </button>
              </div>
              <button
                onClick={() => setStep(12)}
                className="w-full bg-blue-600 text-white py-3 rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 12: Schedule Confirmed
  if (step === 12) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-black" style={{ colorScheme: "light" }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={handleClose}></div>
        <div className="relative w-full max-w-md mx-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-center">
              <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
              <h3 className="text-lg font-semibold">Schedule Confirmed</h3>
              <p className="text-sm text-gray-500 mt-2 mb-6">
                Your agent will guide you through each step
              </p>
              <button
                onClick={handleClose}
                className="w-full bg-blue-600 text-white py-3 rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 91: Upload Pre-Approval
  if (step === 91) {
    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-black" style={{ colorScheme: 'light' }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={handleClose} />
        <div className="relative w-full max-w-lg mx-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <PropertyHeader />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-6">Upload Pre-Approval</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-6">
                <input ref={fileInputRef} type="file" accept=".pdf,image/*" onChange={handleFileChange} className="hidden" />
                {!preApprovalFile ? (
                  <div role="button" tabIndex={0} onClick={() => fileInputRef.current?.click()} className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div className="w-20 h-20 flex items-center justify-center">
                        <UploadIcon />
                      </div>
                      <div className="text-sm font-medium mb-1">Upload File</div>
                      <div className="text-xs text-gray-500">Drag files here or click browse through your machine</div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-medium">{preApprovalFile.name}</div>
                      <div className="text-xs text-gray-500">{(preApprovalFile.size / 1024).toFixed(1)} KB</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => fileInputRef.current?.click()} className="px-3 py-1 border rounded-md text-sm">Replace</button>
                      <button onClick={removeFile} className="px-3 py-1 bg-red-50 text-red-600 border border-red-100 rounded-md text-sm">Remove</button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="flex-1 border border-gray-300 py-2 rounded-md">Back</button>
                <button onClick={() => preApprovalFile ? finalizeUpload() : fileInputRef.current?.click()} className="flex-1 bg-blue-600 text-white py-2 rounded-md">{preApprovalFile ? 'Complete Upload' : 'Upload File'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 92: Get Pre-approval
  if (step === 92) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-black" style={{ colorScheme: "light" }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={handleClose}></div>
        <div className="relative w-full max-w-lg mx-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <PropertyHeader />
              <div className="p-6 text-center">
              <button
                onClick={() => { alert("Pre-approval requested successfully."); handleClose(); }}
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md mb-4"
              >
                Get Pre - approval
              </button>
              <div className="text-sm text-gray-500">
                Get pre approved in 30 min
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 99: Final Success
  if (step === 99) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-black" style={{ colorScheme: "light" }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={handleClose}></div>
        <div className="relative w-full max-w-md mx-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-center">
              <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
              <h3 className="text-lg font-semibold">Rahim, Your offer has been submitted</h3>
              <p className="text-sm text-gray-500 mt-2 mb-6">
                Your agent will guide you through each step
              </p>
              <button
                onClick={handleClose}
                className="w-full bg-blue-600 text-white py-3 rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default MakeAnOfferModal;