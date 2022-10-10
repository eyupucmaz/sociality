import { useEffect, useState } from 'react';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import data from './Mock/data.json';

const postStates = [
  {
    name: 'Published',
    color: '#ACACAC',
  },
  {
    name: 'Scheduled',
    color: '#3AC183',
  },
  {
    name: 'Need Approval',
    color: '#F7BF38',
  },
  {
    name: 'Error',
    color: '#FB6450',
  },
  {
    name: 'Notes',
    color: '#67B1F2',
  },
];

// TODO: While rendering the posts, replace broken images in the data.json dynamically with the no-post-image.png file that is provided in the assets.

// TODO: The post structure in the data.json file includes a ‘status’ field. As a helper, status types by code: 0 for Need Approval, 1 for Scheduled, 2 for Publishing, 3 for Published, 4 for Error

// TODO: CONNECT TO MOCK API


function App() {
  const [posts, setPosts] = useState(data.posts_by_date);

  return (
    <div className="bg-main flex">
      <Sidebar />
      <div className="mt-9 ml-80">
        <div className="pl-10 flex flex-wrap">
          {postStates.map((postState, index) => (
            <div className={`pl-3 flex items-center`} key={index}>
              <span
                className={`w-3 h-3 mr-3  rounded-2xl`}
                style={{ backgroundColor: postState.color }}
              ></span>
              {postState.name}
            </div>
          ))}
        </div>
        {Object.entries(posts).map(([key, value]) => (
          <PostList key={key} posts={value} date={key} />
        ))}
      </div>
    </div>
  );
}

export default App;
