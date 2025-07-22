import React from 'react';
import { Play } from 'lucide-react';

export default function SoundEffectsBank({ data }) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8">Sound Effects Library</h2>
      <div className="flex flex-wrap gap-3">
        {data.map(sfx => (
          <button
            key={sfx.name}
            className="bg-gray-800 text-gray-300 hover:bg-pink-600 hover:text-white transition-colors px-4 py-2 rounded-full flex items-center gap-2"
          >
            <span>{sfx.icon}</span>
            <span>{sfx.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}