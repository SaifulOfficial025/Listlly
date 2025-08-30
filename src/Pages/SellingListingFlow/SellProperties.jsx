import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const SellProperties = ({ onCreate }) => {
  return (
    <div className="min-h-screen flex bg-white">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold">
                <span className="text-[#F97373] mr-2">Selling</span>
                <span className="text-[#111827]">Properties</span>
              </h1>
              <p className="text-sm text-gray-500 mt-1">Find your dream home from thousands of listings across Texas.</p>
            </div>

            <div>
              <button onClick={onCreate} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                </svg>
                <span className="font-medium">List New Property</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SellProperties
