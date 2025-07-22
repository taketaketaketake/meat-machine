// src/components/react/sections/PhotoGrid.jsx
import React from 'react';
import SectionTitle from './SectionTitle';

export default function PhotoGrid({ title, data: photos }) {
  return (
    <section>
      <SectionTitle title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map(photo => (
          <a href="#" key={photo.id} className="photo-card group">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-800">
              <div className="w-full h-full bg-gray-900 flex items-center justify-center text-5xl">{photo.emoji}</div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-lg">View Photo</span>
              </div>
            </div>
            <div className="pt-3">
              <h3 className="font-semibold text-white truncate">{photo.title}</h3>
              <p className="text-sm text-pink-400">{photo.user}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}