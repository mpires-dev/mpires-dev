"use client";

import Image from "next/image";
import { ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";

interface AiFileCardProps {
  name: string;
  description: string;
  slug: string;
  coverImage?: string;
  repoLink?: string;
  installCommand?: string;
}

export function AiFileCard({
  name,
  description,
  coverImage,
  repoLink,
  installCommand,
}: AiFileCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!installCommand) return;
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0b0b0b] overflow-hidden transition-colors hover:border-white/25">
      {/* Square image */}
      <div className="relative aspect-square w-full overflow-hidden">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
            <span className="text-5xl">🤖</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-heading font-medium text-white group-hover:text-primary transition-colors leading-tight">
            {name}
          </h3>
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 p-1.5 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Open repository"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        <p className="text-zinc-400 text-sm line-clamp-2 flex-1">
          {description}
        </p>

        {installCommand && (
          <div className="relative flex items-center gap-2 rounded-lg bg-neutral-900 border border-white/10 px-3 py-2 text-xs font-mono text-zinc-300 mt-1">
            <span className="truncate flex-1">{installCommand}</span>
            <button
              type="button"
              onClick={handleCopy}
              className="shrink-0 text-zinc-500 hover:text-white transition-colors"
              aria-label="Copy install command"
            >
              {copied ? (
                <Check size={13} className="text-green-400" />
              ) : (
                <Copy size={13} />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
