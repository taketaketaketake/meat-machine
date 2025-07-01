// src/components/react/ui/NotFoundHero.jsx
import React from 'react';

export default function NotFoundHero() {
  return (
    <div className="text-center">
      <h1 className="text-8xl md:text-9xl font-black text-white leading-none">
        <span className="text-pink-500">4</span>
        <span className="text-purple-500 mx-[-0.1em]">0</span>
        <span className="text-pink-500">4</span>
      </h1>
      <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white">
        Lost in the Echoes
      </h2>
      <p className="mt-2 text-lg text-gray-400">
        It seems the page you're looking for has been lost in the digital void.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a href="/" className="btn-primary">Return Home</a>
        <a href="/explore" className="btn-ghost">Explore Content</a>
      </div>
    </div>
  );
}
