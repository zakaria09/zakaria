import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';

const inter = Inter({subsets: ['latin']});

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
    <html lang='en'>
      <head>
        <meta content="width=device-width; initial-scale=1.0; maximum-scale=1.0;   user-scalable=0;" name="viewport"></meta>
      </head>
      <body className={`${inter.className}`}>
        <NavBar />
        {children}
        <footer className='shadow-md '>
          <div className='min-h-24 bg-white dark:bg-slate-800 text-center flex justify-center items-center'>
            <span className='font-thin text-slate-400 text-sm'>
              Zakaria Arr &copy; {new Date().getFullYear()}
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
