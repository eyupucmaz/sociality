import { useState } from 'react';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import data from './Mock/data.json';

// TODO: While rendering the posts, replace broken images in the data.json dynamically with the no-post-image.png file that is provided in the assets.

// TODO: The post structure in the data.json file includes a ‘status’ field. As a helper, status types by code: 0 for Need Approval, 1 for Scheduled, 2 for Publishing, 3 for Published, 4 for Error

// TODO: CONNECT TO MOCK API

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
