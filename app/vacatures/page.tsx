import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { photoBySrc } from "@/lib/photos";
import PageIntro from "@/components/site/PageIntro";
import Programme from "@/components/site/Programme";

export const metadata: Metadata = {
  title: "Vacatures",
  description: "Momenteel zijn er geen vacatures bij MVH Matrijzen en Vormenbouw Haaksbergen.",
};

export default function VacaturesPage() {
  const hall = photoBySrc("/img/machine/machine-02.jpg");

  return (
    <>
      <PageIntro kicker="STAND" title="Vacatures" lede="Momenteel zijn er geen vacatures.">
        <p className="measure">
          Dat is de volledige tekst van de huidige vacaturepagina. Er staat geen functie, geen profiel en geen sollicitatie-adres bij.
        </p>
      </PageIntro>

      <section data-section="vacatures" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              BLAD
            </p>
            <div className="pair">
              <div>
                <h2 className="display">Status</h2>
                <Programme
                  rows={[
                    { k: "Open", v: "Geen. Momenteel zijn er geen vacatures." },
                    { k: "Functies", v: "Op dit moment geen." },
                    { k: "Werk in de hal", v: "Matrijzen en vormen: 3D CAD-CAM, frezen, afwerken, zelf afleveren." },
                  ]}
                />
                <p className="measure">
                  Wie het bedrijf wil spreken, gebruikt de{" "}
                  <Link href="/contact" className="text-navy" data-cta="offerte">
                    contactpagina
                  </Link>
                  . Dat is het algemene contact, geen sollicitatieformulier.
                </p>
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
                  <figcaption className="caption">Machinehal, opname 2021. Drie bewerkingscentra in beeld.</figcaption>
                </figure>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section data-section="werk" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker">PAD</p>
            <div>
              <h2 className="display">Wat de werkplaats doet</h2>
              <p className="lede">Geen functieomschrijving. Wel het pad dat een matrijs in huis aflegt, zodat duidelijk is welk werk hier staat als er weer een vacature komt.</p>
              <Programme
                rows={content.process.map((step) => ({
                  k: step.op,
                  v: `${step.title}. ${step.text}`,
                }))}
              />
              <p className="mt-6">
                <Link className="btn btn-ghost" href="/werkwijze">
                  De werkwijze
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
