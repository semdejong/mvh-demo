"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { content } from "@/content";
import { localeFromPath } from "@/lib/locale";

export default function Footer() {
  const locale = localeFromPath(usePathname());
  const de = locale === "de";
  const { company } = content;

  const links = de
    ? [
        { href: "/de/maschinenpark", label: "Maschinenpark" },
        { href: "/de/kontakt", label: "Kontakt" },
        { href: "/de/vakanz", label: "Stellen" },
        { href: "/privacy", label: "Datenschutz" },
        { href: "/", label: "Nederlands" },
      ]
    : [
        { href: "/toepassingen", label: "Toepassingen" },
        { href: "/machinepark", label: "Machinepark" },
        { href: "/vacatures", label: "Vacatures" },
        { href: "/privacy", label: "Privacy" },
        { href: "/de", label: "Deutsch" },
      ];

  return (
    <footer data-section="footer" className="titleblock">
      <div className="wrap">
        <div className="tb-grid">
          <div className="tb-cell">
            <span className="mono">{de ? "FIRMA" : "BEDRIJF"}</span>
            <p>{company.legalName}</p>
            <p>{company.brand}</p>
          </div>
          <div className="tb-cell">
            <span className="mono">{de ? "ADRESSE" : "ADRES"}</span>
            <p>{company.street}</p>
            <p>
              {company.postalCode} {company.city}
            </p>
          </div>
          <div className="tb-cell">
            <span className="mono">TEL</span>
            <p>
              <a href={company.phoneTel} data-cta="bellen">
                {company.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="tb-cell">
            <span className="mono">KVK</span>
            <p>{company.kvk}</p>
            <p className="mono mt-2 text-[0.68rem]">
              {de ? "BLATT web · MAßSTAB —" : "BLAD web · SCHAAL —"}
            </p>
          </div>
        </div>
        <nav className="foot-links" aria-label={de ? "Fußzeile" : "Footer"}>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer">
            Concept door Sleads
          </a>
        </nav>
      </div>
    </footer>
  );
}
