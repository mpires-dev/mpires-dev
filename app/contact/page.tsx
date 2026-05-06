"use client";

import { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { Label } from "@/app/components/ui/label";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setState("error");
        return;
      }

      setState("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setState("error");
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-12">
        <h1 className="text-3xl font-heading font-medium tracking-tight md:text-4xl mb-4">
          Let&apos;s{" "}
          <span className="text-zinc-500">connect</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Open to freelance contracts, consulting, and full-time opportunities.
          I reply to every message within 24 hours.
        </p>

        <div className="mt-6 flex flex-col gap-3 text-sm text-zinc-400">
          <a
            href="https://linkedin.com/in/matheusfpires"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            linkedin.com/in/matheusfpires →
          </a>
          <a
            href="https://github.com/theoxys"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            github.com/theoxys →
          </a>
        </div>
      </div>

      {state === "success" ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center">
          <p className="text-4xl mb-4">✉️</p>
          <h2 className="text-xl font-medium text-white mb-2">Message sent!</h2>
          <p className="text-zinc-400">I&apos;ll get back to you within 24 hours.</p>
          <button
            onClick={() => setState("idle")}
            className="mt-6 text-sm text-zinc-500 hover:text-white transition-colors underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-zinc-300">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                disabled={state === "loading"}
                className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-300">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                disabled={state === "loading"}
                className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/30"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-zinc-300">
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              placeholder="What's this about?"
              disabled={state === "loading"}
              className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/30"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-zinc-300">
              Message <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or opportunity..."
              rows={6}
              required
              disabled={state === "loading"}
              className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/30 resize-none"
            />
          </div>

          {state === "error" && errorMsg && (
            <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
              {errorMsg}
            </p>
          )}

          <Button
            type="submit"
            disabled={state === "loading"}
            className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 font-medium px-8"
          >
            {state === "loading" ? "Sending…" : "Send message"}
          </Button>
        </form>
      )}
    </div>
  );
}
