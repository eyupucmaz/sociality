import { useState } from 'react';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import data from './Mock/data.json';

function App() {
  const [posts, setPosts] = useState(data.posts_by_date);

  return (
    <div className="bg-main flex">
      <Sidebar />
      <div className="mt-9 ml-80">
        <TopBar />
        {Object.entries(posts).map(([key, value]) => (
          <PostList key={key} posts={value} date={key} />
        ))}
      </div>
    </div>
  );
}

export default App;
