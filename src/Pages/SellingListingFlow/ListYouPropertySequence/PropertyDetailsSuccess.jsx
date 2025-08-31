import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PropertyDetailsSuccess({ propertyData }) {
  const samplePhotos = [
    '/api/placeholder/300/200',
    '/api/placeholder/300/200',
    '/api/placeholder/300/200'
  ];

  // Local editable copy of listing data (starts with defaults shown in UI)
  const [data, setData] = useState({
    mlsName: 'John Doe',
    mlsNumber: '01945612351',
    mlsEmail: 'mls@gmail.com',
    description: `Lorem ipsum dolor sit amet consectetur. Nunc eam ut potenti molly sapien lobor nunc sit. Ut luctus at sagittis nec rhoncus lorem et hae. Ultricies est turpis neque amet imperdiet mauris.`,
    type: 'For Sale',
    county: 'New York',
    neighborhood: '-',
    listingAgent: 'Featured Deal',
    stories: '2',
    mlsStatus: 'Now on Market',
    mlsSource: 'Bright MLS',
    mlsNumberDetail: '-',
    lotSize: '-',
    features: {
      flooring: 'Carpet, Vinyl, Luxury Vinyl',
      sewer: 'Septic Tank',
      appliances: 'Dishwasher, Disposal, Self Cleaning Oven, Convection Oven, Electric Oven, Microwave, Electric Water Heater',
      parking: 'Attached, Parking Pad, Paved, Garage Door Opener, Key Pad Entry, Other, R/V Boat Parking',
      interior: 'Ceiling Fan(s), Vaulted Ceiling(s), Tray Ceiling(s), Granite Counters, Open Floorplan, Walk In Closet(s)',
      window: 'Tilt Out Windows',
      heating: 'Natural Gas',
      security: 'Smoke Detector(s)',
      cooling: 'Electric',
      fireplace: 'None',
      laundry: '1st Floor, Laundry Room',
      electric: 'Photovoltaics Seller Owned',
      waterSource: 'Public'
    }
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSection, setModalSection] = useState(null);
  const [editValues, setEditValues] = useState({});

  const openSectionModal = (sectionKey) => {
    setModalSection(sectionKey);
    // populate editValues depending on section
    if (sectionKey === 'mls') {
      setEditValues({ mlsName: data.mlsName, mlsNumber: data.mlsNumber, mlsEmail: data.mlsEmail });
    } else if (sectionKey === 'description') {
      setEditValues({ description: data.description });
    } else if (sectionKey === 'details') {
      setEditValues({
        type: data.type,
        county: data.county,
        neighborhood: data.neighborhood,
        listingAgent: data.listingAgent,
        stories: data.stories,
        mlsStatus: data.mlsStatus,
        mlsNumberDetail: data.mlsNumberDetail,
        mlsSource: data.mlsSource,
        lotSize: data.lotSize
      });
    } else if (sectionKey === 'features') {
      setEditValues({ ...data.features });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalSection(null);
  };

  const saveModal = () => {
    if (modalSection === 'mls') {
      setData(prev => ({ ...prev, mlsName: editValues.mlsName, mlsNumber: editValues.mlsNumber, mlsEmail: editValues.mlsEmail }));
    } else if (modalSection === 'description') {
      setData(prev => ({ ...prev, description: editValues.description }));
    } else if (modalSection === 'details') {
      setData(prev => ({ ...prev, ...editValues }));
    } else if (modalSection === 'features') {
      setData(prev => ({ ...prev, features: { ...editValues } }));
    }
    closeModal();
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-black">
      <div className="bg-white rounded-lg shadow">
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">5405 Avenida Maravillas</h1>
              <p className="text-gray-600">El Sereno, Santa Ana, CA 92647</p>
              <p className="text-sm text-gray-500">1 bd • 1 ba • 500 sqft</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">$87,995,000</div>

            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {samplePhotos.map((photo, index) => (
              <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={photo} 
                  alt={`Property photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="text-blue-600 hover:text-blue-700">
              See Photos →
            </button>
          </div>
        </div>

        {/* MLS Info */}
        <div className="px-6 py-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-5">
            <div className="bg-[#f0f6ff] px-6 py-4 border-b border-pink-200 flex items-center justify-between">
              <h2 className="text-[16px] font-semibold text-[#1C1C1C]">MLS Info</h2>
              <button onClick={() => openSectionModal('mls')} className="text-blue-600 hover:text-blue-700 text-sm">Edit Details</button>
            </div>

            <div className="px-6 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 text-sm gap-y-4">
                <div>
                  <div className="font-medium text-black">MLS Name</div>
                  <div className="text-[#6B7280]">{data.mlsName}</div>
                </div>

                <div>
                  <div className="font-medium text-black">MLS Number</div>
                  <div className="text-[#6B7280]">{data.mlsNumber}</div>
                </div>

                <div>
                  <div className="font-medium text-black">MLS Email</div>
                  <div className="text-[#6B7280]">{data.mlsEmail}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <button onClick={() => openSectionModal('description')} className="text-blue-600 hover:text-blue-700 text-sm">
              Edit Description →
            </button>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">{data.description}</p>

          <p className="text-gray-700 leading-relaxed">ut risus elementum sed interdum ac tellus molestie non. Ut vulputate lorem magna rutrum in hendrerit mauris ultricies.</p>
        </div>

  {/* Property Details - styled card per example */}
        <div className="px-6 py-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-5">
            {/* Header */}
            <div className="bg-[#f0f6ff] px-6 py-4 border-b border-pink-200 flex items-center justify-between">
              <h2 className="text-[16px] font-semibold text-[#1C1C1C]">Property Details</h2>
              <button onClick={() => openSectionModal('details')} className="text-blue-600 hover:text-blue-700 text-sm">Edit Details</button>
            </div>

            {/* Info Grid */}
            <div className="px-6 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 text-sm gap-y-4">
                <div>
                  <div className="font-medium text-black">Type</div>
                  <div className="text-[#6B7280]">For Sale</div>
                </div>

                <div>
                  <div className="font-medium text-black">County</div>
                  <div className="text-[#6B7280]">New York</div>
                </div>

                <div>
                  <div className="font-medium text-black">Neighborhood</div>
                  <div className="text-[#6B7280]">-</div>
                </div>

                <div>
                  <div className="font-medium text-black">Listing Agent</div>
                  <div className="text-[#6B7280]">Featured Deal</div>
                </div>

                <div>
                  <div className="font-medium text-black">Stories</div>
                  <div className="text-[#6B7280]">2</div>
                </div>

                <div>
                  <div className="font-medium text-black">MLS Status</div>
                  <div className="text-[#6B7280]">Now on Market</div>
                </div>

                <div>
                  <div className="font-medium text-black">MLS Number</div>
                  <div className="text-[#6B7280]">-</div>
                </div>

                <div>
                  <div className="font-medium text-black">MLS Source</div>
                  <div className="text-[#6B7280]">Bright MLS</div>
                </div>

                <div>
                  <div className="font-medium text-black">Lot Size (Sq Ft)</div>
                  <div className="text-[#6B7280]">-</div>
                </div>
              </div>
            </div>
          </div>
        </div>

  {/* Property Features - styled card */}
        <div className="px-6 py-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-5">
            {/* Header */}
            <div className="bg-[#f0f6ff] px-6 py-4 border-b border-pink-200 flex items-center justify-between">
              <h2 className="text-[16px] font-semibold text-[#1C1C1C]">Property Features</h2>
              <button onClick={() => openSectionModal('features')} className="text-blue-600 hover:text-blue-700 text-sm">Edit Details</button>
            </div>

            {/* Features Grid */}
            <div className="px-6 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 text-sm gap-y-6 gap-x-8">
                <div>
                  <div className="font-medium text-black">Flooring</div>
                  <div className="text-[#6B7280]">Carpet, Vinyl, Luxury Vinyl</div>

                  <div className="mt-4 font-medium text-black">Sewer</div>
                  <div className="text-[#6B7280]">Septic Tank</div>

                  <div className="mt-4 font-medium text-black">Appliances</div>
                  <div className="text-[#6B7280]">Dishwasher, Disposal, Self Cleaning Oven, Convection Oven, Electric Oven, Microwave, Electric Water Heater</div>

                  <div className="mt-4 font-medium text-black">Parking Features</div>
                  <div className="text-[#6B7280]">Attached, Parking Pad, Paved, Garage Door Opener, Key Pad Entry, Other, R/V Boat Parking</div>
                </div>

                <div>
                  <div className="font-medium text-black">Interior Features</div>
                  <div className="text-[#6B7280]">Ceiling Fan(s), Vaulted Ceiling(s), Tray Ceiling(s), Granite Counters, Open Floorplan, Walk In Closet(s)</div>

                  <div className="mt-4 font-medium text-black">Window Features</div>
                  <div className="text-[#6B7280]">Tilt Out Windows</div>

                  <div className="mt-4 font-medium text-black">Heating</div>
                  <div className="text-[#6B7280]">Natural Gas</div>

                  <div className="mt-4 font-medium text-black">Security Features</div>
                  <div className="text-[#6B7280]">Smoke Detector(s)</div>
                </div>

                <div>
                  <div className="font-medium text-black">Cooling</div>
                  <div className="text-[#6B7280]">Electric</div>

                  <div className="mt-4 font-medium text-black">Fireplace Features</div>
                  <div className="text-[#6B7280]">None</div>

                  <div className="mt-4 font-medium text-black">Laundry Features</div>
                  <div className="text-[#6B7280]">1st Floor, Laundry Room</div>

                  <div className="mt-4 font-medium text-black">Electric</div>
                  <div className="text-[#6B7280]">Photovoltaics Seller Owned</div>

                  <div className="mt-4 font-medium text-black">Water Source</div>
                  <div className="text-[#6B7280]">Public</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional sections could be added here */}

        {/* Bottom Action */}
        <div className="p-6 border-t text-center">
            <Link to="/dashboard/selling_properties">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700">
            Best Choice
          </button> </Link>
        </div>
      </div>

      {/* Section Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto relative">
            <button onClick={closeModal} className="absolute right-3 top-3 text-gray-500 hover:text-gray-700" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
            </button>

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Edit {modalSection === 'mls' ? 'MLS Info' : modalSection === 'description' ? 'Description' : modalSection === 'details' ? 'Property Details' : 'Property Features'}</h3>

              {/* render inputs based on modalSection */}
              {modalSection === 'mls' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">MLS Name</label>
                    <input value={editValues.mlsName || ''} onChange={(e) => setEditValues(prev=>({...prev, mlsName: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">MLS Number</label>
                    <input value={editValues.mlsNumber || ''} onChange={(e) => setEditValues(prev=>({...prev, mlsNumber: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">MLS Email</label>
                    <input value={editValues.mlsEmail || ''} onChange={(e) => setEditValues(prev=>({...prev, mlsEmail: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                </div>
              )}

              {modalSection === 'description' && (
                <div>
                  <label className="block text-sm mb-1">Description</label>
                  <textarea value={editValues.description || ''} onChange={(e) => setEditValues(prev=>({...prev, description: e.target.value}))} className="w-full border px-3 py-2 rounded h-40" />
                </div>
              )}

              {modalSection === 'details' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Type</label>
                    <input value={editValues.type || ''} onChange={(e) => setEditValues(prev=>({...prev, type: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">County</label>
                    <input value={editValues.county || ''} onChange={(e) => setEditValues(prev=>({...prev, county: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Neighborhood</label>
                    <input value={editValues.neighborhood || ''} onChange={(e) => setEditValues(prev=>({...prev, neighborhood: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Listing Agent</label>
                    <input value={editValues.listingAgent || ''} onChange={(e) => setEditValues(prev=>({...prev, listingAgent: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Stories</label>
                    <input value={editValues.stories || ''} onChange={(e) => setEditValues(prev=>({...prev, stories: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">MLS Status</label>
                    <input value={editValues.mlsStatus || ''} onChange={(e) => setEditValues(prev=>({...prev, mlsStatus: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                </div>
              )}

              {modalSection === 'features' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Flooring</label>
                    <input value={editValues.flooring || ''} onChange={(e) => setEditValues(prev=>({...prev, flooring: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Interior Features</label>
                    <input value={editValues.interior || ''} onChange={(e) => setEditValues(prev=>({...prev, interior: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Cooling</label>
                    <input value={editValues.cooling || ''} onChange={(e) => setEditValues(prev=>({...prev, cooling: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Sewer</label>
                    <input value={editValues.sewer || ''} onChange={(e) => setEditValues(prev=>({...prev, sewer: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Appliances</label>
                    <input value={editValues.appliances || ''} onChange={(e) => setEditValues(prev=>({...prev, appliances: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Window Features</label>
                    <input value={editValues.window || ''} onChange={(e) => setEditValues(prev=>({...prev, window: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Heating</label>
                    <input value={editValues.heating || ''} onChange={(e) => setEditValues(prev=>({...prev, heating: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Security Features</label>
                    <input value={editValues.security || ''} onChange={(e) => setEditValues(prev=>({...prev, security: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Fireplace Features</label>
                    <input value={editValues.fireplace || ''} onChange={(e) => setEditValues(prev=>({...prev, fireplace: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Laundry Features</label>
                    <input value={editValues.laundry || ''} onChange={(e) => setEditValues(prev=>({...prev, laundry: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Electric</label>
                    <input value={editValues.electric || ''} onChange={(e) => setEditValues(prev=>({...prev, electric: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Water Source</label>
                    <input value={editValues.waterSource || ''} onChange={(e) => setEditValues(prev=>({...prev, waterSource: e.target.value}))} className="w-full border px-3 py-2 rounded" />
                  </div>
                </div>
              )}

              <div className="mt-6 flex justify-end gap-3">
                <button onClick={closeModal} className="px-4 py-2 border rounded">Cancel</button>
                <button onClick={saveModal} className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyDetailsSuccess;
