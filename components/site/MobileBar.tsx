"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { content } from "@/content";
import { localeFromPath } from "@/lib/locale";

export default function MobileBar() {
  const locale = localeFromPath(usePathname());
  const de = locale === "de";

  return (
    <div className="mobile-bar" data-section="mobiel">
      <a className="btn btn-ghost" href={content.company.phoneTel} data-cta="bellen">
        {de ? "Anrufen" : "Bellen"}
      </a>
      <Link className="btn btn-primary" href="/offerte" data-cta="offerte">
        {de ? "Zeichnung senden" : "Tekening sturen"}
      </Link>
    </div>
  );
}
