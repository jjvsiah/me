import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  olim,
  quicksite,
  mwns,
  chess,
  racing,
  malteser,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Designer",
    icon: backend,
  },
  {
    title: "Full-stack Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Software Engineer",
    company_name: "OLIM",
    icon: olim,
    iconBg: "#383E56",
    date: "November 2023 - Present",
    points: [
      "Developing a mobile and web application using Laravel and Vue.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Used APIs to ensure safe financial transactions within the app alongside location services",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Design and Development Intern",
    company_name: "QuickSite Guru",
    icon: quicksite,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Developed dynamic and responsive websites using React.js and JavaScript, with a strong focus on design,content, and functionality",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Academic Tutor & Admin",
    company_name: "MWNS",
    icon: mwns,
    iconBg: "#383E56",
    date: "Jan 2021 - March 2024",
    points: [
      "Tutored over 300 students during the 3 years",
      "Maintained a 85% student enrolment retention termly due to maintaining quality teaching",
      "Earned to become a highly requested tutor due to my dedication, adaptibility and effective behaviour plans",
      "Utilised SQL to maintain and update databases, ensuring data accuracy and accessibility",
    ],
  },
];


const projects = [
  {
    name: "Maltesers Movies",
    description:
      "Explore recent and past movies, integrating data seamlessly from the MovieDB API for real-time updates and comprehensive information",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: malteser,
    source_code_link: "https://github.com/jjvsiah/MaltesersMovies",
  },
  {
    name: "Chess AI Bot",
    description:
      "Customisable decision tree depth for AI move prediction. Alpha-beta pruning algorithm for optimal move selection",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: chess,
    source_code_link: "https://github.com/jjvsiah/chess-ai",
  },
  {
    name: "Light Racing",
    description:
      "A lightweight complete game slice showing a number of elements such as accepting input, implementing simple AI, handling collisions and detection https://maltesers-movies.vercel.app/",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: racing,
    source_code_link: "https://github.com/jjvsiah/lightracing",
  },
];

export { services, technologies, experiences, projects };
