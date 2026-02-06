import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

export const NAV_LINKS = [
  { name: "Projects", link: "/projects", icon: "projects" },
  { name: "Experiences", link: "/experiences", icon: "experiences" },
  { name: "Stacks", link: "/stacks", icon: "stacks" },
  { name: "About", link: "/about", icon: "about" },
  { name: "Contact", link: "/contact", icon: "contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "github",
    link: "https://github.com/yourusername",
    icon: GithubIcon,
  },
  {
    name: "linkedin",
    link: "https://linkedin.com/in/yourusername",
    icon: LinkedinIcon,
  },
  {
    name: "mail",
    link: "mailto:youremail@example.com",
    icon: Mail,
  },
] as const;
