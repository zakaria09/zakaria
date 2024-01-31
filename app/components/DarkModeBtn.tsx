'use client';
import React, {useEffect, useState} from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {CiLight} from 'react-icons/ci';

export default function DarkModeBtn() {
  const [isDark, setDark] = useState<boolean>(false);

  useEffect(() => {
    if (isDark) {
      document.body.style.setProperty('--background', '#1a1a1a');
      document.body.classList.add('dark');
    } else {
      document.body.style.setProperty('--background', '#f3f3f3f3');
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const handleDarkMode = () => {
    setDark(!isDark);
  };

  const btn = !isDark ? (
    <BsFillMoonStarsFill
      onClick={handleDarkMode}
      className=' cursor-pointer text-2xl'
    />
  ) : (
    <CiLight onClick={handleDarkMode} className=' cursor-pointer text-2xl' />
  );

  return btn;
}
