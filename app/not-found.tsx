import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import Programme from "@/components/site/Programme";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description: "Deze pagina staat niet op de site van Matrijzen & Vormenbouw Haaksbergen.",
};

export default function NotFound() {
  return (
    <>
      <PageIntro
        kicker="404"
        title="Pagina niet gevonden"
        lede="Dit pad staat niet in het programma. De pagina bestaat niet, of het oude adres is verplaatst."
      >
        <p className="cta-row">
          <Link className="btn btn-primary" href="/">
            Naar de homepage
          </Link>
          <Link className="btn btn-ghost" href="/toepassingen">
            Toepassingen
          </Link>
          <Link className="btn btn-ghost" href="/contact" data-cta="offerte">
            Contact
          </Link>
        </p>
      </PageIntro>
      <section data-section="404" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              STOP
            </p>
            <div>
              <h2 className="display">Het programma stopt hier</h2>
              <Programme
                rows={[
                  { k: "Code", v: "404. Dit pad heeft geen blok in het programma." },
                  { k: "Oude URL", v: "Galerijen, de Duitse pagina’s en Project1 verwijzen door naar de nieuwe adressen." },
                  { k: "Verder", v: "Homepage, toepassingen of contact. Een tekening stuurt u via de aanvraag." },
                ]}
              />
              <p className="cta-row">
                <Link className="btn btn-primary" href="/offerte" data-cta="offerte">
                  Tekening sturen
                </Link>
                <Link className="btn btn-ghost" href="/machinepark">
                  Machinepark
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
