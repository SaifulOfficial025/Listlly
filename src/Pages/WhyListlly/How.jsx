import React from 'react'

export default function How() {
  const steps = [
    'Create your account',
    'Enter property details',
    'Set your asking price',
    'Choose a listing plan',
    'Add property photos and description'
  ]

  return (
    <section className="py-8 md:py-12 bg-[#FFF5F6]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-6 md:mb-8 text-center">
          <h3 className="text-xl md:text-3xl text-[#EB4E3D] font-semibold">How Listlly's <span className="text-black">Flat Fee MLS Listing Works</span> </h3>
          <p className="text-sm text-gray-500 mt-2">5 easy steps to get your property on the local market.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg,#ed7782,#5e6ace)' }}
                  >
                    <span className="text-white font-bold">{i + 1}</span>
                  </div>
                  <div className="pt-1 text-[#1C1C1C] text-base">{s}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-lg">
              <div className="relative" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Demo video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
