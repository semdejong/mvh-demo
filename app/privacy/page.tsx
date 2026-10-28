import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageIntro from "@/components/site/PageIntro";
import Programme from "@/components/site/Programme";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacyverklaring van deze conceptsite voor MVH Matrijzen en Vormenbouw Haaksbergen. Het formulier verstuurt niets.",
};

export default function PrivacyPage() {
  const { company } = content;

  return (
    <>
      <PageIntro
        kicker="PRIVACY"
        title="Privacy"
        lede="Deze pagina gaat over deze conceptsite. Het is geen vervanging van een privacyverklaring die MVH later zelf vaststelt."
      />
      <section data-section="privacy" className="section">
        <div className="wrap measure">
          <h2 className="display">Wat deze conceptsite doet</h2>
          <Programme
            rows={[
              { k: "Formulier", v: "Geen backend. Niets wordt opgeslagen, gemaild of geüpload." },
              { k: "Cookies", v: "Geen volgcookies. Wel een cookieloze demo-teller voor dit concept." },
              { k: "Zoeken", v: "noindex en robots.txt op Disallow. Niet bedoeld om geïndexeerd te worden." },
              { k: "Echte site", v: "Verwerkingsverantwoordelijke en privacycontact: [door klant aan te vullen]." },
            ]}
          />
          <p>
            De site is een concept van Sleads voor {company.legalName}. De teller is het script van sleads-demo-analytics, met een eindpunt op convex.site. Hij telt een paginaweergave van dit concept en volgt u niet over andere websites.
          </p>
          <h2 className="display mt-8">Bedrijf</h2>
          <p>
            {company.legalName}
            <br />
            {company.street}, {company.postalCode} {company.city}
            <br />
            <a href={company.phoneTel} data-cta="bellen">
              {company.phoneDisplay}
            </a>
          </p>
          <p>
            Namen en e-mailadressen van contactpersonen staan op de{" "}
            <Link href="/contact" className="text-navy">
              contactpagina
            </Link>
            .
          </p>
          <p>KvK: {company.kvk}</p>
          <p>Functionaris of contact voor privacyverzoeken: [door klant aan te vullen].</p>
          <h2 className="display mt-8" lang="de">
            Kurz auf Deutsch
          </h2>
          <p lang="de">
            Dies ist eine Konzeptwebsite. Das Formular sendet nichts und lädt keine Datei hoch. Es werden keine Tracking-Cookies gesetzt. Ein kochiefreier Demo-Zähler erfasst den Seitenaufruf dieser Konzeptseite. Die Datenschutz-Kontaktperson des Betriebs: [vom Kunden zu ergänzen].
          </p>
        </div>
      </section>
    </>
  );
}
