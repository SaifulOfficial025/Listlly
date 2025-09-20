import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const stats = [
  { label: 'All Projects', value: 6, color: 'from-[#DCEEFB] to-[#EEF6FF]', border: 'border-l-8 border-[#4A90E2]', text: 'text-[#4A90E2]' },
  { label: 'Complete Projects', value: 2, color: 'from-[#ECFDF5] to-[#F3FFF7]', border: 'border-l-8 border-[#16A34A]', text: 'text-[#16A34A]' },
  { label: 'Pending Projects', value: 4, color: 'from-[#FFF1F2] to-[#FFF7F8]', border: 'border-l-8 border-[#EF4444]', text: 'text-[#EF4444]' },
]

const properties = [
  {
    id: 1,
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    beds: 4,
    baths: 3,
    sqft: '2,200 sq ft',
    img: '/public/property.jpg',
    badge: 'Active',
    button: 'Start Work',
    buttonClass: 'bg-[#0B61E6] text-white',
  },
  {
    id: 2,
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    beds: 4,
    baths: 3,
    sqft: '2,200 sq ft',
    img: '/public/property.jpg',
    badge: 'Processing',
    button: 'Processing',
    buttonClass: 'bg-white text-[#0B61E6] border border-[#D1E4FF]'
  },
  {
    id: 3,
    title: '123 Oak Street, Irvine, CA 92602',
    price: '$899,000',
    beds: 4,
    baths: 3,
    sqft: '2,200 sq ft',
    img: '/public/property.jpg',
    badge: 'Complete',
    button: 'Completed',
    buttonClass: 'bg-white text-[#7B8AA3] border border-[#E6EEF8]'
  },
]

export default function RootPage() {
  const [activeTab, setActiveTab] = useState('all') // 'all' | 'complete' | 'pending'
  const [page, setPage] = useState(0)
  const pageSize = 3

  const filtered = useMemo(() => {
    if (activeTab === 'all') return properties
    if (activeTab === 'complete') return properties.filter(p => p.badge === 'Complete')
    // pending includes Processing and Active
    return properties.filter(p => p.badge !== 'Complete')
  }, [activeTab])

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))

  // ensure current page is valid
  if (page >= pageCount) setPage(0)

  const pageItems = filtered.slice(page * pageSize, page * pageSize + pageSize)
  const navigate = useNavigate()

  return (
    <div className="space-y-8">
      <div>
        <div className='flex items-center gap-2'>
            <h2 className="text-2xl font-semibold text-[#ff6061]">Your Assigned </h2> <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
        </div>
        <p className="text-sm text-gray-500">Monitor and manage all your property projects in one place.</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s, idx) => (
          <div key={s.label} className={`rounded-lg p-6 bg-gradient-to-r ${s.color} ${s.border} shadow-sm text-center`}>
            <div className={`text-3xl font-bold mt-3 ${s.text}`}>{s.value}</div>
            <div className="text-md font-bold text-black">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Projects header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">All Assigned Projects</h3>
          <p className="text-sm text-gray-500">Property details according to submitted info</p>
        </div>
        <a className="text-sm text-[#0B61E6] font-medium" href="#">View All</a>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 border-b pb-3">
        <button
          onClick={() => { setActiveTab('all'); setPage(0) }}
          className={`text-sm ${activeTab === 'all' ? 'text-[#0B61E6] font-medium' : 'text-gray-500'}`}>
          All Projects
        </button>
        <button
          onClick={() => { setActiveTab('complete'); setPage(0) }}
          className={`text-sm ${activeTab === 'complete' ? 'text-[#0B61E6] font-medium' : 'text-gray-500'}`}>
          Complete Projects
        </button>
        <button
          onClick={() => { setActiveTab('pending'); setPage(0) }}
          className={`text-sm ${activeTab === 'pending' ? 'text-[#0B61E6] font-medium' : 'text-gray-500'}`}>
          Pending Projects
        </button>
      </div>

      {/* Cards + nav */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pageItems.map((p) => (
            <div key={p.id} role="button" tabIndex={0} onClick={() => navigate(`/vendor_dashboard/property/${p.id}`)} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <div className="relative">
                <img src={p.img.replace('/public','')} alt={p.title} className="w-full h-40 object-cover" />
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${p.badge === 'Active' ? 'bg-[#E6F0FF] text-[#0B61E6]' : p.badge === 'Processing' ? 'bg-[#FFF7EB] text-[#D97706]' : 'bg-[#F3F4F6] text-[#6B7280]'}`}>{p.badge}</span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">{p.title}</div>
                    <div className="text-lg font-semibold text-gray-800 mt-2">{p.price}</div>
                  </div>
                </div>

                <div className="mt-3 text-sm text-gray-500 flex items-center gap-4">
                  <div>{p.beds} beds</div>
                  <div>{p.baths} baths</div>
                  <div>{p.sqft}</div>
                </div>

                <div className="mt-4">
                  <button className={`w-full h-10 rounded-md ${p.buttonClass}`}>{p.button}</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav arrows centered below cards */}
        <div className="flex flex-col items-center gap-3 mt-6">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setPage((p) => (p - 1 + pageCount) % pageCount)}
              disabled={pageCount <= 1}
              aria-label="Previous page"
              className="w-10 h-10 rounded-full bg-white shadow text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed">
              ◀
            </button>
            <button
              onClick={() => setPage((p) => (p + 1) % pageCount)}
              disabled={pageCount <= 1}
              aria-label="Next page"
              className="w-10 h-10 rounded-full bg-white shadow text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed">
              ▶
            </button>
          </div>

          {/* page dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`w-3 h-3 rounded-full ${i === page ? 'bg-[#0B61E6]' : 'bg-gray-200'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
