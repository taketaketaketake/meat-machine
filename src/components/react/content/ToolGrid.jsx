// src/components/react/sections/ToolGrid.jsx
import React from 'react';
import SectionTitle from './SectionTitle';

export default function ToolGrid({ title, data: tools }) {
  return (
    <section>
      <SectionTitle title={title} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {tools.map(tool => (
          <a href="#" key={tool.name} className="tool-card group relative rounded-lg p-6 flex flex-col items-center justify-center text-center overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
            <div className="relative z-10">
              <div className="text-5xl mb-3">{tool.icon}</div>
              <h3 className="text-xl font-bold text-white">{tool.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}