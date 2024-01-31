import Image from 'next/image';
import Link from 'next/link';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import avatar from '../public/avatar.jpeg';
import LexisLogo from '../public/LexisNexis_logo.svg';
import BGLogo from '../public/Baillie_Gifford_logo.png';
import SmartsearchLogo from '../public/SmartSearch-Logo.png';
import fandueLogo from '../public/Fanduel_logo.svg';
import xdesignLogo from '../public/xdesign_logo.png';
import {SiNextdotjs} from 'react-icons/si';
import {FaAngular, FaGithub, FaReact} from 'react-icons/fa';
import Panel from './components/Panel';

export default function Home() {
  return (
    <main>
      <section>
        <div className='text-center p-10 grid md:grid-cols-2 gap-2'>
          <div className='flex flex-col justify-center p-12 rounded-md shadow-lg bg-white dark:bg-slate-600'>
            <h2 className='text-5xl font-bold y-2 text-teal-600 dark:text-teal-400 md:text-6xl'>
              Zakaria Arr
            </h2>
            <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>
              UI Developer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-100 max-w-xl mx-auto md:text-xl'>
              Front End developer who loves building fantastic user interfaces
              and user experiences.
            </p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-600 '>
              <Link href='https://github.com/zakaria09' target='_blank'>
                <FaGithub className='text-black' />
              </Link>
              <Link
                href='https://www.linkedin.com/in/zakaria-arr/'
                target='_blank'
              >
                <AiFillLinkedin className='text-blue-700' />
              </Link>
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
        <div className='p-10 bg-white rounded-md'>
          <h2 className='text-xl'>Companies I've worked for or with</h2>
          <div className='py-10 text-nowrap overflow-hidden'>
            <ul className='inline-block mr-40 animate-slide-show'>
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
            <ul className='inline-block animate-slide-show'>
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
        <div className='flex justify-center'>
          <div className='grid md:grid-cols-3 gap-4 max-w-7xl'>
            <Panel
              heading='Next JS'
              content='Next JS has recently become my favourite and go to framework 
              for building performant and SEO friendly website and web applications. 
              Even this website is built with Next JS!'
            >
              <SiNextdotjs />
            </Panel>
            <Panel
              heading='React'
              content='React JS is one of my favourite libraries and the fact that 
              Next JS was built on top of it made me it hard for me to resist learning React. 
              Currently a lot of the work I do at the moment is in React JS.'
            >
              <FaReact className='text-cyan-400' />
            </Panel>
            <Panel
              heading='Angular'
              content={
                'The first JavaScript framework I became fimiliar with. Although a lot ' +
                'of my previous experience is with Angular my plan is to move away ' +
                'from it in the lon terms and towards other JavaScript frameworks as ' +
                "I've become bored of the framework and it's past lack of innovation."
              }
            >
              <FaAngular className='text-red-600' />
            </Panel>
          </div>
        </div>
      </section>
      <footer className='shadow-md'>
        <div className='min-h-24 bg-white text-center flex justify-center items-center'>
          <span className='font-thin text-slate-400 text-sm'>
            Zakaria Arr &copy; {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </main>
  );
}
