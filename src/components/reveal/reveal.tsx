"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import styles from "./reveal.module.css";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  variant?: "default" | "scale";
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  variant = "default",
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (delay) {
          setTimeout(() => setInView(true), delay);
        } else {
          setInView(true);
        }
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const base = variant === "scale" ? styles.revealScale : styles.reveal;
  const classes = [base, inView && styles.revealVisible, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
