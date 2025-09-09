import React from 'react'

export default function Hero() {
  return (
    <section className="relative w-full mt-16">
      {/* Background image (public/WhyListllyHero.svg) + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/WhyListllyHero.svg')" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: headline */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="text-[#FF6B6B]">$215 Million</span> in
              <br />
              Savings and counting
            </h2>
            <p className="mt-6 text-lg max-w-lg text-white/80">
              Let's market your property to local buyers with our proven flat fee
              MLS listing service.
            </p>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { num: '180,000', label: 'Home Listed', icon: '📄' },
              { num: '2.4M', label: 'Homes for Sale', icon: '🏠' },
              { num: '20,000', label: 'Showings', icon: '🚪' },
              { num: '9,500', label: 'Offers Received', icon: '💰' },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-6 flex items-center gap-4 shadow-md">
                <div className="w-12 h-12 rounded-md bg-white/10 flex items-center justify-center text-white text-2xl">
                  {s.icon}
                </div>
                <div>
                  <div className="text-white text-xl font-bold">{s.num}</div>
                  <div className="text-white/80 text-sm">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
