import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  express,
  restapi,
  github1,
  python,
  melthify,
  pixshare,
  stock,
  azlogo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Competitive Programmer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "restAPI",
    icon: restapi,
  },
  {
    name: "Github",
    icon: github1,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "Expressjs",
    icon: express,
  },
];

const experiences = [
  {
    title: "Associate Engineer",
    company_name: "AstraZeneca",
    icon: azlogo,
    iconBg: "#E6DEDD",
    date: "July 2024 – Present",
    points: [
      "Integrated 5+ external data sources (APIs) and built cross-linked views to deliver deeper data insights.",
      "Boosted application performance by reducing load time by 30% through query optimization and introducing independent GraphQL queries.",
      "Spearheaded DevOps enhancements by migrating build/deployment pipelines from Jenkins to GitHub Actions, integrating HPA for scalability, and implementing SonarQube & Sentry for quality and observability.",
      "Developed a 3-agent architecture chatbot using AWS Bedrock to assist scientists in understanding and utilizing the Scientific Computing Platform.",
      "Led an innovation initiative by creating a Python script to parse and upload SDF patent files into PostgreSQL — reducing manual effort for scientists and promoting data accessibility."
    ]
  },
  {
    title: "Intern – Junior Engineer",
    company_name: "AstraZeneca",
    icon: azlogo,
    iconBg: "#E6DEDD",
    date: "Feb 2024 – July 2024",
    points: [
      "Built a complete E-Commerce Backend Server using Node.js, Express, and MongoDB with 15+ CRUD endpoints, showcasing full-stack development skills."
    ]
  }
];

const testimonials = [];

const projects = [
  {
    name: "Melthify",
    description:
      "AI-powered mental wellness platform with a private support system, real-time chatbot via OpenAI, and community features. Built with React, Node.js, and Firebase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "APIS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: melthify,
    source_code_link: "https://github.com/monaabishek2003/Melthify",
  },
  {
    name: "Pixshare-SSN",
    description:
      "Campus-exclusive social media platform enabling SSN students to share and connect through images. Built using the MERN stack, AWS S3, JWT, and Bcrypt.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: pixshare,
    source_code_link: "https://github.com/monaabishek2003/Pixshare-SSN",
  },
  {
    name: "Stock-Trend-Monitor",
    description:
      "Python-based stock monitoring tool providing real-time trend alerts via SMS, leveraging automation and financial APIs for fast decision-making.",
    tags: [
      {
        name: "Python3",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://github.com/monaabishek2003/Stock-Trend-Monitor",
  },
];

export { services, technologies, experiences, testimonials, projects };
