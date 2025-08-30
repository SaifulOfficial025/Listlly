import React, { useState } from 'react';
import PlanApplicationModal from './PlanApplicationModal';

function SelectPlan({ onCancel, onContinue }) {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [showModal, setShowModal] = useState(false);

  const plans = [
    {
      id: 'silver',
      name: 'Silver',
      price: '$249+',
      description: 'Best for DIY sellers',
      commission: '+0.5% at Close',
      color: 'bg-gray-600',
      features: [
        'MLS Listing Guarantee 24 Photos, Truly, Realtor, Zillow, and more',
        'Unlimited Open Houses',
        'Leafy InfoSet ✓',
        'Leafy Showing ✓'
      ]
    },
    {
      id: 'gold',
      name: 'Gold',
      price: '$299+',
      description: 'Best for most sellers',
      commission: '+1% at Close',
      color: 'bg-yellow-500',
      features: [
        'Everything in Silver Plus',
        'Licensed Broker Assistance',
        'Contract to Close Consulting',
        'Listing Video ✓',
        'Pro Photos ✓',
        'Premium Yard Sign (BRB)',
        'Leafy Disclosure'
      ]
    },
    {
      id: 'platinum',
      name: 'Platinum',
      price: '$349+',
      description: 'Best for first-time sellers',
      commission: '+1.25% at Close',
      color: 'bg-red-500',
      features: [
        'Everything in Gold Plus',
        'Licensed Broker',
        'Expert Negotiation',
        'Repair Negotiation',
        'Expert Consultation',
        'Closing Assistance',
        'Purchase Contingency',
        '12-month Listing',
        'Optimizing Buyback',
        'Rush Service (Grab Up To 7 Hours*)',
        'Coming Soon*',
        'Max Exposure Additional MLS'
      ]
    }
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    setShowModal(true);
  };

  const handleModalContinue = (formData) => {
    setShowModal(false);
    if (onContinue) {
      onContinue({ 
        selectedPlan, 
        planDetails: plans.find(p => p.id === selectedPlan),
        ...formData 
      });
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-10 text-black">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Select a Plan</h2>
        </div>

        <div className="bg-white rounded-lg shadow px-8 py-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">📦</div>
              <div>
                <div className="text-lg font-semibold">Pick a Flat Fee Plan That Fits Your Budget</div>
                <div className="text-sm text-gray-600">
                  You can save $4,375 to $13,750 selling on <span className="text-blue-600 font-medium">Listly*</span>
                </div>
              </div>
            </div>
            <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-xs">Step 4 of 7</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {plans.map((plan) => (
              <div key={plan.id} className="border rounded-lg overflow-hidden">
                <div className={`${plan.color} text-white text-center py-4`}>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm opacity-90">{plan.description}</p>
                  <div className="text-2xl font-bold mt-2">{plan.price}</div>
                  <div className="text-sm">{plan.commission}</div>
                </div>
                
                <div className="p-4">
                  <ul className="space-y-2 text-sm mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full py-2 rounded font-medium ${
                      plan.id === 'gold' 
                        ? 'bg-yellow-500 text-white' 
                        : plan.id === 'platinum'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-600 text-white'
                    }`}
                  >
                    Buy {plan.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs text-gray-500 space-y-2 mb-6">
            <p>* Potential savings calculated at 1.75% of your listing price of $250,000. Savings can be as high as $13,750 (6.5%) if the buyer pays more. Upfront fees are due at closing.</p>
            <p>On Silver, Gold, and Premium plans, a minimum commission of $999 is applicable. If your listing is in New York City, an additional 0.25% fee is closing is applicable.</p>
            <p>† Properties in New York City are charged $99 FOR LEGAL review fee BY LEGAL experts to finalize the contract between buyer and seller, and filing agent.</p>
            <p>‡ All Escape and Legre are PRE- with a seller. Service is then refills that includes you, the yard sign, and the house, and get the going $40 back paid at closing when it available for purchase. Refunds are not applicable on listing agent signs.</p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => (onCancel ? onCancel() : null)}
              className="px-6 py-2 border rounded text-gray-600 bg-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <PlanApplicationModal
          plan={plans.find(p => p.id === selectedPlan)}
          onCancel={() => setShowModal(false)}
          onContinue={handleModalContinue}
        />
      )}
    </>
  );
}

export default SelectPlan;
