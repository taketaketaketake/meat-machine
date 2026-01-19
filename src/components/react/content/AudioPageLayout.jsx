import React, { useState } from 'react';
import AudioHero from '../content/AudioHero.jsx';
import AudioFilters from '../content/AudioFilters.jsx';
import TrackList from '../content/TrackList.jsx';
import ThemedCollection from '../content/ThemedCollection.jsx';
import FeaturedPlaylists from '../content/FeaturedPlaylists.jsx'; // <-- Import the new component
import LivePremiere from '../content/LivePremiere.jsx';
import TopCreators from '../content/TopCreators.jsx';
import GenreCarousel from '../content/GenreCarousel.jsx';
import SoundEffectsBank from '../content/SoundEffectsBank.jsx';



export default function AudioPageLayout({ data }) {
  // This line is crucial: it destructures the big data object
  // into the smaller pieces that each component needs.
  const { 
    tracks, 
    featuredTrack, 
    themedCollection,
    playlists,
    livePremiereData,
    topCreators,
    electronicTracks,
    lofiTracks,
    soundEffects
  } = data;
  
  const [filteredTracks, setFilteredTracks] = useState(tracks);

  // TODO: Implement actual filtering logic when AudioFilters component is complete
  const handleFilterChange = () => {
    setFilteredTracks(tracks);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-12">
      <AudioHero track={featuredTrack} />
      <AudioFilters onFilterChange={handleFilterChange} />
      <TrackList tracks={filteredTracks} />
      
      {/* Restore all the previous sections */}
      <LivePremiere data={livePremiereData} />
      <FeaturedPlaylists data={playlists} />
      <ThemedCollection data={themedCollection} />
      <GenreCarousel title="Trending in Electronic" tracks={electronicTracks} />
      <TopCreators data={topCreators} />
      <GenreCarousel title="New in Lo-Fi" tracks={lofiTracks} />
      <SoundEffectsBank data={soundEffects} />
    </div>
  );
}