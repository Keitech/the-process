import { FirstProject } from './FirstProject';
import { SecondProject } from './SecondProject';
import { ThirdProject } from './ThirdProject';

export interface ProjectProps {
  id: number;
  name: string;
  img: string;
  year: number;
  desc: string;
  longDesc: string;
  link: string;
  date: string;
  technology: string[];
  online: boolean;
}

export const projects: ProjectProps[] = [
  ThirdProject, FirstProject, SecondProject
]
