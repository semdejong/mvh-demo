export type Locale = "nl" | "de";

const PAIRS: ReadonlyArray<readonly [string, string]> = [
  ["/", "/de"],
  ["/machinepark", "/de/maschinenpark"],
  ["/contact", "/de/kontakt"],
  ["/vacatures", "/de/vakanz"],
];

export function localeFromPath(pathname: string): Locale {
  return pathname === "/de" || pathname.startsWith("/de/") ? "de" : "nl";
}

export function switchHref(pathname: string, target: Locale): string {
  const pair = PAIRS.find(([nl, de]) => pathname === nl || pathname === de);
  if (!pair) return target === "de" ? "/de" : "/";
  return target === "de" ? pair[1] : pair[0];
}
