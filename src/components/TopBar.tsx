import React from 'react';
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
const TopBar = () => {
  return (
    <div className="flex justify-between flex-wrap">
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
      <div>
        {/* Create a user avatar component with rounded shape and image from random user api */}
        <img
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="user avatar"
          className="rounded-full w-10 h-10"
        />
      </div>
    </div>
  );
};

export default TopBar;
