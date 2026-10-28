import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageIntro from "@/components/site/PageIntro";
import People from "@/components/site/People";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "MVH Matrijzen en Vormenbouw Haaksbergen, Metaalstraat 20a, 7483 PD Haaksbergen. Telefon +31 (0)53 572 44 22.",
};

export default function GermanContact() {
  const { company } = content;

  return (
    <>
      <PageIntro
        kicker="ADRESSE"
        title="Kontakt"
        lede="Keine allgemeine Info-Adresse auf der Website. Zwei Ansprechpartner mit eigener E-Mail."
      >
        <p>
          <Link className="btn btn-primary" href="/offerte" data-cta="offerte">
            Zeichnung senden
          </Link>
        </p>
      </PageIntro>
      <section data-section="kontakt" className="section">
        <div className="wrap">
          <div className="grid gap-8 md:grid-cols-2">
            <div data-toolpath-node>
              <h2 className="display">Adresse</h2>
              <p>
                {company.legalName}
                <br />
                {company.street}
                <br />
                {company.postalCode} {company.city}
                <br />
                Niederlande, etwa 5 km von der deutschen Grenze
              </p>
              <p>
                <a href={company.phoneTel} data-cta="bellen">
                  Tel. {company.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={company.mapsHref} className="text-navy" target="_blank" rel="noopener noreferrer">
                  Route in Google Maps
                </a>
              </p>
              <p>Öffnungszeiten: [vom Kunden zu ergänzen]</p>
              <p>Parken und Be- und Entladen: [vom Kunden zu ergänzen]</p>
            </div>
            <div>
              <h2 className="display">Personen</h2>
              <People locale="de" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
