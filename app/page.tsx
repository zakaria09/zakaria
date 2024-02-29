import Image from 'next/image';
import avatar from '../public/avatar.jpeg';
import LexisLogo from '../public/LexisNexis_logo.svg';
import BGLogo from '../public/Baillie_Gifford_logo.png';
import SmartsearchLogo from '../public/SmartSearch-Logo.png';
import fandueLogo from '../public/Fanduel_logo.svg';
import xdesignLogo from '../public/xdesign_logo.png';
import Panel from './components/Panel';
import {SocialIcon} from 'react-social-icons/component';
import 'react-social-icons/linkedin';
import 'react-social-icons/github';
import {HomePageResp} from './types/homepage.types';
import {client, urlFor} from './lib/sanity';

const getData = async () => {
  const query = `*[_type == 'competence'] {
    heading,
    icon,
    description
  }`;
  const data = await client.fetch(query);
  return data;
};

export default async function Home() {
  const data: HomePageResp[] = await getData();
  return (
    <main>
      <section>
        <div className='text-center container mx-auto py-10 grid md:grid-cols-2 gap-2'>
          <div className='flex flex-col justify-center p-12 rounded-md shadow-lg bg-white dark:bg-slate-600'>
            <h2 className='text-5xl font-bold y-2 bg-gradient-to-r from-teal-400 to-indigo-600 dark:bg-gradient-to-r dark:from-teal-200 dark:to-indigo-200 md:text-6xl bg-clip-text text-transparent'>
              Zakaria Arr
            </h2>
            <h3 className='text-2xl py-2 text-gray-500 dark:text-gray-300 md:text-3xl'>
              UI Developer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-400 max-w-xl mx-auto md:text-xl'>
              Front End developer who loves building fantastic user interfaces
              and user experiences.
            </p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-600'>
              <SocialIcon
                target='_blank'
                url='https://www.linkedin.com/company/somalihikers/'
              />
              <SocialIcon target='_blank' url='https://github.com/zakaria09' />
            </div>
          </div>
          <div className='flex justify-center p-12 rounded-md shadow-lg bg-white dark:bg-slate-600'>
            <div className='w-80 h-80 md:h-96 md:w-96'>
              <Image
                src={avatar}
                alt='profile picture'
                className='rounded-full'
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='p-10 bg-white dark:text-gray-300 dark:bg-slate-600 rounded-md'>
          <h2 className='text-2xl font-semibold'>
            Companies I've worked for or with
          </h2>
          <div className='py-10 text-nowrap overflow-hidden'>
            <ul className='inline-block mr-40 animate-slide-show'>
              <div className='flex gap-40'>
                <li>
                  <div className='h-24 w-40 flex p-4'>
                    <Image priority={true} src={LexisLogo} alt='logo' />
                  </div>
                </li>
                <li>
                  <div className='h-24 w-40 flex p-4'>
                    <Image priority={true} src={BGLogo} alt='logo' />
                  </div>
                </li>
                <li>
                  <div className='h-24 w-40 flex p-4'>
                    <Image
                      priority={true}
                      src={SmartsearchLogo}
                      className='max-h-20 my-auto'
                      alt='logo'
                    />
                  </div>
                </li>
                <li>
                  <div className='h-24 w-40 flex p-4'>
                    <Image
                      priority={true}
                      src={xdesignLogo}
                      alt='logo'
                      className='bg-black rounded-sm'
                    />
                  </div>
                </li>
                <li>
                  <div className='h-24 w-40 flex p-4'>
                    <Image priority={true} src={fandueLogo} alt='logo' />
                  </div>
                </li>
              </div>
            </ul>
            <ul className='inline-block animate-slide-show invisible sm:visible'>
              <div className='flex gap-40'>
                <li>
                  <div className='h-24 w-40 flex p-4'>
                    <Image src={LexisLogo} alt='logo' />
                  </div>
                </li>
                <li>
                  <div className='h-24 w-40 flex p-4'>
                    <Image src={BGLogo} alt='logo' />
                  </div>
                </li>
                <li>
                  <div className='h-24 w-40 flex p-4'>
                    <Image
                      src={SmartsearchLogo}
                      className='max-h-20 my-auto'
                      alt='logo'
                    />
                  </div>
                </li>
                <li>
                  <div className='h-24 w-40 flex p-4'>
                    <Image
                      src={xdesignLogo}
                      alt='logo'
                      className='bg-black rounded-sm'
                    />
                  </div>
                </li>
                <li>
                  <div className='h-24 w-40 flex p-4'>
                    <Image src={fandueLogo} alt='logo' />
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <section className='py-16'>
        <div className='max-w-7xl'>
          <h2 className='pl-10 pb-10 text-2xl font-semibold block'>
            Competence
          </h2>
        </div>
        <div className='flex justify-center'>
          <div className='grid md:grid-cols-3 gap-4 max-w-7xl'>
            {data.map((section, ind) => (
              <Panel
                key={ind}
                heading={section.heading}
                content={section.description}
              >
                <Image
                  src={urlFor(section.icon).url()}
                  className='max-h-16 max-w-16'
                  height={150}
                  width={150}
                  alt='logo'
                />
              </Panel>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
