'use client';
import {parseISO, format} from 'date-fns';

export default function DateFormat({dateString}: {dateString: string}) {
  const date = parseISO(dateString);
  return (
    <time className='text-zinc-400' dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  );
}
