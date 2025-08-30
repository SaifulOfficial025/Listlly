import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-white">
      <div className="sticky top-0 h-screen flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-20 bg-white">
          <Header />
        </div>
        <main className="flex-1 overflow-auto max-h-[calc(100vh-64px)] p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
