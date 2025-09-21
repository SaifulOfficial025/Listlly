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

import NearbyHomes from "./NearbyHomes";
import NewAddress from "./NewAddress";

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

  // (Modals removed) Schedule / Make Offer / Pre-approval modals removed from this page

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

  // Modal handlers removed

  return (
    <div className="property-details">

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
       <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-2 mt-6 md:h-96 lg:h-[520px]">
  {/* Large left image (spans 3 cols and 2 rows on md+) with "For sale" tag */}
  <div className="relative w-full h-full md:col-span-3 md:row-span-2">
    <img
      src={images[0]}
      alt="Home 1"
      onClick={() => openModal(0)}
      className="w-full h-full object-cover rounded-xl cursor-pointer"
    />
    {/* For sale tag */}
    <div className="absolute top-3 left-3 bg-black text-white text-sm px-3 py-1 rounded-md font-medium">
      For sale
    </div>
  </div>

  {/* Right side: 2x2 grid of thumbnails spanning the other 3 cols */}
  <div className="md:col-span-3 md:row-span-2 grid grid-rows-2 grid-cols-2 gap-2 h-full">
    <div className="rounded-xl overflow-hidden h-full">
      <img
        src={images[1]}
        alt="Home 2"
        onClick={() => openModal(1)}
        className="w-full h-full object-cover cursor-pointer"
      />
    </div>
    <div className="rounded-xl overflow-hidden h-full">
      <img
        src={images[2]}
        alt="Home 3"
        onClick={() => openModal(2)}
        className="w-full h-full object-cover cursor-pointer"
      />
    </div>
    <div className="rounded-xl overflow-hidden h-full">
      <img
        src={images[3]}
        alt="Home 4"
        onClick={() => openModal(3)}
        className="w-full h-full object-cover cursor-pointer"
      />
    </div>
    {/* Last tile with overlay for 'See all photos' */}
    <div className="relative rounded-xl overflow-hidden cursor-pointer h-full" onClick={() => openModal(4)}>
      <img 
        src={images[4]} 
        alt="More Homes" 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-end p-3">
        <div className="bg-white text-black text-sm px-3 py-1 rounded-md flex items-center gap-2 font-medium">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 4a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1zM12 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3zm2 2v-1h1v1h-1z" clipRule="evenodd" />
          </svg>
          See all 40 photos
        </div>
      </div>
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
     {/* Popup Viewer */}
{isOpen && (
  <div className="fixed inset-0 bg-white z-50" style={{ colorScheme: 'light' }}>
    {/* Header with controls */}
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(false)}
        className="flex items-center gap-2 text-black hover:text-gray-600"
      >
        <ChevronLeft size={20} />
        <span className="text-sm font-medium">Back to listing</span>
      </button>
      
      <div className="flex gap-4 items-center text-black">
        <button className="flex items-center gap-1 hover:text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="text-sm">Save</span>
        </button>
        <button className="flex items-center gap-1 hover:text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
          <span className="text-sm">Share</span>
        </button>
        <button className="flex items-center gap-1 hover:text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L4.392 5.392m5.486 4.486L15.314 15.314M7.05 7.05A10.015 10.015 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-1.363 2.574" />
          </svg>
          <span className="text-sm">Hide</span>
        </button>
        <button className="text-sm hover:text-gray-600">⋯ More</button>
      </div>
    </div>

    {/* Main content area */}
    <div className="flex h-[calc(100vh-73px)]">
      {/* Left side - Scrollable photo gallery */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Photo grid with alternating pattern */}
          <div className="space-y-4">
            {images.map((image, index) => {
              // Pattern: index 0,3,6,9... = full width, index 1-2,4-5,7-8... = half width pairs
              const isFullWidth = index % 3 === 0;
              const isFirstOfPair = index % 3 === 1;
              const isSecondOfPair = index % 3 === 2;
              
              if (isFullWidth) {
                return (
                  <div key={index} className="w-full">
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-96 object-cover rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setCurrent(index)}
                    />
                  </div>
                );
              } else if (isFirstOfPair) {
                return (
                  <div key={`pair-${Math.floor(index/3)}`} className="grid grid-cols-2 gap-4">
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setCurrent(index)}
                    />
                    {images[index + 1] && (
                      <img
                        src={images[index + 1]}
                        alt={`Gallery image ${index + 2}`}
                        className="w-full h-64 object-cover rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => setCurrent(index + 1)}
                      />
                    )}
                  </div>
                );
              }
              // Skip rendering for second of pair as it's handled above
              return null;
            })}
          </div>
        </div>
      </div>

      {/* Right side - Property info */}
      <div className="w-80 bg-white border-l border-gray-200 p-6">
        <div className="mb-6">
          <div className="text-3xl font-bold text-black mb-2">$1,120,000</div>
          <div className="text-gray-600 mb-1">
            <span className="font-medium">3 bd</span> • 
            <span className="font-medium"> 2 ba</span> • 
            <span className="font-medium"> 1,315 sqft</span>
          </div>
          <div className="text-gray-600 text-sm">
            <div>6010 S Verdun Ave</div>
            <div>Los Angeles, CA 90043</div>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-4">
          Request a tour
          <div className="text-sm font-normal">as early as tomorrow at 11:00 am</div>
        </button>

        {/* Thumbnail strip - removed since we're showing all photos in main area */}
        
        {/* Zoom controls - removed since not needed for scrollable gallery */}
      </div>
    </div>
  </div>
)}
       </div>
  <div className="max-w-7xl mx-auto px-4 py-8  gap-6">
        {/* LEFT: Description */}
        <div className="">
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


     
      {/* Modals removed from this page */}
    </div>
  );
}

export default PropertyDetails;
