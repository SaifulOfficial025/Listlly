import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaRegImage } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";

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
            <div className="text-sm font-semibold text-gray-800">Title & Contact Inf</div>
            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
            <div className="mt-2 w-36 h-3 rounded-full bg-gray-200 overflow-hidden">
              <div className="h-3 bg-blue-600 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="text-sm font-semibold text-gray-800">Parties Involved</div>
            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
            <div className="mt-2 w-36 h-3 rounded-full bg-gray-200 overflow-hidden">
              <div className="h-3 bg-blue-600 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="text-sm font-semibold text-gray-800">Schedule Closing</div>
            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
            <div className="mt-2 w-36 h-3 rounded-full bg-gray-200 overflow-hidden">
              <div className="h-3 bg-blue-600 rounded-full" style={{ width: '100%' }} />
            </div>
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
            <span className="font-medium text-gray-800 inline-flex items-center"> <BiSolidDollarCircle  className='w-6 h-6 mr-2 ' /> Fund By Wire</span>
          </button>
          <button type="button" onClick={() => setFundMethod('check')} className={`flex items-center gap-3 px-6 py-4 rounded border ${fundMethod === 'check' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'}`}>
            <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${fundMethod === 'check' ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'}`}>
              {fundMethod === 'check' && <span className="w-2 h-2 rounded-full bg-white block" />}
            </span>
            <span className="font-medium text-gray-800 inline-flex items-center"> <FaMoneyCheckAlt className='w-6 h-6 mr-2 ' /> Fund By Check</span>
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
            <div className="border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 flex flex-col items-center justify-center text-center min-h-[140px] md:min-h-[160px] lg:min-h-[180px]" style={{ minHeight: '140px', height: '140px', maxHeight: '180px' }}>
              <input type="file" accept=".svg,.png,.jpg,.gif" className="sr-only" id="wirefile" onChange={handleFile} />
              <label htmlFor="wirefile" className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                <FaRegImage className="mx-auto mb-2 text-blue-500 text-4xl" />
                <span className="text-blue-600 text-base font-medium">
                  Click to replace
                </span>
                <span className="block text-gray-400 text-sm mt-1">
                  or drag and drop
                </span>
                <span className="block text-gray-400 text-xs mt-1">
                  SVG, PNG, JPG or GIF (max. 400 × 400px)
                </span>
                {file && <div className="mt-2 text-xs text-gray-600">{file.name}</div>}
              </label>
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
