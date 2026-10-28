import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { photoBySrc } from "@/lib/photos";
import PageIntro from "@/components/site/PageIntro";
import People from "@/components/site/People";
import Programme from "@/components/site/Programme";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "MVH Matrijzen en Vormenbouw Haaksbergen, Metaalstraat 20a, 7483 PD Haaksbergen. Telefoon +31 (0)53 572 44 22.",
};

export default function ContactPage() {
  const { company } = content;
  const pand = photoBySrc("/img/pand/pand-01.jpg");

  return (
    <>
      <PageIntro
        kicker="ADRES"
        title="Contact"
        lede="Twee contactpersonen, elk met een eigen e-mailadres."
      >
        <p>
          <a className="btn btn-primary" href="/offerte" data-cta="offerte">
            Tekening sturen
          </a>
        </p>
      </PageIntro>

      <section data-section="contact" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              MVH
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="display">Adres</h2>
                <p className="measure">
                  {company.legalName}
                  <br />
                  {company.street}
                  <br />
                  {company.postalCode} {company.city}
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
                <p className="measure">Openingstijden: {company.hours}</p>
                <p className="measure">Parkeren en laden en lossen: {company.parking}</p>
                <p className="measure">KvK: {company.kvk}</p>
              </div>
              <div>
                <h2 className="display">Personen</h2>
                <People />
                <p className="mt-6">
                  <Link href="/offerte" data-cta="offerte" className="text-navy">
                    Stuur uw tekening of 3D-model
                  </Link>
                </p>
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
                <h2 className="display">Routeblad</h2>
                <Programme
                  rows={[
                    { k: "Bellen", v: `${company.phoneDisplay}. Voor een tekening is Lutz Noordink het aanspreekpunt op de aanvraagpagina.` },
                    { k: "Tekening", v: "Via het formulier: 2D of 3D, materiaal, aantallen, vormmachine, gewenste levertijd." },
                    { k: "Adres", v: `${company.street}, ${company.postalCode} ${company.city}. ${company.border}.` },
                    { k: "Kaart", v: "Een link naar Google Maps, geen ingebedde kaart." },
                    { k: "Open", v: `Openingstijden: ${company.hours}.` },
                    { k: "Laden", v: `Parkeren en laden en lossen: ${company.parking}.` },
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
                    alt={pand.alt}
                    width={pand.w}
                    height={pand.h}
                    sizes="(max-width: 860px) 100vw, 420px"
                    className="w-full h-auto border border-navy"
                    style={{ maxWidth: pand.w }}
                  />
                  <figcaption className="caption">Metaalstraat 20a. Rode gevel, gebogen glaspartij, oprit naar de hal.</figcaption>
                </figure>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
