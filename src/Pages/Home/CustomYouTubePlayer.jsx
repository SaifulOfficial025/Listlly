import React from "react";

export default function CustomYouTubePlayer({ src, title }) {
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
      <iframe
        className="w-full h-full block rounded-xl"
        src={src}
        title={title || "YouTube video player"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
