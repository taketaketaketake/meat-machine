import React, { useState } from 'react';

import FilteredContent from './FilteredContent.jsx';
import VideoShortsCarousel from './VideoShortsCarousel.jsx';
import VideoPlayerModal from './VideoPlayerModal.jsx';
import ToolSpotlight from './ToolSpotlight.jsx'; // <-- Import
import CallToAction from './CallToAction.jsx'; // <-- Import

export default function VideoPageLayout({ data }) {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleOpenVideo = (video) => setActiveVideo(video);
  const handleCloseVideo = () => setActiveVideo(null);

  return (
    <>
      <FilteredContent 
        categories={data.categories}
        videos={data.recentVideos}
        gradients={data.gradients}
      />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <VideoShortsCarousel
            title="Shorts & Reels"
            data={data.videoShorts}
            onCardClick={handleOpenVideo}
          />
          
          {/* Add the missing sections back in */}
          <ToolSpotlight data={data.tools} />
          <CallToAction />

        </div>
      </main>

      <VideoPlayerModal video={activeVideo} onClose={handleCloseVideo} />
    </>
  );
}