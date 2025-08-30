import React, { useState, useRef, useEffect } from 'react'

const Header = ({ name = 'Soliman', avatarUrl = 'https://i.pravatar.cc/56?img=12' }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  return (
    <header className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-lg text-gray-800 font-medium">
            <span className="text-gray-700">Hi, Welcome </span>
            <a href="#" className="text-[#0054F6] font-semibold hover:underline">{name}</a>
          </div>

          <div className="relative" ref={ref}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                <img src={avatarUrl} alt="avatar" className="w-full h-full object-cover" />
              </div>
              <button onClick={() => setOpen((s) => !s)} className="text-gray-400 hover:text-gray-600" aria-label="open profile menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <ul className="divide-y">
                  <li>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm text-gray-800 hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 20a6 6 0 0112 0" />
                      </svg>
                      Account Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm text-gray-800 hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                      </svg>
                      Back to Feed
                    </a>
                  </li>
                  <li>
                    <button onClick={() => { /* implement logout */ }} className="w-full text-left flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" />
                      </svg>
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200" />
    </header>
  )
}

export default Header
