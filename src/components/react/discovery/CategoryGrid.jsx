import React from 'react';

// --- Child Component: CategoryCard ---
// Renders a single category card with its specific styling.
// The `classNames` prop is used to pass in the unique background/border colors.
const CategoryCard = ({ category, classNames }) => (
  <a href={category.href || '#'} className={`category-card ${classNames}`}>
    <span className="icon">{category.icon}</span>
    <span className="title">{category.title}</span>
  </a>
);

// --- Main Parent Component ---
export default function CategoryGrid({ title = "Explore by Category", description = "Find creations in the medium that inspires you most." }) {
  
  // Static data for the categories, as provided in the original HTML.
  // This could also be passed in as a prop for more flexibility.
  const categories = [
    { title: 'AI Art', icon: '🎨', href: '/art', style: 'bg-category-art' },
    { title: 'AI Music', icon: '🎵', href: '/music', style: 'bg-category-music' },
    { title: 'AI Video', icon: '🎬', href: '/video', style: 'bg-category-video' },
    { title: 'Storytelling', icon: '📚', href: '/storytelling', style: 'bg-category-story' }
  ];

  // This is a separate style block for clarity. In a real project,
  // these styles would likely be in your global CSS file.
  const styleTag = `
    .category-card {
      border-radius: 0.75rem;
      border-width: 1px;
      padding: 1.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 300ms;
      aspect-ratio: 1 / 1;
    }
    .category-card:hover {
      transform: translateY(-0.25rem);
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }
    .category-card .icon {
      font-size: 2.25rem;
      line-height: 2.5rem;
      margin-bottom: 0.75rem;
    }
    .category-card .title {
      font-size: 1.125rem;
      line-height: 1.75rem;
      font-weight: 700;
      color: white;
    }
    .bg-category-art {
      background-color: rgba(147, 51, 234, 0.2);
      border-color: rgba(168, 85, 247, 0.3);
    }
    .bg-category-music {
      background-color: rgba(5, 150, 105, 0.2);
      border-color: rgba(16, 185, 129, 0.3);
    }
    .bg-category-video {
      background-color: rgba(220, 38, 38, 0.2);
      border-color: rgba(239, 68, 68, 0.3);
    }
    .bg-category-story {
      background-color: rgba(37, 99, 235, 0.2);
      border-color: rgba(59, 130, 246, 0.3);
    }
  `;

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <style>{styleTag}</style>
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        <p className="text-lg text-gray-400 mt-2">{description}</p>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.title} category={cat} classNames={cat.style} />
        ))}
      </div>
    </section>
  );
}
