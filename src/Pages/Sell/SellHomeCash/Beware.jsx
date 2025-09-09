import React from 'react'
import { FiDollarSign, FiCircle, FiFileText, FiAlertTriangle } from 'react-icons/fi'
import Lowball  from "../../../../public/Lowball.svg"
import Tactics from "../../../../public/Tactics.svg"
import Cancellations from "../../../../public/Cancellations.svg"
import Fraud from "../../../../public/Fraud.svg"

function Beware() {
  const items = [
    {
      icon: <img src={Lowball} alt="Lowball Offers" />,
      title: 'Lowball Offers',
      desc: 'Cash buyers may offer much lower than market value, taking advantage of sellers who need a quick sale.',
    },
    {
      icon: <img src={Tactics} alt="Pressure Tactics" />,
      title: 'Pressure Tactics',
      desc: 'Cash buyers may pressure you into making quick decisions, limiting time to consider other offers and choices.',
    },
    {
      icon: <img src={Cancellations} alt="Hidden Fees and Deal Cancellations" />,
      title: 'Hidden Fees and Deal Cancellations',
      desc: 'Cash buyers may introduce hidden fees or back out of deals entirely, leaving you with little recourse.',
    },
    {
      icon: <img src={Fraud} alt="Title Fraud" />,
      title: 'Title Fraud',
      desc: 'Dishonest cash buyers may forge documents or manipulate property titles, putting your homeownership at risk.',
    },
  ]

  return (
    <section className="bg-[#fff2f2] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#ff6061] ">Beware of <span className="text-gray-800">“Cash for Houses” Scams</span></h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md flex items-center justify-center mx-auto">
                {it.icon}
              </div>
              <h3 className="text-center text-base sm:text-lg font-semibold text-gray-800 mt-3">{it.title}</h3>
              <p className="text-center text-sm text-gray-500 mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Beware
