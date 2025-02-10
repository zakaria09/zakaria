'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
  loading: () => <p>Loading video...</p>,
});

export default function VideoPlayer({
  url,
  isPlaying = false,
}: {
  url: string;
  isPlaying?: boolean;
}) {
  return (
    <div>
      <ReactPlayer
        url={url}
        playing={isPlaying}
        controls
        playsinline
        muted
        loop
        width='100%'
        height='100%'
      />
    </div>
  );
}
