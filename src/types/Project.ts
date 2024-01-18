import Skill from "./Skill";

type Project = {
  id: number;
  name: string;
  description: string;
  skills: Skill[];
  link: string;
  repoLink: string;
  imagePath: string;
  hasRepository: boolean | undefined;
};

export default Project;
