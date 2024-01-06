export interface Contribution {
  name: string;
  link: string;
}

export interface Skill {
  id: number;
  name: string;
}

interface Experience {
  id: number;
  stateDate: string;
  endDate: string;
  position: string;
  company: string;
  description: string;
  projects: Contribution[];
  skills: Skill[];
  link: string;
}

export const experiencesList: Experience[] = [
  {
    id: 1,
    stateDate: "Mar 2023",
    endDate: "Nov 2023",
    position: "Software Engineer",
    company: "Huacomm",
    description:
      "Developed complex software features, including e-billing and real-time chat system. Optimized a React-based web application, resulting in a 50% increase in performance and improved user experience. Gathered customer requirements, conducted system training and provided ongoing customer support. Ensured close collaboration with other engineers through open dialogue and knowledge sharing. Identified and resolved critical software in-production bugs.",
    projects: [
      {
        name: "ProConnect",
        link: "https://www.proconnect.com.my/",
      },
      {
        name: "JSA Leagues",
        link: "https://play.google.com/store/apps/details?id=com.jsaleagues.android",
      },
      {
        name: "ALOF",
        link: "https://alof.life/",
      },
    ],
    skills: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "Flutter/Dart",
      },
      {
        id: 3,
        name: "React.js",
      },
      {
        id: 4,
        name: "TypeScript",
      },
      {
        id: 5,
        name: "PHP",
      },
      {
        id: 6,
        name: "MySQL",
      },
      {
        id: 7,
        name: "Firebase",
      },
      {
        id: 8,
        name: "REST APIs",
      },
      {
        id: 9,
        name: "UI/UX",
      },
    ],
    link: "http://huacomm.com.my/",
  },
  {
    id: 2,
    stateDate: "Aug 2022",
    endDate: "Feb 2023",
    position: "Software Engineer Intern",
    company: "Huacomm",
    description:
      "Developed and maintained ProConnect mobile app for Android & IOS utilizing Flutter. Implemented iterative improvements on ProConnect to achieve seamless user experience. Overseen ProConnect features, and suggested features enhancements. Implemented clean architecture to ensure code quality and maintainability.",
    projects: [
      {
        name: "ProConnect App - Android",
        link: "https://play.google.com/store/apps/details?id=com.proConnect.android",
      },
      {
        name: "ProConnect App - IOS",
        link: "https://apps.apple.com/th/app/proconnect-home-app/id6444507776",
      },
    ],
    skills: [
      {
        id: 1,
        name: "Flutter/Dart",
      },
      {
        id: 2,
        name: "Android & IOS",
      },
      {
        id: 3,
        name: "Software Testing",
      },
      {
        id: 5,
        name: "UI/UX",
      },
    ],
    link: "http://huacomm.com.my/",
  },
];
