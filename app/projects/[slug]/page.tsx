import React from 'react';
import Markdoc from '@markdoc/markdoc';
import { reader } from '../../reader';
import { markdocConfig } from '../../../keystatic.config';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

export default async function ProjectPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;

  const project = await reader.collections.projects.read(slug);

  if (!project) return <div>Project not found!</div>;

  const { node } = await project.content();

  const errors = Markdoc.validate(node, markdocConfig);
  if (errors.length) {
    console.error(errors);
    throw new Error('Invalid content');
  }

  const renderable = Markdoc.transform(node, markdocConfig);

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Back to Projects
      </Link>

      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-heading font-bold">{project.title}</h1>
        
        {project.description && (
          <p className="text-xl text-gray-400 leading-relaxed">{project.description}</p>
        )}

        <div className="flex flex-wrap gap-4 py-4 border-y border-white/10">
          {project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium text-gray-500 mr-2">Tech Stack:</span>
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex gap-4 ml-auto">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary text-background font-bold rounded-md hover:bg-primary/90 transition-colors">
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white font-medium rounded-md hover:bg-white/5 transition-colors">
                <Github size={18} /> Source Code
              </a>
            )}
          </div>
        </div>
      </div>

      {project.coverImage && (
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="prose prose-invert prose-lg max-w-none prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-h6:text-base">
        {Markdoc.renderers.react(renderable, React)}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await reader.collections.projects.list();

  return slugs.map(slug => ({
    slug,
  }));
}
