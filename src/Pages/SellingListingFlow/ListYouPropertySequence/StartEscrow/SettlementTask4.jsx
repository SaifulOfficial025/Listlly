import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SettlementTask4() {
  const navigate = useNavigate();
  const [fundMethod, setFundMethod] = useState('wire');
  const [fields, setFields] = useState({
    requestor: '',
    listed: '',
    aba: '',
    aba2: '',
    bank: '',
    address: '',
    account: '',
    account2: '',
    instructions: '',
  });
  const [file, setFile] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
  }

  function handleFile(e) {
    setFile(e.target.files[0]);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-black">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Settlement Tasks</h2>
        <p className="text-sm text-gray-500 mt-2">Fulfill The Settlement Tasks Necessary To Close Your Transactions</p>

        {/* Steps */}
        <div className="mt-6 flex items-end justify-between gap-6">
          <div className="flex flex-col items-center flex-1">
            <div className="text-sm font-semibold text-gray-400">Title & Contact Info</div>
            <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
            <div className="mt-2 w-36 h-3 rounded-full bg-gray-100" />
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="text-sm font-semibold text-gray-400">Parties Involved</div>
            <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
            <div className="mt-2 w-36 h-3 rounded-full bg-gray-100" />
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="text-sm font-semibold text-gray-400">Schedule Closing</div>
            <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
            <div className="mt-2 w-36 h-3 rounded-full bg-gray-100" />
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="text-sm font-semibold text-gray-800">Receive Funds</div>
            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
            <div className="mt-2 w-36 h-3 rounded-full bg-gray-200 overflow-hidden">
              <div className="h-3 bg-blue-600 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Fund Method Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">How Would You Like To Receive Your Funds?</h3>
        <div className="flex gap-6 mb-6">
          <button type="button" onClick={() => setFundMethod('wire')} className={`flex items-center gap-3 px-6 py-4 rounded border ${fundMethod === 'wire' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'}`}>
            <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${fundMethod === 'wire' ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'}`}>
              {fundMethod === 'wire' && <span className="w-2 h-2 rounded-full bg-white block" />}
            </span>
            <span className="font-medium text-gray-800">Fund By Wire</span>
          </button>
          <button type="button" onClick={() => setFundMethod('check')} className={`flex items-center gap-3 px-6 py-4 rounded border ${fundMethod === 'check' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'}`}>
            <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${fundMethod === 'check' ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'}`}>
              {fundMethod === 'check' && <span className="w-2 h-2 rounded-full bg-white block" />}
            </span>
            <span className="font-medium text-gray-800">Fund By Check</span>
          </button>
        </div>
      </div>

      {/* Funds By Wire Section */}
      {fundMethod === 'wire' && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Funds By Wire</h3>
          <p className="text-xs text-gray-500 mb-4">Fill The Input Fields Here To Continue Next</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input name="requestor" value={fields.requestor} onChange={handleChange} className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Name(s) Of Requestor" />
            <input name="bank" value={fields.bank} onChange={handleChange} className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Wire Funds To (Bank Name)" />
            <input name="listed" value={fields.listed} onChange={handleChange} className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Name(s) Listed On Account" />
            <input name="address" value={fields.address} onChange={handleChange} className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Address On Account" />
            <input name="aba" value={fields.aba} onChange={handleChange} className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="ABA Routing Numbers" />
            <input name="account" value={fields.account} onChange={handleChange} className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Account Number" />
            <input name="aba2" value={fields.aba2} onChange={handleChange} className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Re-Enter ABA Routing Numbers" />
            <input name="account2" value={fields.account2} onChange={handleChange} className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Re-Enter Account Number" />
          </div>
          <input name="instructions" value={fields.instructions} onChange={handleChange} className="border border-gray-200 rounded p-3 w-full mb-4 dark:bg-white" placeholder="Additional Instructions" />
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-2">Upload Loan Statement</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50">
              <input type="file" accept=".svg,.png,.jpg,.gif" className="sr-only" id="wirefile" onChange={handleFile} />
              <label htmlFor="wirefile" className="cursor-pointer text-blue-600 underline">
                Click to replace <span className="text-gray-400">or drag and drop<br />SVG, PNG, JPG or GIF (max. 400 × 400px)</span>
              </label>
              {file && <div className="mt-2 text-xs text-gray-600">{file.name}</div>}
            </div>
          </div>
        </div>
      )}

      {/* Funds By Check Section (if needed, add fields here) */}

      {/* Actions */}
      <div className="flex justify-end gap-4 mt-10">
        <button type="button" onClick={() => navigate('/dashboard/selling_properties/start_escrow/settlement_task3')} className="px-6 py-2 bg-gray-100 text-gray-700 rounded">Back</button>
        <button type="button" onClick={() => navigate('/dashboard/selling_properties')} className="px-6 py-2 bg-blue-600 text-white rounded shadow">Complete Launching</button>
      </div>
    </div>
  );
}
