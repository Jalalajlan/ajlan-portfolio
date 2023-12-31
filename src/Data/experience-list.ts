export interface Project {
  name: string;
  link: string;
}

interface Experience {
  id: number;
  stateDate: string;
  endDate: string;
  position: string;
  company: string;
  description: string;
  projects: Project[];
  skills: string[];
  link: string;
}

export const experienceList: Experience[] = [
  {
    id: 1,
    stateDate: "2018",
    endDate: "PRESENT",
    position: "Lead Engineer",
    company: "Upstatement",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Every town for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    projects: [],
    skills: [
      "React",
      "React Native",
      "SCSS",
      "WordPress",
      "JavaScript",
      "TypeScript",
      "PHP",
    ],
    link: "https://upstatement.com/",
  },
  {
    id: 2,
    stateDate: "JULY",
    endDate: "DEC 2017",
    position: "UI Engineer Co-op",
    company: "Apple",
    description:
      "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
    projects: [
      {
        name: "MusicKit.js",
        link: "https://developer.apple.com/documentation/musickitjs",
      },
      {
        name: "9to5Mac",
        link: "https://developer.apple.com/documentation/musickitjs",
      },
      {
        name: "The Verge",
        link: "https://developer.apple.com/documentation/musickitjs",
      },
    ],
    skills: ["Ember", "SCSS", "JavaScript", "MusicKit.js"],
    link: "https://upstatement.com/",
  },
  {
    id: 3,
    stateDate: "2016",
    endDate: "2017",
    position: "Developer",
    company: "Scout Studio",
    description:
      "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.",
    projects: [],
    skills: ["Jekyll", "SCSS", "JavaScript", "WordPress"],
    link: "https://upstatement.com/",
  },
];
