import React, { useState } from 'react';

function ContactInformationModal({ onCancel, onSubmit }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    homeType: '',
    schedule: '',
    time: ''
  });

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-6 text-center">Contact Information</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">First Name</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={updateField}
                className="bg-white text-gray-900 border border-gray-200 rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={updateField}
                className="bg-white text-gray-900 border border-gray-200 rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                className="bg-white text-gray-900 border border-gray-200 rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
              <input
                name="phoneNumber"
                type="tel"
                value={form.phoneNumber}
                onChange={updateField}
                className="bg-white text-gray-900 border border-gray-200 rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Home Type</label>
              <input
                name="homeType"
                value={form.homeType}
                onChange={updateField}
                className="bg-white text-gray-900 border border-gray-200 rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Schedule</label>
              <input
                name="schedule"
                value={form.schedule}
                onChange={updateField}
                className="bg-white text-gray-900 border border-gray-200 rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Time</label>
              <input
                name="time"
                value={form.time}
                onChange={updateField}
                className="bg-white text-gray-900 border border-gray-200 rounded px-3 py-2 w-full"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700 mt-6"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactInformationModal;
