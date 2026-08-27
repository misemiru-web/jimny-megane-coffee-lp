"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section:not(.hero)"),
    );

    sections.forEach((section) => section.classList.add("reveal-section"));
    root.classList.add("motion-ready");

    const heroFrame = window.requestAnimationFrame(() => {
      root.classList.add("motion-start");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.08,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.cancelAnimationFrame(heroFrame);
      observer.disconnect();
      root.classList.remove("motion-ready", "motion-start");
      sections.forEach((section) => {
        section.classList.remove("reveal-section", "is-visible");
      });
    };
  }, []);

  return null;
}
