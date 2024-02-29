import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client, urlFor } from '../lib/sanity';
import { simpleBlogCard } from '../types/posts.type';

const getPosts = async () => {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
  title,
    smallDescription,
    _createdAt,
    _updatedAt,
    'currentSlug': slug.current,
    titleImage
}`;
  const data = await client.fetch(query);
  return data;
};

export default async function Blog() {
  const data: simpleBlogCard[] = await getPosts();
  console.log(data);
  return (
    <section>
      <div className="container mx-auto">
        <div className="min-h-screen ">
          <div className="bg-white dark:bg-slate-700 rounded-md shadow-md">
            <div className="p-16">
              <div className="max-w-2xl">
                <h1 className="leading-snug font-semibold text-5xl tracking-tight dark:text-zinc-100">
                  Writings on new concepts I'm expoloring in web dev.
                </h1>
                <p className="mt-4 text-zinc-500 dark:text-zinc-200">
                  All of my thoughts and experiences within the field of modern
                  web development.
                </p>
              </div>
              <div>
                {data.map((post, ind) => (
                  <div
                    key={ind}
                    className="border-b-2 border-solid border-slate-200 max-w-2xl py-6 hover:text-cyan-500"
                  >
                    <Link
                      href={`/blog/${post.currentSlug}`}
                      className="cursor-pointer"
                    >
                      <div className="">
                        <div className="h-full w-full">
                          <Image
                            src={urlFor(post.titleImage).url()}
                            alt={'blog image'}
                            width={600}
                            height={600}
                            className='w-full h-full'
                            style={{
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <h1 className="font-semibold text-lg dark:text-white dark:hover:text-cyan-300">{post.title}</h1>
                        <p className="text-slate-400 no-underline dark:text-slate-300">
                          {post.smallDescription}
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
