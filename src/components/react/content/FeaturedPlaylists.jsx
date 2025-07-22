import React from 'react';

export default function FeaturedPlaylists({ data }) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8">Curated Playlists</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map(playlist => (
          <a
            key={playlist.name}
            href="#"
            className={`flex items-center gap-4 p-4 rounded-xl ${playlist.color} hover:scale-105 transition-transform duration-300`}
          >
            <div className="text-3xl">{playlist.icon}</div>
            <div>
              <p className="font-bold text-white">{playlist.name}</p>
              <p className="text-sm text-white/70">{playlist.trackCount} tracks</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}