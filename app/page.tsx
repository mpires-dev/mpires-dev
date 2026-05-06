import Link from "next/link";
import { reader } from "./reader";
import { ProjectCard } from "./components/ProjectCard";
import { AiFileCard } from "./components/AiFileCard";
import { ArrowRight, Download } from "lucide-react";
import Dither from "./components/Dither";
import { CareerTimeline } from "./components/CareerTimeline";
import { TypewriterText } from "./components/TypewriterText";

export default async function Homepage() {
  const projects = await reader.collections.projects.all();
  const aiFiles = await reader.collections.aiFiles.all();
  const recentAiFiles = aiFiles.slice(0, 3);
  const recentProjects = projects
    .sort((a, b) => {
      const dateA = new Date(a.entry.date || 0).getTime();
      const dateB = new Date(b.entry.date || 0).getTime();
      return dateB - dateA;
    })
    .slice(0, 4);

  const skills = [
    { category: "Languages", items: ["TypeScript", "JavaScript", "SQL", "Kotlin"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Storybook"] },
    { category: "Backend", items: ["Node.js", "NestJS", "Express", "REST", "GraphQL"] },
    { category: "Infrastructure", items: ["Docker", "AWS", "Vercel", "Redis", "Kafka"] },
    { category: "AI / LLM", items: ["OpenAI SDK", "LangChain", "Prompt Engineering", "RAG"] },
    { category: "Practices", items: ["TDD", "CI/CD", "Monorepo", "Domain-Driven Design"] },
  ];

  return (
    <div className="space-y-20 pb-8">
      {/* Hero background */}
      <div className="left-0 top-0 opacity-40 w-full h-175 absolute">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={false}
          colorNum={10}
          waveAmplitude={0.3}
          waveFrequency={2.7}
          waveSpeed={0.04}
        />
      </div>

      {/* Hero */}
      <div className="max-w-3xl flex flex-col justify-center relative h-150 gap-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono text-zinc-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            Available for contracts
          </span>
        </div>
        <h1 className="text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-5xl z-20">
          Hi, I&apos;m Matheus Pires 👋
          <br />
          <TypewriterText
            phrases={[
              "Fullstack Developer",
              "TypeScript Engineer",
              "AI Product Builder",
              "Open Source Contributor",
            ]}
            className="text-zinc-300"
          />
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-300">
          7+ years shipping TypeScript-first products — from food-tech at iFood to cloud infra at Devopness.
          I specialize in building fast, scalable web products that directly impact revenue.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-zinc-200">
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-4 py-2 transition-colors hover:border-white bg-white text-black font-medium"
          >
            Get in touch
          </Link>
          <Link
            href="https://linkedin.com/in/matheusfpires"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-4 py-2 transition-colors hover:border-white"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/theoxys"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-4 py-2 transition-colors hover:border-white"
          >
            GitHub
          </Link>
          <Link
            href="/api/resume"
            className="rounded-full border border-white/20 px-4 py-2 transition-colors hover:border-white flex items-center gap-2"
          >
            <Download size={14} />
            Resume
          </Link>
        </div>
      </div>

      {/* Case studies */}
      <section className="relative">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-heading font-medium tracking-tight md:text-4xl">
            Case studies
          </h2>
          <Link
            href="/projects"
            className="hidden items-center gap-2 text-primary transition-colors hover:text-zinc-300 md:flex"
          >
            View all projects <ArrowRight size={18} />
          </Link>
        </div>

        {recentProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {recentProjects.map((project) => (
              <div key={project.slug} className="group relative">
                <ProjectCard
                  title={project.entry.title}
                  description={project.entry.description || ""}
                  slug={project.slug}
                  coverImage={project.entry.coverImage || undefined}
                  techStack={project.entry.techStack || []}
                  link={project.entry.link || undefined}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/15 py-20 text-center">
            <p className="text-zinc-400">No projects published yet.</p>
            <Link
              href="/keystatic"
              className="mt-4 inline-block text-primary hover:underline"
            >
              Open content panel
            </Link>
          </div>
        )}

        <div className="mt-8 md:hidden text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary transition-colors hover:text-zinc-300"
          >
            View all <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Skills grid */}
      <section>
        <div className="mb-10">
          <h2 className="text-3xl font-heading font-medium tracking-tight md:text-4xl">
            Technical{" "}
            <span className="text-zinc-500">Skills</span>
          </h2>
          <p className="mt-2 text-zinc-400">Technologies and practices I use daily.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
            >
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Files */}
      <section className="relative">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-heading font-medium tracking-tight md:text-4xl">
              AI Files
            </h2>
            <p className="text-zinc-400 mt-2">
              Open-source AI skills, agents and prompts — free to use and remix.
            </p>
          </div>
          <Link
            href="/ai-files"
            className="hidden items-center gap-2 text-primary transition-colors hover:text-zinc-300 md:flex shrink-0"
          >
            View all <ArrowRight size={18} />
          </Link>
        </div>

        {recentAiFiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentAiFiles.map((file) => (
              <AiFileCard
                key={file.slug}
                name={file.entry.name}
                description={file.entry.description || ""}
                slug={file.slug}
                coverImage={file.entry.coverImage || undefined}
                repoLink={file.entry.repoLink || undefined}
                installCommand={file.entry.installCommand || undefined}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/15 py-20 text-center">
            <p className="text-4xl mb-3">🤖</p>
            <p className="text-zinc-400">No AI files published yet.</p>
          </div>
        )}

        <div className="mt-8 md:hidden text-center">
          <Link
            href="/ai-files"
            className="inline-flex items-center gap-2 text-primary transition-colors hover:text-zinc-300"
          >
            View all <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Career Timeline */}
      <CareerTimeline />
    </div>
  );
}
