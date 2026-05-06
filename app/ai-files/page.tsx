import { reader } from "../reader";
import { AiFileCard } from "../components/AiFileCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function AiFilesPage() {
  const aiFiles = await reader.collections.aiFiles.all();

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/" className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <ArrowLeft className="text-gray-400 hover:text-white" />
        </Link>
        <div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">AI Files</h1>
          <p className="text-zinc-400 mt-2 text-lg">
            Open source AI skills, agents and tools — free to use and remix.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiFiles.map((file) => (
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

      {aiFiles.length === 0 && (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-xl">
          <p className="text-4xl mb-4">🤖</p>
          <p className="text-zinc-500">No AI files yet. Add some in the Keystatic admin!</p>
          <Link href="/keystatic" className="mt-4 inline-block text-primary hover:underline">
            Go to Admin Panel
          </Link>
        </div>
      )}
    </div>
  );
}
