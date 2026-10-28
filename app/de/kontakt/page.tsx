import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { photoBySrc } from "@/lib/photos";
import PageIntro from "@/components/site/PageIntro";
import People from "@/components/site/People";
import Programme from "@/components/site/Programme";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "MVH Matrijzen en Vormenbouw Haaksbergen, Metaalstraat 20a, 7483 PD Haaksbergen. Telefon +31 (0)53 572 44 22.",
};

export default function GermanContact() {
  const { company } = content;
  const pand = photoBySrc("/img/pand/pand-01.jpg");

  return (
    <>
      <PageIntro
        kicker="ADRESSE"
        title="Kontakt"
        lede="Zwei Ansprechpartner, jeweils mit eigener E-Mail-Adresse."
      >
        <p>
          <Link className="btn btn-primary" href="/offerte" data-cta="offerte">
            Zeichnung senden
          </Link>
        </p>
      </PageIntro>
      <section data-section="kontakt" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              MVH
            </p>
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
            </div>
            <div>
              <h2 className="display">Personen</h2>
              <People locale="de" />
            </div>
          </div>
          </div>
        </div>
      </section>
      <section data-section="route" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              ROUTE
            </p>
            <div className="pair">
              <div>
                <h2 className="display">Routenblatt</h2>
                <Programme
                  rows={[
                    { k: "Anrufen", v: `${company.phoneDisplay}. Für eine Zeichnung ist Lutz Noordink der Ansprechpartner auf der Anfrageseite.` },
                    { k: "Zeichnung", v: "Über das Formular, auf Niederländisch. Land Deutschland steht zur Wahl." },
                    { k: "Adresse", v: `${company.street}, ${company.postalCode} ${company.city}. Gewerbegebiet, etwa 5 km von der deutschen Grenze.` },
                    { k: "Karte", v: "Ein Link zu Google Maps, keine eingebettete Karte." },
                  ]}
                />
                <p>
                  <a className="btn btn-ghost" href={company.mapsHref} target="_blank" rel="noopener noreferrer">
                    Route in Google Maps
                  </a>
                </p>
              </div>
              {pand ? (
                <figure className="m-0">
                  <Image
                    src={pand.src}
                    alt="Gebäude von MVH an der Metaalstraat 20a, rote Fassade und gebogene Glasfront"
                    width={pand.w}
                    height={pand.h}
                    sizes="(max-width: 860px) 100vw, 420px"
                    className="w-full h-auto border border-navy"
                    style={{ maxWidth: pand.w }}
                  />
                  <figcaption className="caption">Metaalstraat 20a. Rote Fassade, gebogene Glasfront, Zufahrt zur Halle.</figcaption>
                </figure>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
