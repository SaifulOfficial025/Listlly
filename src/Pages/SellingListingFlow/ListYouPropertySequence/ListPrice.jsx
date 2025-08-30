import React, { useState } from 'react';

function ListPrice({ onCancel, onContinue }) {
  const [price, setPrice] = useState('');

  const formatPrice = (value) => {
    return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handlePriceChange = (e) => {
    const formatted = formatPrice(e.target.value);
    setPrice(formatted);
  };

  const calculateSavings = () => {
    const numPrice = parseInt(price.replace(/,/g, '')) || 0;
    const savingsLow = (numPrice * 0.0175).toLocaleString();
    const savingsHigh = (numPrice * 0.065).toLocaleString();
    return { low: savingsLow, high: savingsHigh };
  };

  const savings = calculateSavings();

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-black">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">List Price</h2>
      </div>

      <div className="bg-white rounded-lg shadow px-8 py-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">💰</div>
            <div>
              <div className="text-lg font-semibold">Set Your Asking Price</div>
              <div className="text-sm text-gray-600">
                Go ahead and enter a price. Your broker will provide a Comparative Market Analysis (CMA) to help you price it accurately.
              </div>
            </div>
          </div>
          <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-xs">Step 3 of 7</div>
        </div>

        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter Your Asking Price</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                value={price}
                onChange={handlePriceChange}
                placeholder="0"
                className="bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded px-8 py-3 w-full text-lg"
              />
            </div>
          </div>

          {price && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-600">💰</span>
                <span className="text-sm font-medium text-green-800">Your savings via Listly</span>
              </div>
              <div className="text-lg font-semibold text-green-700">
                ${savings.low} to ${savings.high}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            type="button"
            onClick={() => (onCancel ? onCancel() : null)}
            className="px-6 py-2 border rounded text-gray-600 bg-white"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('ListPrice Continue clicked, price:', price);
              console.log('onContinue function:', onContinue);
              if (onContinue) {
                const priceData = { price: price ? price.replace(/,/g, '') : '0' };
                console.log('Sending price data:', priceData);
                onContinue(priceData);
              } else {
                console.error('onContinue function not provided!');
              }
            }}
            className="px-6 py-2 rounded text-white bg-gradient-to-r from-blue-500 to-blue-700 shadow hover:shadow-lg transition-shadow"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListPrice;
