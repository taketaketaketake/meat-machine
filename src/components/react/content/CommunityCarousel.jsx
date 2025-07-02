import React from 'react';

// --- Child Component: CreatorCard ---
// This component remains unchanged.
const CreatorCard = ({ creator }) => (
  <div className="bg-gray-900/50 rounded-xl shadow-lg border border-gray-800 flex flex-col h-full">
    <div className={`h-24 rounded-t-xl bg-gradient-to-br ${creator.bannerGradient}`}></div>
    <div className="flex-grow p-6 pt-0">
      <div className="flex justify-center -mt-12">
        <div className="w-24 h-24 rounded-full bg-gray-800 border-4 border-gray-900 flex items-center justify-center text-4xl shadow-lg">{creator.avatarEmoji}</div>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-xl font-bold text-white">{creator.name}</h3>
        <p className="text-pink-400 text-sm">{creator.handle}</p>
        <span className={`mt-3 inline-block text-xs font-medium px-3 py-1 rounded-full ${creator.specialtyColor}`}>{creator.specialty}</span>
      </div>
      <p className="text-gray-400 text-sm text-center my-4 min-h-[4rem]">{creator.bio}</p>
      <div className="flex justify-around text-center text-sm border-y border-gray-800 py-3">
        <div><div className="font-bold text-white">{(creator.subscriberCount / 1000).toFixed(1)}K</div><div className="text-gray-400 text-xs">Subscribers</div></div>
        <div><div className="font-bold text-white">{creator.videoCount}</div><div className="text-gray-400 text-xs">Videos</div></div>
      </div>
    </div>
    <div className="p-4 mt-auto">
      <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-pink-600 text-white shadow hover:bg-pink-500 transition-colors">
        View Channel
      </button>
    </div>
  </div>
);


// --- Main Parent Component (Refactored to use CSS scroll) ---
export default function CommunityCarousel({ title = "Featured Communities", description = "Meet the voices and visionaries behind the content.", creators = [] }) {
  if (!creators || creators.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="border-l-4 border-purple-500 pl-6 mb-8">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>

      {/* This container is now identical to the one in ReelsCarousel */}
      <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
        {creators.map((creator) => (
          // Each card is now a flex item with a defined width
          <div key={creator.id} className="flex-none w-80 snap-start">
            <CreatorCard creator={creator} />
          </div>
        ))}
      </div>
    </section>
  );
}