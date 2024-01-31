import {Document} from 'react-pdf';

export default function Page() {
  return (
    <div>
      <div>
        <iframe
          src={'/pdf/Zak_Arr_Dev.pdf#toolbar=0'}
          className='min-h-[calc(100vh-130px)] w-full'
        ></iframe>
      </div>
    </div>
  );
}
