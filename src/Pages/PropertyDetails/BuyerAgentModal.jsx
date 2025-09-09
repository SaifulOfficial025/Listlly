// Clean BuyerAgentModal implementation

import React, { useState, useEffect, useRef } from 'react';
import AllCash from '../../../public/AllCash.svg';
import Mortgage from '../../../public/Mortgage.svg';
import { IoLocationOutline } from "react-icons/io5";
import { CheckCircle } from 'lucide-react';



const UploadIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <rect width="64" height="64" rx="8" fill="#F8FAFF" />
    <path d="M32 16v22" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 24l8-8 8 8" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="14" y="46" width="36" height="6" rx="2" fill="#2563eb" opacity="0.08" />
  </svg>
);

const BuyerAgentModal = ({ open, onClose, initialStep = 1 }) => {
  const [step, setStep] = useState(initialStep);
  const [financeMethod, setFinanceMethod] = useState('');
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', dreeLicense: '', enterPrice: '', expireDate: '' });
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpRefs = useRef([]);

  // mortgage upload state
  const [preApprovalFile, setPreApprovalFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (open) setStep(initialStep);
  }, [open, initialStep]);

  const resetModal = () => {
    setStep(1);
    setFinanceMethod('');
    setFormData({ fullName: '', email: '', phone: '', dreeLicense: '', enterPrice: '', expireDate: '' });
    setOtp(['', '', '', '', '', '']);
    setPreApprovalFile(null);
  };

  const handleClose = () => {
    resetModal();
    onClose?.();
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);
    if (value && index < otp.length - 1) otpRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleFileChange = (e) => {
    const f = e.target.files?.[0] || null;
    setPreApprovalFile(f);
  };
  const removeFile = () => setPreApprovalFile(null);
  const finalizeUpload = () => setStep(4);

  const PropertyHeader = () => (
        <div className="flex items-center gap-4 p-4 border-b bg-[#edf4ff]  mt-7">
          {/* <img src={image} alt="property" className="w-28 h-20 object-cover rounded-lg shadow-sm" /> */}
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

  if (!open) return null;

  // Dedicated overlay for mortgage upload (step 8)
  if (step === 8) {
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
                    <UploadIcon />
                    <div className="text-sm font-medium mb-1">Upload File</div>
                    <div className="text-xs text-gray-500">Drag files here or click browse through your machine</div>
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
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-black">
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={handleClose} />
      <div className="relative w-full max-w-2xl mx-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-h-screen flex flex-col">

          {step === 1 && (
            <div className="p-6 overflow-y-auto">
              <PropertyHeader />
              <h2 className="text-xl font-bold mb-2">Offer Instructions</h2>
              <div className="text-gray-500 mb-4">Submitting The Offer: When Submitting The Offer, Please Include The Following:</div>
              <ul className="mb-6 space-y-3">
                <li className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">✔️</span>
                  <span className="text-gray-700">The offer contract signed by the buyer</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">✔️</span>
                  <span className="text-gray-700">All disclosures attached to the listing signed by the buyer</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">✔️</span>
                  <span className="text-gray-700">Buyer pre-approval letter or proof of funds, if it’s a cash offer</span>
                </li>
              </ul>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">✔️</span>
                  <span className="text-gray-700">Seller:</span>
                  <span className="text-gray-500">Catherine Voloshen (408) 390-3410|catieb408@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">✔️</span>
                  <span className="text-gray-700">Listing Agent:</span>
                  <span className="text-gray-500">Michael Heslop, Jupidoor LLC(208) 787-8000|team@jupidoor.com</span>
                </div>
              </div>

              <button className="w-full bg-[#0054F6] text-white py-3 rounded-md font-medium mt-8" onClick={() => setStep(2)}>Continue</button>
            </div>
          )}

          {step === 2 && (
            <div className="p-6 overflow-y-auto">
              <PropertyHeader />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-6">How will you finance this purchase?</h3>
                <div className="flex gap-4 mb-6">
                  <button onClick={() => setFinanceMethod('cash')} className={`flex-1 p-4 rounded-lg border-2 text-center ${financeMethod === 'cash' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}>
                    <div className="mb-2 flex justify-center"><img src={AllCash} alt="All Cash" className="w-12 h-12 sm:w-14 sm:h-14" /></div>
                    <div className="text-sm">All Cash</div>
                  </button>
                  <button onClick={() => setFinanceMethod('mortgage')} className={`flex-1 p-4 rounded-lg border-2 text-center ${financeMethod === 'mortgage' ? 'border-red-600 bg-red-50' : 'border-gray-200'}`}>
                    <div className="mb-2 flex justify-center"><img src={Mortgage} alt="Mortgage" className="w-12 h-12 sm:w-14 sm:h-14" /></div>
                    <div className="text-sm">Mortgage</div>
                  </button>
                </div>
                <button onClick={() => { if (financeMethod === 'cash') setStep(4); else if (financeMethod === 'mortgage') setStep(8); }} disabled={!financeMethod} className="w-full bg-blue-600 text-white py-2 rounded-md disabled:opacity-50">Continue</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="p-6 overflow-y-auto">
              <PropertyHeader />
              <h2 className="text-xl font-bold mb-4">Upload Pre-Approval</h2>
              <input type="file" className="mb-4" />
              <button className="w-full bg-blue-600 text-white py-2 rounded" onClick={() => setStep(4)}>Continue</button>
            </div>
          )}

          {step === 4 && (
            <div className="p-6 overflow-y-auto">
              <PropertyHeader />
              <div className="p-6">
                <div className="text-sm text-gray-600 mb-4">By selecting Yes, you confirm that you have a signed Exclusive Agency Agreement and that your agent is required to submit the offer on your behalf.</div>
                <h3 className="text-lg font-semibold mb-4">Agent Contact & Quote Form</h3>
                <div className="space-y-4">
                  <div className="bg-white p-2 rounded-md border border-gray-200">
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input type="text" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full border border-gray-200 bg-white rounded-md px-3 py-2" placeholder="Full Name" />
                  </div>
                  <div className="bg-white p-2 rounded-md border border-gray-200">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full border border-gray-200 bg-white rounded-md px-3 py-2" placeholder="Email" />
                  </div>
                  <div className="bg-white p-2 rounded-md border border-gray-200">
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <input type="text" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full border border-gray-200 bg-white rounded-md px-3 py-2" placeholder="Phone Number" />
                  </div>
                  <div className="bg-white p-2 rounded-md border border-gray-200">
                    <label className="block text-sm font-medium mb-1">DRE License</label>
                    <input type="text" value={formData.dreeLicense} onChange={(e) => setFormData({...formData, dreeLicense: e.target.value})} className="w-full border border-gray-200 bg-white rounded-md px-3 py-2" placeholder="DRE License" />
                  </div>
                  <div className="bg-white p-2 rounded-md border border-gray-200">
                    <label className="block text-sm font-medium mb-1">Enter Price</label>
                    <input type="text" value={formData.enterPrice} onChange={(e) => setFormData({...formData, enterPrice: e.target.value})} className="w-full border border-gray-200 bg-white rounded-md px-3 py-2" placeholder="Enter Price" />
                  </div>
                  <div className="bg-white p-2 rounded-md border border-gray-200">
                    <label className="block text-sm font-medium mb-1">Expire Date</label>
                    <input type="text" value={formData.expireDate} onChange={(e) => setFormData({...formData, expireDate: e.target.value})} className="w-full border border-gray-200 bg-white rounded-md px-3 py-2" placeholder="Expire Date" />
                  </div>
                </div>
                <button onClick={() => setStep(5)} className="w-full bg-gradient-to-r from-blue-500 to-blue-800 text-white py-3 rounded-md mt-6 shadow">Submit</button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="p-6 text-center overflow-y-auto bg-white border border-gray-200 rounded-md m-6">
              <h3 className="text-lg font-semibold mb-2">Verify Your Contact Information</h3>
              <p className="text-sm text-gray-500 mb-4">Enter 6-digit code sent to your phone</p>
              <div className="flex justify-center gap-2 mb-4">
                {otp.map((val, idx) => (
                  <input key={idx} ref={el => (otpRefs.current[idx] = el)} value={val} onChange={e => handleOtpChange(e, idx)} onKeyDown={e => handleOtpKeyDown(e, idx)} maxLength={1} className="w-10 h-10 text-center border border-gray-200 bg-white rounded" />
                ))}
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded" onClick={() => setStep(6)}>Continue</button>
            </div>
          )}

          {step === 6 && (
            
            <div className="p-6 text-center overflow-y-auto bg-white" style={{ colorScheme: 'light' }}>
              <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
              <h3 className="text-lg font-semibold">Rahim, Your offer has been submitted</h3>
              <p className="text-sm text-gray-500 mt-2 mb-6">Your agent will guide you through each step</p>
              <button onClick={handleClose} className="w-full bg-blue-600 text-white py-3 rounded-md">Confirm</button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default BuyerAgentModal;
