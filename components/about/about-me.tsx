"use client";

import Image from "next/image";
import { AboutMeData } from "@/constants/about";
import { Button } from "../ui/Button";

export default function AboutMe() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="max-w-7xl mx-auto py-10 px-4 text-center md:px-8 lg:px-10">
        <h2 className="text-2xl font-semibold md:text-4xl mb-4 max-w-4xl mx-auto">
          About Me
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Get to know me better – my story, interests, and aspirations
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="relative rounded-2xl p-[3px] bg-gradient-to-br from-primary/60 via-accent to-secondary/60">
            <div className="rounded-2xl bg-background p-1">
              <Image
                src="/profileImg.jpg"
                alt="Suhas Ch"
                width={280}
                height={280}
                priority
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          <p className="text-base text-muted-foreground">
            Currently working as Full Stack Developer at FSADP Pvt Ltd
          </p>

          {/* <Button
            className="
              inline-flex items-center gap-2
              rounded-xl px-6 py-3
              bg-primary text-primary-foreground
              font-medium
              shadow-lg shadow-primary/30
              transition
              hover:shadow-primary/50
              hover:-translate-y-[1px]
              cursor-pointer
            "
          >
            Say Hi!
            <span className="text-lg">↗</span>
          </Button> */}
        </div>
      </div>

      {/* About cards */}
      <div className="max-w-4xl mx-auto px-4 pb-20 space-y-16">
        {AboutMeData.map((item, index) => (
          <div
            key={index}
            className="
              space-y-6
              bg-card p-8
              rounded-md
              border glowBorder
            "
          >
            {/* Section heading */}
            <h3 className="text-lg font-medium text-foreground">
              {item.label}
            </h3>

            {/* Content */}
            {typeof item.description === "string" ? (
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            ) : (
              <div className="space-y-2">
                {item.description.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-muted-foreground/60 shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
