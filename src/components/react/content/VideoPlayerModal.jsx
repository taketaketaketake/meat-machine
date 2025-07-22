import React from 'react';

export default function VideoPlayerModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white text-4xl z-50"
        onClick={onClose}
      >
        &times;
      </button>
      <video
        className="max-h-full max-w-full"
        src={video.videoUrl}
        autoPlay
        controls
        loop
        onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking video
      />
    </div>
  );
}