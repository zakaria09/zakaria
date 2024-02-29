'use client';
import React, {useState} from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import ResumeBtn from './ResumeBtn';
import DarkModeBtn from './DarkModeBtn';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import classNames from 'classnames';
import { IoCloseSharp } from 'react-icons/io5';

export default function NavBar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const onOpen = (open: boolean) => {
    setOpen(open);
  };

  const handleToggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="sticky top-0 shadow-sm z-50 bg-white dark:text-white dark:bg-slate-800 border-b-4 border-gray-200 dark:border-gray-900 border-solid">
      <div className="flex justify-between py-10 px-10 md:px-20 relative">
        <Link href={"/"}>
          <h1 className="font-semibold text-xl bg-gradient-to-r from-teal-600 to-indigo-600 dark:bg-gradient-to-r dark:from-teal-200 dark:to-indigo-200 bg-clip-text text-transparent">
            Zakaria Arr
          </h1>
        </Link>

        <span onClick={handleToggleNav} className="md:hidden">
          {!navOpen ? (
            <RxHamburgerMenu className="text-4xl cursor-pointer" />
          ) : (
            <IoCloseSharp className="text-4xl cursor-pointer" />
          )}
        </span>

        <ul
          className={classNames(
            `absolute left-0  bg-white dark:bg-slate-800 w-full flex 
            flex-col gap-8 items-center py-8 border-b-4 border-gray-200 
            dark:border-gray-900 border-solid md:static md:border-0
            md:flex-row md:justify-between md:max-w-72 md:p-0`,
            `${navOpen ? "top-[116px]" : "top-[-390px]"}`
          )}
        >
          <li>
            <Link className="link" href={"/blog"} onClick={handleToggleNav}>
              Blog
            </Link>
          </li>
          <li>
            <ResumeBtn
              onOpen={onOpen}
              open={pathname !== "/cv" ? false : true}
            />
          </li>
          <li>
            <DarkModeBtn />
          </li>
        </ul>
      </div>
    </nav>
  );
}
