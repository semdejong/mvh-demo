import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageIntro from "@/components/site/PageIntro";
import People from "@/components/site/People";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "MVH Matrijzen en Vormenbouw Haaksbergen, Metaalstraat 20a, 7483 PD Haaksbergen. Telefoon +31 (0)53 572 44 22.",
};

export default function ContactPage() {
  const { company } = content;

  return (
    <>
      <PageIntro
        kicker="ADRES"
        title="Contact"
        lede="Geen algemeen info-adres op de site. Twee contactpersonen, met hun eigen e-mail."
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
    </>
  );
}
