// src/components/react/sections/CommunitySpotlight.jsx
import React from 'react';

export default function CommunitySpotlight({ data }) {
  const { name, avatarEmoji, joinDate, bio, images } = data;
  return (
    <section className="spotlight-section bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 text-center md:text-left">
                 <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center text-6xl mx-auto md:mx-0 mb-4 shadow-lg">
                    {avatarEmoji}
                </div>
                <h2 className="text-3xl font-bold text-white">{name}</h2>
                <p className="text-gray-400 mb-4">{joinDate}</p>
                <p className="text-gray-300 mb-6">{bio}</p>
                <a href="#" className="inline-block bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-6 rounded-lg transition-colors">View Profile</a>
            </div>
            <div className="md:col-span-2">
                <div className="grid grid-cols-3 gap-4">
                    {images.map(img => (
                        <div key={img.id} className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center text-5xl hover:opacity-80 transition-opacity cursor-pointer border border-gray-700">
                            {img.emoji}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}