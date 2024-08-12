import { FirstBlog } from "./FirstBlog"
import { SecondBlog } from "./SecondBlog";

export interface BlogProps {
  id: number;
  title: string;
  img: string;
  text: string;
  date: string;
  desc: string;
  gradient: string;
}

export const blogs: BlogProps[] = [
  FirstBlog, SecondBlog
]