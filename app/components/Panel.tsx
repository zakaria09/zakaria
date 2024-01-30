import React from 'react';

type Props = {
  heading: string;
  content: string;
  children: React.ReactNode;
};

export default function Panel({heading, content, children}: Props) {
  return (
    <div className='bg-white rounded-md shadow-lg p-14 min-h-64 min-w-72'>
      <div className='md:text-6xl text-7xl'>
        <div className='flex justify-center py-12'>{children}</div>
      </div>
      <div className='py-6'>
        <h1 className='leading-8 text-4xl font-semibold'>{heading}</h1>
      </div>
      <div>
        <p className='text-stone-700'>{content}</p>
      </div>
    </div>
  );
}
