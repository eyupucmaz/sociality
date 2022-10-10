import Post from './Post';

const PostList = () => {
  return (
    <>
      <h1 className="mb-5 text-f-secondary">14 January 2016</h1>
      <div className="flex justify-center flex-wrap gap-5 mb-8">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default PostList;
