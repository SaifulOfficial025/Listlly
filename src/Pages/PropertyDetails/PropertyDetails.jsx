import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  ZoomIn,
  ZoomOut,
  Download,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Calendar,
  Clock,
} from "lucide-react";
import Header from "../../Shared/Header";
import Footer from "../../Shared/Footer";
import NearbyHomes from "./NearbyHomes";
import NewAddress from "../Home/NewAddress";
import ScheduleModal from "./ScheduleModal";
import MakeAnOfferModal from "./MakeAnOfferModal";
import GetPreApprovalModal from "./GetPreApprovalModal";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=700&q=80",
  // Add more dummy URLs here if needed
];

function PropertyDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [zoom, setZoom] = useState(1);

  // New state for Schedule Showing modal flow
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [scheduleStep, setScheduleStep] = useState(1); // 1: request form, 2: verify contact, 3: confirmed
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpRefs = React.useRef([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // New state for Make an Offer modal flow
  const [showMakeOfferModal, setShowMakeOfferModal] = useState(false);

  const openModal = (index) => {
    setCurrent(index);
    setIsOpen(true);
    setZoom(1);
  };

  const handleZoom = (inOut) => {
    setZoom((z) => Math.max(0.5, inOut === "in" ? z + 0.25 : z - 0.25));
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = images[current];
    link.download = `image-${current + 1}.jpg`;
    link.click();
  };

  // Schedule modal handlers
  const openScheduleModal = () => {
    setShowScheduleModal(true);
    setScheduleStep(1);
  };
  const closeScheduleModal = () => {
    setShowScheduleModal(false);
    setScheduleStep(1);
    setPhone("");
    setOtp(["", "", "", "", "", ""]);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  // Make an Offer modal handlers
  const openMakeOfferModal = () => {
    setShowMakeOfferModal(true);
  };
  const closeMakeOfferModal = () => {
    setShowMakeOfferModal(false);
  };

  // Get Pre-approval modal handlers
  const [showGetPreApproval, setShowGetPreApproval] = useState(false);
  const openGetPreApproval = () => {
    console.log('openGetPreApproval called');
    setShowGetPreApproval(true);
  };
  const closeGetPreApproval = () => {
    console.log('closeGetPreApproval called');
    setShowGetPreApproval(false);
  };

  const sendOtp = () => {
    // simulate sending OTP
    console.log("send otp to", phone);
    setScheduleStep(2);
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

  const verifyOtp = () => {
    const code = otp.join("");
    console.log("verify code", code);
    // assume success
    setScheduleStep(3);
  };

  const confirmSchedule = () => {
    // finalize
    closeScheduleModal();
    // optionally show toast
  };

  return (
    <div className="property-details">
  <Header />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 font-sans text-[#1C1C1C] mt-10">
        {/* Top Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-4">
          <div>
            <h2 className="text-[22px] font-semibold leading-snug mt-1 flex items-center gap-2">
              5465 Avenida Maravillas
              <span className="inline-block text-xs font-semibold px-2 py-0.5 bg-[#E8F0FF] text-[#2E5AAC] rounded-full">
                Active
              </span>
            </h2>
            <p className="text-sm text-[#606A76] mt-1 flex items-center gap-1">
              📍 Rancho Santa Fe, CA 92067
            </p>
            <div className="text-sm flex gap-5 mt-3 text-[#1C1C1C]">
              <span>
                <b className="text-[#0054F6]">3</b> Bed
              </span>
              <span>
                <b className="text-[#0054F6]">2</b> Baths
              </span>
              <span>
                <b className="text-[#0054F6]">1200</b> sqft
              </span>
            </div>
          </div>

          <div className="text-right">
            <h3 className="text-[24px] font-bold text-[#1C1C1C] tracking-tight">
              $<span className="text-[#0D1C39]">7,995,000</span>
            </h3>
            <p className="text-sm text-[#6B7280] mt-1">
              $1,941/mo Est.{" "}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); openGetPreApproval(); }}
                className="text-[#0054F6] hover:underline font-medium"
              >
                Get Pre-approved
              </a>
            </p>
          </div>
        </div>

        {/* Image Grid - responsive: stacked on small, mosaic on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 mt-6">
          <img
            src={images[0]}
            alt="Home 1"
            onClick={() => openModal(0)}
            className="w-full h-56 md:h-auto md:col-span-1 md:row-span-2 object-cover rounded-xl cursor-pointer"
          />
          <img
            src={images[1]}
            alt="Home 2"
            onClick={() => openModal(1)}
            className="w-full h-56 md:h-auto md:col-span-2 md:row-span-2 object-cover rounded-xl cursor-pointer"
          />
          <img
            src={images[2]}
            alt="Home 3"
            onClick={() => openModal(2)}
            className="w-full h-56 md:h-auto md:col-span-1 md:row-span-1 object-cover rounded-xl cursor-pointer"
          />
          <div
            className="relative w-full h-56 md:h-auto md:col-span-1 md:row-span-1 cursor-pointer"
            onClick={() => openModal(3)}
          >
            <img
              src={images[3]}
              alt="More Homes"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex items-center justify-center text-white font-semibold text-lg">
              31+
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-6">
          <div className="bg-white shadow-md rounded-xl px-6 py-2 flex items-center gap-8 text-sm font-medium text-[#6B7280]">
            <button className="text-[#0054F6]">Total Photo (35)</button>
            <button className="hover:text-[#0054F6]">Street View</button>
            <button className="hover:text-[#0054F6]">Virtual Tour</button>
          </div>
        </div>

        {/* Popup Viewer */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center" style={{ colorScheme: 'light' }}>
             {/* Top-right controls */}
             <div className="absolute top-5 right-6 flex gap-4 items-center text-white">
               <button onClick={downloadImage}>
                 <Download size={20} />
               </button>
               <button onClick={() => handleZoom("in")}>
                 <ZoomIn size={20} />
               </button>
               <button onClick={() => handleZoom("out")}>
                 <ZoomOut size={20} />
               </button>
               <button onClick={() => setIsOpen(false)}>
                 <X size={22} />
               </button>
             </div>

             {/* Main image */}
            <div className="p-4 rounded-md bg-white text-black" style={{ colorScheme: 'light' }}>
              <img
                src={images[current]}
                alt={`Popup ${current + 1}`}
                style={{ transform: `scale(${zoom})` }}
                className="max-w-4xl max-h-[80vh] object-contain transition-transform"
              />
            </div>

             {/* Bottom nav */}
             <div className="absolute bottom-6 flex items-center justify-center gap-6">
               <button
                 onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
                 className="bg-white text-black p-2 rounded-full shadow"
               >
                 <ChevronLeft size={20} />
               </button>
               <button
                 onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
                 className="bg-white text-black p-2 rounded-full shadow"
               >
                 <ChevronRight size={20} />
               </button>
             </div>
           </div>
         )}
       </div>
  <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT: Description */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-[#1C1C1C] mb-3">
            Description
          </h2>
          <p className="text-md text-[#444] leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur. Morbi sed pharetra lectus
            tempus sapien ornare est felis. Quisque id in egestas nibh dignissim
            turpis sit. Dui hendrerit sodales aliquet sed magna proin elementum
            risus tincidunt. Volutpat tristique gravida non aliquam cursus diam
            orci. Hac condimentum tempor malesuada turpis fermentum lectus.
            Morbi nunc imperdiet in elit. Sapien quam vulputate feugiat sed.
            Tempus sed est nunc ut gravida. Eu enim purus duis interdum ac
            vitae.
            <br />
            <br />
            Suscipit nunc sed velit purus sit ornare nibh id euismod. Suscipit
            tellus enim morbi egestas pretium. Proin nisl nullam mauris
            dignissim elementum tortor vel in. Amet phasellus turpis volutpat
            quam ut tellus suspendisse tincidunt. Eget eleifend in mauris
            condimentum quis etiam. Mollis magna tellus odio cras vitae
            elementum. Consequat id orci vulputate massa donec interdum. Gravida
            netus vivamus massa duis dui. Commodo ac tempor orci at neque elit.
            Urna lectus eu non morbi tincidunt.
          </p>
        </div>

  {/* RIGHT: Button Sidebar */}
  <div className="space-y-4 lg:sticky lg:top-24">
          {/* Box with top buttons */}
          <div className="bg-white shadow-md rounded-lg p-4 space-y-3">
            <button onClick={openScheduleModal} className="w-full border border-[#0054F6] text-[#0054F6] py-2 rounded-md text-sm font-medium hover:bg-[#F0F5FF] transition">
              Schedule Showing
            </button>
            <button onClick={openMakeOfferModal} className="w-full bg-[#FFE3E3] text-[#D33C40] py-2 rounded-md text-sm font-medium hover:bg-[#FFDDDD] transition">
              Make an Offer
            </button>

            <div className="flex items-center gap-2 justify-center text-xs text-[#888]">
              <div className="h-px bg-gray-300 w-10"></div>
              <span>Or</span>
              <div className="h-px bg-gray-300 w-10"></div>
            </div>

            <button onClick={openGetPreApproval} className="w-full border border-[#0054F6] text-[#0054F6] py-2 rounded-md text-sm font-medium hover:bg-[#F0F5FF] transition">
              Get Pre - approved
            </button>
            <button onClick={openGetPreApproval} className="w-full border border-gray-300 text-[#1C1C1C] py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
              Contact Agent
            </button>
          </div>

          {/* Bottom Buttons */}
          <div role="banner" aria-label="Promotional banner" className="w-full bg-gradient-to-r from-[#D991F9] to-[#5466F9] text-white font-medium  shadow-md">
            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <div>
                <div className="text-sm font-semibold">List Your Home For Sale</div>
                <div className="text-xs opacity-90 mt-1">Quickly create a listing and reach buyers in your area.</div>
              </div>

            </div>
          </div>
          <Link to="/dashboard/selling_properties">
          <button className="w-full bg-gradient-to-r from-[#0054F6] to-[#0D47C1] text-white font-medium py-2 rounded-md text-sm shadow-md flex items-center justify-center gap-1 mt-5">
            Start Listing <span>↗</span>
          </button>
          </Link>
        </div>
      </div>

      {/* card whole div */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className=" mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-5">
          {/* Card Heading */}
          <div className="bg-[#f0f6ff] px-6 py-4 border-b border-pink-200">
            <h2 className="text-[16px] font-semibold text-[#1C1C1C]">
              Property Details
            </h2>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-4 px-6 py-6 text-sm text-[#1C1C1C]">
            {/* Column 1 */}
            <div className="space-y-4">
              <div>
                <div className="font-medium">Status</div>
                <div className="text-[#6B7280]">Active</div>
              </div>
              <div>
                <div className="font-medium">Country</div>
                <div className="text-[#6B7280]">Spartanburg County</div>
              </div>
              <div>
                <div className="font-medium">Listlly Fee</div>
                <div className="text-[#6B7280]">-</div>
              </div>
              <div>
                <div className="font-medium">Basement Area</div>
                <div className="text-[#6B7280]">-</div>
              </div>
              <div>
                <div className="font-medium">MLS Status</div>
                <div className="text-[#6B7280]">Active</div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div>
                <div className="font-medium">Type</div>
                <div className="text-[#6B7280]">Single Family Residence</div>
              </div>
              <div>
                <div className="font-medium">City</div>
                <div className="text-[#6B7280]">Lyman</div>
              </div>
              <div>
                <div className="font-medium">Finished Area</div>
                <div className="text-[#6B7280]">- sqft</div>
              </div>
              <div>
                <div className="font-medium">MLS Name</div>
                <div className="text-[#6B7280]">John Doe</div>
              </div>
              <div>
                <div className="font-medium">Days on Market</div>
                <div className="text-[#6B7280]">-</div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <div>
                <div className="font-medium">No. of Stories</div>
                <div className="text-[#6B7280]">1</div>
              </div>
              <div>
                <div className="font-medium">Year Built</div>
                <div className="text-[#6B7280]">2017</div>
              </div>
              <div>
                <div className="font-medium">Lot Size</div>
                <div className="text-[#6B7280]">25,264.8 sqft lot</div>
              </div>
              <div>
                <div className="font-medium">MLS Number</div>
                <div className="text-[#6B7280]">01945612351</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-5">
          {/* Header */}
          <div className="bg-[#f0f6ff] px-6 py-4 border-b border-pink-200">
            <h2 className="text-[16px] font-semibold text-[#1C1C1C]">
              MLS Info
            </h2>
          </div>

          {/* Info Grid */}
          <div className="px-6 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 text-sm gap-y-4">
              <div>
                <div className="font-medium text-black">MLS Name</div>
                <div className="text-[#6B7280]">John Doe</div>
              </div>
              <div>
                <div className="font-medium text-black">MLS Number</div>
                <div className="text-[#6B7280]">01945612351</div>
              </div>
              <div>
                <div className="font-medium text-black">MLS Email</div>
                <div className="text-[#6B7280]">mls@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-[#f0f6ff] px-6 py-4 border-b border-pink-200">
            <h2 className="text-[16px] font-semibold text-[#1C1C1C]">
              Property Features
            </h2>
          </div>

          {/* Feature Grid */}
          <div className="px-6 py-5 text-sm text-[#1C1C1C]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <div className="font-medium">Flooring</div>
                <div className="text-[#6B7280]">
                  Carpet, Vinyl, Luxury Vinyl
                </div>
              </div>
              <div>
                <div className="font-medium">Interior Features</div>
                <div className="text-[#6B7280]">
                  Ceiling Fan(s), Vaulted Ceiling(s), Tray Ceiling(s), Granite
                  Counters, Open Floorplan, Walk In Closet(s)
                </div>
              </div>
              <div>
                <div className="font-medium">Sewer</div>
                <div className="text-[#6B7280]">Septic Tank</div>
              </div>
              <div>
                <div className="font-medium">Window Features</div>
                <div className="text-[#6B7280]">Tilt Out Windows</div>
              </div>
              <div>
                <div className="font-medium">Appliances</div>
                <div className="text-[#6B7280]">
                  Dishwasher, Disposal, Self Cleaning Oven, Convection Oven,
                  Electric Oven, Microwave, Electric Water Heater
                </div>
              </div>
              <div>
                <div className="font-medium">Heating</div>
                <div className="text-[#6B7280]">Natural Gas</div>
              </div>
              <div>
                <div className="font-medium">Cooling</div>
                <div className="text-[#6B7280]">Electric</div>
              </div>
              <div>
                <div className="font-medium">Security Features</div>
                <div className="text-[#6B7280]">Smoke Detector(s)</div>
              </div>
              <div>
                <div className="font-medium">Fireplace Features</div>
                <div className="text-[#6B7280]">None</div>
              </div>
              <div>
                <div className="font-medium">Water Source</div>
                <div className="text-[#6B7280]">Public</div>
              </div>
              <div>
                <div className="font-medium">Laundry Features</div>
                <div className="text-[#6B7280]">1st Floor, Laundry Room</div>
              </div>
              <div>
                <div className="font-medium">Parking Features</div>
                <div className="text-[#6B7280]">
                  Attached, Parking Pad, Paved, Garage Door Opener, Key Pad
                  Entry, Other, R/v Boat Parking
                </div>
              </div>
              <div>
                <div className="font-medium">Electric</div>
                <div className="text-[#6B7280]">Photovoltaics Seller Owned</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-5">
          {/* Header */}
          <div className="bg-[#f0f6ff] px-6 py-4 border-b border-pink-200">
            <h2 className="text-[16px] font-semibold text-[#1C1C1C]">
              Location
            </h2>
          </div>

          {/* Map Image */}
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509423!2d-122.419415684681!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0f0f0f0%3A0x0!2zTWFwIFNhbXBsZQ!5e0!3m2!1sen!2sus!4v1633024800000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Dummy Map"
            ></iframe>
          </div>
        </div>

        <NearbyHomes />
        <NewAddress />
      </div>
      <Footer />

     
      {showScheduleModal && (
        <ScheduleModal
          closeScheduleModal={closeScheduleModal}
          scheduleStep={scheduleStep}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          phone={phone}
          setPhone={setPhone}
          sendOtp={sendOtp}
          otp={otp}
          otpRefs={otpRefs}
          handleOtpChange={handleOtpChange}
          handleOtpKeyDown={handleOtpKeyDown}
          verifyOtp={verifyOtp}
          confirmSchedule={confirmSchedule}
          setOtp={setOtp}
          image={images[0]}
        />
      )}

      {showMakeOfferModal && (
        <MakeAnOfferModal
          closeMakeOfferModal={closeMakeOfferModal}
          image={images[0]}
          propertyAddress="5465 Avenida Maravillas"
          propertyLocation="Rancho Santa Fe, CA 92067"
          propertyPrice="$7,995,000"
        />
      )}
      {showGetPreApproval && (
        <GetPreApprovalModal
          data-debug="get-pre-approval-modal"
          open={showGetPreApproval}
          onClose={closeGetPreApproval}
          image={images[0]}
          address="5465 Avenida Maravillas"
          location="Rancho Santa Fe, CA 92067"
          price="$7,995,000"
        />
      )}
    </div>
  );
}

export default PropertyDetails;
