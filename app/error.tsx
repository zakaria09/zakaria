'use client';
import React, {useEffect} from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='py-10 flex justify-center'>
      <div>
        <h2 className='my-4 text-xl font-bold'>Oops something went wrong!</h2>
        <div className='flex justify-center'>
          <button
            className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md cursor-pointer'
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
