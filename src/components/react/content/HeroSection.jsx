// src/components/react/sections/HeroSection.jsx
import React from 'react';

export default function HeroSection({ data }) {
  const { title, description, emoji, photo } = data;

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-end p-8 md:p-12 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-purple-800 z-0 flex items-center justify-center"
        style={photo ? { backgroundImage: `url(${photo})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        {emoji && !photo && (
          <div className="text-8xl opacity-30">{emoji}</div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
      <div className="relative z-20">
        <h1 className="text-4xl md:text-6xl font-black mb-2">{title}</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}