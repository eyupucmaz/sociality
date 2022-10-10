import { useState } from 'react';
import Logo from '../assets/logo.svg';
import Dropdown from './Dropdown';
import iconBell from '../assets/icon-bell.png';
import iconBlockChart from '../assets/icon-block-chart.png';
import iconChart from '../assets/icon-chart.png';
import iconMessage from '../assets/icon-message.png';
import iconWave from '../assets/icon-wave.png';
import iconWrite from '../assets/icon-write.png';

const menu = [
  {
    brandName: 'Brand Name-1',
    brandLogo: Logo,
  },
  {
    brandName: 'Brand Name-2',
    brandLogo: Logo,
  },
  {
    brandName: 'Brand Name-3',
    brandLogo: Logo,
  },
  {
    brandName: 'Brand Name-4',
    brandLogo: Logo,
  },
];

const navigation = [
  {
    title: 'Notifications',
    icon: iconBell,
    isDropdown: false,
  },
  {
    title: 'Summary',
    icon: iconChart,
    isDropdown: true,
    items: ['Summary', 'Summary 2', 'Summary 3'],
  },
  {
    title: 'Publish',
    icon: iconWrite,
    isDropdown: true,
    items: ['Compose', 'Feed'],
  },
  {
    title: 'Engage',
    icon: iconMessage,
    isDropdown: true,
    items: ['Engage-1', 'Engage-2', 'Engage-3'],
  },
  {
    title: 'Listen',
    icon: iconWave,
    isDropdown: true,
    items: ['Listen-1', 'Listen-2', 'Listen-3'],
  },
  {
    title: 'Report',
    icon: iconBlockChart,
    isDropdown: true,
    items: ['Comments', 'Mentions', 'Messages'],
  },
];

export default function Sidebar() {
  const [activeClient, setActiveClient] = useState(0);

  return (
    <div className="w-72 min-w-fit min-h-screen fixed top-0 left-0 bg-header-color ">
      <div className="min-h-[56px] flex justify-center items-center">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex h-screen ">
        <div className="w-12  bg-icon-bar relative">
          {menu.map((item, index) => (
            <div
              className={`h-14 flex justify-center items-center cursor-pointer
              ${activeClient === index ? 'before:block' : 'before:hidden'}
              before:content-['']
              before:absolute
              before:h-8
              before:w-[4px]
              before:rounded-tr-[30px]
              before:rounded-br-[30px]
              before:bg-location-color
              before:top-50
               before:left-0`}
              key={index}
              title={item.brandName}
              onClick={() => setActiveClient(index)}
            >
              <img
                src={item.brandLogo}
                alt={item.brandName}
                className="p-3 invert "
              />
            </div>
          ))}
        </div>
        <div className="w-60 bg-navigation-bar ">
          {navigation.map((item, index) => (
            <div
              className={`w-full
              min-h-[56px]
              font-navigation
              text-white
              flex
              justify-start
              items-center
              cursor-pointer`}
              key={index}
            >
              <Dropdown
                title={item.title}
                items={item.items}
                icon={item.icon}
                isDropdown={item.isDropdown}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
