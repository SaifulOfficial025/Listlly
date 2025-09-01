import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CounterOffer() {
  const navigate = useNavigate()
  const [settlementDate, setSettlementDate] = useState('July 3, 2021')
  const [expirationDate, setExpirationDate] = useState('July 12, 2021')

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-black">
      <h1 className="text-2xl font-semibold mb-2">Counter Offer</h1>
      <div className="text-sm text-gray-500 mb-6">The Buyer Provided Info</div>

      {/* Counter Offer header rows */}
      <div className="space-y-4 mb-6">
        <div className="bg-white border rounded">
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <div className="text-sm font-medium">Offer Contract</div>
            <div className="text-xs text-gray-500">3 Files/ Offer Contract</div>
          </div>
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="text-sm font-medium">Payment</div>
            <div className="text-xs text-gray-500">Mortgage • 1 Files/ Pre Approved Files</div>
          </div>
        </div>
      </div>

      {/* Financials */}
      <div className="bg-white border rounded mb-6">
        <div className="px-4 py-3 border-b">
          <div className="font-medium">Financials</div>
        </div>

        <div className="px-4 py-4 space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600">🏠</div>
              <div>
                <div className="text-sm">Offer Price</div>
                <div className="text-xs text-gray-400">List Price : $795,000</div>
              </div>
            </div>
            <div className="text-sm font-semibold">$700,000 <span className="text-green-500 text-xs">- $95,000</span></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600">💰</div>
              <div>
                <div className="text-sm">Earnest Money Deposit</div>
                <div className="text-xs text-gray-400">Original : $0</div>
              </div>
            </div>
            <div className="text-sm font-semibold">$0.00</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600">⚖️</div>
              <div>
                <div className="text-sm">Seller Paid Settlement Charges</div>
                <div className="text-xs text-gray-400">Original : $0</div>
              </div>
            </div>
            <div className="text-sm">$0.00</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600">🏷️</div>
              <div>
                <div className="text-sm">Seller Paid Settlement Charges</div>
                <div className="text-xs text-gray-400">Original : $0</div>
              </div>
            </div>
            <div className="text-sm">Buyer</div>
          </div>
        </div>
      </div>

      {/* Key Dates */}
      <div className="bg-white border rounded mb-6">
        <div className="px-4 py-3 border-b">
          <div className="font-medium">Key Dates</div>
        </div>

        <div className="px-4 py-4 space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600">📅</div>
              <div>
                <div className="text-sm">Settlement Date</div>
                <div className="text-xs text-gray-400">Original : Jun 18, 2021</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input value={settlementDate} onChange={e=>setSettlementDate(e.target.value)} className="border px-3 py-1 rounded text-sm" />
              <div className="text-sm text-green-500">-17 Days</div>
              <div className="text-green-600">✔</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600">⏳</div>
              <div>
                <div className="text-sm">Offer Expiration Date</div>
                <div className="text-xs text-gray-400">Original : May 19, 2021</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input value={expirationDate} onChange={e=>setExpirationDate(e.target.value)} className="border px-3 py-1 rounded text-sm" />
              <button className="text-blue-600 text-sm">✎</button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600">🔍</div>
              <div>
                <div className="text-sm">Inspection Period End Date</div>
                <div className="text-xs text-gray-400">Original : Jun 18, 2021</div>
              </div>
            </div>
            <div className="text-sm">Aug 7, 2021</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600">🛠️</div>
              <div>
                <div className="text-sm">Inspection Resolution Date</div>
                <div className="text-xs text-gray-400">Original : May 19, 2021</div>
              </div>
            </div>
            <div className="text-sm">Sep 30, 2021</div>
          </div>
        </div>
      </div>

      {/* Contingencies / Misc / Inclusions */}
      <div className="space-y-4 mb-6">
        <div className="bg-white border rounded">
          <div className="px-4 py-3 border-b font-medium">Contingencies</div>
          <div className="px-4 py-4 text-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium">Financing</div>
                <div className="text-xs text-gray-400">Original : No</div>
              </div>
              <div className="text-sm">Conventional Loan</div>
            </div>

            <div className="mt-4 flex items-start justify-between">
              <div>
                <div className="text-sm font-medium">Appraisal</div>
                <div className="text-xs text-gray-400">Original : No</div>
              </div>
              <div className="text-sm">No</div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded">
          <div className="px-4 py-3 border-b font-medium">Miscellaneous</div>
          <div className="px-4 py-4 text-sm">
            <div className="mb-4">
              <div className="text-sm font-medium">Home Warranty</div>
              <div className="text-xs text-gray-400">Original : 0</div>
            </div>

            <div>
              <div className="text-sm font-medium">Any Other Imp Offer Consideration</div>
              <div className="text-xs text-gray-500 mt-2">Buyer Agrees To Increase The Purchase Price By $1,000 Above Any Bona Fide Competing Offer, Up To The Agreed Maximum Price. This Escalation Shall Apply Only Upon Written Proof Of Such Competing Offer.</div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded">
          <div className="px-4 py-3 border-b font-medium">Inclusions/Exclusions</div>
          <div className="px-4 py-4 text-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-sm font-medium">Include Fixtures & Items Beyond The Usual</div>
                <div className="text-xs text-gray-400">Original : None</div>
              </div>
              <div className="text-sm">None</div>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium">Exclude Fixtures & Items Beyond The Usual</div>
                <div className="text-xs text-gray-400">Original : None</div>
              </div>
              <div className="text-sm">None</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded p-4 mb-6">
        <div className="text-sm font-medium mb-2">Any Comments (Optional)</div>
        <textarea className="w-full border rounded p-3 h-28 text-sm" placeholder="Add any comments..."></textarea>
      </div>

      <div className="flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="px-6 py-2 border rounded bg-white text-gray-700">Back</button>
  <button onClick={() => { alert('Counter offer is done successfully'); navigate('/dashboard/submitted_offer') }} className="px-8 py-2 rounded bg-gradient-to-r from-blue-600 to-blue-800 text-white">Save</button>
      </div>
    </div>
  )
}
