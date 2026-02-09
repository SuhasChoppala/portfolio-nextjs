"use client";

import { Minus } from "lucide-react";

interface Experiences {
  role: string;
  company: string;
  workedFrom: string;
  workedTill: string;
  description: string[];
  skills: string[];
}

export const ExperiencesComp = ({ data }: { data: Experiences[] }) => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-10 md:py-10 px-4 text-center md:px-8 lg:px-10">
        <h2 className="text-2xl font-semibold md:text-4xl mb-4 max-w-4xl mx-auto">
          My Experiences
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Know about my professional journey and learnings
        </p>
      </div>

      {/* Experiences list */}
      <div className="max-w-4xl mx-auto px-4 pb-20 space-y-16">
        {data.map((exp, index) => (
          <div key={index} className="space-y-4 bg-card p-8 rounded-md border">
            {/* Role + Company + Date */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <h3 className="text-lg font-semibold">
                {exp.role}{" "}
                <span className="text-muted-foreground font-medium">
                  @ {exp.company}
                </span>
              </h3>

              <span className="text-sm">
                {exp.workedFrom} – {exp.workedTill}
              </span>
            </div>

            {/* Description */}
            <ul className="space-y-2">
              {exp.description.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Minus
                    className="mt-[7px] h-3 w-3 text-muted-foreground/70 shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-lg bg-background text-card-foreground border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
