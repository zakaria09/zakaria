import React from 'react';
import {AllPosts} from '../types/allPosts.type';
import Link from 'next/link';
import Image from 'next/image';

const getPosts = async () => {
  const res = await fetch(
    `https://api.buttercms.com/v2/posts/?page=1&page_size=10&auth_token=${process.env.auth_token}`,
    {next: {revalidate: 3600}}
  );
  if (!res.ok) {
    throw new Error('failed to fetch data!');
  }
  return res.json();
};

export default async function Blog() {
  const data: AllPosts = await getPosts();
  console.log(data);
  return (
    <section>
      <div className='container mx-auto'>
        <div className='min-h-screen '>
          <div className='bg-white dark:bg-slate-700 rounded-md shadow-md'>
            <div className='p-16'>
              <div className='max-w-2xl'>
                <h1 className='leading-snug font-semibold text-5xl tracking-tight'>
                  Writings on new concepts I'm expoloring in web dev.
                </h1>
                <p className='mt-4 text-zinc-500'>
                  All of my thoughts and experiences within the field of modern
                  web development.
                </p>
              </div>
              <div>
                {data.data.map((post, ind) => (
                  <div
                    key={ind}
                    className='border-b-2 border-solid border-slate-200 max-w-2xl py-6 hover:text-cyan-500'
                  >
                    <Link href={`/blog/${post.url}`} className='cursor-pointer'>
                      <div className=''>
                        <div className='h-full w-full'>
                          <Image
                            src={post.featured_image}
                            alt={post.featured_image_alt}
                            width={600}
                            height={600}
                            style={{
                              maxHeight: '40rem',
                              maxWidth: '40rem',
                              objectFit: 'contain',
                            }}
                          />
                        </div>
                        <h1 className='font-semibold text-lg '>{post.title}</h1>
                        <p className='text-slate-400 no-underline'>
                          {post.summary}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
