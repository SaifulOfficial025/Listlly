import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function GetYourCashOffer() {
  // modal state: showModal controls whether overlay is visible
  // showConfirmation controls whether the confirmation popup is visible
  const [showModal, setShowModal] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', price: '' })

  function openPopups() {
    setShowModal(true)
    setShowConfirmation(false)
  }

  function closeAll() {
    setShowModal(false)
    setShowConfirmation(false)
    setForm({ firstName: '', lastName: '', email: '', price: '' })
  }

  function onSubmit(e) {
    e.preventDefault()
    // After submitting the contact form, show the confirmation popup
    setShowConfirmation(true)
  }

  function updateField(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
  }
  return (
  <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Get Your <span className="text-[#ff6061]">Cash Offer</span></h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Enter your property address to receive a detailed cash offer analysis</p>
      </div>

      <div className="mt-6">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-8">
          <div className="bg-[#F3F8FF] rounded-lg p-4 flex flex-col sm:flex-row items-stretch sm:items-center">
            <div className="flex items-center bg-white rounded-md flex-1 px-3 py-3 sm:px-4 sm:py-2 shadow-sm">
              <AiOutlineSearch className="text-blue-500 w-5 h-5 mr-3" />
              <input
                type="text"
                placeholder="Enter your property address"
                className="w-full text-gray-600 focus:outline-none bg-transparent"
              />
            </div>

            <button onClick={openPopups} className="mt-3 sm:mt-0 sm:ml-4 bg-gradient-to-b from-[#2B6CB0] to-[#1B4FA0] text-white px-6 py-3 rounded-md shadow-md hover:opacity-95">
              Get Cash Offer
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-60" onClick={closeAll} />

          <div className="relative max-w-3xl w-full mx-4 sm:mx-auto">
            {/* If confirmation is not shown, render the contact form */}
            {!showConfirmation && (
              <div className="grid grid-cols-1 gap-6 items-start">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl max-w-3xl mx-auto">
                  <h3 className="text-xl font-semibold mb-4 text-black">Contact Information</h3>
                  <form onSubmit={onSubmit} className="space-y-4">
                    <input value={form.firstName} onChange={(e) => updateField('firstName', e.target.value)} placeholder="First Name" className="w-full border rounded-md px-4 py-3 dark:bg-white text-black" />
                    <input value={form.lastName} onChange={(e) => updateField('lastName', e.target.value)} placeholder="Last Name" className="w-full border rounded-md px-4 py-3 dark:bg-white text-black" />
                    <input value={form.email} onChange={(e) => updateField('email', e.target.value)} placeholder="Email" className="w-full border rounded-md px-4 py-3 dark:bg-white text-black" />
                    <div>
                      <label className="text-sm text-gray-600">How Much Do You Want For A Property</label>
                      <input value={form.price} onChange={(e) => updateField('price', e.target.value)} placeholder="$" className="w-full border rounded-md px-4 py-3 mt-1 dark:bg-white text-black" />
                    </div>
                    <div className="pt-4">
                      <button type="submit" className="w-full bg-gradient-to-r from-[#2B6CB0] to-[#1B4FA0] text-white py-3 rounded-md shadow-lg">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* If confirmation should be shown, replace content with the confirmation card */}
            {showConfirmation && (
              <div className="flex justify-center">
                <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#1DC600]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" stroke="#1DC600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h4 className="font-semibold text-black">Cash Offer Request Received</h4>
                    <p className="text-sm text-gray-500">We'll review your details and send your offer shortly.</p>
                    <button onClick={closeAll} className="mt-4 w-full bg-gradient-to-b from-[#2B6CB0] to-[#1B4FA0] text-white py-2 rounded-md">Confirm</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
