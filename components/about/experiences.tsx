"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useLayoutEffect, useRef, useState } from "react";

interface TimelineEntry {
  role: string;
  company: string;
  workedFrom: string;
}

export const Experiences = ({ data }: { data: TimelineEntry[] }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Measure actual content height (padding-safe, layout-safe)
  useLayoutEffect(() => {
    if (timelineRef.current) {
      setHeight(timelineRef.current.scrollHeight);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="mx-auto max-w-5xl px-6 py-10">
      {/* Section Header */}
      <div className="py-10">
        <h2 className="mb-4 text-lg md:text-4xl font-semibold text-black dark:text-white">
          My Experiences
        </h2>
        <p className="max-w-sm text-sm md:text-base text-neutral-700 dark:text-neutral-300">
          Know about my professional journey and learnings
        </p>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative max-w-7xl pb-10 min-h-[240px]">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10">
            {/* Left sticky column */}
            <div className="sticky top-40 z-40 flex items-center self-start max-w-xs md:w-full">
              <div className="absolute left-0 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-black">
                <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-1 dark:border-neutral-700 dark:bg-neutral-800" />
              </div>

              <h3 className="hidden md:block pl-10 text-lg md:text-2xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.company}
              </h3>
            </div>

            {/* Right content */}
            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-2 block md:hidden text-xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.role}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.workedFrom}
              </p>
            </div>
          </div>
        ))}

        {/* Static background line */}
        <div
          style={{ height }}
          className="absolute left-2 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 to-transparent dark:via-neutral-700
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Animated progress line */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
