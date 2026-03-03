import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  coverImage?: string;
  techStack?: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, slug, coverImage, techStack, link }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
      {coverImage && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">
            <Link href={`/projects/${slug}`}>
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h3>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="relative z-10 p-2 text-gray-400 hover:text-white transition-colors">
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4">{description}</p>
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/5">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
