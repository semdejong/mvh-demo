"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { content } from "@/content";
import { localeFromPath, switchHref, type Locale } from "@/lib/locale";

function formatAxis(value: number) {
  return value.toFixed(3).padStart(8, " ");
}

function paintAxis(root: HTMLElement, value: number) {
  const text = formatAxis(value);
  const head = root.querySelector<HTMLElement>("[data-dro-head]");
  const tail = root.querySelector<HTMLElement>("[data-dro-tail]");
  if (head) head.textContent = text.slice(0, -1);
  if (tail) tail.textContent = text.slice(-1);
}

export default function Header() {
  const pathname = usePathname();
  const locale: Locale = localeFromPath(pathname);
  const [open, setOpen] = useState(false);
  const droRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLParagraphElement>(null);
  const nav = locale === "de" ? content.navDe : content.nav;
  const cta = locale === "de" ? "Zeichnung senden" : "Tekening sturen";
  const nlHref = switchHref(pathname, "nl");
  const deHref = switchHref(pathname, "de");
  const current = (href: string) => {
    if (href === "/" || href === "/de") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stack = droRef.current;
    const line = lineRef.current;
    if (!stack || !line) return;

    const paint = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      const x = p * 1600;
      const y = ((p * 4) % 1) * 820;
      const z = Math.abs(Math.sin(p * Math.PI * 2)) * 600;
      const rows = [...stack.querySelectorAll<HTMLElement>("[data-axis]")];
      const values = [x, y, z];
      if (!reduced.matches) {
        rows.forEach((row, index) => paintAxis(row, values[index] ?? 0));
        const compact = `X ${x.toFixed(1).padStart(6, " ")}  ·  Y ${y.toFixed(1).padStart(6, " ")}  ·  Z ${z.toFixed(1).padStart(6, " ")}`;
        line.textContent = compact;
      }
    };

    if (reduced.matches) {
      [...stack.querySelectorAll<HTMLElement>("[data-axis]")].forEach((row) => paintAxis(row, 0));
      line.textContent = "X    0.0  ·  Y    0.0  ·  Z    0.0";
      return;
    }

    paint();
    window.addEventListener("scroll", paint, { passive: true });
    return () => window.removeEventListener("scroll", paint);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header data-section="header" className="site-header sticky top-0 z-30 border-b border-line">
      <div className="wrap">
        <div className="header-bar">
        <Link href={locale === "de" ? "/de" : "/"} className="header-logo inline-flex items-center min-h-11">
          <Image
            src={content.company.logo}
            alt={content.company.brand}
            width={1200}
            height={411}
            priority
            sizes="168px"
            className="h-11 w-auto"
          />
        </Link>

        <div className="dro" ref={droRef} aria-hidden="true">
          <div className="dro-stack">
            {["X", "Y", "Z"].map((axis) => (
              <div key={axis} data-axis={axis}>
                <span>{axis} </span>
                <span data-dro-head>   0.00</span>
                <span data-dro-tail className="dro-active">0</span>
              </div>
            ))}
          </div>
          <p className="dro-line" ref={lineRef}>
            X    0.0  ·  Y    0.0  ·  Z    0.0
          </p>
        </div>

        <nav className="lang" aria-label={locale === "de" ? "Sprache" : "Taal"}>
          <Link href={nlHref} hrefLang="nl" lang="nl" aria-current={locale === "nl" ? "true" : undefined}>
            NL
          </Link>
          <span aria-hidden="true">|</span>
          <Link href={deHref} hrefLang="de" lang="de" aria-current={locale === "de" ? "true" : undefined}>
            DE
          </Link>
        </nav>

        <a className="header-phone mono text-sm text-navy min-h-11 items-center" href={content.company.phoneTel} data-cta="bellen">
          {content.company.phoneDisplay}
        </a>

        <Link className="btn btn-primary header-cta" href="/offerte" data-cta="offerte">
          {cta}
        </Link>

        <button
          type="button"
          className="btn btn-ghost menu-btn"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (locale === "de" ? "Schließen" : "Sluiten") : locale === "de" ? "Menü" : "Menu"}
        </button>
        </div>
        <nav className="nav-desktop" aria-label={locale === "de" ? "Hauptmenü" : "Hoofdmenu"}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={current(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {open ? (
        <div id="site-menu" className="wrap menu-panel">
          <nav aria-label={locale === "de" ? "Hauptmenü" : "Hoofdmenu"}>
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <nav className="lang" aria-label={locale === "de" ? "Sprache" : "Taal"}>
            <Link href={nlHref} hrefLang="nl" lang="nl">
              NL
            </Link>
            <Link href={deHref} hrefLang="de" lang="de">
              DE
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
