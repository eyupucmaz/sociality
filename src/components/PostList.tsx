import React from 'react';
import Post from './Post';
import { date2String } from '../utils/dateFormatter';

const PostList = (posts: any, date: string) => {
  date = date2String(posts.date);

  return (
    <>
      <h1 className="mb-5 text-f-secondary">{date}</h1>
      <div className="flex justify-center flex-wrap gap-5 mb-8">
        {posts.posts.map((post: any, index: number) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
