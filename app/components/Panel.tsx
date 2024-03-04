import React from 'react';

type Props = {
  heading: string;
  content: string;
  children: React.ReactNode;
};

export default function Panel({heading, content, children}: Props) {
  return (
    <div className='bg-white rounded-md shadow-lg p-14 min-h-64 min-w-72 dark:text-gray-200 dark:bg-slate-800'>
      <div className='md:text-xl text-2xl'>
        <div className='flex justify-center py-12'>{children}</div>
      </div>
      <div className='py-6'>
        <h1 className='leading-8 text-4xl font-semibold dark:text-slate-200'>
          {heading}
        </h1>
      </div>
      <div>
        <p className='text-stone-700 dark:text-stone-200'>{content}</p>
      </div>
    </div>
  );
}
