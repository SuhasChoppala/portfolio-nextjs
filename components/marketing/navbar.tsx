"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Link from "next/link";
import { LayoutGrid, Briefcase, Layers, User, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
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
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  // Show navbar immediately if page has no scroll
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasScroll =
      document.documentElement.scrollHeight > window.innerHeight;

    if (!hasScroll) {
      setVisible(true);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current !== "number") return;

    const hasScroll =
      document.documentElement.scrollHeight > window.innerHeight;

    if (!hasScroll) {
      setVisible(true);
      return;
    }

    const direction = current - (scrollYProgress.getPrevious() ?? 0);

    if (scrollYProgress.get() < 0.05) {
      setVisible(false);
    } else {
      setVisible(direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          `
          fixed left-1/2 -translate-x-1/2 z-[5000] bg-card border
          flex items-center justify-center
          rounded-full shadow
          w-[86vw] max-w-sm px-5 py-2.5
          md:w-auto md:min-w-[480px] md:px-8 md:py-2
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
                {/* Mobile: icon only */}
                <span className="md:hidden">
                  <Icon size={20} />
                </span>

                {/* Desktop: text */}
                <span className="hidden md:block text-sm text-card-foreground">
                  {navItem.name}
                </span>
              </Link>
            );
          })}

          <AnimatedThemeToggler />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
