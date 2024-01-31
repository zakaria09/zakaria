'use client';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';

export default function ResumeBtn({
  onOpen,
  open,
}: {
  onOpen: (val: boolean) => void;
  open?: boolean;
}) {
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(open ?? false);
  }, [open]);

  const handleOpen = () => {
    setOpen(!isOpen);
    onOpen(isOpen);
  };

  const btn = !isOpen ? (
    <Link
      className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer'
      onClick={handleOpen}
      href={'/cv'}
    >
      Resumé
    </Link>
  ) : (
    <Link
      onClick={handleOpen}
      href={'/'}
      className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8  cursor-pointer'
    >
      Close
    </Link>
  );

  return btn;
}
