import { useState, useEffect, useRef } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/Home/HomePage';
import Navbar from 'components/Nav/Navbar';
import AboutPage from 'pages/About/AboutPage';
import { projects } from 'pages/Projects/ProjectItems/ProjectItems';
import Sidebar from 'components/Nav/Sidebar';
import Project from 'pages/Projects/Project';
import DoesNotExist from 'components/DoesNotExist';

const App = () => {
  const isFirstMount = useRef(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isFirstMount.current = false;
  }, []);

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
        {/* TODO: re-enable blog routes (BlogPage / Blog) */}
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
