import React from "react";
import { X, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { IoLocationOutline } from "react-icons/io5";

function ScheduleModal({
  closeScheduleModal,
  scheduleStep,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  phone,
  setPhone,
  sendOtp,
  otp,
  otpRefs,
  handleOtpChange,
  handleOtpKeyDown,
  verifyOtp,
  confirmSchedule,
  setOtp,
  image,
}) {
  // Generate all dates for the current month
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: daysInMonth }, (_, i) => {
    const dateObj = new Date(year, month, i + 1);
    return `${weekdays[dateObj.getDay()]} ${i + 1}`;
  });

  // More granular time options for dropdown (every 15 minutes, 9AM-8PM)
  const times = [];
  for (let h = 9; h <= 20; h++) {
    for (let m = 0; m < 60; m += 15) {
      let hour = h > 12 ? h - 12 : h;
      let ampm = h < 12 ? 'AM' : 'PM';
      if (h === 12) ampm = 'PM';
      if (h === 0) hour = 12;
      times.push(`${hour}:${m.toString().padStart(2, '0')}${ampm}`);
    }
  }

  // For auto-sliding date selector
  const dateListRef = React.useRef(null);
  const prevDate = () => {
    const idx = dates.indexOf(selectedDate);
    const nextIdx = idx <= 0 ? 0 : idx - 1;
    setSelectedDate(dates[nextIdx]);
    setTimeout(() => {
      if (dateListRef.current) {
        const btn = dateListRef.current.querySelectorAll('button')[nextIdx];
        if (btn) btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }, 0);
  };
  const nextDate = () => {
    const idx = dates.indexOf(selectedDate);
    const nextIdx = idx === -1 ? 0 : Math.min(dates.length - 1, idx + 1);
    setSelectedDate(dates[nextIdx]);
    setTimeout(() => {
      if (dateListRef.current) {
        const btn = dateListRef.current.querySelectorAll('button')[nextIdx];
        if (btn) btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }, 0);
  };

  const prevTime = () => {
    const idx = times.indexOf(selectedTime);
    const nextIdx = idx <= 0 ? 0 : idx - 1;
    setSelectedTime(times[nextIdx]);
  };
  const nextTime = () => {
    const idx = times.indexOf(selectedTime);
    const nextIdx = idx === -1 ? 0 : Math.min(times.length - 1, idx + 1);
    setSelectedTime(times[nextIdx]);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ colorScheme: "light" }}>
      <div
        className="absolute inset-0 backdrop-blur-sm bg-black/30"
        onClick={closeScheduleModal}
      ></div>

      <div className="relative w-full max-w-xl mx-4 text-black">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ colorScheme: "light" }}>
          {/* Step 1 - Listly's I-Minute Showing Request */}
          {scheduleStep === 1 && (
            <div>
                <div className="py-3 font-bold ml-4 text-lg">
                    <span>Listlly's I-Minute Showing Request</span>
                </div>
              {/* Hero image */}
              <img src={image} alt="hero" className="w-full h-40 object-cover" />

              <div className="px-5 py-4">

                {/* address / price row */}
                <div className=" justify-between gap-4 mb-4">
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

                {/* Date selector with chevrons */}
                <div className="flex items-center gap-3 mb-4">
                  <button onClick={prevDate} className="p-2 rounded-full bg-white border">
                    <ChevronLeft />
                  </button>
                  <div ref={dateListRef} className="flex gap-2 overflow-x-auto px-1 max-w-[400px] scroll-smooth">
                    {dates.map((d, i) => (
                      <button
                        key={d}
                        onClick={() => setSelectedDate(d)}
                        className={`min-w-[70px] px-2 py-2 rounded-lg border text-sm ${
                          selectedDate === d ? "border-blue-600 bg-blue-50" : "border-gray-200"
                        }`}
                      >
                        <div className="font-medium">{d.split(" ")[0]}</div>
                        <div className="text-xs text-gray-500">{d.split(" ")[1]} {now.toLocaleString('default', { month: 'long' })}</div>
                      </button>
                    ))}
                  </div>
                  <button onClick={nextDate} className="p-2 rounded-full bg-white border">
                    <ChevronRight />
                  </button>
                </div>

                {/* Time selector with chevrons */}
                <div className="flex items-center gap-3 mb-4">
                  <label className="text-sm font-medium">Select Time:</label>
                  <select
                    value={selectedTime}
                    onChange={e => setSelectedTime(e.target.value)}
                    className="border rounded-lg px-3 py-2 text-sm bg-white text-black"
                  >
                    <option value="" disabled>Select a time</option>
                    {times.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Phone input */}
                <div className="mb-4">
                  <label className="text-sm text-gray-700 block mb-2">Enter Phone Number</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border rounded-md px-3 py-3 bg-white text-black"
                    placeholder="Enter phone number"
                    style={{ colorScheme: "light" }}
                  />
                </div>

                <div>
                  <button onClick={sendOtp} className="w-full bg-blue-600 text-white py-3 rounded-md">
                    Schedule Showing
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2 - Verify Your Contact Information */}
          {scheduleStep === 2 && (
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Verify Your Contact Information</h3>
              <p className="text-sm text-gray-500 mb-4">Enter 6-digit code sent to {phone || "(xxx) xxx-xxxx"}</p>

              <div className="flex justify-center gap-2 mb-4">
                {otp.map((v, idx) => (
                  <input
                    key={idx}
                    ref={(el) => (otpRefs.current[idx] = el)}
                    value={v}
                    onChange={(e) => handleOtpChange(e, idx)}
                    onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                    className="w-10 h-10 text-center rounded-md border bg-white text-black"
                    maxLength={1}
                    style={{ colorScheme: "light" }}
                  />
                ))}
              </div>

              <div className="text-sm text-blue-600 mb-4">
                <button
                  onClick={() => {
                    setOtp(["", "", "", "", "", ""]);
                  }}
                >
                  Resend Code
                </button>
              </div>

              <div className="flex gap-2">
                <button onClick={verifyOtp} className="flex-1 bg-blue-600 text-white py-2 rounded-md">
                  Continue
                </button>
                <button onClick={closeScheduleModal} className="flex-1 border rounded-md py-2">
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Step 3 - Schedule Confirmed */}
          {scheduleStep === 3 && (
            <div className="p-6 text-center">
              <CheckCircle className="mx-auto text-green-500" size={48} />
              <h3 className="text-lg font-semibold mt-4">Schedule Confirmed</h3>
              <p className="text-sm text-gray-500 mt-2">We've received your details and will be in touch soon.</p>

              <div className="mt-6">
                <button onClick={confirmSchedule} className="w-full bg-blue-600 text-white py-2 rounded-md">
                  Confirm
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScheduleModal;
