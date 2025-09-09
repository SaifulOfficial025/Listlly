import React from 'react'
import bestprice from "../../../../public/bestprice.svg"
import asis from "../../../../public/asis.svg"
import closingdate from "../../../../public/closingdate.svg"

function WhyChooseListlly() {
  const cards = [
    {
      img: bestprice,
      title: 'Get the Best Price',
      subtitle: 'Only Listlly makes it possible for you to get fast cash offers and top dollar offers.',
    },
    {
      img: asis,
      title: 'Sell "As Is"',
      subtitle: 'No repairs needed. Sell your house fast for cash.',
    },
    {
      img: closingdate,
      title: 'Choose Your Closing Date',
      subtitle: 'You choose your own closing date. Fast & hassle free transaction.',
    },
  ]

  return (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose <span className="text-[#ff6061]">Listlly</span></h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">With Listlly, you get both options. An immediate cash offer via our cash buyer network, and a competitive cash listing via the MLS for top dollar offers!</p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm p-6 sm:p-8 text-center">
            <img src={c.img} alt={c.title} className="mx-auto w-24 sm:w-32 h-20 sm:h-24 object-contain" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-3">{c.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{c.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseListlly
