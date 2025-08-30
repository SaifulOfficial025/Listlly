import React, { useState } from 'react';

function PlanApplicationModal({ plan, onCancel, onContinue }) {
  const [form, setForm] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    firstName: '',
    lastName: '',
    billingStreet: '',
    billingCity: '',
    billingState: '',
    billingZip: ''
  });

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const formatCardNumber = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').slice(0, 19);
  };

  const formatExpiry = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(?=\d)/, '$1/').slice(0, 5);
  };

  const handleCardNumberChange = (e) => {
    setForm(prev => ({ ...prev, cardNumber: formatCardNumber(e.target.value) }));
  };

  const handleExpiryChange = (e) => {
    setForm(prev => ({ ...prev, expiryDate: formatExpiry(e.target.value) }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">This Plan Will Be Apply To The Property Below</h3>
            <button 
              onClick={onCancel}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <div className="mb-6">
            <div className="text-sm text-gray-600 mb-1">Silver Plan</div>
            <div className="text-2xl font-bold text-blue-600">$99</div>
            <div className="text-sm text-gray-500">per month</div>
            <button className="mt-2 px-3 py-1 border rounded text-sm">
              Change Plan
            </button>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <h4 className="font-medium mb-3">Payment Information</h4>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Card Number</label>
                  <input
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="1234 5678 9012 3456"
                    className="bg-white text-gray-900 border border-gray-200 rounded px-3 py-2 w-full"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Expiration</label>
                    <input
                      name="expiryDate"
                      value={form.expiryDate}
                      onChange={handleExpiryChange}
                      placeholder="MM/YY"
                      className="bg-white text-gray-900 border border-gray-200 rounded px-3 py-2 w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">CVV</label>
                    <input
                      name="cvv"
                      value={form.cvv}
                      onChange={updateField}
                      placeholder="123"
                      maxLength="4"
                      className="bg-white text-gray-900 border border-gray-200 rounded px-3 py-2 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Billing Address</h4>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
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
                </div>
                
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Billing Street</label>
                  <input
                    name="billingStreet"
                    value={form.billingStreet}
                    onChange={updateField}
                    className="bg-white text-gray-900 border border-gray-200 rounded px-3 py-2 w-full"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">City</label>
                    <input
                      name="billingCity"
                      value={form.billingCity}
                      onChange={updateField}
                      className="bg-white text-gray-900 border border-gray-200 rounded px-3 py-2 w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">State</label>
                    <input
                      name="billingState"
                      value={form.billingState}
                      onChange={updateField}
                      className="bg-white text-gray-900 border border-gray-200 rounded px-3 py-2 w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Zip</label>
                    <input
                      name="billingZip"
                      value={form.billingZip}
                      onChange={updateField}
                      className="bg-white text-gray-900 border border-gray-200 rounded px-3 py-2 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => onContinue(form)}
            className="w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlanApplicationModal;
