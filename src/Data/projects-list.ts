import servicifyMobileImage from "../assets/images/servicify-mobile-image.jpg";
import servicifyWebImage from "../assets/images/servicify-web-image.png";
import portfolioImage from "../assets/images/jalal_portfolio.png";
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
    name: "Real-time Video Conferencing App",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    skills: [
      {
        id: 1,
        name: "React.js",
      },
      {
        id: 2,
        name: "Node.js",
      },
      {
        id: 3,
        name: "Socket.io",
      },
      {
        id: 4,
        name: "WebRTC",
      },
    ],
    link: "#",
    imagePath: projectWork,
  },
  {
    id: 2,
    name: "Servicify Web App",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    skills: [
      {
        id: 1,
        name: "MongoDB",
      },
      {
        id: 2,
        name: "Express.js",
      },
      {
        id: 3,
        name: "React.js",
      },
      {
        id: 4,
        name: "Node.js",
      },
    ],
    link: "https://serivicfy.onrender.com/",
    imagePath: servicifyWebImage,
  },
  {
    id: 3,
    name: "Servicify Mobile App",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    skills: [
      {
        id: 1,
        name: "Flutter/Dart",
      },
      {
        id: 2,
        name: "Riverpod",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.fatsha.e_service_app",
    imagePath: servicifyMobileImage,
  },
  {
    id: 4,
    name: "Portfolio Web",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    skills: [
      {
        id: 1,
        name: "React.js",
      },
      {
        id: 2,
        name: "TypeScript",
      },
    ],
    // TODO Update portfolio link
    link: "https://play.google.com/store/apps/details?id=com.fatsha.e_service_app",
    imagePath: portfolioImage,
  },
];
