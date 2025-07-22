import React from 'react';
import { Play } from 'lucide-react'; // Assuming lucide-react for icons

export default function AudioHero({ track }) {
  if (!track) return null;

  return (
    <section 
      className="relative rounded-xl overflow-hidden p-8 flex items-end min-h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url(${track.imageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="relative z-10 text-white">
        <div className="text-sm font-semibold uppercase tracking-widest text-pink-400">Featured Track</div>
        <h1 className="text-4xl md:text-6xl font-black my-2">{track.title}</h1>
        <p className="text-lg text-gray-300">by {track.creator} using {track.tool}</p>
        <button className="mt-6 flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-lg transition-colors">
          <Play />
          Play Now
        </button>
      </div>
    </section>
  );
}