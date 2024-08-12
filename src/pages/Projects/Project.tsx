import { useParams } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import { ProjectProps } from './ProjectItems/ProjectItems';
import Reveal from 'components/Reveal';
import DoesNotExist from 'components/DoesNotExist';

interface ProjectTypes {
  projects: ProjectProps[];
}

const Project = ({ projects }: ProjectTypes) => {
  window.scrollTo(0, 0);
  const { id } = useParams<{ id?: string }>();

  if (!id) {
    return <DoesNotExist />;
  }

  const project = projects.find((item) => item.id === parseInt(id));

  if (!project) {
    return <DoesNotExist />;
  }

  return (
    <Reveal>
      <div className='flex flex-col items-center mt-10'>
        <div className='w-[80vw] flex flex-col gap-5 min-h-[100%]'>
          <div className='text-5xl'>{project.name}</div>
          <div className='text-xl'>{project.date}</div>
          <hr className='border border-black' />
          <div className='text-2xl'>{project.longDesc}</div>
          <a href={project.link} target='_blank' rel='noopener noreferrer'>
            <div className='text-[blue] cursor-pointer w-[fit-content]'>
              See More
            </div>
          </a>
        </div>
        <Footer />
      </div>
    </Reveal>
  );
};

export default Project;
