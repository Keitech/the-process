import { useState } from 'react';
import HeroText from 'components/HeroText';
import { motion } from 'framer-motion';
import ProjectPreview from 'pages/Projects/ProjectPreview';
import { projects } from 'pages/Projects/ProjectItems/ProjectItems';
import Footer from 'components/Footer/Footer';
import Inspo from 'components/Inspo';
import Reveal from 'components/Reveal';

type HomePageProps = {
  isFirstMount: boolean;
};

const HomePage = ({ isFirstMount }: HomePageProps) => {
  window.scrollTo(0, 0);

  return (
    <motion.section
      exit={{ opacity: 0 }}
      className='flex flex-col items-center'
    >
      {isFirstMount && <InitialTransition />}
      <div className='flex justify-center flex-col w-[80vw] gap-[20vh]'>
        <HeroText
          isFirstMount={isFirstMount}
          row1={
            'Enjoying life while \n crafting beautiful and \n meaningful pixels'
          }
        />
        {projects.map((project) => (
          <ProjectPreview project={project} key={project.id} />
        ))}
        <div>
          <Reveal>
            <div>
              <div className='text-3xl mb-[5vh]'>Inspiration</div>
              <Inspo />
            </div>
          </Reveal>
        </div>
        <Footer />
      </div>
    </motion.section>
  );
};

// PRELOADER ANIMATION
const blackBox = {
  initial: {
    height: '100%',
    bottom: 0,
    y: 0,
  },
  animate: {
    height: 0,
    y: '-100vh',
    transition: {
      when: 'afterChildren',
      duration: 1.25,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const fadeOutAll = {
  initial: {
    opacity: 1,
    height: '80%',
    width: '80%',
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 2.5,
    },
  },
};

const textFadeIn = {
  initial: {
    opacity: 0,
    y: 50, // start from below
  },
  animate: {
    opacity: 1,
    y: 0, // move to original position
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
};

const textFadeIn2 = {
  initial: {
    opacity: 0,
    y: 30, // start from below
  },
  animate: {
    opacity: 1,
    y: 0, // move to original position
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: 0.5,
    },
  },
};

const textFadeIn3 = {
  initial: {
    opacity: 0,
    y: 30, // start from below
  },
  animate: {
    opacity: 1,
    y: 0, // move to original position
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: 1,
    },
  },
};

const InitialTransition = () => {
  const [displayNone, setDisplayNone] = useState(false);

  return (
    <motion.div
      className='fixed flex items-center justify-center w-full bg-bwgradient z-[999]'
      initial='initial'
      animate='animate'
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add('overflow-hidden')}
      onAnimationComplete={() =>
        document.body.classList.remove('overflow-hidden')
      }
    >
      <motion.div
        variants={fadeOutAll}
        onAnimationComplete={() => setDisplayNone(true)}
        className={`${
          displayNone ? 'hidden' : 'flex'
        } h-full flex-col justify-between`}
      >
        <motion.div
          className='text-8xl text-[#000000] font-bold'
          initial='initial'
          animate='animate'
          variants={textFadeIn}
        >
          KT
        </motion.div>
        <motion.div>
          <motion.div
            className='text-4xl font-bold'
            initial='initial'
            animate='animate'
            variants={textFadeIn2}
          >
            Passion to Cultivate
          </motion.div>
          <motion.div
            className='text-4xl font-bold'
            initial='initial'
            animate='animate'
            variants={textFadeIn3}
          >
            Based in Canada
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
