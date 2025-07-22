import React from 'react';

export default function TopCreators({ data }) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8">Top Audio Creators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map(creator => (
          <div
            key={creator.name}
            className="text-center bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-colors"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-800 flex items-center justify-center text-4xl mb-4">
              {creator.avatar}
            </div>
            <h3 className="text-xl font-bold text-white">{creator.name}</h3>
            <p className="text-pink-400 text-sm">{creator.specialty}</p>
            <a href="#" className="btn-ghost mt-6">View Profile</a>
          </div>
        ))}
      </div>
    </section>
  );
}