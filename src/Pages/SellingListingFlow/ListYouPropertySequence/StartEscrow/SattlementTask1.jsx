import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import individual from "../../../../../public/individual.svg"
import multiple from "../../../../../public/multiple.svg"
import corporate from "../../../../../public/corporate.svg"


function SattlementTask1() {
  const navigate = useNavigate()
  const [selectedHold, setSelectedHold] = useState('single')
  const [contactInfo, setContactInfo] = useState({
    legalName: '',
    email: '',
    phone: '',
    ssn: '',
    forwarding: '',
  })
  const [attendClosing, setAttendClosing] = useState('yes')
  const [civilJudgement, setCivilJudgement] = useState('no')
  const [uploadedFiles, setUploadedFiles] = useState([])

  function handleChange(e) {
    const { name, value } = e.target
    setContactInfo(s => ({ ...s, [name]: value }))
  }

  function handleFile(e) {
    const files = Array.from(e.target.files)
    setUploadedFiles(files)
  }

  return (
    <div className="p-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Settlement Tasks</h2>
          <p className="text-sm text-gray-500 mt-2">Fulfill The Settlement Tasks Necessary To Close Your Transactions</p>

          {/* Steps */}
          <div className="mt-6 flex items-end justify-between gap-6">
            {/* Step 1 - active */}
            <div className="flex flex-col items-center flex-1">
              <div className="text-sm font-semibold text-gray-800">Title & Contact Info</div>
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
              <div className="mt-2 w-36 h-3 rounded-full bg-gray-200 overflow-hidden">
                <div className="h-3 bg-blue-600 rounded-full" style={{ width: '100%' }} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center flex-1 opacity-60">
              <div className="text-sm text-gray-400">Parties Involved</div>
              <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
              <div className="mt-2 w-36 h-3 rounded-full bg-gray-100" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center flex-1 opacity-60">
              <div className="text-sm text-gray-400">Schedule Closing</div>
              <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
              <div className="mt-2 w-36 h-3 rounded-full bg-gray-100" />
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center flex-1 opacity-60">
              <div className="text-sm text-gray-400">Receive Funds</div>
              <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
              <div className="mt-2 w-36 h-3 rounded-full bg-gray-100" />
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 gap-6">
            {/* Title */}
            <div>
              <h3 className="text-lg font-medium text-gray-800">Title</h3>
              <p className="text-sm text-gray-500 mt-1">Title Info Of The Seller</p>
              <label className="block text-sm text-gray-500 mt-4">How Is The Title Held?</label>
              <input
                className="mt-2 w-full border border-gray-200 rounded-md p-3 text-sm placeholder-gray-400 dark:bg-white"
                placeholder="How Is The Title Held?"
              />
            </div>

            {/* Holds Title */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Holds Title?</h4>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => setSelectedHold('single')}
                  className={`p-4 border rounded-lg text-left hover:shadow ${selectedHold === 'single' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-md  flex items-center justify-center">
                      {/* person icon */}
                    <img src={individual} alt="" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">Single Individual</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedHold('multiple')}
                  className={`p-4 border rounded-lg text-left hover:shadow ${selectedHold === 'multiple' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-md  flex items-center justify-center">
                      {/* group icon */}
                      <img src={multiple} alt="" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">Multiple Individuals</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedHold('corporation')}
                  className={`p-4 border rounded-lg text-left hover:shadow ${selectedHold === 'corporation' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-md  flex items-center justify-center">
                      <img src={corporate} alt="" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">Corporation LLC, Or Trust</div>
                    </div>
                  </div>
                </button>


              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-medium text-gray-800 dark:bg-white">Contact Info</h4>
              <p className="text-sm text-gray-500">Enter Legal Name And Contact Info Of The Individual Who Will Need To Sign On Sale Deed.</p>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <input name="legalName" value={contactInfo.legalName} onChange={handleChange} className="p-3 border border-gray-200 rounded dark:bg-white" placeholder="Legal Name" />
                <input name="email" value={contactInfo.email} onChange={handleChange} className="p-3 border border-gray-200 rounded dark:bg-white" placeholder="Email" />
                <input name="phone" value={contactInfo.phone} onChange={handleChange} className="p-3 border border-gray-200 rounded dark:bg-white" placeholder="Phone Number" />
                <input name="ssn" value={contactInfo.ssn} onChange={handleChange} className="p-3 border border-gray-200 rounded dark:bg-white" placeholder="Social Security Number" />
                <input name="forwarding" value={contactInfo.forwarding} onChange={handleChange} className="p-3 border border-gray-200 rounded dark:bg-white" placeholder="Seller Forwarding Address" />
                <select className="p-3 border border-gray-200 rounded dark:bg-white text-black" defaultValue="single">
                  <option value="single">Marital Status</option>
                  <option>Single</option>
                  <option>Married</option>
                </select>
              </div>

              <div className="mt-20 grid grid-cols-2 gap-6 text-black">
                <div className=''>
                  <div className="text-sm text-gray-600 mb-2">Will This Individual Attend The Closing?</div>
                  <div className="flex items-center gap-4">
                    <label className={`inline-flex items-center cursor-pointer ${attendClosing === 'yes' ? '' : 'opacity-80'}`}>
                      <input type="radio" name="attend" checked={attendClosing === 'yes'} onChange={() => setAttendClosing('yes')} className="form-radio" />
                      <span className="ml-2 text-sm">Yes</span>
                    </label>
                    <label className={`inline-flex items-center cursor-pointer ${attendClosing === 'no' ? '' : 'opacity-80'}`}>
                      <input type="radio" name="attend" checked={attendClosing === 'no'} onChange={() => setAttendClosing('no')} className="form-radio" />
                      <span className="ml-2 text-sm">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-2">Are There Any Civil Judgements Against Any Seller?</div>
                  <div className="flex items-center gap-4">
                    <label className={`inline-flex items-center cursor-pointer ${civilJudgement === 'yes' ? '' : 'opacity-80'}`}>
                      <input type="radio" name="civil" checked={civilJudgement === 'yes'} onChange={() => setCivilJudgement('yes')} className="form-radio" />
                      <span className="ml-2 text-sm">Yes</span>
                    </label>
                    <label className={`inline-flex items-center cursor-pointer ${civilJudgement === 'no' ? '' : 'opacity-80'}`}>
                      <input type="radio" name="civil" checked={civilJudgement === 'no'} onChange={() => setCivilJudgement('no')} className="form-radio" />
                      <span className="ml-2 text-sm">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Title Insurance Upload */}
            <div className='mt-20'>
              <h4 className="text-lg font-medium text-gray-800">Title Insurance Information (Optional)</h4>
              <p className="text-sm text-gray-500 mt-1">Provide A Copy Of Any Title Insurance Policies Or A Copy Of The Hud Statement From Your Purchase Of The Property If It Is Readily Available</p>

              <label className="mt-4 block border-2 border-dashed border-gray-200 rounded-lg p-8 text-center bg-gray-50">
                <div className="flex flex-col items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mb-3" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3v10" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10l5-5 5 5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="text-sm text-gray-500">Upload Property Photo</div>
                  <div className="text-xs text-gray-400 mt-1">Take multiple photos of your Property site</div>
                  <input type="file" multiple onChange={handleFile} className="sr-only" />
                 
                </div>
              </label>

              {uploadedFiles.length > 0 && (
                <div className="mt-3 text-sm text-gray-600">{uploadedFiles.length} file(s) selected</div>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 mt-6">
              <button onClick={() => navigate(-1)} className="px-6 py-2 bg-orange-600 text-white rounded">Cancel</button>
                   <button
        className="px-8 py-3 rounded bg-blue-600 text-white"
        onClick={() => navigate('/dashboard/selling_properties/start_escrow/settlement_tasks2')}
      >
        Continue
      </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SattlementTask1
