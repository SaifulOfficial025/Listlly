import React from 'react'

export default function HowtoList() {
  const smallVideoId = 'ysz5S6PUM-U'
  const largeVideoId = 'ysz5S6PUM-U'

  const VideoEmbed = ({ id }) => (
    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How to List Your Home & Request Changes</h2>
          <p className="mt-4 text-gray-600 max-w-xl">Listlly's IntelliList Listing Management system makes listing your home on Houzeo.com and the MLS easy. Changes too can be requested online.</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <div className="rounded-lg overflow-hidden shadow-sm">
                <VideoEmbed id={smallVideoId} />
              </div>
              <p className="mt-3 text-sm text-gray-700">How to list your home on the MLS for sale by owner (FSBO)</p>
            </div>

            <div>
              <div className="rounded-lg overflow-hidden shadow-sm">
                <VideoEmbed id={smallVideoId} />
              </div>
              <p className="mt-3 text-sm text-gray-700">How to change your MLS listing including adding house on online</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-lg">
            <VideoEmbed id={largeVideoId} />
          </div>
        </div>
      </div>
    </section>
  )
}
