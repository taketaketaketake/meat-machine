import React from 'react';
import SectionTitle from './SectionTitle.jsx';

export default function TrendingTags({ title, data: tags }) {
  return (
    <section>
      <SectionTitle title={title} />
      <div className="flex flex-wrap gap-3">
        {tags.map(tag => (
          <a href="#" key={tag} className="tag-chip">
            {tag}
          </a>
        ))}
      </div>
    </section>
  );
}