// src/components/react/sections/CategoryGrid.jsx
import React from 'react';
import SectionTitle from './SectionTitle';

export default function CategoryGrid({ title, data: categories }) {
  return (
    <section>
      <SectionTitle title={title} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map(cat => (
          <a href="#" key={cat.title} className={`category-tile group relative rounded-lg p-6 flex flex-col justify-end items-start overflow-hidden ${cat.style || ''}`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
            <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-30 transition-opacity scale-150 group-hover:scale-125">
              {cat.icon}
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}