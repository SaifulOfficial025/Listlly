import React from "react";

const posts = [
  {
    videoUrl:
      "https://www.youtube-nocookie.com/embed/OfnFU99-uds?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1",
    author: "Marvin Mckinney",
    date: "May 08, 2025",
    title: "Choose the Right Property for Investment in 2025",
    excerpt:
      "With the real estate market constantly evolving, selecting the right property to invest in can be overwhelming......",
  },
  {
    videoUrl:
      "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1",
    author: "Marvin Mckinney",
    date: "May 08, 2025",
    title: "Essential Tips for Selling Your Home Quickly",
    excerpt:
      "Selling a home can be a daunting task, but with the right approach, you can get your property......",
  },
  {
    videoUrl:
      "https://www.youtube-nocookie.com/embed/oHg5SJYRHA0?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1",
    author: "Marvin Mckinney",
    date: "May 08, 2025",
    title:
      "The Benefits of Renting vs. Buying Property: What’s Right for You?",
    excerpt:
      "The decision between renting or buying a property is one of the most important financial choices you’ll make......",
  },
];

export default function NewInsights() {
  return (
    <section className="w-full bg-white px-4 py-14">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-[28px] font-bold text-[#1C1C1C] text-center w-full">
            <span className="text-[#EB4E3D]">News</span> <span>insight</span>
          </h2>
          <a
            href="#"
            className="text-[#0054F6] text-[13px] font-semibold hover:underline ml-4 shrink-0"
          >
            View All
          </a>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article
              key={i}
              className="bg-white rounded-xl shadow-[0_6px_24px_rgba(0,0,0,0.08)] overflow-hidden hover:scale-105 transition-transform duration-200"
            >
              {/* Video */}
              <div className="w-full h-[190px] overflow-hidden relative">
                <iframe
                  className="w-full h-full"
                  src={p.videoUrl}
                  title={p.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Body */}
              <div className="px-4 py-3">
                <div className="text-[11px] text-[#6B7280] mb-2">
                  Post By <span className="text-[#1C1C1C]">{p.author}</span>
                  <span className="mx-2">•</span>
                  <span>{p.date}</span>
                </div>

                <h3 className="text-[16px] leading-snug font-semibold text-[#1C1C1C]">
                  {p.title}
                </h3>

                <p className="mt-2 text-[13px] text-[#5A5A5A]">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
