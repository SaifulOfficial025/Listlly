import React from "react";
import { FaArrowRight } from "react-icons/fa";

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
    title: "The Benefits of Renting vs. Buying Property: What’s Right for You?",
    excerpt:
      "The decision between renting or buying a property is one of the most important financial choices you’ll make......",
  },
];

export default function NewInsights() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-8 py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 mb-2">
          <h2 className="text-[20px] md:text-[28px] font-bold text-[#1C1C1C] text-left w-full">
            <span className="text-[#000]">News</span>{" "}
            <span className="text-[#d03c0b]">insight</span>
          </h2>
          <a
            href="#"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[13px] font-bold text-[#0b5aa5] underline"
          >
            View All <FaArrowRight className="inline ml-1 -mt-1" />
          </a>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {posts.map((p, i) => (
            <article
              key={i}
              className="bg-white rounded-xl shadow-[0_6px_24px_rgba(0,0,0,0.08)] overflow-hidden hover:scale-105 transition-transform duration-200"
            >
              {/* Video */}
              <div className="w-full h-[160px] md:h-[190px] overflow-hidden relative">
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
