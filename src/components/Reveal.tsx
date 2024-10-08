import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation} from 'framer-motion';

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
}

const Reveal = ({ children, width = '100%' }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={`relative w-[${width}] overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
