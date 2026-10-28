import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { photosByCategory } from "@/lib/photos";
import PageIntro from "@/components/site/PageIntro";
import { Tick, CtaRow } from "@/components/site/Marks";

export const metadata: Metadata = {
  title: "Over MVH",
  description:
    "MVH Matrijzen en Vormenbouw Haaksbergen is sinds januari 2008 actief. Eén cnc-centrum bij de start, een tweede twee maanden later.",
};

export default function OverPage() {
  const pand = photosByCategory("pand");
  const { company, people } = content;

  return (
    <>
      <PageIntro
        kicker="2008"
        title="Over MVH"
        lede="Matrijzen & Vormenbouw Haaksbergen is een bedrijf in de thermo- en vacuümvormindustrie, met een eigen machinepark in Haaksbergen."
      >
        <p className="measure">
          Het bedrijf is sinds januari 2008 actief en begon met één nieuw cnc-bewerkingscentrum. Na twee maanden kwam de tweede, doordat de vraag naar matrijzen en vormen toenam en de productie snel groeide.
        </p>
      </PageIntro>

      <section data-section="pand" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              PAND
            </p>
            <div>
              <h2 className="display">Het pand</h2>
              <p className="lede">
                {company.street}, {company.postalCode} {company.city}. {company.border}.
              </p>
              <ul className="mosaic mt-6">
                {pand.map((photo) => (
                  <li key={photo.src}>
                    <figure>
                      <Image src={photo.src} alt={photo.alt} width={photo.w} height={photo.h} sizes="340px" style={{ maxWidth: photo.w }} />
                      <figcaption>Pand</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-section="waarden" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              5 PUNTEN
            </p>
            <div>
              <h2 className="display">Vijf punten</h2>
              <ul className="check-list mt-4">
                {content.values.map((value) => (
                  <li key={value.title}>
                    <Tick />
                    <strong>{value.title}</strong>
                    <span>{value.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-section="team" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker">TEAM</p>
            <div>
              <h2 className="display">Team</h2>
              <p className="lede">Op de site staan twee namen, zonder functietitel. E-mail en mobiel staan op de contactpagina en bij de aanvraag.</p>
              <ul className="check-list">
                {people.map((person) => (
                  <li key={person.email}>
                    <span className="tick" aria-hidden="true" />
                    <strong>{person.name}</strong>
                    <span>
                      <Link href="/contact" className="text-navy">
                        Gegevens op de contactpagina
                      </Link>
                    </span>
                  </li>
                ))}
              </ul>
              <CtaRow />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
