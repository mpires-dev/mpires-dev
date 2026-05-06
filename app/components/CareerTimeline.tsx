"use client";

import { useState } from "react";
import Image from "next/image";

export interface TimelineEntry {
  period: string;
  startYear: number;
  endYear: number | null;
  title: string;
  description: string;
  company: string;
  companySlug: string;
  location: string;
  techStack: string[];
}

export const timelineEntries: TimelineEntry[] = [
  {
    period: "2023 – Present",
    startYear: 2023,
    endYear: null,
    title: "Senior Fullstack Developer",
    description:
      "Building AI-powered products and high-growth platforms as an independent contractor. Architecting TypeScript/Node.js backends, React frontends, and integrating LLM-based features that directly impact user retention and revenue.",
    company: "Freelance",
    companySlug: "freelance",
    location: "Remote",
    techStack: ["Next.js", "TypeScript", "Node.js", "OpenAI", "AWS", "Vercel"],
  },
  {
    period: "Mar 2022 – Mar 2023",
    startYear: 2022,
    endYear: 2023,
    title: "Fullstack Developer",
    description:
      "Shipped features across the cloud infrastructure platform that helps developers deploy and manage applications without deep DevOps expertise. Built dashboard UI, improved CI/CD pipeline integrations, and contributed to the Node.js backend.",
    company: "Devopness",
    companySlug: "devopness",
    location: "Remote — Brazil",
    techStack: ["React", "TypeScript", "Node.js", "Docker", "AWS"],
  },
  {
    period: "Mar 2022 – Mar 2023",
    startYear: 2022,
    endYear: 2023,
    title: "Frontend Developer",
    description:
      "Developed customer-facing interfaces for Tech4Humans' conversational AI and customer service automation platform. Built reusable component systems and improved chat widget performance and accessibility.",
    company: "Tech4Humans",
    companySlug: "tech4humans",
    location: "Remote — Brazil",
    techStack: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
  },
  {
    period: "Mar 2022 – Mar 2023",
    startYear: 2022,
    endYear: 2023,
    title: "Frontend Developer",
    description:
      "Contributed to the omnichannel communication platform at Movidesk, building rich chat and helpdesk interfaces used by thousands of enterprise customers. Improved application performance and worked closely with design to ship cohesive product experiences.",
    company: "Movidesk",
    companySlug: "movidesk",
    location: "Joinville, SC — Brazil",
    techStack: ["React", "JavaScript", "Redux", "Webpack", "Jest"],
  },
  {
    period: "2021 – 2022",
    startYear: 2021,
    endYear: 2022,
    title: "Fullstack Developer",
    description:
      "Worked at iFood, Brazil's leading food delivery platform. Contributed to internal tools and consumer-facing features in a high-scale environment serving tens of millions of orders per month.",
    company: "iFood",
    companySlug: "ifood",
    location: "São Paulo, SP — Brazil",
    techStack: ["React", "TypeScript", "Node.js", "Kotlin", "Redis", "Kafka"],
  },
  {
    period: "2019 – 2021",
    startYear: 2019,
    endYear: 2021,
    title: "Frontend Developer",
    description:
      "First professional role. Built web interfaces and design systems for digital products across several industries. Learned to bridge the gap between design and engineering, shipping accessible and performant UIs.",
    company: "Digital Agency",
    companySlug: "agency",
    location: "Brazil",
    techStack: ["React", "JavaScript", "CSS", "HTML"],
  },
];

const companyLogoMap: Record<string, string> = {
  ifood: "/logos/ifood.svg",
  devopness: "/logos/devopness.svg",
  movidesk: "/logos/movidesk.svg",
  tech4humans: "/logos/tech4humans.svg",
};

export function CareerTimeline() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section>
      <div className="mb-12">
        <h2 className="text-3xl font-heading font-medium tracking-tight md:text-4xl">
          Career{" "}
          <span className="text-zinc-500">Timeline</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-500 font-mono">
          {timelineEntries.length} positions · {new Date().getFullYear() - 2019}+ years
        </p>
      </div>

      <div className="space-y-0">
        {timelineEntries.map((entry, index) => (
          <div
            key={index}
            className="border-t border-white/10 py-8 md:py-10 last:border-b last:border-white/10"
          >
            <button
              className="w-full text-left"
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr_auto] gap-4 md:gap-8 items-start">
                <span className="text-sm font-mono text-zinc-500 tracking-wide">
                  {entry.period}
                </span>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    {companyLogoMap[entry.companySlug] && (
                      <Image
                        src={companyLogoMap[entry.companySlug]}
                        alt={entry.company}
                        width={20}
                        height={20}
                        className="rounded opacity-80"
                      />
                    )}
                    <h3 className="text-lg md:text-xl font-heading font-semibold tracking-wide text-white uppercase">
                      {entry.title}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-400 max-w-xl">
                    {entry.description}
                  </p>
                  {expanded === index && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2 py-1 rounded border border-white/10 text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-start md:items-end gap-1">
                  <span className="text-sm font-mono text-zinc-500 tracking-wide">
                    {entry.company}
                  </span>
                  <span className="text-xs text-zinc-600">{entry.location}</span>
                  <span className="text-xs text-zinc-600 mt-1">
                    {expanded === index ? "▲ less" : "▼ tech stack"}
                  </span>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
