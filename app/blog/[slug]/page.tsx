'use client'
import DateFormat from '@/app/components/Date';
import React from 'react';
import styles from '../blog.module.scss';
import { client, urlFor } from '@/app/lib/sanity';
import { fullBlog } from '@/app/types/posts.type';
import Image from "next/image";
import { PortableText } from '@portabletext/react';
import Markdown from 'react-markdown';
import { CopyBlock } from "react-code-blocks";


const components = {
  types: {
    code: (props: any) => {
      console.log(props)
      return (
        <CopyBlock text={props.code} language={props.language}  />
      );
    },
  },
};

const getPost = async (slug: string) => {
  const query = `*[_type == "blog" && slug.current == '${slug}'] {
    "currentSlug": slug.current,
      title,
      content,
      titleImage,
      _createdAt,
    _updatedAt,
  }`;
  const [data] = await client.fetch(query);
  return data;
};

export default async function Post({params}: {params: {slug: string}}) {
  const {slug} = params;
  const post: fullBlog = await getPost(slug);
  console.log(post.content)
  return (
    <div className="container mx-auto">
      <div className="min-h-screen">
        <div className="bg-white dark:bg-slate-700 rounded-md shadow-md flex items-center">
          <div className="max-w-2xl mx-auto">
            <div className="py-8 px-4">
              <DateFormat dateString={post._createdAt} />
              <h1 className="leading-10 font-extrabold text-4xl text-zinc-800 pb-4">
                {post.title}
              </h1>
              <Image
                src={urlFor(post.titleImage).url()}
                alt={"blog image"}
                width={800}
                height={400}
                style={{
                  maxHeight: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
              <div className="pt-6 prose prose-blue prose-xl dark:prose-invert">
                <PortableText components={components} value={post.content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
