import type {Metadata} from 'next';
import {Inter, Gochi_Hand} from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import {Providers} from './providers';
import localFont from 'next/font/local';

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
  title: 'Zakaria Arr | FE Developer',
  description:
    "I'm Zakaria Arr and I am Front End developer who loves building fantastic user interfaces and user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.variable} ${gochi.variable} font-sans `}>
        <Providers>
          <NavBar />
          {children}
          <footer className='shadow-md '>
            <div className='min-h-24 bg-white dark:bg-slate-800 text-center flex justify-center items-center'>
              <span className='font-thin text-slate-400 text-sm'>
                Zakaria Arr &copy; {new Date().getFullYear()}
              </span>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
