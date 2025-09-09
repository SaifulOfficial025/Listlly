import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SAMPLE = [
  { id: 1, name: 'John Doe', email: 'john@domain.com', phone: '01980012351', price: '$357,500' },
  { id: 2, name: 'John Doe', email: 'rahim@gmail.com', phone: '01980012351', price: '$367,500' },
  { id: 3, name: 'John Doe', email: 'rahim@gmail.com', phone: '01980012351', price: '$377,500' },
  { id: 4, name: 'John Doe', email: 'rahim@gmail.com', phone: '01980012351', price: '$360,500' },
  { id: 5, name: 'John Doe', email: 'rahim@gmail.com', phone: '01980012351', price: '$359,500' },
]

export default function RequestHighest() {
  const [selected, setSelected] = useState(1)
  const [deadline, setDeadline] = useState('2025-09-15')
  const [terms, setTerms] = useState('')
  const [opt1, setOpt1] = useState(true)
  const [opt2, setOpt2] = useState(true)
  const navigate = useNavigate()

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:px-6 sm:py-8 text-black">
      <button onClick={() => navigate(-1)} className="px-4 py-2 border rounded bg-white text-gray-700">Back</button>
      <h1 className="text-lg sm:text-2xl font-semibold mb-2">Request Highest &amp; Best Offer</h1>
      <div className="text-sm text-gray-500 mb-6">Select Recipient</div>

      <div className="bg-white border rounded divide-y">
        {SAMPLE.map(r => (
          <label key={r.id} className="flex flex-col sm:flex-row sm:items-center items-start justify-between p-4 cursor-pointer gap-3">
            <div className="flex items-center gap-4">
              <input type="radio" name="recipient" checked={selected===r.id} onChange={() => setSelected(r.id)} className="h-4 w-4" />
              <div>
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-gray-500">{r.email} • {r.phone}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400">Offer Price</div>
              <div className="text-blue-600 font-semibold">{r.price}</div>
            </div>
          </label>
        ))}
      </div>

      <button className="mt-3 text-sm text-blue-600">+ Add Recipient</button>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select a deadline highest &amp; Best offers need to be submitted by</label>
        <input type="date" value={deadline} onChange={e=>setDeadline(e.target.value)} className="border rounded px-3 py-2 w-full bg-white" />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Additional Terms &amp; Conditions</label>
        <textarea value={terms} onChange={e=>setTerms(e.target.value)} placeholder="Type here..." className="w-full border rounded p-3 h-28 text-sm dark: bg-white" />
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" checked={opt1} onChange={e=>setOpt1(e.target.checked)} />
          <span>Please update my 'property description' to include multiple offer situation and highest &amp; best deadline</span>
        </label>

        <label className="inline-flex items-center gap-2">
          <input type="checkbox" checked={opt2} onChange={e=>setOpt2(e.target.checked)} />
          <span>I understand &amp; accept the risk in requesting</span>
        </label>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          
          <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded">Send Request</button>
        </div>
      </div>
    </div>
  )
}
