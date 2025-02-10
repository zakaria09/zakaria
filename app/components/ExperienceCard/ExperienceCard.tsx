import React from 'react';
import Image from 'next/image';
import bullet_point from '@/public/bullet-point.png';
import {lumios} from '@/app/lib/LumiosFont';

interface ExperienceCardProps {
  title: string;
  company: string;
  role: string;
  service: string;
  description: string;
  bullets: string[];
}

export default function ExperienceCard({data}: {data: ExperienceCardProps}) {
  return (
    <div className='bg-[#182638] text-white py-8 px-12 rounded-xl'>
      <h3 className='text-sm text-[#00FFF2] pt-1 pb-0'>{data.service}</h3>
      <h1 className='text-4xl font-normal leading-8'>
        {data.title}{' '}
        <span className={`${lumios.className} text-5xl italic gradient-text`}>
          {data.role}
        </span>
      </h1>
      <h2 className='text-xl pt-1 pb-4'>{data.company}</h2>
      <p className='max-w-[62rem] leading-6 pb-6'>{data.description}</p>
      <ul>
        {data.bullets.map((bullet, index) => (
          <li key={index} className='flex gap-4 pb-4'>
            <div className='w-24 md:w-6 self-start'>
              <Image
                src={bullet_point}
                className='h-full w-full'
                height={20}
                width={20}
                alt=''
              />
            </div>
            <p className='max-w-[48rem] self-start'>{bullet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
