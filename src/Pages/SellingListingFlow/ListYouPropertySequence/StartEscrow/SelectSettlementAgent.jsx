import React from 'react'

const AGENTS = [
  {
    name: 'Nicole Smith',
    company: 'Propert Settlements Inc',
    address: '823 Elizabeth Dr, Oacland, NC 2456',
    avatar: '/signup.png',
  },
  {
    name: 'Jennie Siman',
    company: 'Propert Settlements Inc',
    address: '823 Elizabeth Dr, Oacland, NC 2456',
    avatar: '/signup.png',
  },
  {
    name: 'Jennie Siman',
    company: 'Propert Settlements Inc',
    address: '823 Elizabeth Dr, Oacland, NC 2456',
    avatar: '/signup.png',
  },
  {
    name: 'Jennie Siman',
    company: 'Propert Settlements Inc',
    address: '823 Elizabeth Dr, Oacland, NC 2456',
    avatar: '/signup.png',
  },
]

export default function SelectSettlementAgent({ onBack, onContinue }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-black">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Select Settlement Agent</h2>
        <div className="text-sm text-gray-500 mt-1">You Can Select Your Settlement Agent Here</div>
      </div>

      {/* table header */}
      <div className="grid grid-cols-12 gap-4 items-center text-sm text-gray-500 font-medium mb-2">
        <div className="col-span-3 bg-gray-100 py-3 px-4 rounded">Agent</div>
        <div className="col-span-3 bg-gray-100 py-3 px-4 rounded">Company</div>
        <div className="col-span-4 bg-gray-100 py-3 px-4 rounded">Address</div>
        <div className="col-span-2 bg-gray-100 py-3 px-4 rounded">Action</div>
      </div>

      <div className="bg-white">
        {AGENTS.map((a, i) => (
          <div key={i} className="grid grid-cols-12 gap-4 items-center py-4 border-b last:border-b-0">
            <div className="col-span-3 flex items-center gap-3 px-4">
              <img src={a.avatar} alt={a.name} className="w-10 h-10 rounded-full object-cover" />
              <a className="text-sm text-blue-600 hover:underline">{a.name}</a>
            </div>

            <div className="col-span-3 px-4 text-sm text-gray-700">{a.company}</div>

            <div className="col-span-4 px-4 text-sm text-gray-600">{a.address}</div>

            <div className="col-span-2 px-4 flex justify-end">
              <button className="text-sm px-4 py-1 border rounded-full text-gray-700">Select</button>
            </div>
          </div>
        ))}
      </div>

      {/* footer actions */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button onClick={() => (onBack ? onBack() : null)} className="px-6 py-2 rounded border border-blue-300 text-blue-600 bg-white">
          Back
        </button>

        <button onClick={() => (onContinue ? onContinue() : null)} className="px-8 py-2 rounded bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
          Continue
        </button>
      </div>
    </div>
  )
}
