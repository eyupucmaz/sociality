import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface DropdownProps {
  title: string;
  items?: string[] | undefined;
  icon: string;
  isDropdown: boolean;
}

export default function Dropdown(props: DropdownProps) {
  const { title, items, icon, isDropdown } = props;
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState<undefined | number>(undefined);

  return (
    <div
      className={`flex flex-col basis-full relative flex-shrink-0 h-full hover:bg-navigation-bar-[0.5]`}
    >
      <div
        className={`min-h-[56px] flex justify-center items-center cursor-pointer
        before:content-['']
        before:absolute
        before:w-4
        before:h-4
      before:bg-location-color
        before:rotate-45
        before:top-[48px]
        before:left-[20px] ${
          isActiveDropdown && isDropdown
            ? `before:block bg-location-color `
            : 'before:hidden'
        }`}
        onClick={() => isDropdown && setIsActiveDropdown(!isActiveDropdown)}
      >
        <div className="flex basis-full items-center justify-around">
          <img
            src={icon}
            className={`${isActiveDropdown && isDropdown ? 'invert' : ''}`}
          />
          <span className="text-sm uppercase">{title}</span>
          {isDropdown ? (
            <>
              {isActiveDropdown ? (
                <FontAwesomeIcon icon={['fas', 'minus']} />
              ) : (
                <FontAwesomeIcon icon={['fas', 'plus']} />
              )}
            </>
          ) : (
            <span
              className="w-[30px]
                h-[17px]
                text-sm
                font-light
                flex
                justify-center
                items-center
                border
              border-notification
                rounded-md px-4"
            >
              29
            </span>
          )}
        </div>
      </div>

      {isActiveDropdown && (
        <div className=" block pl-12">
          <ul className="">
            {items?.map((item, index) => (
              <li
                className={`text-sm font-light text-white py-2 ${
                  activeItem === index ? 'text-location-color' : ''
                }`}
                key={index}
                onClick={() => {
                  setActiveItem(index);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

{
  /* {items && isDropdown && isActiveDropdown ? (
          <div className="flex flex-col">
            {items.map((item, index) => (
              <div
                className="min-h-[40px] flex basis-full justify-center  items-center  cursor-pointer"
                key={index}
              >
                <ul className="flex basis-full items-center justify-around">
                  <li className="text-sm">{item}</li>
                </ul>
              </div>
            ))}
          </div>
        ) : null} */
}
