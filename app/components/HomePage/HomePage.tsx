'use client';
import React, {useEffect, useRef, useState} from 'react';
import './HomePage.scss';
import Image from 'next/image';
import header_image from '../../../public/header-image.png';
import cloud_practitioner from '../../../public/cloud-practitioner.png';
import 'react-social-icons/linkedin';
import 'react-social-icons/github';
import {urlFor} from '@/app/lib/sanity';
import {FaLinkedin} from 'react-icons/fa';
import {FaSquareGithub} from 'react-icons/fa6';
import Link from 'next/link';
import hackathon_cert from '../../../public/hackathon-cert.png';
import VideoPlayer from '@/app/components/VideoPlayer/VideoPlayer';
import Panel from '../Panel';
import {HomePageResp} from '@/app/types/homepage.types';
import {Logo} from '@/app/types/logo.types';
import {lumios} from '@/app/lib/LumiosFont';
import {InView, useInView} from 'react-intersection-observer';
import mount_snowden from '@/public/mount-snowden.png';
import istanbul_cat from '@/public/istanbul-cat.png';
import award_uni from '@/public/award-uni.png';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';
import FadeIn from '../Animations/FadeIn/FadeIn';

const experience = [
  {
    title: 'Front End',
    company: 'CreateFuture (Formerly known as xDesign)',
    role: 'Developer',
    service: 'January 2023 – Present',
    description:
      'This is the company I currently work at and they are a consultancy that consults product design and engineering, cloud and devops, data and AI and much more.',
    bullets: [
      'Implemented and consulted on offline solutions for Baillie Gifford who wanted to add offline capabilities to their CRM platform. They needed this solution due to investment bankers wanting to add some notes and information to a meeting they had with client while they were travelling. Internet connectivity can be an issue when traveling from one country to another country so we consulted them on a solution and developed this feature into their CRM.',
      'Worked in integrated team in FanDuel to provide libraries for other team to implement new features. These libraries are cross platform i.e. Android, IOS and web. I only worked on the web libraries along with another colleague.',
    ],
  },
  {
    title: 'Front End',
    company: 'TruNarrative (Acquired by LexisNexis Risk Solutions)',
    role: 'Developer',
    service: 'January 2021  – January 2023',
    description:
      'I worked for a startup called TruNarrative which a year into working at the startup was acquired by LexisNexis Risk Solutions. This company provided solutions to prevent financial crime and money laundering.',
    bullets: [
      'From my previous experience working with SmartSearch I suggested we could create a new product which was eventually named Guided Capture. It guided a user through a document capture flow using off the shelf AI solutions to capture ID documents, auto capture a selfie when a face was detected in the frame, and capture zonal OCR (Optical Character Recognition) from an unstructured proof of address document.',
      'I worked in collaboration with a design team to migrate from a legacy no code tool to Angular. The tool we migrated was called Compliance Lens and was a product that allowed users to perform sanctions checks, PEPS (politically exposed persons) check, adverse media and a few other checks on individual, entities, or vessels.',
    ],
  },
  {
    title: 'Angular',
    company: 'Intrica Ltd',
    role: 'Developer',
    service: 'June 2019 – January 2021',
    description:
      'Intrica Ltd was a small Agency at the time with around 10 employees when I started which then eventually grew to around 20 when I left. They provide web development, web design, ecommerce, web hosting and a few other IT related services.',
    bullets: [
      'I added features on a hybrid mobile app that allowed exchange students to securely share photos, receive announcements, and take surveys.',
      "I implemented a redesign from wireframes on the SmartSearch AML mobile app that allowed users to scan an ID document such as a passport or driver's license to perform an AML (anti money laundering) check on an individual.",
    ],
  },
];

