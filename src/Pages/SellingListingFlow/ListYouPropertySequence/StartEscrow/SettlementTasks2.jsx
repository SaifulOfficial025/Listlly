import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SettlementTasks2({ onCancel }) {
  // State for radio groups and selects
  const [listingAgent, setListingAgent] = useState('yes')
  const [buyerAgent, setBuyerAgent] = useState('yes')
  const [thirdParty, setThirdParty] = useState('no')
  const [sellerDocs, setSellerDocs] = useState('yes')

  const navigate = useNavigate()

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-black">
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
            <div className="text-sm font-semibold text-gray-800">Parties Involved</div>
            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
            <div className="mt-2 w-36 h-3 rounded-full bg-gray-200 overflow-hidden">
              <div className="h-3 bg-blue-600 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="text-sm font-semibold text-gray-400">Schedule Closing</div>
            <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
            <div className="mt-2 w-36 h-3 rounded-full bg-gray-100" />
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="text-sm font-semibold text-gray-400">Receive Funds</div>
            <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
            <div className="mt-2 w-36 h-3 rounded-full bg-gray-100" />
          </div>
        </div>
      </div>

      {/* Real Estate Agents */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Real Estate Agents</h3>
        <p className="text-xs text-gray-500 mb-4">Fill The Input Fields Here To Continue Next</p>

        {/* Listing Agent */}
        <div className="mb-6">
          <div className="text-sm font-medium text-gray-700 mb-2">Is There A Listing Agent Involved In This Transaction?</div>
          <div className="flex gap-6 mb-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="listingAgent" checked={listingAgent === 'yes'} onChange={() => setListingAgent('yes')} />
              <span className="text-sm">Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="listingAgent" checked={listingAgent === 'no'} onChange={() => setListingAgent('no')} />
              <span className="text-sm">No</span>
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Listing Agent Name" />
            <select className="border border-gray-200 rounded p-3 dark:bg-white">
              <option>Listing Agent Phone</option>
            </select>
            <input className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Listing Agent Email Address" />
            <input className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Listing Agent Commission" />
          </div>
        </div>

        {/* Buyer's Agent */}
        <div className="mb-6">
          <div className="text-sm font-medium text-gray-700 mb-2">Is There A Listing Agent Involved In This Transaction?</div>
          <div className="flex gap-6 mb-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="buyerAgent" checked={buyerAgent === 'yes'} onChange={() => setBuyerAgent('yes')} />
              <span className="text-sm">Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="buyerAgent" checked={buyerAgent === 'no'} onChange={() => setBuyerAgent('no')} />
              <span className="text-sm">No</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="buyerAgent" checked={buyerAgent === 'unknown'} onChange={() => setBuyerAgent('unknown')} />
              <span className="text-sm">Not Known/No Offer Accepted Yet</span>
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Buyer's Agent Name" />
            <select className="border border-gray-200 rounded p-3 dark:bg-white">
              <option>Buyer's Agent Phone</option>
            </select>
            <input className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Buyer's Agent Email Address" />
            <input className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Buyer's Agent Commission" />
          </div>
        </div>
      </div>

      {/* Buyer(s) */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Buyer(S)</h3>
        <p className="text-xs text-gray-500 mb-4">Fill The Input Fields Here To Continue Next</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Name Of Buyers" />
          <select className="border border-gray-200 rounded p-3 dark:bg-white">
            <option>Phone</option>
          </select>
          <input className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Email" />
          <input className="border border-gray-200 rounded p-3 dark:bg-white" placeholder="Buyers Agent Commission" />
        </div>
      </div>

      {/* Other Third Parties */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Other Third Parties</h3>
        <p className="text-xs text-gray-500 mb-4">Fill The Input Fields Here To Continue Next</p>
        <div className="mb-2 text-sm font-medium text-gray-700">Have You Hired Anyone To Perform Any Work On The Property In The Past Next Six Months?</div>
        <div className="flex gap-6 mb-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="thirdParty" checked={thirdParty === 'yes'} onChange={() => setThirdParty('yes')} />
            <span className="text-sm">Yes</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="thirdParty" checked={thirdParty === 'no'} onChange={() => setThirdParty('no')} />
            <span className="text-sm">No</span>
          </label>
        </div>
      </div>

      {/* Seller Closing Documents */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Seller Closing Documents</h3>
        <p className="text-xs text-gray-500 mb-4">Fill The Input Fields Here To Continue Next</p>
        <div className="mb-2 text-sm font-medium text-gray-700">Are We To Prepare The Deed, Lien Waiver, and 1099?</div>
        <div className="flex gap-6 mb-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="sellerDocs" checked={sellerDocs === 'yes'} onChange={() => setSellerDocs('yes')} />
            <span className="text-sm">Yes</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="sellerDocs" checked={sellerDocs === 'no'} onChange={() => setSellerDocs('no')} />
            <span className="text-sm">No</span>
          </label>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4 mt-10">
        <button type="button" onClick={() => navigate('/dashboard/selling_properties/start_escrow/settlement_task1')} className="px-6 py-2 bg-gray-100 text-gray-700 rounded">Back</button>
        <button type="button" onClick={() => navigate('/dashboard/selling_properties/start_escrow/settlement_task3')} className="px-6 py-2 bg-blue-600 text-white rounded shadow">Continue</button>
      </div>
    </div>
  )
}
