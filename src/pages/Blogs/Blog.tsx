import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogProps } from './BlogItems/BlogItems';
import Footer from 'components/Footer/Footer';
import Reveal from 'components/Reveal';
import DoesNotExist from 'components/DoesNotExist';

interface BlogTypes {
  blogs: BlogProps[];
}

const Blog = ({ blogs }: BlogTypes) => {
  window.scrollTo(0, 0);
  const { id } = useParams<{ id?: string  }>();

  const navigate = useNavigate()

  if (!id) {
    navigate('/notfound', {replace: true})
  }

  const blog = blogs.find((item) => item.id === parseInt(id!));

  if (!blog) {
    return <DoesNotExist />
  }

  return (
    <Reveal>
      <div className='flex flex-col items-center mt-10'>
        <div className='w-[80vw] flex flex-col gap-5 min-h-[100%]'>
          <div className='text-5xl'>{blog.title}</div>
          <div className='text-xl'>{blog.date}</div>
          <hr className='border border-black' />
          <div className='text-2xl whitespace-pre-line'>{blog.text}</div>
        </div>
        <Footer />
      </div>
    </Reveal>
  );
};

export default Blog;
