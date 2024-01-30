'use client';
import Link from 'next/link';
import React, {useState} from 'react';

export default function ResumeBtn({open}: {open: (val: boolean) => void}) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!isOpen);
    open(isOpen);
  };

  return (
    <Link
      className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer'
      onClick={handleOpen}
      href={'/cv?showDialog=y'}
    >
      Resume
    </Link>
  );
}
