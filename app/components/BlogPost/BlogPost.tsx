import React from 'react';
import Image from 'next/image';
import {PortableText} from '@portabletext/react';
import {client, urlFor} from '@/app/lib/sanity';
import DateFormat from '../Date';

type BlogPostProps = {
  _createdAt: string;
  title: string;
  titleImage: any;
  content: any;
};

export default function BlogPost({post}: {post: BlogPostProps}) {
  return (
    <div className='min-h-screen'>
      <div className='bg-white dark:bg-slate-700 rounded-md shadow-md flex items-center'>
        <div className='md:max-w-2xl mx-auto'>
          <div className='py-8 px-4'>
            <DateFormat dateString={post._createdAt} />
            <h1 className='leading-10 font-extrabold text-4xl text-zinc-800 dark:text-zinc-100 pb-4'>
              {post.title}
            </h1>
            <Image
              src={urlFor(post.titleImage).url()}
              alt={'blog image'}
              width={800}
              height={400}
              className='h-100 w-100'
              style={{
                objectFit: 'contain',
              }}
            />
            <div className='pt-6 prose prose-blue prose-xl dark:prose-invert'>
              <PortableText value={post.content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
