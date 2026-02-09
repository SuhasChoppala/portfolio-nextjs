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
        fixed left-1/2 -translate-x-1/2 z-[5000] bg-background border border-ring/30
        flex items-center justify-center
        rounded-full shadow
        w-[94vw] max-w-sm px-5 py-2.5
        md:w-auto md:min-w-[560px] md:px-8 md:py-2
        gap-8 md:gap-6
        bottom-6
        md:bottom-auto md:top-6
        `,
        className,
      )}
    >
      <div className="relative flex w-full items-center justify-center gap-8">
        {navItems.map((navItem, idx) => {
          const Icon = ICON_MAP[navItem.icon];

          return (
            <Link
              key={idx}
              href={navItem.link}
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition"
            >
              {/* Mobile */}
              <span className="md:hidden">
                <Icon size={20} />
              </span>

              {/* Desktop */}
              <span className="hidden md:block text-sm">{navItem.name}</span>
            </Link>
          );
        })}

        <AnimatedThemeToggler />
      </div>
    </motion.div>
  );
};
