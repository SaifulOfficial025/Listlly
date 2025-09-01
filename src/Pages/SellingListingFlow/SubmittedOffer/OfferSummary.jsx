import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const SAMPLE_OFFERS = [
  { no: '#1', by: 'Suzzy Jhonson', received: 'May 16, 2021 08:45 PM', price: '$605,000', keyDates: 'June 21, 2021 \nMay 19, 2021' },
  { no: '#2', by: 'Jessica Krule', received: 'May 16, 2021 08:45 PM', price: '$615,000', keyDates: 'June 21, 2021 \nMay 19, 2021' },
  { no: '#3', by: 'Saim Whitey', received: 'May 16, 2021 08:45 PM', price: '$595,000', keyDates: 'June 21, 2021 \nMay 19, 2021' },
  { no: '#4', by: 'Saim Whitey', received: 'May 16, 2021 08:45 PM', price: '$585,000', keyDates: 'June 21, 2021 \nMay 19, 2021' },
  { no: '#5', by: 'Saim Whitey', received: 'May 16, 2021 08:45 PM', price: '$575,000', keyDates: 'June 21, 2021 \nMay 19, 2021' },
]

function parsePrice(priceStr) {
  if (!priceStr) return 0
  const num = priceStr.replace(/[^0-9.-]+/g, '')
  return parseFloat(num) || 0
}

export default function OfferSummary() {
  const navigate = useNavigate()
  const [offers, setOffers] = useState(SAMPLE_OFFERS)
  const [compared, setCompared] = useState(false)

  // memoized sorted order (descending) when compared
  const sorted = useMemo(() => {
    if (!compared) return offers
    return [...offers].sort((a, b) => parsePrice(b.price) - parsePrice(a.price))
  }, [compared, offers])

  function onCompare() {
    setCompared(true)
    // keep offers state unchanged - UI will use sorted memo
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-black">
      <div className="mb-4">
        <button onClick={() => navigate(-1)} className="px-3 py-1 rounded border bg-white text-gray-700">Back</button>
      </div>

      <div className="bg-blue-50 rounded-lg px-6 py-4 flex items-center gap-6 mb-6">
        <img src="/property.jpg" alt="property" className="w-28 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="text-sm text-gray-600">123 Oak Street, Irvine, CA 92602</div>
          <div className="text-xs text-gray-500">Rancho Santa Fe, CA 92067</div>
          <div className="text-lg font-semibold mt-1">$899,000</div>
          <div className="text-sm text-blue-600 mt-1">4 beds • 3 baths • 2,200 sq ft</div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-medium">Offers Summary <span className="text-sm text-gray-400">{offers.length}</span></h3>

        <div className="flex items-center gap-3">
          <button onClick={onCompare} className="px-4 py-2 rounded bg-blue-600 text-white">Compare Offer</button>
          <button onClick={() => navigate('/dashboard/submitted_offer/request_highest')} className="px-4 py-2 rounded border bg-white text-blue-600">Request Highest &amp; Best Offer</button>
        </div>
      </div>

      <div className="bg-white rounded shadow-sm overflow-hidden">
        {/* table header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-3 text-sm text-gray-500 font-medium bg-gray-50">
          <div className="col-span-1">Offer No</div>
          <div className="col-span-3">Offer By</div>
          <div className="col-span-2">Offer Received</div>
          <div className="col-span-2">Offer Price</div>
          <div className="col-span-2">Key Dates</div>
          <div className="col-span-2 text-right">Action</div>
        </div>

        {/* offers */}
        {sorted.map((o, idx) => {
          // apply highlight colors for top 3 when compared
          let rowStyle = {}
          if (compared) {
            if (idx === 0) rowStyle = { background: '#9bd9b8' }
            else if (idx === 1) rowStyle = { background: '#d0ecdd' }
            else if (idx === 2) rowStyle = { background: '#f2f6e5' }
          }

          return (
            <div key={idx} style={rowStyle} className={`grid grid-cols-12 gap-4 items-center px-6 py-4`}>
              <div className="col-span-1 text-sm text-gray-700">{o.no}</div>
              <div className="col-span-3 text-sm text-gray-800">{o.by}</div>
              <div className="col-span-2 text-sm text-gray-600">{o.received}</div>
              <div className="col-span-2 text-sm font-semibold">{o.price}</div>
              <div className="col-span-2 text-sm text-gray-600 whitespace-pre-line">{o.keyDates}</div>
              <div className="col-span-2 text-right">
                <button onClick={() => navigate('/dashboard/submitted_offer/offer_details')} className="text-sm inline-flex items-center whitespace-nowrap px-4 py-2 bg-blue-600 text-white rounded-full shadow">See Details</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
