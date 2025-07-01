// src/components/react/content/SuggestedContent.jsx
import React from 'react';

// Placeholder data for suggested content
const suggestions = [
  { id: 1, title: 'Celestial Spire', emoji: '🏰', type: 'Image' },
  { id: 2, title: 'Forest Lullaby', emoji: '🌲', type: 'Audio' },
  { id: 3, title: 'The Last Stand', emoji: '⚔️', type: 'Video' },
];

export default function SuggestedContent() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h3 className="text-xl font-bold text-white text-center mb-6">
        Perhaps you were looking for one of these?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {suggestions.map(item => (
          <a href="#" key={item.id} className="group bg-gray-900 rounded-xl border border-gray-800 p-6 text-center hover:border-pink-500/50 transition-colors">
            <div className="text-6xl mb-4">{item.emoji}</div>
            <p className="font-semibold text-white group-hover:text-pink-400 transition-colors">{item.title}</p>
            <p className="text-sm text-gray-400">{item.type}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
