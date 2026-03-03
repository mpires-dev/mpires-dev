import Link from 'next/link';
import { reader } from '../reader';
import { ArrowLeft } from 'lucide-react';

export default async function PostsPage() {
  const posts = await reader.collections.posts.all();
  
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/" className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <ArrowLeft className="text-gray-400 hover:text-white" />
        </Link>
        <h1 className="text-4xl md:text-5xl font-heading font-bold">Blog Posts</h1>
      </div>

      {posts.length > 0 ? (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="group border-b border-white/10 pb-6 last:border-0 hover:bg-white/5 p-4 rounded-lg transition-colors">
              <Link href={`/posts/${post.slug}`} className="block">
                <h2 className="text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors mb-2">
                  {post.entry.title}
                </h2>
                <div className="text-sm text-gray-500 font-mono">
                  Read more &rarr;
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-xl">
          <p className="text-gray-500">No posts found.</p>
          <Link href="/keystatic" className="mt-4 inline-block text-primary hover:underline">
            Go to Admin Panel to add posts
          </Link>
        </div>
      )}
    </div>
  );
}
