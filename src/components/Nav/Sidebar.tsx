import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaRegCopyright } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { navItems } from 'components/navItems';

type Props = {
  isOpen: boolean;
  handleToggle: () => void;
};

const Sidebar = ({ isOpen, handleToggle }: Props) => {
  const location = useLocation();

  // Function to check if the current path matches the link path
  const isActive = (path: string) => location.pathname === path;

  const handleSamePageClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo(0, 0);
    }
    handleToggle();
  };

  return (
    <div
      className={`fixed left-0 w-full h-full bg-bwgradient z-[99] grid transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 top-0' : 'opacity-0 -top-full'
      }`}
    >
      <div className='flex flex-col items-center w-full'>
        <div className='w-[80vw] h-full'>
          <div className='flex text-xl items-center justify-center h-[13vh] '>
            <div className='text-2xl font-semibold w-full'>
              <Link to='/'>Keith Tang</Link>
            </div>
            <IoMdClose className='cursor-pointer' onClick={handleToggle} />
          </div>
          <div className='flex flex-col gap-10 mt-[20vh] text-5xl h-[60%]'>
            {navItems.map((item, key) => (
              <Link
                key={key}
                className={`hover:text-hover-grayblue ${
                  isActive(item.path) ? 'text-hover-grayblue' : ''
                }`}
                to={item.path}
                onClick={() => handleSamePageClick(item.path)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <div className='flex gap-1 items-center'>
              <FaRegCopyright />
              2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
