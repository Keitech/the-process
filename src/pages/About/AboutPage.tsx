import HeroText from 'components/HeroText';
import Reveal from 'components/Reveal';
import Footer from 'components/Footer/Footer';
import { LuDot } from 'react-icons/lu';
import aboutImage from 'assets/aboutImage.jpeg';
import CenterText from 'components/CenterText';
import { useEffect, useRef, useState } from 'react';

const experience = [
  {
    name: 'Arima',
    date: '2022 - 2024',
    position: 'Full Stack Developer',
  },
  {
    name: `Bachelor's Degree`,
    date: '2017 - 2021',
    position: 'Computer Engineer',
  },
  {
    name: 'OpenText (MicroFocus)',
    date: '2021',
    position: 'DevOps Engineer (Co-op)',
  },
  {
    name: 'OpenText (MicroFocus)',
    date: '2020',
    position: 'UX Developer (Co-op)',
  },
  {
    name: 'OpenText (MicroFocus)',
    date: '2020',
    position: 'QA Engineer (Co-op)',
  },
];

const AboutPage = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offsetLeft, setOffsetLeft] = useState<number>(0);
  const [isFirstMount, setIsFirstMount] = useState<boolean>(true);

  const updateOffsetLeft = () => {
    if (elementRef.current) {
      setOffsetLeft(elementRef.current.offsetLeft);
    }
  };

  useEffect(() => {
    if (isFirstMount) {
      window.scrollTo(0, 0);
      setIsFirstMount(false);
    }
    // Initial update
    updateOffsetLeft();

    // Update on window resize
    window.addEventListener('resize', updateOffsetLeft);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', updateOffsetLeft);
    };
  }, [isFirstMount]);

  return (
    <div className='flex flex-col items-center'>
      <div className='w-[80vw] flex flex-col gap-[20vh]'>
        <HeroText
          row1={
            'Have a passion for \n learning to become \n the greatest craftsman'
          }
          isFirstMount={false}
        />
        <div>
          <Reveal>
            <img src={aboutImage} alt='pic of me' className=' rounded-[10px]' />
          </Reveal>
          <div className='flex flex-col gap-5 mt-[5vh] text-xl md:text-2xl'>
            <Reveal>
              <div className='flex'>
                <div style={{ minWidth: `${offsetLeft}px` }} />
                <div className='xl:w-[55%] lg:w-[60%]'>
                  As a Full Stack Software Developer with three years of
                  industry experience, I am committed to pursuing new challenges
                  that push the boundaries of my technical abilities. My goal is
                  to continuously enhance my skills by staying current with the
                  latest technologies and best practices in the industry. I am
                  driven by a desire to solve complex problems and deliver
                  high-quality solutions that meet both business objectives and
                  user needs.
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className='flex'>
                <div style={{ minWidth: `${offsetLeft}px` }} />
                <div className='xl:w-[55%] lg:w-[60%]'>
                  I have a deep curiosity for new technologies and their
                  practical applications in the real world. But when I'm not
                  focused on my work, I dedicate time to staying physically
                  active at the gym, playing volleyball, climbing some rocks,
                  and spending time with friends and family. You can also catch
                  me on World's Edge in Apex or find me farming minions in top
                  lane on Summoner's Rift.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <div>
          <Reveal>
            <CenterText>
              <div className='text-3xl mb-[5vh]' ref={elementRef}>
                My Experience
              </div>
            </CenterText>
          </Reveal>
          <div className='flex flex-col gap-[1.5vh]'>
            {experience.map((item, key) => (
              <Reveal key={key}>
                <div className='flex flex-col lg:flex-row text-xl xl:text-2xl justify-between'>
                  <div style={{ minWidth: `${offsetLeft}px` }}>{item.date}</div>
                  <div
                    className={`flex flex-wrap lg:justify-between font-medium w-full`}
                  >
                    <div>{item.name}</div>
                    <div className='visible lg:invisible self-center'>
                      <LuDot />
                    </div>
                    <div>{item.position}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
