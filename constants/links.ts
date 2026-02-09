import { GithubIcon, LinkedinIcon, Mail, HomeIcon } from "lucide-react";

export const NAV_LINKS = [
  { name: "Home", link: "/", icon: "home" },
  { name: "Projects", link: "/projects", icon: "projects" },
  { name: "Experiences", link: "/experiences", icon: "experiences" },
  { name: "Stacks", link: "/stacks", icon: "stacks" },
  { name: "About", link: "/about", icon: "about" },
  // { name: "Contact", link: "/contact", icon: "contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "github",
    link: "https://github.com/SuhasChoppala",
    icon: GithubIcon,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/suhas-choppala-9321b8218/",
    icon: LinkedinIcon,
  },
  {
    name: "mail",
    link: "mailto:choppalasuhas.02@gmail.com",
    icon: Mail,
  },
] as const;
