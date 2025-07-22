import React from 'react';
import TrackItem from '../content/TrackItem.jsx';

export default function TrackList({ tracks = [] }) {
  return (
    <div className="space-y-3">
      {tracks.map(track => (
        <TrackItem key={track.id} track={track} />
      ))}
    </div>
  );
}