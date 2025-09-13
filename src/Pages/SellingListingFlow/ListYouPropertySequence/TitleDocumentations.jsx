import React, { useState } from 'react';

function TitleDocumentations({ onCancel, onContinue }) {
  const [owners, setOwners] = useState([
    { firstName: '', lastName: '', email: '', phone: '' }
  ]);
  
  const [seller, setSeller] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const addOwner = () => {
    setOwners([...owners, { firstName: '', lastName: '', email: '', phone: '' }]);
  };

  const updateOwner = (index, field, value) => {
    const updated = [...owners];
    updated[index][field] = value;
    setOwners(updated);
  };

  const updateSeller = (field, value) => {
    setSeller(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 sm:py-10 text-black">
         <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold">
            <span className="text-red-400 mr-1">List</span> Your Property
          </h2>
        </div>
      <div className="text-left mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#2563eb]">Title & Documentations</h2>
      </div>

      <div className="bg-white rounded-lg shadow px-6 py-5 sm:px-8 sm:py-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">📄</div>
            <div>
              <div className="text-lg font-bold">Property Owner Info.</div>
            </div>
          </div>
          <div className="px-3 py-1 bg-pink-100 text-blue-600 rounded text-xs">Step 5 of 7</div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold">Property Owner Info.</h3>
            <button
              type="button"
              onClick={addOwner}
              className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              ➕ Add Owner
            </button>
          </div>

          {owners.map((owner, index) => (
            <div key={index} className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Owner First Name</label>
                  <input
                    value={owner.firstName}
                    onChange={(e) => updateOwner(index, 'firstName', e.target.value)}
                    className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Owner Last Name</label>
                  <input
                    value={owner.lastName}
                    onChange={(e) => updateOwner(index, 'lastName', e.target.value)}
                    className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Seller Email</label>
                  <input
                    type="email"
                    value={owner.email}
                    onChange={(e) => updateOwner(index, 'email', e.target.value)}
                    className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Seller Phone Number</label>
                  <input
                    type="tel"
                    value={owner.phone}
                    onChange={(e) => updateOwner(index, 'phone', e.target.value)}
                    className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-base font-bold mb-4">Property Seller Info.</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Seller First Name</label>
              <input
                value={seller.firstName}
                onChange={(e) => updateSeller('firstName', e.target.value)}
                className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Seller Last Name</label>
              <input
                value={seller.lastName}
                onChange={(e) => updateSeller('lastName', e.target.value)}
                className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Seller Email</label>
              <input
                type="email"
                value={seller.email}
                onChange={(e) => updateSeller('email', e.target.value)}
                className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Seller Phone Number</label>
              <input
                type="tel"
                value={seller.phone}
                onChange={(e) => updateSeller('phone', e.target.value)}
                className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
              />
            </div>
          </div>
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
            onClick={() => (onContinue ? onContinue({ owners, seller }) : null)}
            className="px-6 py-2 rounded text-white bg-gradient-to-r from-blue-500 to-blue-700 shadow"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default TitleDocumentations;