export default function HomePage({
  data,
  logos,
}: {
  data: HomePageResp[];
  logos: Logo[];
}) {
  return (
    <main>
      <section className='bg-gradient-to-bl from-dark-bg from-30% via-blue-950 via-50% to-dark-bg'>
        <div className='container mx-auto py-10 grid md:grid-cols-2 gap-1'>
          <div className='flex flex-col justify-center p-8 md:p-12'>
            <FadeIn>
              <h1 className='text-2xl md:text-4xl font-semibold text-white '>
                Hello nice to meet you
              </h1>
              <h2
                className={`${lumios.className} text-4xl md:text-5xl font-medium italic gradient-text`}
              >
                My name is Zakariye Arr!
              </h2>
              <p className='text-md py-5 md:leading-8 text-gray-200 max-w-xl mx-auto md:text-xl'>
                I’ve been working a professional Front End Engineer for over 5
                years. In this time, I’ve worked in various sectors mainly in
                the FinTech space working on solutions that prevent financial
                crime. I'm currently working at a consultancy called
                CreateFuture where we consult with client on the best solutions
                to solve their problems!
              </p>
            </FadeIn>
            <div className='text-5xl flex justify-start gap-4 py-3'>
              <Link
                href={'https://www.linkedin.com/in/zakaria-arr/'}
                target='_blank'
                className='border-solid border-2 border-gray-900 hover:border-cyan-400 rounded-xl'
              >
                <div className='bg-gray-100/100 px-2 py-1 rounded-md'>
                  <FadeIn>
                    <FaLinkedin className='text-blue-800' />
                  </FadeIn>
                </div>
              </Link>
              <Link
                href={'https://github.com/zakaria09'}
                target='_blank'
                className='hover:border-solid hover:border-2 hover:border-cyan-400 rounded-xl'
              >
                <div className='bg-gray-100/100 px-2 py-1 rounded-md cursor-pointer'>
                  <FadeIn>
                    <FaSquareGithub className='text-gray-900' />
                  </FadeIn>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex justify-center p-6 md:p-10 '>
            <FadeIn>
              <Image src={header_image} alt='profile picture' />
            </FadeIn>
          </div>
        </div>
      </section>
      <section className='bg-gradient-to-r from-[#01bbff1d] to-[#00fff21b]'>
        <div className='p-10 rounded-md'>
          <FadeIn>
            <h2 className='text-xl font-semibold'>
              Companies I've worked with or for:
            </h2>
          </FadeIn>
          <div className='py-4 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-full animate-slide-show'>
              <div className='flex gap-6'>
                {logos.map((company: any) => (
                  <li key={company._id}>
                    <div className='h-24 w-40 flex p-4'>
                      <Image
                        priority={true}
                        width={500}
                        height={500}
                        src={urlFor(company.logo).url()}
                        alt='logo'
                        className='max-w-none self-center'
                      />
                    </div>
                  </li>
                ))}
              </div>
            </ul>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-full animate-slide-show'>
              <div className='flex gap-6'>
                {logos.map((logo: any) => (
                  <li key={logo._id}>
                    <div className='h-24 w-40 flex p-4'>
                      <Image
                        priority={true}
                        width={500}
                        height={500}
                        src={urlFor(logo.logo).url()}
                        alt='logo'
                        className='max-w-none self-center'
                      />
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </section>
      <section className='container mx-auto py-10 px-12 md:p-0 md:py-10'>
        <div className='flex flex-col md:flex-row'>
          <div className='flex self-center'>
            <FadeIn>
              <h1 className='text-5xl font-semibold pb-4'>
                Cloud{' '}
                <span
                  className={`${lumios.className} text-6xl italic bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent`}
                >
                  Certifications
                </span>
              </h1>
              <p className='leading-6 text-slate-600 md:max-w-[75rem]'>
                My goal for 2025 is learn more about cloud and AI. Cloud and AI
                are two of the most dynamic and in-demand fields right now. So
                far I've taken a step towrds that goal by getting my AWS Cloud
                Practitioner certification.
              </p>
            </FadeIn>
          </div>
          <div className='flex justify-center p-6 md:p-10 '>
            <FadeIn>
              <Image src={cloud_practitioner} alt='profile picture' />
            </FadeIn>
          </div>
        </div>
      </section>
      <section className='container mx-auto py-6'>
        <div className='text-center'>
          <FadeIn>
            <h1 className='text-4xl font-semibold pb-4'>
              JavaScript Framework{' '}
              <span
                className={`${lumios.className} text-6xl italic bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent`}
              >
                Experience
              </span>
            </h1>
          </FadeIn>
          <div className='flex justify-center'>
            <FadeIn>
              <p className='text-slate-600 px-12 md:px-0 md:max-w-[50rem] leading-6'>
                As a JavaScript expert, I've spent years building scalable,
                maintainable systems, adapting to the language's evolution while
                leveraging its strengths to overcome challenges and create
                robust solutions.
              </p>
            </FadeIn>
          </div>
        </div>
        <div className='py-24'>
          <div className='grid md:grid-cols-2 gap-4 max-w-7xl'>
            {data.map((section, ind) => (
              <FadeIn key={ind}>
                <Panel heading={section.heading} content={section.description}>
                  <Image
                    src={urlFor(section.icon).url()}
                    className='max-h-16 max-w-16'
                    height={150}
                    width={150}
                    alt='logo'
                  />
                </Panel>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className='container mx-auto '>
        <div className='flex flex-col md:flex-row gap-6 py-10 px-12 bg-gradient-to-bl from-dark-bg from-30% via-blue-950 via-50% to-dark-bg text-white rounded-xl'>
          <FadeIn>
            <Image src={hackathon_cert} height={500} width={500} alt='' />
          </FadeIn>
          <div className='py-8'>
            <FadeIn>
              <h1 className='text-3xl font-semibold pb-3'>
                Get to know more{' '}
                <span
                  className={`${lumios.className} text-5xl italic gradient-text`}
                >
                  about me
                </span>
              </h1>
              <div className='flex justify-center pb-6'>
                <p className='leading-6 max-w-[32rem]'>
                  I am someone who is passionate about all thing's tech and web
                  development. I love attending Tech Conferences to see the
                  latest and greatest and to generally get new ideas.
                </p>
              </div>
              <h1 className='text-3xl font-semibold pb-3 text-[#76d7fa]'>
                Hackathon Winner!
              </h1>
              <div className='flex justify-center pb-6'>
                <p className='leading-6 max-w-[32rem]'>
                  In the past I’ve participated and won a hackathon where we
                  created a liveness check tool that checks whether someone real
                  person and not just a BOT! The solution we created was called
                  XCapture that provides a dynamic challenge to the user and the
                  user has to complete that challenge in a few seconds.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className='container mx-auto'>
        <div className='pt-16 p-4 text-center'>
          <FadeIn>
            <h1 className='text-3xl text-black font-semibold'>
              Watch the{' '}
              <span
                className={`${lumios.className} text-5xl italic gradient-text`}
              >
                TruaAvatar Trailer
              </span>
            </h1>
          </FadeIn>
        </div>
        <FadeIn>
          <VideoPlayer url='https://d2atj920ky2qi7.cloudfront.net/TruAvatar_Promo.MP4' />
        </FadeIn>
      </section>
      <section className='container mx-auto '>
        <div className='flex flex-col md:flex-row gap-8 py-24'>
          <div className='flex flex-col gap-8 w-full '>
            <div className='px-4'>
              <FadeIn>
                <h1 className='text-4xl font-semibold pb-4'>
                  My{' '}
                  <span
                    className={`${lumios.className} text-5xl italic gradient-text`}
                  >
                    Personal Life
                  </span>
                </h1>
                <p className='leading-6 text-slate-600 text-lg'>
                  Outside of Tech I’m passionate about travelling, hiking, and
                  working out. I’ve completed a few hikes so far including mount
                  Snowden. I’ve also travelled to quite a few countries so far
                  including USA, Denmark, Morrocco, Turkey, Somalia, Saudi
                  Arabia (for Umrah), Malaysia, and Thailand so far.
                </p>
              </FadeIn>
            </div>
            <FadeIn>
              <div className='h-full w-full flex justify-center '>
                <Image
                  src={istanbul_cat}
                  className='self-end w-full'
                  height={400}
                  width={600}
                  alt=''
                />
              </div>
            </FadeIn>
          </div>
          <div className='flex flex-col w-full gap-8'>
            <FadeIn>
              <div className='h-full w-full'>
                <Image
                  src={mount_snowden}
                  className='w-full h-full'
                  height={400}
                  width={400}
                  alt=''
                />
              </div>
            </FadeIn>
            <FadeIn>
              <div className='h-full w-full'>
                <Image
                  src={award_uni}
                  className='w-full h-full'
                  height={400}
                  width={400}
                  alt=''
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className='container mx-auto'>
        <div className='flex justify-center py-8'>
          <FadeIn>
            <h1 className='font-semibold text-4xl'>
              Here is my{' '}
              <span
                className={`${lumios.className} text-5xl italic gradient-text`}
              >
                Experience
              </span>
            </h1>
          </FadeIn>
        </div>
        {experience.map((company, ind) => (
          <div className='mb-6' key={ind}>
            <FadeIn>
              <ExperienceCard data={company} />
            </FadeIn>
          </div>
        ))}
      </section>
    </main>
  );
}
