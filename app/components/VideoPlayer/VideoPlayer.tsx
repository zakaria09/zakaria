'use client';
import dynamic from 'next/dynamic';
import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import {VscUnmute} from 'react-icons/vsc';
import classNames from 'classnames';
import thumbnail from '@/public/thumbnail.png';
import Image from 'next/image';

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
  loading: () => <p>Loading video...</p>,
});

export default function VideoPlayer({url}: {url: string}) {
  const [videoContainerRef, inView] = useInView({threshold: 0.8});
  const [interacted, setInteracted] = React.useState(false);

  const hanldePause = () => {
    if (inView) setInteracted(false);
  };

  return (
    <div
      className='relative cursor-pointer'
      onClick={() => {
        setInteracted(true);
      }}
      ref={videoContainerRef}
    >
      <div
        className={classNames(
          `absolute inset-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center`,
          {hidden: interacted}
        )}
      >
        <div className='text-white text-4xl font-bold flex gap-6 pb-2'>
          <VscUnmute />
          <p>Click or tap to umute</p>
        </div>
      </div>
      <ReactPlayer
        onPause={hanldePause}
        url={url}
        controls
        playing={inView}
        muted={!interacted}
        playsinline
        loop
        width='100%'
        height='100%'
      />
    </div>
  );
}
