import React from 'react';
import 'react-social-icons/linkedin';
import 'react-social-icons/github';
import {HomePageResp} from './types/homepage.types';
import {client} from './lib/sanity';
import localFont from 'next/font/local';
import {groq} from 'next-sanity';
import './page.scss';
import {Logo} from './types/logo.types';
import HomePage from './components/HomePage/HomePage';

const getData = async () => {
  const query = `*[_type == 'competence'] {
    heading,
    icon,
    description
  }`;
  const data = await client.fetch(query);
  return data;
};

const getLogos = async () => {
  const query = groq`*[_type == 'logo']`;
  const data = await client.fetch(query);
  return data;
};

export default async function Home() {
  const data: HomePageResp[] = await getData();
  const logos: Logo[] = await getLogos();
  return <HomePage data={data} logos={logos} />;
}
