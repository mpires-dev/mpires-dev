import { reader } from "../reader";
import { ProjectCard } from "../components/ProjectCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function ProjectsPage() {
  const projects = await reader.collections.projects.all();
  // Sort by date
  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.entry.date || 0).getTime();
    const dateB = new Date(b.entry.date || 0).getTime();
    return dateB - dateA;
  });

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/" className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <ArrowLeft className="text-gray-400 hover:text-white" />
        </Link>
        <h1 className="text-4xl md:text-5xl font-heading font-bold">All Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.entry.title}
            description={project.entry.description || ""}
            slug={project.slug}
            coverImage={project.entry.coverImage || undefined}
            techStack={project.entry.techStack || []}
            link={project.entry.link || undefined}
          />
        ))}
      </div>
      
      {sortedProjects.length === 0 && (
         <div className="text-center py-20 border border-dashed border-white/10 rounded-xl">
            <p className="text-gray-500">No projects found. Add some in the Keystatic admin!</p>
            <Link href="/keystatic" className="mt-4 inline-block text-primary hover:underline">
              Go to Admin Panel
            </Link>
          </div>
      )}
    </div>
  );
}
