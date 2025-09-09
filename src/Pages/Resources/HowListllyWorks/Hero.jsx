import React from 'react'

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center mt-12 sm:mt-16" style={{ backgroundImage: `url('/ResourcesHero.svg')` }}>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">What is <span className="text-[#FF6B6B]">Listlly?</span></h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl">Listlly is a tech-centric For Sale By Owner website and real estate platform that gives you access to tools only real estate agents have.</p>

            <ul className="mt-6 space-y-3 text-white/90 list-disc pl-5">
              <li><strong>IntelliList Listing Management System:</strong> Makes listing your home simple, and requesting changes fast & online!</li>
              <li><strong>Listlly Offers:</strong> Allows you to review and compare offers online. You can even counter an offer, or call for Highest & Best offers..</li>
              <li><strong>Listlly Showings:</strong> This newly launched feature lets you easily manage showing requests from buyers and buyer agents!</li>
            </ul>
          </div>

          {/* right side intentionally empty to let background illustration show */}
          <div />
        </div>
      </div>
    </section>
  )
}
