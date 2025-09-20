import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import SellingSidebar from '../../SellingListingFlow/Sidebar'

export default function DashboardLayout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const useSellingSidebar = location.pathname.startsWith('/dashboard')

  return (
    <div className="min-h-screen flex">
      {useSellingSidebar ? <SellingSidebar open={open} onClose={() => setOpen(false)} /> : <Sidebar open={open} onClose={() => setOpen(false)} />}
      <div className="flex-1 md:pl-56">
        <Header onToggleSidebar={() => setOpen((s) => !s)} />
        <main className="p-6 bg-white min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
