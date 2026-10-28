"use client";

import { useEffect, useRef } from "react";

export default function Toolpath() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const sheet = document.getElementById("sheet");
    const path = pathRef.current;
    if (!sheet || !path) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => {
      if (reduced.matches) {
        path.style.strokeDashoffset = "0";
        return;
      }
      const top = sheet.getBoundingClientRect().top + window.scrollY;
      const height = sheet.offsetHeight || 1;
      const view = window.scrollY + window.innerHeight * 0.42;
      const progress = Math.min(1, Math.max(0, (view - top) / height));
      path.style.strokeDashoffset = String(1 - progress);
    };

    const build = () => {
      const nodes = [...sheet.querySelectorAll<HTMLElement>("[data-toolpath-node]")];
      const base = sheet.getBoundingClientRect().top + window.scrollY;
      const ys = nodes
        .map((node) => {
          const rect = node.getBoundingClientRect();
          return rect.top + window.scrollY - base + rect.height / 2;
        })
        .filter((y) => Number.isFinite(y))
        .sort((a, b) => a - b);

      if (ys.length === 0) {
        path.setAttribute("d", "");
        return;
      }

      const mobile = window.matchMedia("(max-width: 767px)").matches;
      const y0 = Math.max(0, ys[0] - 8);
      const y1 = ys[ys.length - 1];
      let d: string;

      if (mobile) {
        d = `M 16 ${y0.toFixed(1)} L 16 ${y1.toFixed(1)}`;
      } else {
        let x = 20;
        d = `M ${x} ${y0.toFixed(1)}`;
        for (const y of ys) {
          const next = x === 20 ? 56 : 20;
          d += ` L ${x} ${y.toFixed(1)} L ${next} ${y.toFixed(1)}`;
          x = next;
        }
      }

      path.setAttribute("d", d);
      apply();
    };

    build();
    const observer = new ResizeObserver(build);
    observer.observe(sheet);
    window.addEventListener("resize", build);
    window.addEventListener("scroll", apply, { passive: true });
    reduced.addEventListener("change", build);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", build);
      window.removeEventListener("scroll", apply);
      reduced.removeEventListener("change", build);
    };
  }, []);

  return (
    <svg className="toolpath" aria-hidden="true">
      <path ref={pathRef} className="toolpath-line" pathLength={1} strokeDasharray="1" strokeDashoffset="1" />
    </svg>
  );
}
