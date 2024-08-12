import { useState, useEffect, useRef } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from 'pages/Home/HomePage';
import Navbar from 'components/Nav/Navbar';
import AboutPage from 'pages/About/AboutPage';
import BlogPage from 'pages/Blogs/BlogPage';
import Blog from 'pages/Blogs/Blog';
import { blogs } from 'pages/Blogs/BlogItems/BlogItems';
import { projects } from 'pages/Projects/ProjectItems/ProjectItems';
import Sidebar from 'components/Nav/Sidebar';
import Project from 'pages/Projects/Project';
import DoesNotExist from 'components/DoesNotExist';

const App = () => {
  const location = useLocation();
  const isFirstMount = useRef(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Function to handle location changes
    const handleLocationChange = () => {
      if (isFirstMount.current) {
        isFirstMount.current = false;
      }
    };

    // Listen to location changes
    handleLocationChange(); // Call once for the initial render
  }, [location]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar handleToggle={handleToggle} />
      <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
      <Routes>
        <Route
          key='home'
          path='/'
          element={<HomePage isFirstMount={isFirstMount.current} />}
        />
        <Route key='about' path='/about' element={<AboutPage />} />
        <Route
          key='projects-id'
          path='/projects/:id'
          element={<Project projects={projects} />}
        />
        <Route key='blogs' path='/blogs' element={<BlogPage />} />
        <Route
          key='blogs-id'
          path='/blogs/:id'
          element={<Blog blogs={blogs} />}
        />
        <Route key='notfound' path='/notfound' element={<DoesNotExist />} />
        <Route
          key='unknown'
          path='*'
          element={<Navigate to='/notfound' replace />}
        />
      </Routes>
    </>
  );
};

export default App;
