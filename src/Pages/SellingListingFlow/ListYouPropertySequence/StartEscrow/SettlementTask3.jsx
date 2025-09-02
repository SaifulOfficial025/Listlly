import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SettlementTask3() {
  const navigate = useNavigate();
  const [closingDate, setClosingDate] = useState('');
  const [mortgage1, setMortgage1] = useState({ with: '', phone: '', loan: '', file: null });
  const [mortgage2, setMortgage2] = useState({ with: '', phone: '', loan: '', file: null });

  function handleFile(e, idx) {
    const file = e.target.files[0];
    if (idx === 1) setMortgage1(m => ({ ...m, file }));
    else setMortgage2(m => ({ ...m, file }));
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
            <div className="mt-2 w-36 h-3 rounded-full bg-gray-100"  />
            
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="text-sm font-semibold text-gray-800">Schedule Closing</div>
            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
            <div className="mt-2 w-36 h-3 rounded-full bg-gray-200 overflow-hidden">
              <div className="h-3 bg-blue-600 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="text-sm font-semibold text-gray-400">Receive Funds</div>
            <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
            <div className="mt-2 w-36 h-3 rounded-full bg-gray-100" />
          </div>
        </div>
      </div>

      {/* Closing Info */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Closing Info</h3>
        <p className="text-xs text-gray-500 mb-4">Fill The Input Fields Here To Continue Next</p>
        <div className="max-w-xs">
          <label className="block text-sm text-gray-700 mb-2">Preferred Closing Date</label>
          <input type="date" value={closingDate} onChange={e => setClosingDate(e.target.value)} className="border border-gray-200 rounded p-3 w-full dark:bg-white" />
        </div>
      </div>

      {/* Mortgage Info */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Mortgage Info</h3>
        <p className="text-xs text-gray-500 mb-4">Fill The Input Fields Here To Continue Next</p>

        {/* Mortgage 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm text-gray-700 mb-2">1. Mortgage With</label>
            <input className="border border-gray-200 rounded p-3 w-full mb-3 dark:bg-white" placeholder="Enter Here" value={mortgage1.with} onChange={e => setMortgage1(m => ({ ...m, with: e.target.value }))} />
            <input className="border border-gray-200 rounded p-3 w-full mb-3 dark:bg-white" placeholder="Phone Number" value={mortgage1.phone} onChange={e => setMortgage1(m => ({ ...m, phone: e.target.value }))} />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Loan Number</label>
            <input className="border border-gray-200 rounded p-3 w-full mb-3 dark:bg-white" placeholder="Enter Here" value={mortgage1.loan} onChange={e => setMortgage1(m => ({ ...m, loan: e.target.value }))} />
            <label className="block text-sm text-gray-700 mb-2">Upload Loan Statement</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50">
              <input type="file" accept=".svg,.png,.jpg,.gif" className="sr-only" id="mortgage1file" onChange={e => handleFile(e, 1)} />
              <label htmlFor="mortgage1file" className="cursor-pointer text-blue-600 underline">
                Click to replace <span className="text-gray-400">or drag and drop<br />svg, png, jpg or gif (max. 400 × 400px)</span>
              </label>
              {mortgage1.file && <div className="mt-2 text-xs text-gray-600">{mortgage1.file.name}</div>}
            </div>
          </div>
        </div>

        {/* Mortgage 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-700 mb-2">2. Mortgage With</label>
            <input className="border border-gray-200 rounded p-3 w-full mb-3 dark:bg-white" placeholder="Enter Here" value={mortgage2.with} onChange={e => setMortgage2(m => ({ ...m, with: e.target.value }))} />
            <input className="border border-gray-200 rounded p-3 w-full mb-3 dark:bg-white" placeholder="Phone Number" value={mortgage2.phone} onChange={e => setMortgage2(m => ({ ...m, phone: e.target.value }))} />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Loan Number</label>
            <input className="border border-gray-200 rounded p-3 w-full mb-3 dark:bg-white" placeholder="Enter Here" value={mortgage2.loan} onChange={e => setMortgage2(m => ({ ...m, loan: e.target.value }))} />
            <label className="block text-sm text-gray-700 mb-2">Upload Loan Statement</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50">
              <input type="file" accept=".svg,.png,.jpg,.gif" className="sr-only" id="mortgage2file" onChange={e => handleFile(e, 2)} />
              <label htmlFor="mortgage2file" className="cursor-pointer text-blue-600 underline">
                Click to replace <span className="text-gray-400">or drag and drop<br />svg, png, jpg or gif (max. 400 × 400px)</span>
              </label>
              {mortgage2.file && <div className="mt-2 text-xs text-gray-600">{mortgage2.file.name}</div>}
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4 mt-10">
  <button type="button" onClick={() => navigate('/dashboard/selling_properties/start_escrow/settlement_tasks2')} className="px-6 py-2 bg-gray-100 text-gray-700 rounded">Back</button>
        <button type="button" onClick={() => navigate('/dashboard/selling_properties/start_escrow/settlement_task4')} className="px-6 py-2 bg-blue-600 text-white rounded shadow">Continue</button>
      </div>
    </div>
  );
}
