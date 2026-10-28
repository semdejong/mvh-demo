import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { photoBySrc } from "@/lib/photos";
import PageIntro from "@/components/site/PageIntro";
import { Tick } from "@/components/site/Marks";
import Envelopes from "@/components/drawing/Envelopes";

export const metadata: Metadata = {
  title: "Formen für Thermoformen und Vakuumformen",
  description:
    "Formenbau in Haaksbergen, etwa 5 km von der deutschen Grenze. 3D-CAD-CAM, CNC-Fräsen, Nacharbeit und eigene Lieferung.",
};

export default function GermanHome() {
  const hero = photoBySrc("/img/hero/hero-01.jpg");
  const { company } = content;

  return (
    <>
      <PageIntro
        kicker="HAAKSBERGEN"
        title="Formen für Thermoformen und Vakuumformen, gefräst in Haaksbergen"
        lede="Wir entwickeln das Werkzeug mit einem 3D-CAD-CAM-Programm, fräsen es auf einem eigenen CNC-Bearbeitungszentrum, arbeiten es nach und liefern es selbst beim Kunden ab."
      >
        <div className="cta-row">
          <Link className="btn btn-primary" href="/offerte" data-cta="offerte">
            Zeichnung oder 3D-Modell senden
          </Link>
          <a className="btn btn-ghost" href={company.phoneTel} data-cta="bellen">
            Anrufen {company.phoneShort}
          </a>
        </div>
        {hero ? (
          <div className="mt-8 max-w-[720px]">
            <Image
              src={hero.src}
              alt="Aluminiumform auf dem Maschinentisch beim Fräsen, mit sichtbarer Schlichtbahn"
              width={hero.w}
              height={hero.h}
              priority
              sizes="(max-width: 800px) 100vw, 720px"
              className="w-full h-auto border border-navy"
              style={{ maxWidth: hero.w }}
            />
            <p className="caption">Arbeitsraum bis X 1600 · Y 820 · Z 600 mm. Das ist nicht das Mass dieses Werkstücks.</p>
          </div>
        ) : null}
      </PageIntro>

      <section data-section="intro" className="section">
        <div className="wrap measure">
          <p className="kicker" data-toolpath-node>
            START
          </p>
          <p>
            Matrijzen & Vormenbouw Haaksbergen ist ein junges Unternehmen, das sich auf dem Markt für Thermoformen und Vakuumformen eine eigene Position erarbeitet hat. Dazu gehört ein eigener Maschinenpark.
          </p>
          <p>
            Wir entwickeln Werkzeuge auch selbst mit einem 3D-CAD-CAM-Programm und denken lösungsorientiert mit. Danach fräsen wir die Werkzeuge auf einem unserer CNC-Bearbeitungszentren. Wenn nötig arbeiten wir weiter aus, zum Beispiel Vakuumbohrungen, und reinigen. Anschließend liefern wir das Werkzeug selbst beim Kunden ab.
          </p>
          <p>
            Aktiv seit Januar 2008. Begonnen mit einem neuen CNC-Bearbeitungszentrum. Zwei Monate später folgte ein zweites, weil die Nachfrage stark stieg und die Produktion schnell wuchs.
          </p>
        </div>
      </section>

      <section data-section="waarden" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              5 PUNKTE
            </p>
            <div>
              <h2 className="display">Betriebsphilosophie</h2>
              <ul className="check-list mt-4">
                {content.valuesDe.map((value) => (
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

      <section data-section="machinepark" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker">X 1600 · Y 820 · Z 600</p>
            <div>
              <h2 className="display">Maschinenpark</h2>
              <p className="lede">Drei Fräsmaschinen sind mit Massen dokumentiert. Die Website nennt sechs. {content.cam.noteDe}</p>
              <Envelopes locale="de" />
              <p className="mt-4">
                <Link href="/de/maschinenpark" className="text-navy">
                  Zur Spezifikation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-section="offerte" className="section navy-band">
        <div className="wrap">
          <h2 className="display">Zeichnung senden</h2>
          <p className="lede">Das Formular steht auf Niederländisch. Land Deutschland können Sie dort wählen.</p>
          <div className="cta-row">
            <Link className="btn btn-on-navy" href="/offerte" data-cta="offerte">
              Zum Formular
            </Link>
            <Link className="btn btn-on-navy-ghost" href="/de/kontakt">
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
