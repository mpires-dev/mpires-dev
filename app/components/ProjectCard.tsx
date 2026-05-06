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

export function ProjectCard({
  title,
  description,
  slug,
  coverImage,
  techStack,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-3">
      {coverImage && (
        <div className="relative overflow-hidden rounded-2xl aspect-video">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <h3 className="text-xl font-heading font-medium text-white group-hover:text-primary transition-colors">
        <Link href={`/projects/${slug}`}>
          <span className="absolute inset-0" />
          {title}
        </Link>
      </h3>

      <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-neutral-800 text-white "
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
