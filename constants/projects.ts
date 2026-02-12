import { GithubIcon, ExternalLink } from "lucide-react";

export const ProjectsData = [
  {
    thumbnailImg: "/projects/hrms.jpeg",
    title: "HRMS Application",
    description: [
      "A scalable HRMS platform featuring role-based access, dynamic routing, and seamless REST API integration, with reusable modules for employee, leave, and profile management optimized using Redux Toolkit.",
    ],
    summary:
      "Role-based HR management system with scalable, modular architecture.",
    links: [
      {
        name: "github",
        url: "https://github.com/SuhasChoppala/HRMS-APP",
        icon: GithubIcon,
      },
      {
        name: "live",
        url: "https://hrms-afraid-catfish-tan.194.163.156.38.nip.io/",
        icon: ExternalLink,
      },
    ],
    technologies: [
      {
        name: "React.js",
        image: "/projects/technologies/reactjs.svg",
      },
      {
        name: "Next.js",
        image: "/projects/technologies/nextjs.svg",
      },
      {
        name: "Tailwind CSS",
        image: "/projects/technologies/tailwindcss.svg",
      },
      {
        name: "Redux Toolkit",
        image: "/projects/technologies/reduxToolkit.svg",
      },
    ],
  },
  {
    thumbnailImg: "/projects/todoCms.png",
    title: "Todo Application",
    description: [
      "A full-stack todo application built with Next.js Safe Server Actions and Payload CMS Local API, featuring protected server actions. structured collections with Admin Panel control, lifecycle hooks for enforced business logic, and a maintainable MongoDB-backed backend architecture.",
    ],
    summary: "Full-stack todo app using Next.js and Payload CMS.",
    links: [
      {
        name: "github",
        url: "https://github.com/SuhasChoppala/todo-cms",
        icon: GithubIcon,
      },
      {
        name: "live",
        url: "https://white-ideal.up.dflow.sh/",
        icon: ExternalLink,
      },
    ],
    technologies: [
      {
        name: "Next.js",
        image: "/projects/technologies/nextjs.svg",
      },
      {
        name: "Typescript",
        image: "/projects/technologies/typescript.svg",
      },
      {
        name: "Payload CMS",
        image: "/projects/technologies/payloadcms.svg",
      },
      {
        name: "Mongo DB",
        image: "/projects/technologies/mongodb.svg",
      },
      {
        name: "Tailwind CSS",
        image: "/projects/technologies/tailwindcss.svg",
      },
      {
        name: "Shadcn ui",
        image: "/projects/technologies/shadcn.svg",
      },
    ],
  },
];
