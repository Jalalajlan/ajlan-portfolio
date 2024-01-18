import servicifyWebImage from "../assets/images/servicify-web-image.png";
import portfolioImage from "../assets/images/jalal_portfolio.png";
// import projectWork from "../assets/images/coming_soon.jpg";
import khairukImage from "../assets/images/khairuk.png";
import Project from "./../types/Project";

const projectsList: Project[] = [
  // {
  //   id: 1,
  //   name: "projectName1",
  //   description: "projectDescription1",
  //   skills: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //     },
  //     {
  //       id: 2,
  //       name: "Node.js",
  //     },
  //     {
  //       id: 3,
  //       name: "Socket.io",
  //     },
  //     {
  //       id: 4,
  //       name: "WebRTC",
  //     },
  //   ],
  //   link: "#",
  //   repoLink: "https://github.com/Jalalajlan/coding_hub_realtime",
  //   imagePath: projectWork,
  //   hasRepository: true,
  // },
  {
    id: 2,
    name: "projectName2",
    description: "projectDescription2",
    skills: [
      {
        id: 1,
        name: "HTML & CSS",
      },
      {
        id: 2,
        name: "JavaScript",
      },
      {
        id: 3,
        name: "Jquery",
      },
      {
        id: 4,
        name: "WordPress",
      },
    ],
    link: "https://khairuk.org/",
    repoLink: "https://github.com/Jalalajlan/coding_hub_realtime",
    imagePath: khairukImage,
    hasRepository: false,
  },
  {
    id: 3,
    name: "projectName3",
    description: "projectDescription3",
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
    hasRepository: true,
  },
  {
    id: 5,
    name: "projectName4",
    description: "projectDescription4",
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
    link: "https://jalalajlan.netlify.app/",
    repoLink: "https://github.com/Jalalajlan/ajlan-portfolio",
    imagePath: portfolioImage,
    hasRepository: true,
  },
];

export default projectsList;
