import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already in viewport on mount, show immediately
    const checkInViewport = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80 && rect.bottom > 0) {
        setVisible(true);
        window.removeEventListener("scroll", checkInViewport);
      }
    };

    checkInViewport();
    window.addEventListener("scroll", checkInViewport);

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
          window.removeEventListener("scroll", checkInViewport);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", checkInViewport);
    };
  }, []);

  const classes = ["reveal", visible ? "is-visible" : "", delay ? `delay-${delay}` : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
