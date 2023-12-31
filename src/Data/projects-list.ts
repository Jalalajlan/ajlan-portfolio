import projectWork from "../assets/images/course-card.jpg";
import { Skill } from "./experience-list";

interface Project {
  id: number;
  name: string;
  description: string;
  skills: Skill[];
  link: string;
  imagePath: string;
}

export const projectsList: Project[] = [
  {
    id: 1,
    name: "Build a Spotify Connected App",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    skills: [],
    link: "https://upstatement.com/",
    imagePath: projectWork,
  },
  {
    id: 2,
    name: "Build a Spotify Connected App",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    skills: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "React Native",
      },
      {
        id: 3,
        name: "JavaScript",
      },
      {
        id: 4,
        name: "TypeScript",
      },
    ],
    link: "https://upstatement.com/",
    imagePath: projectWork,
  },
];
