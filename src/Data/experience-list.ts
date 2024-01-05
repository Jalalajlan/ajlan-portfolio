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
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Every town for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    projects: [
      {
        name: "ProConnect",
        link: "https://play.google.com/store/apps/details?id=com.proConnect.android",
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
        name: "MYSQL",
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
      "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
    projects: [],
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
  {
    id: 3,
    stateDate: "Oct 2021",
    endDate: "May 2022",
    position: "Part-time Web Developer",
    company: "khairuk",
    description:
      "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.",
    projects: [
      {
        name: "Khairuk.org",
        link: "https://khairuk.org/",
      },
    ],
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
        name: "WordPress",
      },
      {
        id: 4,
        name: "Jquery",
      },
    ],
    link: "https://khairuk.org/",
  },
];
