import servicifyMobileImage from "../assets/images/servicify-mobile-image.jpg";
import servicifyWebImage from "../assets/images/servicify-web-image.png";
import portfolioImage from "../assets/images/jalal_portfolio.png";
import projectWork from "../assets/images/coming_soon.jpg";
import { Skill } from "./experience-list";

interface Project {
  id: number;
  name: string;
  description: string;
  skills: Skill[];
  link: string;
  repoLink: string;
  imagePath: string;
}

export const projectsList: Project[] = [
  {
    id: 1,
    name: "Real-time Video Conferencing App",
    description:
      "Leveraged the power of WebRTC and Socket.io build a video chat app. App features include the ability to host meetings with other people, invite people to your hosted rooms with an invitation link, and write real-time messages in video rooms.",
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
    repoLink: "https://github.com/Jalalajlan/coding_hub_realtime",
    imagePath: projectWork,
  },
  {
    id: 2,
    name: "Servicify Web App",
    description:
      "Servicify is a service exchange platform that enables everyone to post their needs or request a service provider for the operation. On the other side, service providers may propose solutions to clients' needs with competitive pricing, and ultimately, customers will decide which proposal most fits their requirements and proceed with it. This is the web app version.",
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
    repoLink:
      "https://github.com/App-development-SCSJ3104-Group-project/Servicify",
    imagePath: servicifyWebImage,
  },
  {
    id: 3,
    name: "Servicify Mobile App",
    description:
      "Servicify is a service exchange platform that enables everyone to post their needs or request a service provider for the operation. On the other side, service providers may propose solutions to clients' needs with competitive pricing, and ultimately, customers will decide which proposal most fits their requirements and proceed with it. This is the mobile app version.",
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
    repoLink: "https://github.com/Elraqab-Organization/eService_app",
    imagePath: servicifyMobileImage,
  },
  {
    id: 4,
    name: "Portfolio Web App",
    description:
      "A totally new portfolio website has been developed to serve as a showcase of my diverse array of work, providing a comprehensive guide to my skills, achievements, and endeavors.",
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
    link: "#",
    repoLink: "https://github.com/Jalalajlan/ajlan-portfolio",
    imagePath: portfolioImage,
  },
];
