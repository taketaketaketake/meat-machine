import React from 'react';

export default function CallToAction() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-white">Have Content to Share?</h2>
        <p className="mt-3 text-lg text-gray-400">
          Join our community of creators and share your own videos with the world.
        </p>
        <div className="mt-8">
          <a href="#" className="btn-primary">
            Upload Your Video
          </a>
        </div>
      </div>
    </section>
  );
}