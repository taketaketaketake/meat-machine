import React from 'react';
import SectionTitle from './SectionTitle.jsx';

export default function TopVotedMasonry({ title, data: photos }) {
  return (
    <section>
      <SectionTitle title={title} />
      {/*
        - Replaced 'masonry-grid' with a flexbox container.
        - 'overflow-x-auto' enables horizontal scrolling.
        - 'scrollbar-hide' is a common utility to hide the scrollbar for a cleaner look.
      */}
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {photos.map(photo => (
          // - Replaced 'masonry-item' with 'flex-none' to prevent shrinking.
          // - Added a fixed width 'w-80' to each card. The height is handled by the aspect ratio.
          <div key={photo.id} className={`flex-none w-80 group relative rounded-lg overflow-hidden border border-gray-700 hover:border-pink-500/50 transition-colors ${photo.aspect}`}>
            <div className="w-full h-full bg-gray-900 flex items-center justify-center text-6xl">{photo.emoji}</div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="font-bold text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">{photo.title}</h3>
              <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-100 translate-y-4 group-hover:translate-y-0">{photo.user}</p>
              <div className="absolute top-4 right-4 bg-black/50 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <span className="text-pink-400">▲</span>
                <span>{photo.votes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}