"use client";

import VideosDur from "@/libs/durVideos.json"; // 👈 make sure the path matches your Next.js setup

export default function DurVideos() {
  return (
    <div>
      <hr />
      <h2 className="text-center font-serif font-medium text-xl">Videos</h2>

      <div className="w-full flex flex-col md:flex-row gap-5 flex-wrap md:px-20 lg:px-36">
        {VideosDur.map((video, i) => (
          <iframe
            key={i}
            src={`https://www.youtube.com/embed/${video.url}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`video-${i}`}
            className="md:w-96 md:h-64 rounded-xl mx-auto shadow-2xl"
          />
        ))}
      </div>
    </div>
  );
}
