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
    stateDate: "startDate1",
    endDate: "endDate1",
    position: "position1",
    company: "company1",
    description: "description1",
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
        name: "Java",
      },
      {
        id: 6,
        name: "PHP",
      },
      {
        id: 7,
        name: "MySQL",
      },
      {
        id: 8,
        name: "Firebase",
      },
      {
        id: 9,
        name: "REST APIs",
      },
      {
        id: 10,
        name: "UI/UX",
      },
    ],
    link: "http://huacomm.com.my/",
  },
  {
    id: 2,
    stateDate: "startDate2",
    endDate: "endDate2",
    position: "position2",
    company: "company2",
    description: "description2",
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
