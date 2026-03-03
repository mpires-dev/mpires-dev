import React from 'react';
import Markdoc from '@markdoc/markdoc';
import { reader } from '../../reader';
import { markdocConfig } from '../../../keystatic.config';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function Post(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;

  const post = await reader.collections.posts.read(slug);

  if (!post) return <div>Post not found!</div>;

  const { node } = await post.content();

  const errors = Markdoc.validate(node, markdocConfig);
  if (errors.length) {
    console.error(errors);
    throw new Error('Invalid content');
  }

  const renderable = Markdoc.transform(node, markdocConfig);

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Link href="/posts" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold">{post.title}</h1>
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        {Markdoc.renderers.react(renderable, React)}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();

  return slugs.map(slug => ({
    slug,
  }));
}
