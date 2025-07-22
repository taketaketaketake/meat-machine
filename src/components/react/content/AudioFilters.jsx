import React from 'react';
import { Search } from 'lucide-react';

export default function AudioFilters({ onFilterChange }) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input 
          type="text" 
          placeholder="Search for tracks, artists, moods..."
          className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
        />
      </div>
      <div className="flex gap-2">
        <select className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none">
          <option>Type: All</option>
          <option>Music</option>
          <option>SFX</option>
          <option>Voice</option>
        </select>
        <select className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none">
          <option>Genre: All</option>
          <option>Electronic</option>
          <option>Lofi</option>
          <option>Cinematic</option>
        </select>
      </div>
    </div>
  );
}