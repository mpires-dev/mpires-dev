const timelineEntries = [
  {
    period: "2023 – Present",
    title: "FULLSTACK DEVELOPER",
    description:
      "Building AI-powered products and high-growth platforms. Partnering with teams to ship faster and scale smarter.",
    company: "FREELANCE",
  },
  {
    period: "2021 – 2023",
    title: "SR. FULLSTACK DEVELOPER",
    description:
      "Led frontend architecture and shipped product features end-to-end. TypeScript ecosystem, React, and Node.",
    company: "PRODUCT STUDIO",
  },
  {
    period: "2019 – 2021",
    title: "FULLSTACK DEVELOPER",
    description:
      "Built and maintained SaaS platforms. First experience owning the full stack from database to deploy.",
    company: "SAAS STARTUP",
  },
  {
    period: "2017 – 2019",
    title: "FRONTEND DEVELOPER",
    description:
      "Crafted user interfaces and design systems. Learned to bridge the gap between design and engineering.",
    company: "DIGITAL AGENCY",
  },
];

export function CareerTimeline() {
  return (
    <section>
      <h2 className="text-3xl font-heading font-medium tracking-tight md:text-4xl mb-12">
        Career{" "}
        <span className="text-zinc-500">Timeline</span>
      </h2>

      <div className="space-y-0">
        {timelineEntries.map((entry, index) => (
          <div
            key={index}
            className="border-t border-white/10 py-8 md:py-10 last:border-b last:border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr_auto] gap-4 md:gap-8 items-start">
              <span className="text-sm font-mono text-zinc-500 tracking-wide">
                {entry.period}
              </span>

              <div>
                <h3 className="text-lg md:text-xl font-heading font-semibold tracking-wide text-white uppercase">
                  {entry.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-400 max-w-xl">
                  {entry.description}
                </p>
              </div>

              <span className="text-sm font-mono text-zinc-500 tracking-wide md:text-right">
                {entry.company}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
