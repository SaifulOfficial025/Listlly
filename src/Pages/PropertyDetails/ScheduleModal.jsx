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
  const dates = ["Mon 11", "Tue 12", "Wed 13", "Thu 14", "Fri 15"];
  const times = ["9:00AM", "10:00AM", "11:00AM", "12:00PM"];

  const prevDate = () => {
    const idx = dates.indexOf(selectedDate);
    const nextIdx = idx <= 0 ? 0 : idx - 1;
    setSelectedDate(dates[nextIdx]);
  };
  const nextDate = () => {
    const idx = dates.indexOf(selectedDate);
    const nextIdx = idx === -1 ? 0 : Math.min(dates.length - 1, idx + 1);
    setSelectedDate(dates[nextIdx]);
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
                  <div className="flex gap-2 overflow-x-auto px-1">
                    {dates.map((d) => (
                      <button
                        key={d}
                        onClick={() => setSelectedDate(d)}
                        className={`min-w-[84px] px-3 py-2 rounded-lg border text-sm ${
                          selectedDate === d ? "border-blue-600 bg-blue-50" : "border-gray-200"
                        }`}
                      >
                        <div className="font-medium">{d.split(" ")[0]}</div>
                        <div className="text-xs text-gray-500">{d.split(" ")[1]} August</div>
                      </button>
                    ))}
                  </div>
                  <button onClick={nextDate} className="p-2 rounded-full bg-white border">
                    <ChevronRight />
                  </button>
                </div>

                {/* Time selector with chevrons */}
                <div className="flex items-center gap-3 mb-4">
                  <button onClick={prevTime} className="p-2 rounded-full bg-white border">
                    <ChevronLeft />
                  </button>
                  <div className="flex gap-2 overflow-x-auto px-1">
                    {times.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`px-3 py-2 rounded-lg border text-sm ${
                          selectedTime === t ? "border-blue-600 bg-blue-50" : "border-gray-200"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <button onClick={nextTime} className="p-2 rounded-full bg-white border">
                    <ChevronRight />
                  </button>
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
