import { motion } from 'framer-motion';
import CenterText from './CenterText';

const content = (isFirstMount: boolean) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 3.5 : 0 },
  },
});

const text = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const line = {
  initial: { y: -20, opacity: 0, height: '5px' },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
    height: '20rem',
  },
};

type HeroTextProps = {
  row1: string;
  isFirstMount: boolean;
};

const HeroText = ({ row1, isFirstMount }: HeroTextProps) => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      variants={content(isFirstMount)}
      className='w-full h-4/5'
    >
      <motion.div className='flex flex-row mt-32 items-center justify-center min-h-[45vh] text-3xl md:text-5xl'>
        <CenterText>
          <motion.div
            variants={text}
            className='whitespace-pre-line leading-normal'
          >
            {row1}
          </motion.div>
        </CenterText>
        <motion.div
          className='hidden md:block md:absolute md:left-[75%] lg:left-[80%] xl:left-[65%]'
          variants={line}
          style={{ borderLeft: '3px solid black' }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
