import React from 'react';
import SectionTitle from './SectionTitle.jsx';

export default function ToolSpotlight({ data: tools }) {
  return (
    <section>
      <div className="border-l-4 border-cyan-500 pl-6 mb-8">
        <h2 className="text-3xl font-bold text-white">Spotlight on the Tools</h2>
        <p className="text-gray-400">Discover the magic behind the masterpieces.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map(tool => (
          <div key={tool.name} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${tool.gradient} flex items-center justify-center text-4xl mb-4`}>
              {tool.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{tool.name}</h3>
            <div className="flex gap-2 mt-2">
              {tool.tags.map(tag => <span key={tag} className="text-xs bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded-full">{tag}</span>)}
            </div>
            <p className="text-gray-400 mt-4 text-sm flex-grow">{tool.description}</p>
            <a href="#" className="inline-block mt-6 text-sm font-semibold text-cyan-400 hover:text-cyan-300">View Creations &rarr;</a>
          </div>
        ))}
      </div>
    </section>
  );
}