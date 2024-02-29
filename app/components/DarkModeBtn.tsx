'use client';
import classNames from 'classnames';
import React, {useEffect, useState} from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {CiLight} from 'react-icons/ci';
import { RiComputerLine } from 'react-icons/ri';

type theme = 'light' | 'dark' | 'system';

export default function DarkModeBtn() {
  const [theme, setTheme] = useState<theme>(window.localStorage.getItem('theme') as theme ?? 'system');
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.setProperty('--background', '#1a1a1a');
      document.body.classList.add('dark');
    } else if (theme === 'light') {
      document.body.style.setProperty('--background', '#f3f3f3f3');
      document.body.classList.remove('dark');
    } else if (theme === 'system') {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isDark = systemTheme ? 'dark' : 'light';
      setTheme(isDark);
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const handleDarkMode = (selectedTheme: theme) => {
    setTheme(selectedTheme);
  };

  const btn = theme === 'dark' ? (
    <BsFillMoonStarsFill
      className=' cursor-pointer text-2xl'
    />
  ) : (
    <CiLight className=' cursor-pointer text-2xl' />
  );

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <button 
        type='button' onClick={toggleOpen}>{btn}</button>
      <div className={
        classNames("absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 ", `${isOpen ? '' : 'hidden'}`)
        }>
        <ul>
          <li
            onClick={() => handleDarkMode("dark")}
            className="p-6 flex justify-around items-center cursor-pointer"
          >
            <BsFillMoonStarsFill className="text-2xl" />
            Dark
          </li>
          <li
            onClick={() => handleDarkMode("light")}
            className="p-6 flex justify-around items-center cursor-pointer"
          >
            <CiLight className="text-2xl" />
            Light
          </li>
          <li
            onClick={() => handleDarkMode('system')}
            className="p-6 flex justify-around items-center cursor-pointer"
          >
            <RiComputerLine className="text-2xl" />
            System
          </li>
        </ul>
      </div>
    </>
  );
}
