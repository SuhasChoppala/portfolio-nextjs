"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

type TechItem = {
  name: string;
  image: string;
};

export const AnimatedTooltip = ({ items }: { items: TechItem[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-25, 25]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-40, 40]),
    springConfig,
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="py-4 flex items-center">
      {items.map((item, idx) => (
        <div
          key={item.name}
          className="group relative -mr-3"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.8 }}
                style={{ translateX, rotate }}
                className="absolute -top-12 left-1/2 z-50 -translate-x-1/2 rounded-md bg-black px-3 py-1.5 text-xs text-white shadow-lg"
              >
                {item.name}
              </motion.div>
            )}
          </AnimatePresence>

          <img
            src={item.image}
            alt={item.name}
            onMouseMove={handleMouseMove}
            className="technologiesTooltip"
          />
        </div>
      ))}
    </div>
  );
};
