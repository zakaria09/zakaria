import type {Metadata} from 'next';
import {Inter, Gochi_Hand} from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import {GoogleTagManager} from '@next/third-parties/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const gochi = Gochi_Hand({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-gochi',
});

export const metadata: Metadata = {
  title: 'Zakariye Arr | FE Developer',
  description:
    "I'm Zakariye Arr and I am Front End developer who loves building fantastic user interfaces and user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.variable} ${gochi.variable} font-sans `}>
        <NavBar />
        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string}
        />
        {children}
        <footer className='shadow-md bg-[#182638]'>
          <div className='min-h-24 text-white text-center flex justify-center items-center'>
            <span className='text-sm'>
              Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
