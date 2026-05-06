"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { Search, Home, FolderOpen, Bot, FileText, Mail, Download, X } from "lucide-react";
import { useCommandPaletteContext } from "@/app/contexts/command-palette";

const commands = [
  { label: "Home", href: "/", icon: Home, description: "Back to the homepage" },
  { label: "Projects", href: "/projects", icon: FolderOpen, description: "Case studies and work" },
  { label: "AI Files", href: "/ai-files", icon: Bot, description: "Open-source AI prompts" },
  { label: "Blog", href: "/posts", icon: FileText, description: "Articles and writing" },
  { label: "Contact", href: "/contact", icon: Mail, description: "Send a message" },
  { label: "Download Resume", href: "/api/resume", icon: Download, description: "Get PDF resume", external: true },
];

export function CommandPalette() {
  const { open, setOpen } = useCommandPaletteContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg mx-4 rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
          <Search size={16} className="text-zinc-500 shrink-0" />
          <input
            ref={inputRef}
            placeholder="Search or navigate…"
            className="flex-1 bg-transparent text-white placeholder:text-zinc-600 text-sm outline-none"
          />
          <button
            onClick={() => setOpen(false)}
            className="text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="py-2">
          <p className="px-4 py-1 text-xs font-mono text-zinc-600 uppercase tracking-widest">
            Navigation
          </p>
          {commands.map((cmd) => {
            const Icon = cmd.icon;
            return (
              <Link
                key={cmd.href}
                href={cmd.href}
                onClick={() => setOpen(false)}
                target={cmd.external ? "_blank" : undefined}
                className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
              >
                <Icon size={16} className="text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                <div className="flex-1 min-w-0">
                  <span className="text-sm text-white">{cmd.label}</span>
                  <span className="text-xs text-zinc-600 ml-2">{cmd.description}</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="px-4 py-3 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs text-zinc-600">
            Click or use keyboard to navigate
          </span>
          <span className="text-xs text-zinc-600 font-mono">
            <kbd className="bg-white/5 px-1.5 py-0.5 rounded">⌘K</kbd> to toggle
          </span>
        </div>
      </div>
    </div>
  );
}
