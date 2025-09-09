import React from 'react'

const VideoEmbed = ({ id }) => (
  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
    <iframe
      className="absolute inset-0 w-full h-full rounded-lg"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
)

export default function Manage() {
  const demoId = 'ysz5S6PUM-U'

  return (
  <div className="space-y-12">
      {/* Manage Showings */}
      <section className="bg-gray-50 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Manage <span className="text-[#FF6B6B]">Showings</span></h3>
              <p className="mt-4 text-gray-600 max-w-lg">You can now manage your property showing calendar 100% online. Contact info of buyers and agents who request showings is available for you to reach out.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-start">

              <div className="rounded-lg overflow-hidden shadow flex-1">
                <VideoEmbed id={demoId} />
                <p className="mt-3 text-sm text-gray-700">How to enable and configure Listlly showing settings</p>
              </div>
              <div className="rounded-lg overflow-hidden shadow md:w-80 flex-shrink-0 mt-4 md:mt-0">
                <VideoEmbed id={demoId} />
                <p className="mt-3 text-sm text-gray-700">How to manage showings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Offers */}
      <section className="py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Managing <span className="text-[#FF6B6B]">Offers</span></h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Review and compare offers, counter an offer, and even request highest and best offers! All online on Listlly.com.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow">
              <VideoEmbed id={demoId} />
              <p className="mt-3 text-sm text-gray-700">How to submit a counteroffer on your home</p>
            </div>

            <div className="rounded-lg overflow-hidden shadow">
              <VideoEmbed id={demoId} />
              <p className="mt-3 text-sm text-gray-700">How to request highest & best offers.</p>
            </div>

            <div className="rounded-lg overflow-hidden shadow">
              <VideoEmbed id={demoId} />
              <p className="mt-3 text-sm text-gray-700">How to submit & review offers online on Listlly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Settlement Agent Selection */}
      <section className="bg-gray-50 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Settlement <span className="text-[#FF6B6B]">Agent Selection</span></h3>
              <p className="mt-4 text-gray-600 max-w-lg">You can now manage your property showing calendar 100% online. Contact info of buyers and agents who request showings is available for you to reach out.</p>
            </div>

            <div className="rounded-lg overflow-hidden shadow max-w-md">
              <VideoEmbed id={demoId} />
              <p className="mt-3 text-sm text-gray-700">How to manage showings</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
