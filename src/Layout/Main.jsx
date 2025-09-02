import { Outlet } from "react-router-dom"
import Sidebar from "../Pages/SellingListingFlow/Sidebar"
import Header from "../Pages/SellingListingFlow/Header"

const Main = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
        <Header />

        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Main
