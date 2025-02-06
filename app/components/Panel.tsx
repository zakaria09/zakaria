import React from 'react';
import Image from 'next/image';
import card_bg from '../../public/card-bg.png';

type Props = {
  heading: string;
  content: string;
  children: React.ReactNode;
};

export default function Panel({heading, content, children}: Props) {
  return (
    <div className='relative '>
      <Image
        src={card_bg}
        height={200}
        width={400}
        alt=''
        className='absolute top-[2.5rem] left-1/2 -translate-x-1/2 z-0'
      />
      <div className='bg-[#EDFAFF] relative rounded-lg shadow-md mt-16 p-14 min-h-64 min-w-72 z-10'>
        <div className='md:text-xl text-2xl absolute top-[-4rem] left-1/2 -translate-x-1/2  z-50'>
          <div className='flex justify-center py-6 px-12 max-w-24 bg-[#DDF6FF] border-solid border-4 border-white rounded-full'>
            {children}
          </div>
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
    </div>
  );
}
