import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type WordCycleProps = {
  words: string[];
  interval?: number;
  className?: string;
};

/** Rotates a single word behind a mask, so the hero line keeps moving. */
export default function WordCycle({ words, interval = 2400, className = "" }: WordCycleProps) {
  const [index, setIndex] = useState(0);
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (words.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = gsap.fromTo(
      el,
      { yPercent: 110, rotate: 2.5 },
      { yPercent: 0, rotate: 0, duration: 0.85, ease: "expo.out" }
    );
    return () => {
      tween.kill();
    };
  }, [index]);

  return (
    <span className={`word-cycle ${className}`.trim()} aria-live="polite">
      <span className="word-cycle-mask">
        <span className="word-cycle-word" ref={wordRef}>
          {words[index]}
        </span>
      </span>
    </span>
  );
}
