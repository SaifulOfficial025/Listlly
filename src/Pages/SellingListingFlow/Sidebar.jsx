import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../../public/Listlly-logo-white.svg"

function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-56 flex-col justify-between bg-gradient-to-b from-[#3f7cf2] to-[#0e2b57] text-white">
        <div>
          <div className="px-6 pt-6 pb-4 flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={Logo} alt="Listlly Logo" />
              </div>
              <div className="text-white">
              </div>
            </div>
          </div>

          <nav className="mt-4 space-y-1">
            <NavLink to="/dashboard/selling_properties" className={({isActive}) => `block w-full pl-6 py-3 text-sm ${isActive ? 'bg-white text-[#1641ff] font-semibold' : 'text-white/90 hover:opacity-100'}`}>
              Sell Properties
            </NavLink>

            <NavLink to="/dashboard/submitted_offer" className={({isActive}) => `block w-full pl-6 py-3 text-sm ${isActive ? 'bg-white text-[#1641ff] font-semibold' : 'text-white/90 hover:opacity-100'}`}>
              Submitted Offer
            </NavLink>

            <NavLink to="/dashboard/buy_properties" className={({isActive}) => `block w-full pl-6 py-3 text-sm ${isActive ? 'bg-white text-[#1641ff] font-semibold' : 'text-white/90 hover:opacity-100'}`}>
              Buy Properties
            </NavLink>

            <NavLink to="/dashboard/saved_properties" className={({isActive}) => `block w-full pl-6 py-3 text-sm ${isActive ? 'bg-white text-[#1641ff] font-semibold' : 'text-white/90 hover:opacity-100'}`}>Saved Properties</NavLink>
            <NavLink to="/dashboard/how_to_videos" className={({isActive}) => `block w-full pl-6 py-3 text-sm ${isActive ? 'bg-white text-[#1641ff] font-semibold' : 'text-white/90 hover:opacity-100'}`}>How To Videos</NavLink>
          </nav>
        </div>

        <div className="px-6 pb-6 text-xs">
          <div className="text-white/90 font-semibold mb-2">Contact US</div>
          <div className="text-white/80 text-[11px] mb-3">For Proper Guidelines And Further Support</div>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="white">
                <path d="M2.003 5.884l8 4.5a1 1 0 00.994 0l8-4.5A1 1 0 0018.002 4H2.998a1 1 0 00-.995 1.884z" />
                <path d="M18 8.118l-8 4.5-8-4.5V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div className="text-[13px]">(844) 448-0110</div>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="white">
                <path d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" stroke="white" strokeWidth="0" />
                <path d="M3 6l9 6 9-6" stroke="white" strokeWidth="0" />
              </svg>
            </div>
            <div className="text-[13px]">support@houzeo.com</div>
          </div>

          <div className="text-[11px] text-white/80 mt-3">Schedule a free consultation call!</div>
        </div>
      </aside>

      {/* Mobile slide-over */}
      <div className={`fixed inset-0 z-40 md:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />

        <aside className={`absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-b from-[#3f7cf2] to-[#0e2b57] text-white transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="px-6 pt-6 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={Logo} alt="Listlly Logo" />
              </div>
            </div>
            <button onClick={onClose} className="p-2">Close</button>
          </div>

          <nav className="mt-4 space-y-1 px-4">
            <NavLink to="/dashboard/selling_properties" onClick={onClose} className={({isActive}) => `block w-full pl-2 py-3 text-sm ${isActive ? 'bg-white text-[#1641ff] font-semibold' : 'text-white/90 hover:opacity-100'}`}>
              Sell Properties
            </NavLink>
            <NavLink to="/dashboard/submitted_offer" onClick={onClose} className={({isActive}) => `block w-full pl-2 py-3 text-sm ${isActive ? 'bg-white text-[#1641ff] font-semibold' : 'text-white/90 hover:opacity-100'}`}>
              Submitted Offer
            </NavLink>
            <NavLink to="/dashboard/buy_properties" onClick={onClose} className={({isActive}) => `block w-full pl-2 py-3 text-sm ${isActive ? 'bg-white text-[#1641ff] font-semibold' : 'text-white/90 hover:opacity-100'}`}>
              Buy Properties
            </NavLink>
          </nav>
        </aside>
      </div>
    </>
  )
}

export default Sidebar
