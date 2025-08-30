import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ListProperty({ onCancel, onContinue }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    street: '',
    suite: '',
    city: '',
    state: '',
    zip: '',
  })

  const propertyTypes = [
    { key: 'single', label: 'Single Family', icon: '🏠' },
    { key: 'condo', label: 'Condo', icon: '🏢' },
    { key: 'coop', label: 'Co-op', icon: '🏬' },
    { key: 'townhouse', label: 'Town House', icon: '🏘️' },
    { key: 'multi', label: 'Multifamily 1-4 Units', icon: '🏚️' },
    { key: 'other', label: 'Other', icon: '📦' },
  ]

  const [selectedType, setSelectedType] = useState('single')

  function updateField(e) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-black">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold"><span className="text-red-400 mr-1">List</span> Your Property</h2>
      </div>

      <div className="bg-white rounded-lg shadow px-8 py-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">📍</div>
            <div>
              <div className="text-lg font-semibold">Property Address</div>
            </div>
          </div>
          <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-xs">Step 1 of 7</div>
        </div>

        <div className="mt-6">
          <h3 className="text-base font-medium">What’s your property address?</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <input
              name="street"
              value={form.street}
              onChange={updateField}
              placeholder="Street Address"
              className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
            />
            <input
              name="suite"
              value={form.suite}
              onChange={updateField}
              placeholder="Suite"
              className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
            />
            <input
              name="city"
              value={form.city}
              onChange={updateField}
              placeholder="City"
              className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
            />
            <input
              name="state"
              value={form.state}
              onChange={updateField}
              placeholder="State"
              className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full md:col-span-1"
            />
            <input
              name="zip"
              value={form.zip}
              onChange={updateField}
              placeholder="Zip Code"
              className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full md:col-span-2"
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-base font-medium">What’s your property type?</h3>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {propertyTypes.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setSelectedType(t.key)}
                className={`flex flex-col items-center gap-2 p-3 rounded border ${selectedType === t.key ? 'bg-blue-600 text-white border-transparent' : 'bg-white text-gray-700'}`}>
                <div className={`w-8 h-8 rounded flex items-center justify-center ${selectedType === t.key ? 'bg-white/20' : 'bg-gray-100'}`}>{t.icon}</div>
                <div className="text-xs">{t.label}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => (onCancel ? onCancel() : null)}
            className="px-6 py-2 border rounded text-blue-600 bg-white">
            Cancel
          </button>

          <button
            type="button"
            onClick={() => {
              const formData = { ...form, propertyType: selectedType };
              navigate('/dashboard/selling_properties/list_property/property_information', { 
                state: { propertyAddress: formData } 
              });
            }}
            className="px-6 py-2 rounded text-white bg-gradient-to-r from-blue-500 to-blue-700 shadow">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListProperty
