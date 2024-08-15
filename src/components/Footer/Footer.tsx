import { CiLinkedin } from 'react-icons/ci';
import { PiGithubLogo } from 'react-icons/pi';
import { CgMail } from 'react-icons/cg';
import { FaRegCopyright } from 'react-icons/fa';
import Reveal from 'components/Reveal';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from 'components/navItems';

const socialItems = [
  {
    id: 1,
    icon: <CiLinkedin />,
    path: 'https://www.linkedin.com/in/keith-tang28/',
  },
  {
    id: 2,
    icon: <PiGithubLogo />,
    path: 'https://github.com/Keitech',
  },
  {
    id: 3,
    icon: <CgMail />,
    path: 'mailto:keithtang28@gmail.com',
  },
];

const Footer = () => {
  const location = useLocation()

  const handleSamePageClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo(0, 0)
    }
  }

  return (
    <Reveal>
      <div className='w-[80vw] py-[15vh] pb-[5vh]'>
        <div className='flex flex-col justify-between md:flex-row gap-8 md:gap-0'>
          <div className='text-2xl'>
            <div>Looking to connect?</div>
            <div>Feel free to reach out to me on any platform listed!</div>
          </div>
          <div className='flex gap-[15px]'>
            {socialItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                target='_blank'
                rel='noopener noreferrer'
                className='text-5xl hover:scale-110 transform transition'
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className='flex items-center flex-col'>
          <Reveal>
            <div className='mb-[5vh] leading-[1.25] mt-28 md:mt-60 text-5xl lg:text-6xl text-left lg:text-center'>
              Becoming is better than being
            </div>
          </Reveal>
          <hr className='w-full xl:w-4/5 border border-black' />
        </div>
        <div className='mt-[25vh] flex justify-between'>
          <div className='flex gap-1 items-center'>
            <FaRegCopyright />
            2024
          </div>
          <div className='flex-row gap-[15px] text-[18px] hidden md:flex'>
            {navItems.map((item, key) => (
              <Link
                key={key}
                to={item.path}
                className='hover:text-hover-grayblue'
                onClick={() => handleSamePageClick(item.path)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Footer;
