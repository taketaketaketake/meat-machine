import React from 'react';
import { Play } from 'lucide-react';

const Hotspot = ({ spot }) => (
  <div 
    className="absolute group"
    style={{ top: spot.coords.top, left: spot.coords.left }}
  >
    <div className="w-4 h-4 bg-pink-500 rounded-full cursor-pointer animate-pulse"></div>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-gray-900 border border-gray-700 rounded-lg p-3 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      <h4 className="font-bold text-sm">{spot.title}</h4>
      <p className="text-xs text-gray-400 mb-2">by {spot.creator}</p>
      <button className="mx-auto w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform">
        <Play size={16} className="ml-0.5" />
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-700"></div>
    </div>
  </div>
);

export default function StyleHotspots({ data }) {
  return (
    <section>
       <div className="border-l-4 border-pink-500 pl-6 mb-8">
        <h2 className="text-3xl font-bold text-white">Discover Detroit Styles</h2>
        <p className="text-gray-400">Explore content hotspots from around the city.</p>
      </div>
      <div 
        className="relative aspect-[16/9] w-full rounded-2xl bg-gray-900/50 border border-gray-800 bg-grid-gray-800/20"
        // In a real app, you'd have a background image of a map here
      >
        {data.map(spot => <Hotspot key={spot.id} spot={spot} />)}
      </div>
    </section>
  );
}