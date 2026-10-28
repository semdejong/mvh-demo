import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { notes } from "@/lib/notes";
import { photosByCategory } from "@/lib/photos";
import type { Locale } from "@/lib/locale";

export default function ApplicationIndex({ locale = "nl" }: { locale?: Locale }) {
  const de = locale === "de";

  return (
    <ul className="index-list mt-6">
      {content.applications.map((app) => {
        const plug = app.category === "plugs";
        const shot = plug ? undefined : photosByCategory(app.category)[0];
        return (
          <li key={app.slug} className="index-row">
            <Link href={`/toepassingen/${app.slug}`}>
              <span>
                <span className="mono text-xs text-navy">{de ? notes[app.slug].terms : app.short}</span>
                <strong>{de ? notes[app.slug].deTitle : app.title}</strong>
                <p>{de ? notes[app.slug].deText : app.summary}</p>
              </span>
              {plug ? (
                <span className="index-photo index-empty">{de ? "kein Plug-Foto" : "geen plugfoto"}</span>
              ) : shot ? (
                <span className="index-photo">
                  <Image src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} sizes="200px" />
                </span>
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
