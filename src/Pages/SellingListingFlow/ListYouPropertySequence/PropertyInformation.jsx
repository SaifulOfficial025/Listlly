import React, { useState } from 'react';

function PropertyInformation({ onCancel, onContinue }) {
  const [form, setForm] = useState({
    builtYear: '',
    stories: '',
    beds: '',
    baths: '',
    halfBaths: '',
    livingArea: '',
    lotSize: '',
    additionalUnit: '',
    hoaFees: '',
    features: [{ type: 'Flooring', description: 'Carpet, Vinyl, Luxury Vinyl' }]
  });

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const addFeature = () => {
    setForm(prev => ({
      ...prev,
      features: [...prev.features, { type: '', description: '' }]
    }));
  };

  const updateFeature = (index, field, value) => {
    const updated = [...form.features];
    updated[index][field] = value;
    setForm(prev => ({ ...prev, features: updated }));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-black">
        <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold"><span className="text-red-400 mr-1">List</span> Your Property</h2>
      </div>
      <div className="text-left mb-8">
        <h2 className="text-2xl font-semibold text-[#2563eb]">Property Information</h2>
      </div>

      <div className="bg-white rounded-lg shadow px-8 py-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">📋</div>
            <div>
              <div className="text-lg font-semibold">Enter Property Basic Info.</div>
            </div>
          </div>
          <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-xs bg-pink-100">Step 2 of 7</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Built Year</label>
            <input
              name="builtYear"
              value={form.builtYear}
              onChange={updateField}
              className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">No. of Stories</label>
            <input
              name="stories"
              value={form.stories}
              onChange={updateField}
              className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">No. of Beds</label>
            <input
              name="beds"
              value={form.beds}
              onChange={updateField}
              className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">No. of Baths</label>
            <input
              name="baths"
              value={form.baths}
              onChange={updateField}
              className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">No. of Half Baths (Optional)</label>
            <input
              name="halfBaths"
              value={form.halfBaths}
              onChange={updateField}
              className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Living Area</label>
            <div className="relative">
              <input
                name="livingArea"
                value={form.livingArea}
                onChange={updateField}
                className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full pr-10"
              />
              <span className="absolute right-3 top-2 text-gray-500 text-sm">Sq Ft</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Lot Size</label>
            <div className="relative">
              <input
                name="lotSize"
                value={form.lotSize}
                onChange={updateField}
                className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full pr-16"
              />
              <span className="absolute right-3 top-2 text-gray-500 text-sm">Sq Ft</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Unit</label>
            <select
              name="additionalUnit"
              value={form.additionalUnit}
              onChange={updateField}
              className="bg-white text-gray-900 border border-gray-200 rounded px-3 py-2 w-full"
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">HOA Fees Per Months</label>
          <input
            name="hoaFees"
            value={form.hoaFees}
            onChange={updateField}
            className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full md:w-1/3"
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Property Features</h3>
            <button
              type="button"
              onClick={addFeature}
              className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              ➕ Add Features
            </button>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Features Type</label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descriptions</label>
              </div>
            </div>
            
            {form.features.map((feature, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  value={feature.type}
                  onChange={(e) => updateFeature(index, 'type', e.target.value)}
                  placeholder="e.g., Flooring"
                  className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
                />
                <input
                  value={feature.description}
                  onChange={(e) => updateFeature(index, 'description', e.target.value)}
                  placeholder="e.g., Carpet, Vinyl, Luxury Vinyl"
                  className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-3 py-2 w-full"
                />
              </div>
            ))}
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
            onClick={() => (onContinue ? onContinue(form) : null)}
            className="px-6 py-2 rounded text-white bg-gradient-to-r from-blue-500 to-blue-700 shadow"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyInformation;
