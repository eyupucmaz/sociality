import Post from './Post';
import date2String from '../utils/dateFormatter';
import React from 'react';

const PostList = (posts: any, key: string) => {
  console.log('POSTS:', posts);
  const date = date2String(posts.date);
  return (
    <>
      <h1 className="mb-5 text-f-secondary">{date as React.ReactNode}</h1>
      <div className="flex justify-center flex-wrap gap-5 mb-8">
        {posts.posts.map((post: any, index: number) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
