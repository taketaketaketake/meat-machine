import React from 'react';
import { Play, ListVideo } from 'lucide-react';

export default function ThemedCollection({ data }) {
  return (
    <section className="bg-gradient-to-br from-emerald-900/30 to-gray-900/30 rounded-2xl p-8 md:p-12 border border-emerald-500/20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
           <div className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2">
            <ListVideo size={16} />
            Themed Collection
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{data.title}</h2>
          <p className="text-gray-400 mb-6">{data.description}</p>
          <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            <Play />
            Play Collection
          </button>
        </div>
        <div className="bg-gray-950/30 p-6 rounded-lg">
          <h4 className="font-bold mb-4">What's Inside:</h4>
          <ul className="space-y-3">
            {data.videos.map(video => (
              <li key={video.id} className="flex justify-between items-center text-sm border-b border-gray-800 pb-2">
                <span className="text-gray-300">{video.title}</span>
                <span className="text-gray-500">{video.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}