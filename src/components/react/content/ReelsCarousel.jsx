import React from 'react';

// --- Child Component: ReelCard ---
// Renders a single, vertical reel card.
const ReelCard = ({ reel }) => {
  return (
    <div className="flex-none w-48 sm:w-64 bg-gray-900/50 rounded-xl overflow-hidden cursor-pointer snap-start group transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:scale-105">
      <div className={`aspect-[9/16] bg-gradient-to-br ${reel.gradient} flex items-center justify-center relative`}>
        <div className="text-center text-gray-300">
          <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">{reel.emoji}</div>
          <div className="text-sm font-medium">{reel.title}</div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
            <span className="text-black text-xl ml-1">▶</span>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-md">{reel.duration}</div>
      </div>
      <div className="p-3">
        <h3 className="text-white font-medium text-sm mb-1 truncate">{reel.title}</h3>
        <div className="text-gray-400 text-xs">{reel.user} • {reel.views} views</div>
      </div>
    </div>
  );
};


// --- Main Parent Component ---
export default function ReelsCarousel({ title = "AI Reels & Shorts", reels = [] }) {
  // If no reels are passed, you can optionally render nothing or a placeholder.
  if (reels.length === 0) {
    return null; 
  }

  return (
    <section className="bg-gray-900/20 py-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {reels.map((reel, i) => (
          <ReelCard key={reel.id || i} reel={reel} />
        ))}
      </div>
    </section>
  );
}
