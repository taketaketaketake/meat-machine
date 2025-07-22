// src/components/react/sections/CreatorList.jsx
import React from 'react';
import SectionTitle from './SectionTitle';

export default function CreatorList({ title, data: creators }) {
  return (
    <section>
      <SectionTitle title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {creators.map(creator => (
          <div key={creator.name} className="creator-card bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-4xl mx-auto mb-4">{creator.avatarEmoji}</div>
            <h3 className="text-xl font-bold text-white">{creator.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{creator.specialty}</p>
            <div className="text-sm font-medium text-pink-400">{creator.photos} Photos</div>
          </div>
        ))}
      </div>
    </section>
  );
}