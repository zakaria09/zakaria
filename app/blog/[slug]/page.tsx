import DateFormat from '@/app/components/Date';
import React from 'react';
import styles from '../blog.module.scss';
import {client, urlFor} from '@/app/lib/sanity';
import {fullBlog} from '@/app/types/posts.type';
import Image from 'next/image';
import {PortableText} from '@portabletext/react';
import Markdown from 'react-markdown';
import { Metadata, ResolvingMetadata } from 'next';

const components = {
  types: {
    code: ({
      value,
    }: {
      value: {code: string; _type: string; language: string; key: string};
    }) => {
      return (
        <div className='prose prose-xl'>
          <pre>{value.code}</pre>
        </div>
      );
    },
  },
};

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getPost = async (slug: string) => {
  const query = `*[_type == "blog" && slug.current == '${slug}'] {
    "currentSlug": slug.current,
      title,
      smallDescription,
      content,
      titleImage,
      _createdAt,
    _updatedAt,
  }`;
  const [data] = await client.fetch(query);
  return data;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { slug } = params;

  // fetch data
  const post: fullBlog = await getPost(slug)

  return {
    title: post.title,
    description: post.smallDescription,
    openGraph: {
      images: [
        {
          url: `${process.env.BASE_URL}/api/og?title=${encodeURIComponent(
            post.title
          )}&imageUrl=${urlFor(post.titleImage).width(500).height(300).url()}`,
          width: 1200,
          height: 630,
          alt: "",
        },
      ],
    },
  };
}

export default async function Post({params}: {params: {slug: string}}) {
  const {slug} = params;
  const post: fullBlog = await getPost(slug);
  console.log(urlFor(post.titleImage).width(100).height(100).url());
  return (
    <div className='container mx-auto'>
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
                <PortableText components={components} value={post.content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
