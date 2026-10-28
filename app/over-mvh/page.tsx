import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { photoBySrc, photosByCategory } from "@/lib/photos";
import PageIntro from "@/components/site/PageIntro";
import { Tick, CtaRow } from "@/components/site/Marks";

export const metadata: Metadata = {
  title: "Over MVH",
  description:
    "MVH Matrijzen en Vormenbouw Haaksbergen is sinds januari 2008 actief. Eén cnc-centrum bij de start, een tweede twee maanden later.",
};

export default function OverPage() {
  const pand = photosByCategory("pand");
  const hall = photoBySrc("/img/machine/machine-02.jpg");
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
        <p className="measure">
          Vijf punten staan bij ons hoog in het vaandel, en mede daardoor nam het werk toe: levertijd, kwaliteit, flexibiliteit, vakkundigheid en een goede prijs-kwaliteitverhouding.
        </p>
      </PageIntro>

      <section data-section="tijdlijn" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              TIJD
            </p>
            <div className="pair">
              <div>
                <h2 className="display">Van één bank naar een hal</h2>
                <ol className="timeline">
                  <li>
                    <p className="mono text-navy text-xs m-0">Januari 2008</p>
                    <p className="m-0">Start met één nieuw cnc-bewerkingscentrum, in Haaksbergen.</p>
                  </li>
                  <li>
                    <p className="mono text-navy text-xs m-0">Twee maanden later</p>
                    <p className="m-0">Een tweede centrum, omdat de vraag naar matrijzen en vormen toenam en de productie snel groeide.</p>
                  </li>
                  <li>
                    <p className="mono text-navy text-xs m-0">Nu</p>
                    <p className="m-0">Een machinepark met onder meer de Bridgeport XR 1270, de Hartford MVP 16 en de Hartford LG 1370.</p>
                  </li>
                </ol>
              </div>
              {hall ? (
                <figure className="m-0">
                  <Image
                    src={hall.src}
                    alt={hall.alt}
                    width={hall.w}
                    height={hall.h}
                    sizes="(max-width: 860px) 100vw, 480px"
                    className="w-full h-auto border border-navy"
                    style={{ maxWidth: hall.w }}
                  />
                  <figcaption className="caption">De hal in 2021, met drie gesloten bewerkingscentra in beeld.</figcaption>
                </figure>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section data-section="pand" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              PAND
            </p>
            <div>
              <h2 className="display">Het pand</h2>
              <p className="lede">
                {company.street}, {company.postalCode} {company.city}. Het pand staat op een {company.border}. De rode gevel met de gebogen glaspartij is het gebouw op de foto’s.
              </p>
              <p className="measure">
                Openingstijden: {company.hours}. Parkeren en laden en lossen: {company.parking}. KvK: {company.kvk}.
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
              <p className="lede">Lutz en Angela Noordink. E-mail en mobiel staan op de contactpagina en bij de aanvraag.</p>
              <ul className="check-list">
                {people.map((person) => (
                  <li key={person.email}>
                    <span className="tick" aria-hidden="true" />
                    <div>
                      <strong className="block">{person.name}</strong>
                      <Link href="/contact" className="text-navy">
                        Gegevens op de contactpagina
                      </Link>
                    </div>
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
