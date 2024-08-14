import Footer from 'components/Footer/Footer';
import HeroText from 'components/HeroText';
import { useNavigate } from 'react-router-dom';
import { blogs } from './BlogItems/BlogItems';
import { BlogProps } from './BlogItems/BlogItems';
import Reveal from 'components/Reveal';

const BlogCard = ({ item }: { item: BlogProps }) => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div
      className='w-full lg:w-[47%] py-[20%] md:py-[10%] bg-[#F2F3F4] mb-10 overflow-hidden cursor-pointer relative flex rounded-[10px]'
      style={{
        background: item.gradient,
      }}
      onClick={() => handleNavigate(item.id)}
    >
      <div className='w-[45%] flex flex-col text-black ml-[5%]'>
        <div className='text-sm md:text-md'>{item.date}</div>
        <div className='text-md md:text-3xl font-medium mt-3 mb-1'>{item.title}</div>
        <div className='text-sm md:text-md'>{item.desc}</div>
      </div>
      <div className='w-[150%] rotate-[5deg] overflow-hidden absolute left-[50%] bottom-0'>
        <img
          src={item.img}
          alt='test'
          className='h-[500px] border-2 border-black rounded-[25px] scale-90 hover:scale-95 transform transition duration-300'
        />
      </div>
    </div>
  );
};

type Props = {};

const BlogPage = (props: Props) => {
  window.scrollTo(0, 0);

  return (
    <div className='flex flex-col items-center'>
      <div className='w-[80vw] flex flex-col gap-[20vh]'>
        <HeroText
          row1={'A place to express \n my thoughts'}
          isFirstMount={false}
        />
        <Reveal>
          <div className='flex flex-row gap-[3%] flex-wrap'>
            {blogs.map((item, key) => (
              <BlogCard item={item} key={key} />  
            ))}
          </div>
        </Reveal>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
