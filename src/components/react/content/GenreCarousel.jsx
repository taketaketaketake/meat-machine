import React from 'react';
import { Play } from 'lucide-react';

const TrackCard = ({ track }) => (
  <div className="flex-none w-48 group">
    <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center text-5xl mb-3 relative">
      {track.coverEmoji}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
          <Play className="ml-1" />
        </button>
      </div>
    </div>
    <h3 className="font-semibold text-white truncate">{track.title}</h3>
    <p className="text-sm text-gray-400">{track.artist}</p>
  </div>
);

export default function GenreCarousel({ title, tracks = [] }) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8">{title}</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {tracks.map(track => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </section>
  );
}