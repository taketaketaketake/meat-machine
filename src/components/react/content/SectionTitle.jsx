// src/components/react/sections/SectionTitle.jsx
import React from 'react';

export default function SectionTitle({ title }) {
  return (
    <h2 className="text-3xl font-bold mb-8 border-l-4 border-pink-500 pl-4">
      {title}
    </h2>
  );
}