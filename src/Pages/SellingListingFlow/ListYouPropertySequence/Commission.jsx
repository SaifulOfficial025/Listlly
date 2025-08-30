import React, { useState } from 'react';

function Commission({ onCancel, onContinue }) {
  const [commissionData, setCommissionData] = useState({
    commissionTerms: '',
    paymentCondition: '',
    specialAgreements: ''
  });

  const updateField = (e) => {
    const { name, value } = e.target;
    setCommissionData(prev => ({ ...prev, [name]: value }));
  };

  const commissionTermsOptions = [
    'Total Commission Rate (e.g., 3% to 6% of final sale price)',
    'Split Breakdown (e.g., 3% to listing broker, 3% to buyer\'s broker)',
    'Flat Fee Option (if applicable)',
    'Minimum Commission clause (optional, but common)'
  ];

  const paymentConditionOptions = [
    'When commission is earned (usually "upon closing" or "when a ready, willing, and able buyer is procured")',
    'Who pays it (the seller, from sale proceeds)',
    'Escrow instructions for paying the commission',
    'What happens if the buyer defaults after contract signing'
  ];

  const specialAgreementsOptions = [
    'Dual Agency Disclosure (if the same agent represents both sides)',
    'Early Termination Clause (if seller cancels the listing before the term ends)',
    'Marketing Standards (for specified marketing efforts if they are already tied into your using agent with)',
    'Exclusive Timeframe (if a sale closes before or certain date a certain contingent time)'
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-black">
         <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">
            <span className="text-red-400 mr-1">List</span> Your Property
          </h2>
        </div>
      <div className="text-left mb-8">
        <h2 className="text-2xl font-semibold text-[#2563eb]">Commission</h2>
      </div>

      <div className="bg-white rounded-lg shadow px-8 py-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">💼</div>
            <div>
              <div className="text-lg font-semibold">Commission Terms</div>
            </div>
          </div>
          <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-xs">Step 6 of 7</div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-base font-medium mb-3">Commission Terms</h3>
            <div className="space-y-2">
              {commissionTermsOptions.map((option, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-gray-700 mt-1 text-sm">{index + 1}.</span>
                  <span className="text-sm text-gray-700">{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-3">Payment Condition</h3>
            <div className="space-y-2">
              {paymentConditionOptions.map((option, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-gray-700 mt-1 text-sm">{index + 1}.</span>
                  <span className="text-sm text-gray-700">{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-3">Special Agreements</h3>
            <div className="space-y-2">
              {specialAgreementsOptions.map((option, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-gray-700 mt-1 text-sm">{index + 1}.</span>
                  <span className="text-sm text-gray-700">{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            type="button"
            onClick={() => (onCancel ? onCancel() : null)}
            className="px-6 py-2 border rounded text-blue-600 bg-white"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => (onContinue ? onContinue(commissionData) : null)}
            className="px-6 py-2 rounded text-white bg-gradient-to-r from-blue-500 to-blue-700 shadow"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Commission;
