import React from 'react';
import VideoCard from './VideoCard.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function VideoShortsCarousel({ title, data: videos, onCardClick }) {
  return (
    <section>
      <SectionTitle title={title} />
      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {videos.map((video) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            onCardClick={() => onCardClick(video)} 
          />
        ))}
      </div>
    </section>
  );
}