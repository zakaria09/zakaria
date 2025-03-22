import React from 'react';
import styles from '../blog.module.scss';
import {client, urlFor} from '@/app/lib/sanity';
import {fullBlog} from '@/app/types/posts.type';
import {Metadata, ResolvingMetadata} from 'next';
import groq from 'groq';
import BlogPost from '@/app/components/BlogPost/BlogPost';

type Props = {
  params: {slug: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

const getPost = async (slug: string) => {
  const query = groq`*[_type == "blog" && slug.current == '${slug}'] {
    'currentSlug': slug.current,
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
  {params, searchParams}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const {slug} = params;

  // fetch data
  const post: fullBlog = await getPost(slug);

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
          alt: '',
        },
      ],
    },
  };
}

export default async function Post({params}: {params: {slug: string}}) {
  const {slug} = params;
  const post: fullBlog = await getPost(slug);
  console.log(urlFor(post.titleImage).width(100).height(100).url());
  return <BlogPost post={post} />;
}
