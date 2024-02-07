import DateFormat from '@/app/components/Date';
import {Post} from '@/app/types/Post.type';
import React from 'react';
import styles from '../blog.module.scss';

const getPost = async (slug: string) => {
  const res = await fetch(
    `https://api.buttercms.com/v2/posts/${slug}?auth_token=${process.env.auth_token}`,
    {next: {revalidate: 3600}}
  );
  if (!res.ok) {
    throw new Error('failed to fetch data!');
  }
  return res.json();
};

export default async function Post({params}: {params: {slug: string}}) {
  const {slug} = params;
  const post: Post = await getPost(slug);
  return (
    <div className='container mx-auto'>
      <div className='min-h-screen'>
        <div className='bg-white dark:bg-slate-700 rounded-md shadow-md flex items-center'>
          <div className='max-w-2xl mx-auto'>
            <div className='py-8 px-4'>
              <DateFormat dateString={post.data.published} />
              <h1 className='leading-10 font-extrabold text-4xl text-zinc-800'>
                {post.data.title}
              </h1>
              <div
                className={styles.post}
                dangerouslySetInnerHTML={{__html: post.data.body}}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
