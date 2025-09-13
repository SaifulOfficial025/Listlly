import React, { useState, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { IoLocationOutline } from 'react-icons/io5';

const GetPreApprovalModal = ({ open, onClose, image, address = '123 Oak Street, Irvine, CA 92602', location = 'Rancho Santa Fe, CA 92067', price = '$899,000' }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpRefs = useRef([]);

  if (!open) return null;

  const handleSubmitContact = (e) => {
    e?.preventDefault?.();
    setStep(2);
  };

  const handleOtpChange = (e, idx) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    const next = [...otp];
    next[idx] = val.slice(-1);
    setOtp(next);
    if (val && idx < otp.length - 1) otpRefs.current[idx + 1]?.focus();
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === 'Backspace') {
      if (otp[idx]) {
        const next = [...otp];
        next[idx] = '';
        setOtp(next);
      } else if (idx > 0) {
        otpRefs.current[idx - 1]?.focus();
      }
    }
  };

  const handleConfirm = () => {
    onClose?.();
    setTimeout(() => {
      setStep(1);
      setForm({ firstName: '', lastName: '', email: '', phone: '' });
      setOtp(['', '', '', '', '', '']);
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-black " style={{ colorScheme: 'light' }}>
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={onClose} />
      <div className="relative w-full max-w-lg mx-4   ">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden ">

          <div className="p-4 border-b bg-[#f8fbff] mt-5">
            <div className="flex items-center gap-4">
              <img src={image} alt="property" className="w-24 h-16 object-cover rounded-md" />
              <div className="flex-1">
                <div className="text-sm font-semibold">{address}</div>
                <div className="text-xs text-gray-500 flex items-center gap-1"><IoLocationOutline size={14} />{location}</div>
                <div className="text-sm text-[#0054F6] font-bold mt-1">{price}</div>
              </div>
            </div>
          </div>

          <div className="p-6">
            {step === 1 && (
              <form onSubmit={handleSubmitContact} className="space-y-4">
                <span className='text-gray-600 '> I am interested in the following property</span>
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <div>
                  <label className="text-sm text-gray-600 block mb-1">First Name</label>
                  <input className="w-full border rounded px-3 py-2" value={form.firstName} onChange={(e) => setForm({...form, firstName: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Last Name</label>
                  <input className="w-full border rounded px-3 py-2" value={form.lastName} onChange={(e) => setForm({...form, lastName: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Email</label>
                  <input type="email" className="w-full border rounded px-3 py-2" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Phone Number</label>
                  <input className="w-full border rounded px-3 py-2" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded">Submit</button>
              </form>
            )}

            {step === 2 && (
              <div className="text-center">
                <h3 className="text-lg font-semibold">Verify Your Contact Information</h3>
                <p className="text-sm text-gray-500 mt-2 mb-4">Enter 6-digit code sent to {form.phone || '(019) 800-1235'}</p>
                <div className="flex justify-center gap-2 mb-4">
                  {otp.map((v, idx) => (
                    <input key={idx} ref={el => (otpRefs.current[idx] = el)} value={v} onChange={(e) => handleOtpChange(e, idx)} onKeyDown={(e) => handleOtpKeyDown(e, idx)} maxLength={1} className="w-10 h-10 text-center border rounded" />
                  ))}
                </div>
                <div className="text-sm text-blue-600 mb-4"><button onClick={() => setOtp(['', '', '', '', '', ''])}>Resend Code</button></div>
                <button onClick={() => setStep(3)} className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded">Continue</button>
              </div>
            )}

            {step === 3 && (
              <div className="text-center p-6">
                <div className="mb-4 flex items-center justify-center">
                  <CheckCircle size={56} className="text-green-500" />
                </div>
                <h3 className="text-lg font-semibold">Thank you for submitting your request</h3>
                <p className="text-sm text-gray-500 mt-2 mb-6">We'll review your details shortly.</p>
                <button onClick={handleConfirm} className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded">Confirm</button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default GetPreApprovalModal;
