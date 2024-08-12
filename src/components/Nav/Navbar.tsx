import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navItems } from 'components/navItems';

type Props = {
  handleToggle: () => void;
};

const Navbar = ({ handleToggle }: Props) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);

  const location = useLocation();

  // Function to check if the current path matches the link path
  const isActive = (path: string) => location.pathname === path;

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous: number = scrollY.getPrevious() as number;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleSamePageClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo(0, 0)
    }
  }

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className='sticky top-0 flex justify-center bg-[#FFFFFF] z-10 w-full'
    >
      <div className='flex text-xl items-center justify-between h-[13vh] w-[80vw]'>
        <div className='text-2xl font-semibold w-full'>
          <Link key='Home' to='/' className='hover:text-hover-grayblue'>
            Keith Tang
          </Link>
        </div>
        <div className='w-[0] md:w-[max-content] hidden md:block'>
          <div className='flex md:gap-10 justify-between text-22px'>
            {navItems.map((item, key) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-hover-grayblue ${
                  isActive(item.path) ? 'text-hover-grayblue' : ''
                }`}
                onClick={() => handleSamePageClick(item.path)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className='md:invisible visible'>
          <GiHamburgerMenu
            className='cursor-pointer'
            onClick={handleToggle}
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
