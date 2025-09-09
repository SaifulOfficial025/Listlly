import React, { useState } from 'react'
import { SlCalender } from "react-icons/sl";
import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

const samplePosts = [
  {
    id: 1,
    title: '5 Best Flat Fee MLS Chicago Companies (2025 Rankings)',
    excerpt: "Here's a list of the best Flat Fee MLS Chicago companies that can help you sell your home while saving thousands in commission...",
    date: 'Apr 10, 2024',
    image: '/property.jpg',
  },
  {
    id: 2,
    title: 'NAR Settlement 2024: End Of Buyer Agent Commission',
    excerpt: 'In March 2024, the NAR and major national brokerages entered into a billion-dollar settlement with the Sitzer Burnett plaintiffs.',
    date: 'Apr 10, 2024',
    image: '/property.jpg',
  },
  {
    id: 3,
    title: '5 Best Flat Fee MLS Chicago Companies (2025 Rankings)',
    excerpt: "Here's a list of the best Flat Fee MLS Chicago companies that can help you sell your home while saving thousands in commission...",
    date: 'Apr 10, 2024',
    image: '/property.jpg',
  },
  {
    id: 4,
    title: 'NAR Settlement 2024: End Of Buyer Agent Commission',
    excerpt: 'In March 2024, the NAR and major national brokerages entered into a billion-dollar settlement with the Sitzer Burnett plaintiffs.',
    date: 'Apr 10, 2024',
    image: '/property.jpg',
  },
]

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 2

  const totalPosts = samplePosts.length
  const totalPages = Math.max(1, Math.ceil(totalPosts / postsPerPage))

  const startIdx = (currentPage - 1) * postsPerPage
  const displayedPosts = samplePosts.slice(startIdx, startIdx + postsPerPage)

  function goTo(page) {
    const p = Math.max(1, Math.min(totalPages, page))
    setCurrentPage(p)
  }
  return (
    <div>
        <Header />
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Recent <span className="text-[#FF6B6B]">Blog</span></h2>

        <div className="w-64">
          <label className="sr-only">Search</label>
          <div className="relative">
            <input type="search" placeholder="Search here..." className="w-full border rounded-md px-4 py-2 text-sm dark:bg-white dark:text-black" />
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {displayedPosts.map((post) => (
          <article key={post.id} className="flex gap-6 items-start hover:shadow-lg p-4 rounded-lg transition-shadow duration-200">
            <img src={post.image} alt="post" className="w-80 h-56 object-cover rounded-lg shadow-sm" />

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>

              <div className="mt-4  items-center justify-between">
                <div className="flex items-center text-xs text-gray-500">
                  <SlCalender className="mr-1" />
                  {post.date}
                </div>
                <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded mt-5">Learn More</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-3">
        <button
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage === 1}
          className={`h-10 w-10 rounded-full border flex items-center justify-center ${currentPage === 1 ? 'text-gray-300 border-gray-200' : 'text-blue-600 border-blue-200'}`}
        >&lt;</button>

        {/* page numbers - show all when small, otherwise show a compact range */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => goTo(p)}
            className={`px-3 py-1 rounded ${p === currentPage ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600'}`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`h-10 w-10 rounded-full border flex items-center justify-center ${currentPage === totalPages ? 'text-gray-300 border-gray-200' : 'text-blue-600 border-blue-200'}`}
        >&gt;</button>
      </div>
    </main>
    <Footer />
    </div>
  )
}
