import React, { useState } from 'react'

function StepPill({ label, active }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-8 h-2 rounded ${active ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
      <div className={`text-xs ${active ? 'text-gray-700' : 'text-gray-400'}`}>{label}</div>
    </div>
  )
}

function OptionCard({ title, icon, selected, onClick }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center gap-2 p-4 rounded border ${selected ? 'border-blue-300 bg-blue-50' : 'border-gray-200 bg-white'} w-40`}> 
      <div className="w-10 h-10 rounded flex items-center justify-center text-gray-500">{icon}</div>
      <div className="text-sm text-gray-700">{title}</div>
    </button>
  )
}

export default function SettlementTasks2({ onCancel, onContinue }) {
  const [holds, setHolds] = useState('single')
  const [title, setTitle] = useState('')

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-black">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Settlement Tasks</h2>
        <div className="text-sm text-gray-500 mt-1">Fulfill The Settlement Tasks Necessary To Close Your Transactions</div>
      </div>

      <div className="flex items-center gap-6 mb-8">
        <StepPill label="Title & Contact Info" active />
        <StepPill label="Parties Involved" />
        <StepPill label="Schedule Closing" />
        <StepPill label="Receive Funds" />
      </div>

      <div className="bg-white rounded shadow-sm p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <div className="text-xs text-gray-500 mb-2">Title Info Of The Seller</div>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="How Is The Title Held?" className="w-full border rounded px-3 py-2 text-sm" />
        </div>

        <div className="mb-6">
          <div className="text-sm font-medium mb-3">Holds Title?</div>
          <div className="flex gap-4">
            <OptionCard title="Single Individual" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path><path d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1"></path></svg>} selected={holds==='single'} onClick={() => setHolds('single')} />
            <OptionCard title="Multiple Individuals" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path></svg>} selected={holds==='multiple'} onClick={() => setHolds('multiple')} />
            <OptionCard title="Corporation LLC, Or Trust" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 7h8"></path></svg>} selected={holds==='corp'} onClick={() => setHolds('corp')} />
          </div>
        </div>

        <div className="mb-6">
          <div className="text-sm font-medium mb-3">Contact Info</div>
          <div className="grid grid-cols-3 gap-4">
            <input placeholder="Legal Name" className="border rounded px-3 py-2 text-sm" />
            <input placeholder="Email" className="border rounded px-3 py-2 text-sm" />
            <input placeholder="Phone Number" className="border rounded px-3 py-2 text-sm" />

            <input placeholder="Social Security Number" className="border rounded px-3 py-2 text-sm" />
            <input placeholder="Seller Forwarding Address" className="border rounded px-3 py-2 text-sm" />
            <select className="border rounded px-3 py-2 text-sm">
              <option>Marital Status</option>
              <option>Single</option>
              <option>Married</option>
            </select>
          </div>

          <div className="flex items-center gap-8 mt-4">
            <div>
              <div className="text-sm">Will This Individual Attend The Closing?</div>
              <div className="flex items-center gap-4 mt-2">
                <label className="inline-flex items-center"><input type="radio" name="attend" className="mr-2" /> Yes</label>
                <label className="inline-flex items-center"><input type="radio" name="attend" className="mr-2" /> No</label>
              </div>
            </div>

            <div>
              <div className="text-sm">Are There Any Civil Judgements Against Any Seller?</div>
              <div className="flex items-center gap-4 mt-2">
                <label className="inline-flex items-center"><input type="radio" name="judgement" className="mr-2" /> Yes</label>
                <label className="inline-flex items-center"><input type="radio" name="judgement" className="mr-2" /> No</label>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-sm font-medium mb-3">Title Insurance Information (Optional)</div>
          <div className="text-xs text-gray-500 mb-4">Provide A Copy Of Any Title Insurance Policies Or A Copy Of The HUD Statement From Your Purchase Of The Property If Its Readily Available</div>

          <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
            <div className="text-gray-400 mb-4">Upload Property Photo</div>
            <div className="text-sm text-gray-500 mb-4">Take multiple photos of your Property site</div>
            <button className="px-6 py-2 bg-blue-100 rounded shadow">Upload</button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6">
          <button onClick={() => (onCancel ? onCancel() : null)} className="px-6 py-2 rounded bg-orange-600 text-white">Cancel</button>
          <button onClick={() => (onContinue ? onContinue() : null)} className="px-8 py-2 rounded bg-gradient-to-r from-blue-600 to-blue-800 text-white">Continue</button>
        </div>
      </div>
    </div>
  )
}
