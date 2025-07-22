import React from 'react';
import { Play, Download, Heart } from 'lucide-react';

// A simple component to render the waveform
const Waveform = ({ data }) => (
  <div className="w-full h-12 flex items-end gap-px">
    {data.map((val, i) => (
      <div 
        key={i}
        className="bg-gray-500 w-full"
        style={{ height: `${val * 100}%` }}
      ></div>
    ))}
  </div>
);

export default function TrackItem({ track }) {
  return (
    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-center gap-4 hover:border-pink-500/50 transition-colors">
      <button className="w-12 h-12 flex-shrink-0 bg-pink-600 rounded-md flex items-center justify-center hover:bg-pink-500">
        <Play className="text-white" />
      </button>
      <div className="flex-grow">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="font-semibold text-white">{track.title}</h3>
                <p className="text-sm text-gray-400">{track.creator}</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400">
                {track.moods.map(mood => (
                    <span key={mood} className="bg-gray-700/50 px-2 py-1 rounded text-xs">{mood}</span>
                ))}
            </div>
        </div>
        <div className="mt-2">
            {/* In a real app, use a library like WaveSurfer.js here */}
            <Waveform data={track.waveform} />
        </div>
      </div>
      <div className="flex items-center gap-4 text-gray-400">
        <span className="hidden md:inline-block text-sm">{track.duration}</span>
        <button className="hover:text-white transition-colors"><Heart size={18} /></button>
        <button className="hover:text-white transition-colors"><Download size={18} /></button>
      </div>
    </div>
  );
}