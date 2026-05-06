"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  phrases: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
}

export function TypewriterText({
  phrases,
  speed = 60,
  deleteSpeed = 35,
  pause = 2000,
  className,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pause);
      return () => clearTimeout(timer);
    }

    if (!isDeleting) {
      if (charIndex < current.length) {
        const timer = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        setIsPaused(true);
      }
    } else {
      if (charIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, deleteSpeed);
        return () => clearTimeout(timer);
      } else {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }
    }
  }, [charIndex, isDeleting, isPaused, phraseIndex, phrases, speed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-[cursor-blink_0.8s_step-end_infinite] inline-block w-[2px] h-[0.85em] bg-current align-middle ml-1 -translate-y-px" />
    </span>
  );
}
