import Link from "next/link";
import { reader } from "./reader";
import { ProjectCard } from "./components/ProjectCard";
import { AiFileCard } from "./components/AiFileCard";
import { ArrowRight } from "lucide-react";
import Dither from "./components/Dither";
import { CareerTimeline } from "./components/CareerTimeline";
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

  const sideProjects = [
    {
      title: "AI SaaS Starter",
      description:
        "Production-ready TypeScript starter with auth, billing and AI workflows.",
      href: "#",
    },
    {
      title: "PromptOps Toolkit",
      description:
        "A practical toolkit to version, test, and ship prompts with confidence.",
      href: "#",
    },
    {
      title: "Conversion-Led Landing System",
      description:
        "Reusable landing architecture optimized for speed and conversion.",
      href: "#",
    },
    {
      title: "Design-to-Code Pipeline",
      description:
        "Workflow that turns Figma handoff into scalable React components.",
      href: "#",
    },
  ];

  const awards = [
    "Top 1 at Startup Weekend Product Challenge (2019)",
    "Winner at National Hackathon Product Track (2021)",
    "Silver at Digital Product Excellence Awards (2023)",
    "Recognized Mentor in AI Product Community (2024)",
  ];

  const mentorship = [
    "Speaker at TypeScript Community Meetup",
    "Guest Mentor for early-stage SaaS founders",
    "Workshop host: AI features from prototype to production",
    "Career mentor for junior fullstack developers",
  ];

  return (
    <div className="space-y-20 pb-8">
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
      <div className="max-w-3xl flex flex-col justify-center  relative h-150 gap-3">
        <h1 className="text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-5xl z-20">
          Hi I&apos;m Matheus Pires 👋 <br /> a Fullstack Developer focused on
          high-growth digital products.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
          With 8 years of experience, I specialize in the TypeScript ecosystem
          and AI product execution. I partner with teams to ship faster, scale
          smarter, and build experiences that directly impact revenue.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-zinc-200">
          <Link
            href="mailto:hello@example.com"
            className="rounded-full border border-white/20 px-4 py-2 transition-colors hover:border-white bg-white text-black"
          >
            Email
          </Link>
          <Link
            href="https://linkedin.com"
            className="rounded-full border border-white/20 px-4 py-2 transition-colors hover:border-white"
          >
            LinkedIn
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-white/20 px-4 py-2 transition-colors hover:border-white"
          >
            Projects
          </Link>
        </div>
      </div>

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

      <section className="relative">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-heading font-medium tracking-tight md:text-4xl">
              AI Files
            </h2>
            <p className="text-zinc-400 mt-2">
              Open source AI skills, agents and tools — free to use and remix.
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
            href="/ai-files"
            className="inline-flex items-center gap-2 text-primary transition-colors hover:text-zinc-300"
          >
            View all <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <CareerTimeline />

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
          <h3 className="mb-5 text-2xl font-heading font-semibold text-white">
            Side projects
          </h3>
          <div className="space-y-4">
            {sideProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="block rounded-xl border border-white/10 p-4 transition-colors hover:border-white/25"
              >
                <p className="font-medium text-white">{project.title}</p>
                <p className="mt-1 text-sm text-zinc-400">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
            <h3 className="mb-4 text-2xl font-heading font-semibold text-white">
              Awards
            </h3>
            <ul className="space-y-3 text-sm text-zinc-300">
              {awards.map((item) => (
                <li
                  key={item}
                  className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
            <h3 className="mb-4 text-2xl font-heading font-semibold text-white">
              Mentorship
            </h3>
            <ul className="space-y-3 text-sm text-zinc-300">
              {mentorship.map((item) => (
                <li
                  key={item}
                  className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
