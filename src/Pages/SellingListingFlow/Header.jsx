import React from 'react'

const Header = ({ name = 'Soliman', avatarUrl = 'https://i.pravatar.cc/56?img=12' }) => {
  return (
    <header className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-lg text-gray-800 font-medium">
            <span className="text-gray-700">Hi, Welcome </span>
            <a href="#" className="text-[#0054F6] font-semibold hover:underline">{name}</a>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
              <img src={avatarUrl} alt="avatar" className="w-full h-full object-cover" />
            </div>
            <button className="text-gray-400 hover:text-gray-600" aria-label="open profile menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200" />
    </header>
  )
}

export default Header
