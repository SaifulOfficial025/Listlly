import React, { useState } from 'react';
import ContactInformationModal from './ContactInformationModal';
import { BsCloudUpload } from "react-icons/bs";

function PhotosDescription({ onCancel, onContinue }) {
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState([]);
  const [showPhotographerSection, setShowPhotographerSection] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(prev => [...prev, ...files]);
  };

  const requestPhotographer = () => {
  // show the expanded photographer section and open the contact modal
  setShowPhotographerSection(true);
  setShowContactModal(true);
  };

  const handleContinue = () => {
    setShowContactModal(true);
  };

  const handleContactSubmit = (contactData) => {
    setShowContactModal(false);
    if (onContinue) {
      onContinue({
        photos,
        description,
        photographerRequested: showPhotographerSection,
        ...contactData
      });
    }
  };

  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-10 text-black">
         <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">
            <span className="text-red-400 mr-1">List</span> Your Property
          </h2>
        </div>
        <div className="text-left mb-8">
          <h2 className="text-2xl font-semibold text-[#2563eb]">Photos & Description</h2>
        </div>

        <div className="bg-white rounded-lg shadow px-8 py-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">📸</div>
              <div>
                <div className="text-lg font-semibold">Upload Property Photos</div>
              </div>
            </div>
            <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-xs bg-pink-100">Step 7 of 7</div>
          </div>

          <div className="mb-8">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-pink-100">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BsCloudUpload className='text-blue-600 text-3xl' />
                </div>
                <h3 className="text-lg font-medium text-red-500 mb-2">Upload Property Photos</h3>
                <p className="text-sm text-gray-600 mb-4">Take multiple photos of your Property like</p>
                
                <label className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer hover:bg-blue-700">
                  Upload
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {photos.length > 0 && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">{photo.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Need Professional Photography?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get high-quality professional photos that showcase your property's best features. Professional photography can increase your listing views by up to 40%.
              </p>
              
              {!showPhotographerSection ? (
                <button
                  onClick={requestPhotographer}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Request Photographer
                </button>
              ) : (
                <div className="bg-white rounded p-4 border">
                  <h4 className="font-medium mb-3">Photographer Sent you request to confirm</h4>
                  <div className="flex gap-4 mb-4">
                    <img src="/api/placeholder/60/60" alt="Sample 1" className="w-12 h-12 sm:w-14 sm:h-14 rounded" />
                    <img src="/api/placeholder/60/60" alt="Sample 2" className="w-12 h-12 sm:w-14 sm:h-14 rounded" />
                    <img src="/api/placeholder/60/60" alt="Sample 3" className="w-12 h-12 sm:w-14 sm:h-14 rounded" />
                  </div>
                  <button className="bg-green-600 text-white px-4 py-1 rounded text-sm">
                    Accept
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Property Description</h3>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write here..."
              rows={6}
              className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full resize-none"
            />
          </div>

          <div className="flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => (onCancel ? onCancel() : null)}
              className="px-6 py-2 border rounded text-blue-600 bg-white"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                // advance the flow and pass current photos/description
                if (onContinue) {
                  onContinue({ photos, description, photographerRequested: showPhotographerSection });
                }
              }}
              className="px-6 py-2 rounded text-white bg-gradient-to-r from-blue-500 to-blue-700 shadow"
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      {showContactModal && (
        <ContactInformationModal
          onCancel={() => setShowContactModal(false)}
          onSubmit={handleContactSubmit}
        />
      )}
    </>
  );
}

export default PhotosDescription;
