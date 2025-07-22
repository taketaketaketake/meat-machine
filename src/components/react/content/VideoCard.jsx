import React from 'react';

export default function VideoCard({ video, onCardClick }) {
  return (
    <button
      onClick={onCardClick}
      className="group flex-none w-48 sm:w-64 bg-gray-800 rounded-xl overflow-hidden cursor-pointer snap-start relative transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:scale-105 text-left"
    >
      {/* The aspect-[9/16] class here enforces the vertical video shape */}
      <div className="relative aspect-[9/16]">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${video.gradient}`}
        ></div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
        <div className="relative h-full flex flex-col justify-between p-4 text-white">
          <div className="text-right text-3xl opacity-50">{video.icon}</div>
          <div>
            <h3 className="font-bold">{video.title}</h3>
            <p className="text-sm text-gray-300">{video.creator}</p>
          </div>
        </div>
      </div>
    </button>
  );
}