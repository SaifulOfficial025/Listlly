import React, { useState } from 'react'

export default function SettlementTasks() {
  const [open, setOpen] = useState(true)

  const bullets = [
    {
      title: 'Title And Contact Info',
      desc: 'This Tab Asks You For Various Details On How The Property Is Held And Any Judgement Against The Seller.'
    },
    {
      title: 'Third Party Info',
      desc: 'In This Tab You Will Find Details Of Third Parties Involved In Transaction, Including The Listing Agent, The Buyers Agent And Contractors That Might Have Worked On Property.'
    },
    {
      title: 'Closing And Mortgage',
      desc: 'This Tab Asks You When You Have Like To Close And Ask For Details On Mortgage On Your Property.'
    },
    {
      title: 'Disbursing Funds',
      desc: 'In This Tab You Will Find Detail Showhow Would You Like To Receive The Funds Closing. This Could Be Through A Wire Or Check.'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-black">
      <div className="flex items-start gap-6 mb-8">
        <div className="bg-blue-50 rounded px-4 py-4 flex items-center gap-4 flex-1">
          <img src="/property.jpg" alt="property" className="w-28 h-20 object-cover rounded" />
          <div>
            <div className="text-sm text-gray-700 font-medium">123 Oak Street, Irvine, CA 92602</div>
            <div className="text-xs text-gray-500">Rancho Santa Fe, CA 92067</div>
            <div className="text-lg font-semibold text-blue-700 mt-1">$899,000</div>
            <div className="text-sm text-blue-600 mt-1">4 beds • 3 baths • 2,200 sq ft</div>
          </div>
        </div>

        <div className="w-64 bg-white rounded-lg shadow p-4">
          <div className="text-xs text-gray-500">Settlement Agent</div>
          <div className="mt-3 flex items-center gap-3">
            <img src="/signup.png" alt="agent" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <div className="font-medium">Nicole Smith</div>
              <div className="text-xs text-gray-500">+1 (234) 345-6789</div>
              <div className="text-xs text-blue-600">nicole@agencymail.com</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Settlement Tasks</h3>
        <p className="text-sm text-gray-500 mt-1 mb-4">These Are The Tasks Assigned By Your Settlement Agent. These Are The Highest Priority Tasks Necessary To Help You Close Transaction.</p>

        <div className="bg-white border rounded shadow-sm">
          <div className="px-6 py-4 border-b flex items-center justify-between cursor-pointer" onClick={() => setOpen(!open)}>
            <div>
              <div className="font-medium">Complete Seller Info Needed For Settlement File</div>
              <div className="text-sm text-gray-500 mt-1">Your Settlement Agent Needs Some Important Information To Start Your Settlement File. This Tasks Allow Them To Securely Request This Information From You. This Information Includes The Following</div>
            </div>
            <div className="text-gray-400">{open ? '▴' : '▾'}</div>
          </div>

          {open && (
            <div className="px-6 py-6 space-y-4 text-sm text-gray-700">
              {bullets.map((b, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 flex-shrink-0">•</div>
                  <div>
                    <div className="font-medium">{b.title}</div>
                    <div className="text-gray-500 text-sm mt-1">{b.desc}</div>
                  </div>
                </div>
              ))}

              <div className="mt-4 flex items-center gap-4">
                <button className="px-6 py-2 rounded bg-green-500 text-white">Mark As Complete</button>
                <button className="px-6 py-2 rounded bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow">Launch Now</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
