import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageIntro from "@/components/site/PageIntro";

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
          <p>
            De site is een concept van Sleads voor {company.legalName}. Het offerteformulier heeft geen backend. Een inzending wordt niet opgeslagen, niet gemaild en een gekozen bestand wordt niet geüpload.
          </p>
          <p>
            De site zet geen volgcookies. Er draait een cookieloos bezoekteller voor de demo (script van sleads-demo-analytics, eindpunt op convex.site). Die telt een paginaweergave voor dit concept en volgt u niet over andere websites.
          </p>
          <p>
            Zoekmachines krijgen noindex en robots.txt staat op Disallow. De site is niet bedoeld om geïndexeerd te worden.
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
            Een algemeen info-adres staat niet op de huidige site. Namen en e-mailadressen van contactpersonen staan op de{" "}
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
