import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
  <div className="flex bg-white overflow-hidden">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

  <div className="flex-1 flex flex-col overflow-hidden md:ml-56 bg-white min-h-screen">
        <div className="sticky top-0 z-20 bg-white">
          <Header onToggleSidebar={() => setSidebarOpen(true)} />
        </div>
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
