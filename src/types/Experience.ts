import WorkProject from "./WorkProject";
import Skill from "./Skill";

type Experience = {
  id: number;
  stateDate: string;
  endDate: string;
  position: string;
  company: string;
  description: string;
  projects: WorkProject[];
  skills: Skill[];
  link: string;
};

export default Experience;
