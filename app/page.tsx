import Image from 'next/image';
import header_image from '../public/header-image.png';
import cloud_practitioner from '../public/cloud-practitioner.png';
import Panel from './components/Panel';
import 'react-social-icons/linkedin';
import 'react-social-icons/github';
import {HomePageResp} from './types/homepage.types';
import {client, urlFor} from './lib/sanity';
import localFont from 'next/font/local';
import {FaLinkedin} from 'react-icons/fa';
import {FaSquareGithub} from 'react-icons/fa6';
import Link from 'next/link';
import {groq} from 'next-sanity';
import hackathon_cert from '../public/hackathon-cert.png';

const lumios = localFont({
  src: '../fonts/Lumios/LumiosMarker_0.otf',
});

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
  const logos = await getLogos();
  return (
    <main>
      <section className='bg-gradient-to-bl from-dark-bg from-30% via-blue-950 via-50% to-dark-bg'>
        <div className='container mx-auto py-10 grid md:grid-cols-2 gap-1'>
          <div className='flex flex-col justify-center p-8 md:p-12'>
            <h1 className='text-2xl md:text-4xl font-semibold text-white '>
              Hello nice to meet you
            </h1>
            <h2
              className={`${lumios.className} text-4xl md:text-5xl font-medium italic bg-gradient-to-r from-violet-500 via-cyan-600 to-cyan-300 bg-clip-text text-transparent`}
            >
              My name is Zakariye Arr!
            </h2>
            <p className='text-md py-5 md:leading-8 text-gray-200 max-w-xl mx-auto md:text-xl'>
              I’ve been working a professional Front End Engineer for over 5
              years. In this time, I’ve worked in various sectors mainly in the
              FinTech space working on solutions that prevent financial crime.
              I'm currently working at a consultancy called CreateFuture where
              we consult with client on the best solutions to solve their
              problems!
            </p>
            <div className='text-5xl flex justify-start gap-4 py-3'>
              <Link
                href={'https://www.linkedin.com/in/zakaria-arr/'}
                target='_blank'
                className='hover:border-solid hover:border-2 hover:border-cyan-400 rounded-xl'
              >
                <div className='bg-gray-100/100 px-2 py-1 rounded-md'>
                  <FaLinkedin className='text-blue-800' />
                </div>
              </Link>
              <Link
                href={'https://github.com/zakaria09'}
                target='_blank'
                className='hover:border-solid hover:border-2 hover:border-cyan-400 rounded-xl'
              >
                <div className='bg-gray-100/100 px-2 py-1 rounded-md cursor-pointer'>
                  <FaSquareGithub className='text-gray-900' />
                </div>
              </Link>
            </div>
          </div>
          <div className='flex justify-center p-6 md:p-10 '>
            <Image src={header_image} alt='profile picture' />
          </div>
        </div>
      </section>
      <section className='bg-gradient-to-r from-[#01bbff1d] to-[#00fff21b]'>
        <div className='p-10 rounded-md'>
          <h2 className='text-xl font-semibold'>
            Companies I've worked with or for:
          </h2>
          <div className='py-4 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-full animate-slide-show'>
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
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-full animate-slide-show'>
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
            <div>
              <h1 className='text-5xl font-semibold pb-4'>
                Cloud{' '}
                <span
                  className={`${lumios.className} text-6xl italic bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent`}
                >
                  Certifications
                </span>
              </h1>
              <p className='leading-6 text-slate-600 md:max-w-[75rem]'>
                I have fantastic goal for 2025! Cloud and AI are two of the most
                dynamic and in-demand fields right now. I'd love to hear about
                the certifications you've already achieved! Let me know what
                you've earned so far, and we can brainstorm how you might expand
                or build upon them
              </p>
            </div>
          </div>
          <div className='flex justify-center p-6 md:p-10 '>
            <Image src={cloud_practitioner} alt='profile picture' />
          </div>
        </div>
      </section>
      <section className='container mx-auto py-6'>
        <div className='text-center'>
          <h1 className='text-4xl font-semibold pb-4'>
            JavaScript Framework{' '}
            <span
              className={`${lumios.className} text-6xl italic bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent`}
            >
              Experience
            </span>
          </h1>
          <div className='flex justify-center'>
            <p className='text-slate-600 px-12 md:px-0 md:max-w-[50rem] leading-6'>
              As a Java expert, I've spent years building scalable, maintainable
              systems, adapting to the language's evolution while leveraging its
              strengths to overcome challenges and create robust solutions.
            </p>
          </div>
        </div>
        <div className='py-24'>
          <div className='grid md:grid-cols-2 gap-4 max-w-7xl'>
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
      <section className='container mx-auto '>
        <div className='flex flex-col md:flex-row gap-6 py-10 px-12 bg-gradient-to-bl from-dark-bg from-30% via-blue-950 via-50% to-dark-bg text-white rounded-xl'>
          <div>
            <Image src={hackathon_cert} height={500} width={500} alt='' />
          </div>
          <div className='py-8'>
            <h1 className='text-3xl font-semibold pb-3'>
              Get to know more{' '}
              <span
                className={`${lumios.className} text-5xl italic bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent`}
              >
                about me
              </span>
            </h1>
            <div className='flex justify-center pb-6'>
              <p className='leading-6 max-w-[32rem]'>
                I am someone who is passionate about all thing's tech and web
                development. I love attending Tech Conferences to see the latest
                and greatest and to generally get new ideas.
              </p>
            </div>
            <h1 className='text-3xl font-semibold pb-3 text-[#76d7fa]'>
              Hackathon Winner!
            </h1>
            <div className='flex justify-center pb-6'>
              <p className='leading-6 max-w-[32rem]'>
                In the past I’ve participated and won a hackathon where we
                created a liveness check tool that checks someone is alive and
                real person and not just a BOT! The solution we created was
                called XCapture that provides a dynamic challenge to the user
                and the user has to complete that challenge in a few seconds.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='py-16'>
        <div className='max-w-7xl'>
          <h2 className='pl-10 pb-10 text-2xl font-semibold block dark:text-gray-300'>
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
      </section> */}
    </main>
  );
}
