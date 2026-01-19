import React, { useState, useMemo } from 'react';

// --- Child Component: ContentCard (Unchanged) ---
const ContentCard = ({ video, gradient }) => {
  const isNew = useMemo(() => {
    const today = new Date('2025-06-28T18:30:00');
    const videoDate = new Date(video.date);
    const diffTime = today.getTime() - videoDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 10 && diffDays >= 0;
  }, [video.date]);

  return (
    <a href="#" className="video-card group" data-category={video.category}>
      <div className="relative rounded-xl shadow-sm overflow-hidden border border-gray-800/50 group-hover:border-gray-700 transition">
        <div className={`aspect-[16/9] flex items-center justify-center bg-gradient-to-br ${gradient}`}>
          <div className="text-4xl opacity-50">✨</div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white ml-1" viewBox="0 0 20 20" fill="currentColor"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">{video.duration}</div>
        {isNew && <div className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded-md animate-pulse">NEW</div>}
      </div>
      <div className="pt-3">
        <p className="font-semibold text-white line-clamp-2">{video.title}</p>
        <p className="text-sm text-gray-400">{video.business}</p>
      </div>
    </a>
  );
};


// --- Main Parent Component (Fixed) ---
export default function FilteredContent({ categories = [], videos = [], gradients = [] }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredVideos = useMemo(() => {
    if (activeCategory === 'all') return videos;
    return videos.filter(video => video.category === activeCategory);
  }, [activeCategory, videos]);

  return (
    // The root element is now a <section> for better semantics
    <section>
      {/* FilterBar Section: sticky to top of scroll container, negative margin to counter main padding */}
      <div className="bg-gray-900/70 backdrop-blur-md border-y border-gray-800 sticky top-0 z-20 -mx-4 sm:-mx-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-3 sm:px-6 py-4 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'border-pink-500 text-pink-500'
                    : 'border-transparent text-gray-400 hover:text-white hover:border-gray-500'
                }`}
              >
                {category.label}
              </button>
            ))}
            <a href="/video-layouts" className="flex-shrink-0 px-3 sm:px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-400 hover:text-white hover:border-gray-500 ml-auto">
              Layouts
            </a>
          </div>
        </div>
      </div>

      {/* ContentGrid Section: This now has the width constraint applied directly */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
          {filteredVideos.map((video, i) => (
            <ContentCard
              key={video.id}
              video={video}
              gradient={gradients[i % gradients.length]}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center rounded-full text-sm font-medium h-11 px-8 border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors">
            Load More Videos
          </button>
        </div>
      </div>
    </section>
  );
}