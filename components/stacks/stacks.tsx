"use client";
import Image from "next/image";
import { TechStacksData } from "@/constants/stacks";

export const Stacks = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="max-w-7xl mx-auto py-10 px-4 text-center md:px-8 lg:px-10">
        <h2 className="text-2xl font-semibold md:text-4xl mb-4 max-w-4xl mx-auto">
          Tech Stacks
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Peek into my software toolbox and preferred technology stacks
        </p>
      </div>

      {/* Tech stacks list */}
      <div className="max-w-4xl mx-auto px-4 pb-20 space-y-16">
        {TechStacksData.map((stack, index) => (
          <div
            key={index}
            className="space-y-6 bg-card p-8 rounded-md border glowBorder"
          >
            <h3 className="text-lg font-medium text-foreground">
              {stack.label}
            </h3>

            {/* Items */}
            <div className="flex flex-wrap gap-3">
              {stack.items.map((item, i) => (
                <div
                  key={i}
                  className="
                    group flex items-center gap-3
                    rounded-lg px-3 py-2
                    bg-background
                    border border-border
                    transition
                    hover:bg-accent/40
                  "
                >
                  <div
                    className="
                      flex h-8 w-8 items-center justify-center
                      rounded-md
                      bg-white dark:bg-white/90
                      border border-border
                      shadow-sm
                    "
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>

                  <span className="text-sm font-medium text-foreground">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
