import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoCloudUploadOutline } from "react-icons/io5";
function PropertyInformation() {
  const navigate = useNavigate()

  // Sample data to match screenshot layout
  const property = {
    id: 1,
    title: '123 Oak Street, Irvine, CA 92602',
    location: 'Rancho Santa Fe, CA 92067',
    price: '$899,000',
    beds: 4,
    baths: 3,
    sqft: '2,200',
    requested: '15/01/2024',
    schedule: '1/18/2024',
    time: '2:00PM',
    agent: 'John Doe',
  }

  return (
    <div className="p-6  mx-auto text-black">
      {/* Header card */}
      <div className="flex items-center gap-6 bg-[#F4F9FF] rounded-md p-4">
        <img src="/public/property.jpg" alt="property" className="w-36 h-24 object-cover rounded-md" />
        <div>
          <div className="font-semibold text-sm">{property.title}</div>
          <div className="text-xs text-gray-500 mt-1">{property.location}</div>
          <div className="text-sm text-blue-700 font-semibold mt-2">{property.price}</div>
          <div className="text-xs text-gray-600 mt-1">{property.beds} beds • {property.baths} baths • {property.sqft} sq ft</div>
        </div>
      </div>

      {/* Requested / Schedule / Time row */}
      <div className="grid grid-cols-3 gap-6 mt-6 text-sm">
        <div>
          <div className="text-gray-500">Requested</div>
          <div className="mt-2 font-medium">{property.requested}</div>
        </div>
        <div>
          <div className="text-gray-500">Schedule</div>
          <div className="mt-2 font-medium">{property.schedule}</div>
        </div>
        <div>
          <div className="text-gray-500">Time</div>
          <div className="mt-2 font-medium">{property.time}</div>
        </div>
      </div>

      {/* Property Information section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Property Information</h3>
        <div className="mt-4 bg-white p-6 rounded-md shadow-sm">
          <div className="text-base text-gray-800 font-medium">{property.title}</div>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13 21.314l-4.657-4.657A8 8 0 1117.657 16.657z" />
              </svg>
              <div className="leading-tight">{property.location}</div>
            </div>

            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M5 7v12a2 2 0 002 2h10a2 2 0 002-2V7" />
              </svg>
              <div className="leading-tight">Single Family</div>
            </div>

            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14" />
              </svg>
              <div className="leading-tight">{property.schedule} at {property.time}</div>
            </div>

            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.636 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="leading-tight">{property.agent}</div>
            </div>
          </div>

          {/* Upload area */}
          <div className="mt-6">
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center bg-[#F8FAFC]">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
                    <IoCloudUploadOutline className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-red-500">Upload Property Photo</div>
                <div className="text-xs text-gray-500 mt-1">Take multiple photos of your Property site</div>
                <button onClick={() => {}} className="mt-4 px-6 py-2 bg-blue-100 text-blue-700 rounded shadow">Upload</button>
              </div>
            </div>
          </div>

          {/* Confirm button */}
          <div className="mt-8 flex justify-center">
            <button onClick={() => navigate(-1)} className="px-20 py-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-400 text-white">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyInformation
