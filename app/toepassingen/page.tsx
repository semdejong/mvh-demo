import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { photoBySrc, photosByCategory } from "@/lib/photos";
import PageIntro from "@/components/site/PageIntro";
import { CtaRow } from "@/components/site/Marks";

export const metadata: Metadata = {
  title: "Toepassingen",
  description:
    "EPS-vormen, spuitgietwerk, rotatievormen, blistermatrijzen, vrije vorm en plugs. Gefreesd bij MVH in Haaksbergen.",
};

export default function ToepassingenPage() {
  return (
    <>
      <PageIntro
        kicker="INDEX"
        title="Toepassingen"
        lede="Zes ingangen, elk met tekst en foto’s uit de werkplaats. De oude fotogalerijen zonder tekst zijn hier vervangen."
      >
        <p className="measure">
          Zoekt u een EPS-vorm, een spuitgietmatrijs, een rotatiematrijs, een blistermatrijs, een vrije vorm of een plug: elk heeft een eigen blad. De maten van de machines staan bij het machinepark, niet verstopt in een bijschrift.
        </p>
      </PageIntro>
      <section data-section="toepassingen" className="section">
        <div className="wrap">
          <ul className="index-list">
            {content.applications.map((app) => {
              const shot = app.category === "plugs" ? photoBySrc("/img/hero/hero-01.jpg") : photosByCategory(app.category)[0];
              return (
                <li key={app.slug} className="index-row">
                  <Link href={`/toepassingen/${app.slug}`}>
                    <span>
                      <span className="mono text-xs text-navy">{app.short}</span>
                      <strong>{app.title}</strong>
                      <p>{app.summary}</p>
                    </span>
                    {shot ? (
                      <span className="index-photo">
                        <Image src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} sizes="180px" />
                      </span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
          <CtaRow />
        </div>
      </section>
    </>
  );
}
