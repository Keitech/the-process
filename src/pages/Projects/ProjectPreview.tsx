import { useNavigate } from 'react-router-dom';
import Reveal from 'components/Reveal';
import { ProjectProps } from './ProjectItems/ProjectItems';

const ProjectPreview = ({ project }: { project: ProjectProps }) => {
  const navigate = useNavigate();

  const handleNavigate = (id: number, online: boolean) => {
    if (online) {
      navigate(`/projects/${id}`);
    }
  };

  return (
    <Reveal>
      <div>
        <div className='w-[80vw]'>
          <div
            className='w-full bg-bwgradient flex justify-center items-center rounded-[10px]'
            onClick={() => handleNavigate(project.id, project.online)}
          >
            <img
              className={`scale-95 hover:scale-105 transform transition duration-300 ${project.online ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              src={project.img}
              alt={project.name}
            />
          </div>

          <div className='flex flex-col mt-5 gap-5 justify-between md:flex-row'>
            <div className='w-full flex flex-col md:w-1/2'>
              <div className='text-3xl'>{project.name}</div>
              <div className='text-xl mt-3'>{project.desc}</div>
            </div>
            <div className='w-[30%]'>
              <div className='text-3xl'>Technology</div>
              <div className='flex flex-wrap gap-2.5 mt-3'>
                {project.technology.map((item, key) => (
                  <div className='text-xl' key={key}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className='text-3xl'>{project.year}</div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectPreview;
