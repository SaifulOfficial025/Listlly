import React from 'react'
import { FiHome, FiTool, FiUser, FiTruck, FiAlertTriangle } from 'react-icons/fi'
import Delinquency from "../../../../public/Delinquency.svg"
import Repairs from "../../../../public/Repairs.svg"
import Divorce from "../../../../public/Divorce.svg"
import Relocating from "../../../../public/Relocating.svg"
import Disaster from "../../../../public/Disaster.svg"
import Vacant from "../../../../public/Vacant.svg"


function WhenGetOffer() {
  const cards = [
    {
      icon: <img src={Delinquency} alt="Delinquency or Foreclosure" />,
      title: 'Delinquency or Foreclosure',
      subtitle: 'In financial distress? Sell & get cash for your home fast.',
    },
    {
      icon: <img src={Repairs} alt="Home Needs Repairs" />,
      title: 'Home Needs Repairs',
      subtitle: 'Cash out. No need to spring for repairs.',
    },
    {
      icon: <img src={Divorce} alt="Divorce or Inheritance" />,
      title: 'Divorce or Inheritance',
      subtitle: 'Rest easy. Get top dollar for your asset.',
    },
    {
      icon: <img src={Relocating} alt="Relocating or Downsizing" />,
      title: 'Relocating or Downsizing',
      subtitle: 'Moving or retiring, get cash hassle-free.',
    },
    {
      icon: <img src={Disaster} alt="Natural Disaster Damage" />,
      title: 'Natural Disaster Damage',
      subtitle: "Condemned home? We'll get you a cash offer.",
    },
    {
      icon: <img src={Vacant} alt="Vacant or a Rental" />,
      title: 'Vacant or a Rental',
      subtitle: "No worries. Our investors buy all kinds of properties.",
    },
  ]

  return (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">When to Get a <span className="text-[#ff6061]">Cash Offer</span></h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Houzeo helps you sell your home fast for cash, at the best price. We assist sellers in various situations like these and more:</p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md flex items-center justify-center">
                {c.icon}
              </div>
            </div>
            <h3 className="text-center text-base sm:text-lg font-semibold text-gray-800 mt-3">{c.title}</h3>
            <p className="text-center text-sm text-gray-500 mt-2">{c.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhenGetOffer
