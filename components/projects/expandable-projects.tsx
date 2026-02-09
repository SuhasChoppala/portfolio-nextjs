"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ProjectsData } from "@/constants/projects";
import { AnimatedTooltip } from "../ui/animated-tooltip";

export default function ExpandableProjects() {
  type Project = (typeof ProjectsData)[number];

  const [active, setActive] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    document.body.style.overflow = active ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col border bg-card sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.thumbnailImg}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="p-4 space-y-4">
                  {/* Title + description */}
                  <div className="space-y-1">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-xl"
                    >
                      {active.title}
                    </motion.h3>

                    <motion.p
                      layoutId={`description-${active.title}-${id}`}
                      className="text-sm text-muted-foreground"
                    >
                      {active.description[0]}
                    </motion.p>
                  </div>

                  <div>
                    <AnimatedTooltip items={active.technologies} />
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2">
                    {active.links.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          className="
                            flex items-center gap-2
                            px-4 py-2
                            text-sm
                            rounded-full
                            bg-primary
                            text-primary-foreground
                            border
                            border-border
                            transition
                          "
                        >
                          <Icon className="h-4 w-4" />
                          {link.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {ProjectsData.map((project, index) => (
          <motion.div
            layoutId={`card-${project.title}-${id}`}
            key={`card-${project.title}-${id}`}
            onClick={() => setActive(project)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-accent/40 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div
                layoutId={`image-${project.title}-${id}`}
                className="shrink-0 flex justify-center md:justify-start"
              >
                <img
                  src={project.thumbnailImg}
                  alt={project.title}
                  className="
                    h-42 w-42          
                    md:h-16 md:w-16  
                    rounded-xl
                    object-cover
                    ring-1 ring-white/10
                    bg-neutral-900
                  "
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${project.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {project.title}
                </motion.h3>
              </div>
            </div>
            <motion.button
              layoutId={`button-${project.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-semibold bg-primary/70 cursor-pointer border border-border text-primary-foreground mt-4 md:mt-0 hover:bg-primary"
            >
              View
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
