import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";

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
          <p className="kicker" data-toolpath-node>
            X0 Y0
          </p>
          <p className="measure mt-3">Oude adressen van de vorige site verwijzen door naar de nieuwe pagina’s, voor zover ze een opvolger hebben.</p>
        </div>
      </section>
    </>
  );
}
