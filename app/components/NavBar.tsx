'use client';
import React, {useState} from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import ResumeBtn from './ResumeBtn';
import DarkModeBtn from './DarkModeBtn';

export default function NavBar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const onOpen = (open: boolean) => {
    setOpen(open);
  };

  return (
    <nav className='sticky top-0 shadow-sm z-50 bg-white dark:text-white dark:bg-slate-800 border-b-4 border-gray-200 dark:border-gray-900 border-solid'>
      <div className='flex justify-between py-10 px-10 md:px-20'>
        <h1 className='font-burtons text-xl'>Zakaria Arr</h1>
        <ul className='flex items-center'>
          <li>
            <DarkModeBtn />
          </li>
          <li>
            <ResumeBtn open={onOpen} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
