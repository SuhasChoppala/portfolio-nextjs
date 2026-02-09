"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Link from "next/link";
import {
  LayoutGrid,
  Briefcase,
  Layers,
  User,
  Mail,
  HomeIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  home: HomeIcon,
  projects: LayoutGrid,
  experiences: Briefcase,
  stacks: Layers,
  about: User,
  contact: Mail,
};

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: readonly {
    name: string;
    link: string;
    icon: keyof typeof ICON_MAP;
  }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        `
          fixed z-[5000]
          flex items-center justify-center

          bg-background/80 backdrop-blur-xl
          border-t border-border/40 shadow-lg

          bottom-0 left-0 right-0 w-full
          px-4 py-4 rounded-none

          md:bottom-auto md:top-6
          md:left-1/2 md:-translate-x-1/2
          md:w-auto md:max-w-fit
          md:px-6 md:py-2
          md:rounded-full md:border md:border-border/40
          `,
        className,
      )}
    >
      <div className="relative flex w-full items-center justify-between md:justify-center md:gap-6">
        {navItems.map((navItem, idx) => {
          const Icon = ICON_MAP[navItem.icon];

          return (
            <Link
              key={idx}
              href={navItem.link}
              className={cn(
                "flex flex-col md:flex-row items-center justify-center gap-1",
                "text-muted-foreground hover:text-foreground transition-colors",
                "min-w-[60px] md:min-w-0",
              )}
            >
              {/* Mobile: Icon + Label */}
              <span className="md:hidden">
                <Icon size={20} strokeWidth={1.5} />
              </span>
              <span className="md:hidden text-[10px] font-medium">
                {navItem.name}
              </span>

              {/* Desktop: Text only */}
              <span className="hidden md:block text-sm">{navItem.name}</span>
            </Link>
          );
        })}

        {/* Separator */}
        <div className="h-8 w-px bg-border/60 mx-2 md:mx-0" />

        {/* Theme toggle */}
        <div className="md:ml-0">
          <AnimatedThemeToggler />
        </div>
      </div>
    </motion.div>
  );
};
