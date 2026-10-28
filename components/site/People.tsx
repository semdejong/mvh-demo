import { content } from "@/content";
import type { Locale } from "@/lib/locale";

export default function People({ locale = "nl", lutzFirst = false }: { locale?: Locale; lutzFirst?: boolean }) {
  const de = locale === "de";
  const people = lutzFirst ? [...content.people].sort((a) => (a.name.startsWith("Lutz") ? -1 : 1)) : content.people;

  return (
    <div>
      {people.map((person) => (
        <div className="person" key={person.email}>
          <p className="text-navy m-0" style={{ fontWeight: 560 }}>
            {person.name}
          </p>
          <p>
            <a href={`mailto:${person.email}`} data-cta="mailen">
              {person.email}
            </a>
          </p>
          {person.mobileTel ? (
            <p>
              <a href={person.mobileTel} data-cta="bellen">
                {de ? "Mobil" : "Mobiel"} {person.mobileDisplay}
              </a>
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
