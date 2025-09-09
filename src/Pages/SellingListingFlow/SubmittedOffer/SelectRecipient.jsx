import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SAMPLE = [
  { id: 1, name: 'John Doe', email: 'rahim@gmail.com', phone: '01980012351', price: '$357,500' },
  { id: 2, name: 'John Doe', email: 'rahim@gmail.com', phone: '01980012351', price: '$367,500' },
  { id: 3, name: 'John Doe', email: 'rahim@gmail.com', phone: '01980012351', price: '$377,500' },
  { id: 4, name: 'John Doe', email: 'rahim@gmail.com', phone: '01980012351', price: '$360,500' },
  { id: 5, name: 'John Doe', email: 'rahim@gmail.com', phone: '01980012351', price: '$359,500' },
]

export default function SelectRecipient({ onBack, onConfirm }) {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(SAMPLE[0].id)

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:px-6 sm:py-8 text-black">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Sending Highest &amp; Best Offer to Select Recipient</h2>
      <div className="text-sm text-gray-500 mb-4">Select Recipient</div>

      <div className="bg-white border rounded divide-y">
        {SAMPLE.map(r => (
          <label key={r.id} className="flex flex-col sm:flex-row sm:items-center items-start justify-between p-4 cursor-pointer gap-3">
            <div className="flex items-center gap-4">
              <input type="radio" name="recipient" checked={selected === r.id} onChange={() => setSelected(r.id)} className="h-4 w-4" />
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

      <div className="mt-4 text-sm text-gray-600">Highest &amp; Best Offer Request Sent to {SAMPLE.length} Recipient</div>

      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
        <button onClick={() => (onBack ? onBack() : navigate(-1))} className="w-full sm:w-auto px-6 py-2 rounded border bg-white text-gray-700">Back</button>
        <button onClick={() => (onConfirm ? onConfirm(selected) : null)} className="w-full sm:w-auto px-6 py-2 rounded bg-blue-600 text-white">Send</button>
      </div>
    </div>
  )
}
